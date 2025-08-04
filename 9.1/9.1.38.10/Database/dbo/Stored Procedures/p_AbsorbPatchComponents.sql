

CREATE procedure [dbo].[p_AbsorbPatchComponents]
(
	@parentId uniqueidentifier,
	@childId uniqueidentifier
)
as
begin
	
	declare @newRoot uniqueidentifier, @oldRoot uniqueidentifier
	declare @SharedRoots table (
		NewSolutionComponentId uniqueidentifier not null,
		OldSolutionComponentId uniqueidentifier not null
	)

	-- Retrieve all components shared across patches. This is needed to verify if the RootSolutionComponentId and RootComponentBehavior need to be updated upon merge
	insert into @SharedRoots
	(NewSolutionComponentId, OldSolutionComponentId)
	select scb1.SolutionComponentId, scb2.SolutionComponentId from SolutionComponentBase scb1 join SolutionComponentBase scb2 on scb1.ObjectId=scb2.ObjectId and scb1.SolutionId=@parentId
	and scb2.SolutionId=@childId

	declare rootCursor cursor for
	select NewSolutionComponentId, OldSolutionComponentId
	from @SharedRoots

	open rootCursor
	fetch next from rootCursor
	into @newRoot, @oldRoot

	while @@fetch_status = 0
	begin
		-- Setting RootSolutionComponentId property if necessary. This guarantees that all child references are kept intact after merge, so when the parent is removed, all of its related records are also removed.
		update SolutionComponentBase set RootSolutionComponentId = @newRoot where SolutionId=@childId and RootSolutionComponentId=@oldRoot and ObjectId not in (select ObjectId from SolutionComponentBase where SolutionId = @parentId)
		
		-- Setting RootComponentBehavior to 0 (include all assets) if one of the patches declared as such. This is necessary because one of the patches exported the component with full assets and the next patches took a dependency on it.
		-- In other words, if one of the patches exported a component with all assets, the component will have its RootComponentBehavior = 0 after merge. 
		update SolutionComponentBase set RootComponentBehavior = 0 where SolutionComponentId = @newRoot AND RootComponentBehavior <> 0 AND ObjectId IN (select ObjectId from SolutionComponentBase where SolutionComponentId = @oldRoot AND RootComponentBehavior = 0)

		fetch next from rootCursor into @newRoot, @oldRoot
	end

	-- Transferring all components from the patches to the base solution
	update SolutionComponentBase set SolutionId = @parentId where SolutionId = @childId and ObjectId not in (select ObjectId from SolutionComponentBase where SolutionId = @parentId)
end