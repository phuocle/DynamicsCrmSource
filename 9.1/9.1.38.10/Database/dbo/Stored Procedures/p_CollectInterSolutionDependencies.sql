create   procedure dbo.p_CollectInterSolutionDependencies
(
	@SolutionId uniqueidentifier 
)
as
	begin
	
		declare @MyComponentSet table
		(
			dependencynodeid uniqueidentifier not null,
			processinglevel int default 0 not null,
			previousdependencynodeid uniqueidentifier null
		)
	
		-- insert all of the components from the given solution
		insert into @MyComponentSet exec p_CollectSolutionComponentDependencies @SolutionId
			
		
		declare @ActiveSolutionId uniqueidentifier = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}'
		declare @MicrosoftCorpPublisher nvarchar(100) = 'MicrosoftCorporation'
		declare @Dynamics365Publisher nvarchar(100) = 'Dynamics 365'
		declare @MicrosoftDynamics365Publisher nvarchar(100) = 'Microsoft Dynamics 365'

		declare @ResultingSolutions table 
		(
			IsSharedComponent int not null, 
			DependentComponentObjectId uniqueidentifier not null, 
			DependentComponentType int not null, 
			DependentComponentSolutionId uniqueidentifier not null
		)
		
		insert into @ResultingSolutions 
			(DependentComponentObjectId,DependentComponentSolutionId, DependentComponentType, IsSharedComponent)
		select dn.ObjectId, dn.TopSolutionId, dn.ComponentType, dn.IsSharedComponent
		from DependencyNodeBase dn
		join @MyComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)
			where dn.TopSolutionId NOT IN (@SolutionId, @ActiveSolutionId)
			and dn.TopSolutionId not in (select solutionId from solution where PublisherIdName in (@MicrosoftCorpPublisher, @MicrosoftDynamics365Publisher, @Dynamics365Publisher))

		
		insert into @ResultingSolutions 
			(DependentComponentObjectId,DependentComponentSolutionId, DependentComponentType, IsSharedComponent)
		select dn.ObjectId, dn.BaseSolutionId, dn.ComponentType, dn.IsSharedComponent
		from DependencyNodeBase dn 
		join @MyComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)
			where dn.BaseSolutionId NOT IN (@SolutionId, @ActiveSolutionId)
			and dn.BaseSolutionId not in (select solutionId from solution where PublisherIdName in (@MicrosoftCorpPublisher, @MicrosoftDynamics365Publisher, @Dynamics365Publisher))
			and dn.ObjectId not in (select dependentcomponentobjectid from @ResultingSolutions)

			
		select * from @ResultingSolutions
	end