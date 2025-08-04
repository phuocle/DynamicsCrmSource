

create procedure p_BatchDeleteDependencies
as
begin
	-- delete from the Dependency table first
	delete from DependencyBase where RequiredComponentNodeId in (select NodeId from #NodesToDelete)
	delete from DependencyBase where DependentComponentNodeId in (select NodeId from #NodesToDelete)
	
	-- follow up by delete the node itself from the DependencyNode table
	delete from DependencyNodeBase where DependencyNodeId in (select NodeId from #NodesToDelete)
end
