SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


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
	((ut.ObjectTypeCode = @topType and @is_delete_entity_schema =1) and (IsDeleteEntitySchema = @is_delete_entity_schema or HasExtraConditions = 1)) and CascadeLinkType in (2) 
	or 
	(CascadeLinkType in (2) and IsDeleteEntitySchema = @is_delete_entity_schema);

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
GO
