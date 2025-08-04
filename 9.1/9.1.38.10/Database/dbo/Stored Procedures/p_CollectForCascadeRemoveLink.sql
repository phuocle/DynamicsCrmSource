

create procedure [dbo].[p_CollectForCascadeRemoveLink]
(
	@c CascadeCollectionTable READONLY,
	@is_delete_entity_schema int,
	@topType int,
	@f int
)
as;
begin;
	
	declare @collectedRecords CascadeRemoveLinkCollection;

	-- Define necessary variables for processing
	declare @cascadeStatement nvarchar(max);

	declare @uniqueTypes table (ObjectTypeCode int primary key clustered);
	insert into @uniqueTypes select distinct t from @c;

	declare cascadeStatements cursor local FAST_FORWARD for
	select CascadeStatement from CascadeOperation c
	join @uniqueTypes ut on ut.ObjectTypeCode = c.ReferencedEntityObjectTypeCode
	where 
	-- Collect all RemoveLink statements based on the conditions below
	CascadeLinkType = 2 and
	(
		-- When it is a custom entity delete which means the param @is_delete_entity_schema = 1 then
		-- Case1: When the ReferencedEntityObjectTypeCode is the root otc we are trying to delete 
		-- then only collect statements which have IsDeleteEntitySchema = 1 or HasExtraConditions = 1 for that entity
		-- Case2: When the ReferencedEntityObjectTypeCode is not the root otc then collect all other remove link statements for which it is a ReferencedEntity
		-- So we need to collect a Union of both kinds of statements for delete schema
		(@is_delete_entity_schema = 1 
			and
			(ut.ObjectTypeCode = @topType and (IsDeleteEntitySchema = 1 or HasExtraConditions = 1))
			or 
			(ut.ObjectTypeCode != @topType and IsDeleteEntitySchema = 0)
		)

		or -- when it is not a schema delete (@is_delete_entity_schema = 0) then collect all remove link statements not associated with a schema delete (IsDeleteEntitySchema = 0)
		(@is_delete_entity_schema = 0 and IsDeleteEntitySchema = 0)
	)

	open cascadeStatements;
	fetch next from cascadeStatements into @cascadeStatement;
	while(0=@@FETCH_STATUS)
	begin;

		insert into @collectedRecords (o, t, c)
		exec sp_executesql @cascadeStatement, N'@i CascadeCollectionTable READONLY',
		@i = @c;

		fetch next from cascadeStatements into @cascadeStatement;
	end;
	close cascadeStatements;
	deallocate cascadeStatements;

	insert into #CascadeRemoveLinkWorkingSpace (o, t, c) select o, t, c from @collectedRecords;
end;
