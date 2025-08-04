create   procedure dbo.p_CollectSolutionComponentDependencies
(
	@SolutionId uniqueidentifier 
)
as
	begin

		IF OBJECT_ID('tempdb..#MyComponentSet') IS NOT NULL
		DROP TABLE #MyComponentSet
	
		create table #MyComponentSet
		(
			dependencynodeid uniqueidentifier not null,
			processinglevel int default 0 not null,
			previousdependencynodeid uniqueidentifier null
		)
		
		create index ndx_dependencynodeid ON #MyComponentSet (dependencynodeid)
		create index ndx_processinglevel ON #MyComponentSet (processinglevel)	
	
		-- insert all of the root components from the given solution
		insert into #MyComponentSet
			(dependencynodeid, processinglevel, previousdependencynodeid)
			select dn.DependencyNodeId, 0, null
			from DependencyNode dn
			join SolutionComponent sc on (dn.ObjectId = sc.ObjectId and dn.ComponentType = sc.ComponentType)
			where sc.SolutionId = @SolutionId
	
		declare @level int
		set @level = 0

		declare @previousrowcount int
		set @previousrowcount = 1
	
		while (@previousrowcount > 0)
		begin
			set @level = @level + 1

			insert into #MyComponentSet
				(dependencynodeid, processinglevel, previousdependencynodeid)
				select DependentComponentNodeId, @level, RequiredComponentNodeId
				from DependencyBase
				where RequiredComponentNodeId in
					(select dependencynodeid
					 from #MyComponentSet
					 where processinglevel = (@level - 1))
				and DependentComponentNodeId not in
					(select dependencynodeid
					 from #MyComponentSet)
			
			-- save the row count for the while loop condition
			set @previousrowcount = @@rowcount		
		end

		select * from #MyComponentSet

		IF OBJECT_ID('tempdb..#MyComponentSet') IS NOT NULL
		DROP TABLE #MyComponentSet
	end