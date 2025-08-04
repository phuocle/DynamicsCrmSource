SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_RetrieveSystemUnmanagedDependencies]

as
begin
	declare @SystemSolutionId uniqueidentifier = '{FD140AAD-4DF4-11DD-BD17-0019B9312238}'
	declare @ActiveSolutionId uniqueidentifier = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}'

	-- in-memory table to hold the results of the sproc
	declare @DependentComponents table (
		TopSolutionId  uniqueidentifier not null,
		ObjectId uniqueidentifier not null, 
		DependencyNodeId uniqueidentifier null,
		ComponentType int not null, 
		Level int null
	)

	declare @Level int = 1
	
	-- insert preliminary results into the in-memory table
	insert into @DependentComponents 
		(TopSolutionId, ObjectId, DependencyNodeId, ComponentType, Level)
		select dnb.TopSolutionId, dnb.ObjectId, dnb.DependencyNodeId, dnb.ComponentType, @Level
		from Dependency d
			join DependencyNodeBase dnb on (d.DependentComponentNodeId = dnb.DependencyNodeId)
			join PostVegaComponents pvc on (d.RequiredComponentObjectId = pvc.ObjectId)
		where d.DependentComponentObjectId not in (select ObjectId from PostVegaComponents)
			-- if an older system component is returned, then it has been updated and we should leave it for the rollback actions
			and dnb.TopSolutionId <> @SystemSolutionId
			-- post vega components should contain only system components, but this check provides a safety net
			and d.RequiredComponentBaseSolutionId = @SystemSolutionId

	-- Find unmanaged, inheriting components
	insert into @DependentComponents 
		(TopSolutionId, ObjectId, DependencyNodeId, ComponentType, Level)
		select dnb.TopSolutionId, dnb.ObjectId, dnb.DependencyNodeId, dnb.ComponentType, @Level
		from DependencyNodeBase dnb
			join MetadataSchema.Attribute a on (dnb.ObjectId = a.AttributeId)
		where a.InheritsFrom in (select pvc.ObjectId from PostVegaComponents pvc where pvc.ComponentType = 2)
			and dnb.TopSolutionId = @ActiveSolutionId
			and dnb.ComponentType = 2

	-- iterate to find the remaining dependencies
	declare @Rows int = 1;
	while @Rows > 0
	begin
		set @Level = @Level + 1

		insert into @DependentComponents 
		(TopSolutionId, ObjectId, DependencyNodeId, ComponentType, Level)
		select dnb.TopSolutionId, dnb.ObjectId, dnb.DependencyNodeId, dnb.ComponentType, @Level
		from Dependency d
			join DependencyNodeBase dnb on (d.DependentComponentNodeId = dnb.DependencyNodeId)
			join @DependentComponents dc on (d.RequiredComponentNodeId = dc.DependencyNodeId)
		where d.DependentComponentNodeId not in (select DependencyNodeId from @DependentComponents)
			-- if an older system component is returned, then it has been updated and we should leave it for the rollback actions
			and dnb.TopSolutionId <> @SystemSolutionId
			
		set @Rows = @@ROWCOUNT
	end

	insert into @DependentComponents
	(TopSolutionId, ObjectId, ComponentType)
	select er.SolutionId, er.EntityRelationshipId, 10
	from MetadataSchema.EntityRelationship er
		join MetadataSchema.EntityRelationshipRole err on (err.EntityRelationshipId = er.EntityRelationshipId)
	where err.EntityRelationshipRoleId in (select ObjectId from @DependentComponents)
		and er.EntityRelationshipId not in (select ObjectId from @DependentComponents)

	-- return the results
	select distinct TopSolutionId, ObjectId, ComponentType from @DependentComponents
end
GO
