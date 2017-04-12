SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for SimilarityRuleLogical
--
create view [dbo].[SimilarityRuleLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [CreatedOnBehalfBy],
    [ExchangeRate],
    [ImportSequenceNumber],
    [ModifiedOnBehalfBy],
    [name],
    [SimilarityRuleId],
    [OverriddenCreatedOn],
    [MatchingEntityName],
    [statecode],
    [statuscode],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [SimilarityRuleIdUnique],
    [OrganizationId],
    [Description],
    [BaseEntityTypeCode],
    [MatchingEntityTypeCode],
    [ExcludeInactiveRecords],
    [BaseEntityName],
    [ActiveRuleFetchXML],
    [CreatedOn],
    [ModifiedOn],
    [RuleConditionXml],
    [NgramSize],
    [MaxKeyWords],
    [FetchXmlList]
) with view_metadata as
select
    -- logical attributes
    [lk_similarityrule_createdonbehalfby].[FullName],
    [lk_similarityrule_createdonbehalfby].[YomiFullName],
    [lk_similarityrule_modifiedonbehalfby].[FullName],
    [lk_similarityrule_modifiedonbehalfby].[YomiFullName],
    [organization_similarityrule].[Name],
    [TransactionCurrency_SimilarityRule].[CurrencyName],

    -- physical attribute
    [T1].[CreatedOnBehalfBy],
    [T1].[ExchangeRate],
    [T1].[ImportSequenceNumber],
    [T1].[ModifiedOnBehalfBy],
    [T1].[name],
    [T1].[SimilarityRuleId],
    [T1].[OverriddenCreatedOn],
    [T1].[MatchingEntityName],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[TransactionCurrencyId],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[VersionNumber],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[SimilarityRuleIdUnique],
    [T1].[OrganizationId],
    [T1].[Description],
    [T1].[BaseEntityTypeCode],
    [T1].[MatchingEntityTypeCode],
    [T1].[ExcludeInactiveRecords],
    [T1].[BaseEntityName],
    [T1].[ActiveRuleFetchXML],
    [T1].[CreatedOn],
    [T1].[ModifiedOn],
    [T1].[RuleConditionXml],
    [T1].[NgramSize],
    [T1].[MaxKeyWords],
    [T1].[FetchXmlList]
from [SimilarityRuleBase] [T1]
    left join [SystemUserBase] [lk_similarityrule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_similarityrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_similarityrule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_similarityrule_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_similarityrule] with(nolock) on ([T1].[OrganizationId] = [organization_similarityrule].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_SimilarityRule] on ([T1].[TransactionCurrencyId] = [TransactionCurrency_SimilarityRule].[TransactionCurrencyId])
where T1.OverwriteTime = 0
GO
