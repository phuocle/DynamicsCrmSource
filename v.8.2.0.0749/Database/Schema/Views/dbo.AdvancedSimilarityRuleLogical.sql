SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for AdvancedSimilarityRuleLogical
--
create view [dbo].[AdvancedSimilarityRuleLogical]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [AzureServiceConnectionIdName],
    [ModifiedByName],
    [OrganizationIdName],

    -- physical attributes
    [AdvancedSimilarityRuleId],
    [name],
    [Description],
    [SourceEntity],
    [NgramSize],
    [MaxNumberKeyphrases],
    [OrganizationId],
    [StatusCode],
    [StateCode],
    [AzureServiceConnectionId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [AdvancedSimilarityRuleIdUnique],
    [Entity],
    [CreatedOnBehalfBy],
    [CreatedOn],
    [ModifiedOn],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [FetchXmlList],
    [ExactMatchList],
    [IsAzureMLRequired],
    [FilterResultByStatus],
    [FilterResultByStatusDisplayName]
) with view_metadata as
select
    -- logical attributes
    [lk_advancedsimilarityrule_createdby].[FullName],
    [lk_advancedsimilarityrule_modifiedonbehalfby].[YomiFullName],
    [lk_advancedsimilarityrule_modifiedonbehalfby].[FullName],
    [lk_advancedsimilarityrule_createdonbehalfby].[FullName],
    [lk_advancedsimilarityrule_createdonbehalfby].[YomiFullName],
    [azureserviceconnection_advancedsimilarityrule].[Name],
    [lk_advancedsimilarityrule_modifiedby].[FullName],
    [organization_advancedsimilarityrule].[Name],

    -- physical attribute
    [T1].[AdvancedSimilarityRuleId],
    [T1].[name],
    [T1].[Description],
    [T1].[SourceEntity],
    [T1].[NgramSize],
    [T1].[MaxNumberKeyphrases],
    [T1].[OrganizationId],
    [T1].[StatusCode],
    [T1].[StateCode],
    [T1].[AzureServiceConnectionId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[AdvancedSimilarityRuleIdUnique],
    [T1].[Entity],
    [T1].[CreatedOnBehalfBy],
    [T1].[CreatedOn],
    [T1].[ModifiedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[FetchXmlList],
    [T1].[ExactMatchList],
    [T1].[IsAzureMLRequired],
    [T1].[FilterResultByStatus],
    [T1].[FilterResultByStatusDisplayName]
from [AdvancedSimilarityRuleBase] [T1]
    left join [AzureServiceConnectionBase] [azureserviceconnection_advancedsimilarityrule] on ([T1].[AzureServiceConnectionId] = [azureserviceconnection_advancedsimilarityrule].[AzureServiceConnectionId])
    left join [SystemUserBase] [lk_advancedsimilarityrule_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_advancedsimilarityrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_advancedsimilarityrule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_advancedsimilarityrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_advancedsimilarityrule_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_advancedsimilarityrule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_advancedsimilarityrule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_advancedsimilarityrule_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_advancedsimilarityrule] with(nolock) on ([T1].[OrganizationId] = [organization_advancedsimilarityrule].[OrganizationId])
where T1.OverwriteTime = 0
GO
