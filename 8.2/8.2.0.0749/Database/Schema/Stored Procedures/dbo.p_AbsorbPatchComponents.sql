SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


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
		update SolutionComponentBase set RootSolutionComponentId = @newRoot where SolutionId=@childId and RootSolutionComponentId=@oldRoot and ObjectId not in (select ObjectId from SolutionComponentBase where SolutionId = @parentId)
		fetch next from rootCursor into @newRoot, @oldRoot
	end

	update SolutionComponentBase set SolutionId = @parentId where SolutionId = @childId and ObjectId not in (select ObjectId from SolutionComponentBase where SolutionId = @parentId)

end
GO
