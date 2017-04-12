SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for BusinessProcessFlowInstance
--
create view [dbo].[BusinessProcessFlowInstance]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

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
    [VersionNumber],
    [TraversedPath],
    [StateCode],
    [StatusCode],
    [Name],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [ActiveStageStartedOn],
    [CompletedOn]
) with view_metadata as
select
    -- logical attributes
    [lk_businessprocessflowinstancebase_createdonbehalfby].[YomiFullName],
    [lk_businessprocessflowinstancebase_createdonbehalfby].[FullName],
    [lk_businessprocessflowinstancebase_modifiedby].[YomiFullName],
    [lk_businessprocessflowinstancebase_modifiedby].[FullName],
    [lk_businessprocessflowinstancebase_createdby].[FullName],
    [lk_businessprocessflowinstancebase_createdby].[YomiFullName],
    [lk_businessprocessflowinstancebase_modifiedonbehalfby].[FullName],
    [lk_businessprocessflowinstancebase_modifiedonbehalfby].[YomiFullName],

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
    [BusinessProcessFlowInstanceBase].[VersionNumber],
    [BusinessProcessFlowInstanceBase].[TraversedPath],
    [BusinessProcessFlowInstanceBase].[StateCode],
    [BusinessProcessFlowInstanceBase].[StatusCode],
    [BusinessProcessFlowInstanceBase].[Name],
    [BusinessProcessFlowInstanceBase].[CreatedBy],
    [BusinessProcessFlowInstanceBase].[CreatedOn],
    [BusinessProcessFlowInstanceBase].[CreatedOnBehalfBy],
    [BusinessProcessFlowInstanceBase].[ModifiedOn],
    [BusinessProcessFlowInstanceBase].[ModifiedBy],
    [BusinessProcessFlowInstanceBase].[ModifiedOnBehalfBy],
    [BusinessProcessFlowInstanceBase].[ActiveStageStartedOn],
    [BusinessProcessFlowInstanceBase].[CompletedOn]
from [BusinessProcessFlowInstanceBase] 
    left join [SystemUserBase] [lk_businessprocessflowinstancebase_createdby] with(nolock) on ([BusinessProcessFlowInstanceBase].[CreatedBy] = [lk_businessprocessflowinstancebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_businessprocessflowinstancebase_createdonbehalfby] with(nolock) on ([BusinessProcessFlowInstanceBase].[CreatedOnBehalfBy] = [lk_businessprocessflowinstancebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_businessprocessflowinstancebase_modifiedby] with(nolock) on ([BusinessProcessFlowInstanceBase].[ModifiedBy] = [lk_businessprocessflowinstancebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_businessprocessflowinstancebase_modifiedonbehalfby] with(nolock) on ([BusinessProcessFlowInstanceBase].[ModifiedOnBehalfBy] = [lk_businessprocessflowinstancebase_modifiedonbehalfby].[SystemUserId])
GO
