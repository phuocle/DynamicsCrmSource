


--
-- logical view for KnowledgeSearchModelLogical
--
create view dbo.[KnowledgeSearchModelLogical]
 (
    -- logical attributes
    [AzureServiceConnectionIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [OrganizationIdName],

    -- physical attributes
    [KnowledgeSearchModelId],
    [Name],
    [NgramSize],
    [MaxKeyWords],
    [FetchXmlList],
    [SourceEntity],
    [StatusCode],
    [StateCode],
    [OrganizationId],
    [AzureServiceConnectionId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [KnowledgeSearchModelIdUnique],
    [Description],
    [Entity],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [azureserviceconnection_knowledgesearchmodel].[Name],
    [lk_knowledgesearchmodel_createdonbehalfby].[YomiFullName],
    [lk_knowledgesearchmodel_createdonbehalfby].[FullName],
    [lk_knowledgesearchmodel_modifiedby].[FullName],
    [lk_knowledgesearchmodel_modifiedonbehalfby].[YomiFullName],
    [lk_knowledgesearchmodel_modifiedonbehalfby].[FullName],
    [lk_knowledgesearchmodel_createdby].[FullName],
    [organization_knowledgesearchmodel].[Name],

    -- physical attribute
    [T1].[KnowledgeSearchModelId],
    [T1].[Name],
    [T1].[NgramSize],
    [T1].[MaxKeyWords],
    [T1].[FetchXmlList],
    [T1].[SourceEntity],
    [T1].[StatusCode],
    [T1].[StateCode],
    [T1].[OrganizationId],
    [T1].[AzureServiceConnectionId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[KnowledgeSearchModelIdUnique],
    [T1].[Description],
    [T1].[Entity],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy]
from [KnowledgeSearchModelBase] [T1]
    left join [AzureServiceConnectionBase] [azureserviceconnection_knowledgesearchmodel] on ([T1].[AzureServiceConnectionId] = [azureserviceconnection_knowledgesearchmodel].[AzureServiceConnectionId])
    left join [SystemUserBase] [lk_knowledgesearchmodel_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_knowledgesearchmodel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgesearchmodel_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_knowledgesearchmodel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgesearchmodel_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_knowledgesearchmodel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_knowledgesearchmodel_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_knowledgesearchmodel_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_knowledgesearchmodel] with(nolock) on ([T1].[OrganizationId] = [organization_knowledgesearchmodel].[OrganizationId])
where T1.OverwriteTime = 0