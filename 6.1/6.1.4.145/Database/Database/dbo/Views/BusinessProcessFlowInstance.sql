


--
-- base view for BusinessProcessFlowInstance
--
create view dbo.[BusinessProcessFlowInstance]
 (

    -- physical attributes
    [BusinessProcessFlowInstanceId],
    [Entity1Id],
    [Entity1ObjectTypeCode],
    [Entity2Id],
    [Entity2ObjectTypeCode],
    [Entity3Id],
    [Entity3ObjectTypeCode],
    [Entity4Id],
    [Entity4ObjectTypeCode],
    [Entity5Id],
    [Entity5ObjectTypeCode],
    [ProcessId],
    [ProcessStageId],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [BusinessProcessFlowInstanceBase].[BusinessProcessFlowInstanceId],
    [BusinessProcessFlowInstanceBase].[Entity1Id],
    [BusinessProcessFlowInstanceBase].[Entity1ObjectTypeCode],
    [BusinessProcessFlowInstanceBase].[Entity2Id],
    [BusinessProcessFlowInstanceBase].[Entity2ObjectTypeCode],
    [BusinessProcessFlowInstanceBase].[Entity3Id],
    [BusinessProcessFlowInstanceBase].[Entity3ObjectTypeCode],
    [BusinessProcessFlowInstanceBase].[Entity4Id],
    [BusinessProcessFlowInstanceBase].[Entity4ObjectTypeCode],
    [BusinessProcessFlowInstanceBase].[Entity5Id],
    [BusinessProcessFlowInstanceBase].[Entity5ObjectTypeCode],
    [BusinessProcessFlowInstanceBase].[ProcessId],
    [BusinessProcessFlowInstanceBase].[ProcessStageId],
    [BusinessProcessFlowInstanceBase].[VersionNumber]
from [BusinessProcessFlowInstanceBase] 
