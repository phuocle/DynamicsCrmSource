

create	procedure dbo.p_CleanupCampaignResponseViewAttributes

as
begin;

	IF(OBJECT_ID('tempdb..#ViewAttributeIdsToDelete') Is Not Null)
BEGIN
		DROP TABLE #ViewAttributeIdsToDelete
	End
	CREATE TABLE #ViewAttributeIdsToDelete
	(
		ViewAttributeId UNIQUEIDENTIFIER,
	)

	IF(OBJECT_ID('tempdb..#DependencyNodeIdsToDelete') Is Not Null)
BEGIN
		DROP TABLE #DependencyNodeIdsToDelete
	End
	CREATE TABLE #DependencyNodeIdsToDelete
	(
		DependencyNodeId UNIQUEIDENTIFIER,
	)

	declare @regardingObjectIdNameAttributeId UniqueIdentifier
	declare @regardingObjectIdYomiNameAttributeId UniqueIdentifier

	select @regardingObjectIdNameAttributeId = a.AttributeId
	from Attribute a
	where a.Name = 'regardingobjectidname'
		and a.EntityId = (select distinct EntityId
		from Entity
		where Name = 'CampaignResponse')

	select @regardingObjectIdYomiNameAttributeId = a.AttributeId
	from Attribute a
	where a.Name = 'regardingobjectidyominame'
		and a.EntityId = (select distinct EntityId
		from Entity
		where Name = 'CampaignResponse')

	-- view attribute ids
	Insert into #ViewAttributeIdsToDelete
	select ViewAttributeId
	from ViewAttribute
	where AttributeId in (@regardingObjectIdNameAttributeId, @regardingObjectIdYomiNameAttributeId);

	------- dependency node ids ---------
	Insert into #DependencyNodeIdsToDelete
	select DependencyNodeId
	from DependencyNodeBase
	where ObjectId in (select ViewAttributeId
	from #ViewAttributeIdsToDelete)

	BEGIN TRANSACTION;
	BEGIN TRY
		------- delete from dependency base
		Delete from DependencyBase 
		where DependentComponentNodeId in (select DependencyNodeId
	from #DependencyNodeIdsToDelete)
		
		------- delete from dependency node base
		Delete from DependencyNodeBase where DependencyNodeId in (select DependencyNodeId
	from #DependencyNodeIdsToDelete)
		
		------- delete from view attribute
		Delete from ViewAttribute where ViewAttributeId in (select ViewAttributeId
	from #ViewAttributeIdsToDelete)
		
	END TRY
	BEGIN CATCH
		PRINT 'Error on performing deletes!!'
			SELECT
		ERROR_NUMBER() AS ErrorNumber
				, ERROR_SEVERITY() AS ErrorSeverity
				, ERROR_STATE() AS ErrorState
				, ERROR_PROCEDURE() AS ErrorProcedure
				, ERROR_LINE() AS ErrorLine
				, ERROR_MESSAGE() AS ErrorMessage;
				IF @@TRANCOUNT > 0
					ROLLBACK TRANSACTION;
	END CATCH
	IF @@TRANCOUNT > 0 
	COMMIT TRANSACTION;

	IF(OBJECT_ID('tempdb..#DependencyNodeIdsToDelete') Is Not Null)
	DROP TABLE #DependencyNodeIdsToDelete

	IF(OBJECT_ID('tempdb..#ViewAttributeIdsToDelete') Is Not Null)
	DROP TABLE #ViewAttributeIdsToDelete

	SELECT @@TRANCOUNT AS 'numberOfItemsChanged'

end;