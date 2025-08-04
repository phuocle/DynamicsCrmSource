SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_CollectSolutionComponents]
(
	@SolutionId uniqueidentifier,
	@IncludeNonCustomRelationships bit
)
as
begin
	--- This sproc assumes that #ComponentSet has already been created. It takes a SolutionId and
	--  adds solution components for which descendents should be calculated to ComponentSet
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNodeBase dn
			join SolutionComponent sc on (sc.ObjectId = dn.ObjectId and sc.ComponentType = dn.ComponentType and sc.RootComponentBehavior = 0)
		where sc.SolutionId = @SolutionId

	-- call sproc to collect solution internal descendents
	exec p_CollectSolutionInternalDescendents @IncludeNonCustomRelationships

	-- add in the remaining solution components
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNodeBase dn
			join SolutionComponent sc on (sc.ObjectId = dn.ObjectId and sc.ComponentType = dn.ComponentType and (sc.RootComponentBehavior <> 0 or
			sc.RootComponentBehavior is null))
		where sc.SolutionId = @SolutionId
end
GO
