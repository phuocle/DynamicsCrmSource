SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



CREATE PROCEDURE [dbo].[p_DeleteAttributeFromIndexById] (@AttributeId uniqueidentifier, @indexid uniqueidentifier) AS
BEGIN
	set nocount on

	-- For FullText indexes (IndexType = 9), mark attribute in the IndexAttributes table for deletion (State = 5)
	-- For non-FullText indexes, delete the attribute from the IndexAttributes table
	merge MetadataSchema.IndexAttributes as target
	using (select i.IndexId, i.IndexType, ia.AttributeId from MetadataSchema.EntityIndex i join MetadataSchema.IndexAttributes ia on i.IndexId = ia.IndexId where i.IndexId = @indexId and AttributeId = @AttributeId) as source(IndexId, IndexType, AttributeId)
	on (target.IndexId = source.IndexId and target.AttributeId = source.AttributeId)
	when matched and source.IndexType = 9
		then update set target.State = 5
	when matched
		then delete;

	-- Delete the IndexFilters for the attribute
	delete MetadataSchema.IndexFilters
	where IndexId = @indexid and AttributeId = @AttributeId

	-- Reset the order of the attributes to fill in holes
	update ia
	set IndexOrder = nia.IndexOrder
	from MetadataSchema.IndexAttributes ia
	join (
		select ROW_NUMBER() over(partition by IndexId, IsIncludeAttribute order by IndexOrder) - 1 IndexOrder, IndexId, AttributeId, IsIncludeAttribute
		from MetadataSchema.IndexAttributes
		where IndexId = @indexid) nia
	on ia.IndexId = nia.IndexId and ia.AttributeId = nia.AttributeId
	where ia.IndexOrder <> nia.IndexOrder;

	-- Mark the index for recreate and update ModifiedOn
	update MetadataSchema.EntityIndex set RecreateIndex = 1, ModifiedOn = getutcdate()
	where IndexId = @indexid
END
GO
