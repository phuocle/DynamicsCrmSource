USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_CollectSolutionInternalAncestors]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_CollectSolutionInternalAncestors]
(
	@IncludeReferencedEntity bit,
	@IncludeManagedComponents bit = true -- whether to include the ancestors that belong to a different managed solution.
)
as
begin	
	-- Assumption: The #ComponentSet table has been created with the following structure:
	--
	-- create table #ComponentSet(
	--	dependencynodeid uniqueidentifier not null,
	--	processinglevel int not null,
	--	previousdependencynodeid uniqueidentifier null,	
	-- )
	
	-- Assumption: The #ComponentSet table is populated with those components that we want to find
	--             solution internal ancestors for and their level is set to 0.	

	-- Find all of the solution internal ancestor components by traversing the dependencies a level at a time
	declare @level int
	set @level = 0
	
	declare @activeSolutionId uniqueidentifier
	set @activeSolutionId='FD140AAE-4DF4-11DD-BD17-0019B9312238'

	declare @SolutionInternal int
	set @SolutionInternal = 1 -- this is the constant that represents a solution internal dependency type
	
	declare @Required int
	set @Required = 2 -- this is a constant that represents a required dependency type
	
	declare @EntityRelationshipComponentType int
	set @EntityRelationshipComponentType = 10
	
	declare @EntityRelationshipRoleComponentType int
	set @EntityRelationshipRoleComponentType = 11
	
	declare @previousRowCount int
	set @previousRowCount = 1
	
	-- retrieve the internal ancestors
	while (@previousRowCount > 0)
	begin
		set @level = @level + 1
		
		insert into #ComponentSet
			select RequiredComponentNodeId, @level, DependentComponentNodeId
			from Dependency d
				join #ComponentSet cs on (cs.dependencynodeid = d.DependentComponentNodeId)
			where d.DependencyType = @SolutionInternal 
				and cs.processinglevel = (@level - 1) 
				and (@IncludeManagedComponents = 1 or d.RequiredComponentBaseSolutionId=@activeSolutionId)
		
		-- save the row count from this insertion statement so that we continue the loop when 
		-- appropriate	
		set @previousRowCount = @@rowcount
		
		if (@IncludeReferencedEntity = 1)
		begin
			
			--
			-- In some cases we need to follow the @Required link between EntityRelationship and
			-- EntityRelationshipRole so that we properly pick up the referenced entity in a 1:N
			-- relationship
			--
			
			insert into #ComponentSet
				select RequiredComponentNodeId, @level, DependentComponentNodeId
				from Dependency d
					join #ComponentSet cs on (cs.dependencynodeid = d.DependentComponentNodeId)
				where  d.DependentComponentType = @EntityRelationshipComponentType 
					and d.RequiredComponentType = @EntityRelationshipRoleComponentType
					and d.DependencyType = @Required
					and (@IncludeManagedComponents = 1 or d.RequiredComponentBaseSolutionId=@activeSolutionId)
					and cs.processinglevel = (@level -1)
					
			set @previousRowCount = @previousRowCount + @@rowcount
		end
	end
		
	-- Assumption: The #ComponentSet table will be deleted outside of this sproc
end
GO
