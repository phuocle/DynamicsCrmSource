USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_BatchDeleteDependencies]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_BatchDeleteDependencies]
as
begin
	-- delete from the Dependency table first
	delete from DependencyBase where RequiredComponentNodeId in (select NodeId from #NodesToDelete)
	delete from DependencyBase where DependentComponentNodeId in (select NodeId from #NodesToDelete)
	
	-- follow up by delete the node itself from the DependencyNode table
	delete from DependencyNodeBase where DependencyNodeId in (select NodeId from #NodesToDelete)
end

GO
