SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for KnowledgeBaseRecord
--
create view [dbo].[KnowledgeBaseRecord]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],

    -- physical attributes
    [KnowledgeBaseRecordId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [TimeZoneRuleVersionNumber],
    [Title],
    [PrivateUrl],
    [PublicUrl],
    [ExchangeRate],
    [TransactionCurrencyId],
    [UniqueId]
) with view_metadata as
select
    -- logical attributes
    [lk_KnowledgeBaseRecord_createdonbehalfby].[FullName],
    [lk_KnowledgeBaseRecord_createdonbehalfby].[YomiFullName],
    [lk_KnowledgeBaseRecord_modifiedby].[FullName],
    [lk_KnowledgeBaseRecord_modifiedby].[YomiFullName],
    [lk_KnowledgeBaseRecord_createdby].[FullName],
    [lk_KnowledgeBaseRecord_createdby].[YomiFullName],
    [lk_KnowledgeBaseRecord_modifiedonbehalfby].[FullName],
    [lk_KnowledgeBaseRecord_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_KnowledgeBaseRecord].[CurrencyName],
    [organization_KnowledgeBaseRecord].[Name],

    -- physical attribute
    [KnowledgeBaseRecordBase].[KnowledgeBaseRecordId],
    [KnowledgeBaseRecordBase].[CreatedOn],
    [KnowledgeBaseRecordBase].[CreatedBy],
    [KnowledgeBaseRecordBase].[ModifiedOn],
    [KnowledgeBaseRecordBase].[ModifiedBy],
    [KnowledgeBaseRecordBase].[CreatedOnBehalfBy],
    [KnowledgeBaseRecordBase].[ModifiedOnBehalfBy],
    [KnowledgeBaseRecordBase].[OrganizationId],
    [KnowledgeBaseRecordBase].[VersionNumber],
    [KnowledgeBaseRecordBase].[TimeZoneRuleVersionNumber],
    [KnowledgeBaseRecordBase].[Title],
    [KnowledgeBaseRecordBase].[PrivateUrl],
    [KnowledgeBaseRecordBase].[PublicUrl],
    [KnowledgeBaseRecordBase].[ExchangeRate],
    [KnowledgeBaseRecordBase].[TransactionCurrencyId],
    [KnowledgeBaseRecordBase].[UniqueId]
from [KnowledgeBaseRecordBase] 
    left join [SystemUserBase] [lk_KnowledgeBaseRecord_createdby] with(nolock) on ([KnowledgeBaseRecordBase].[CreatedBy] = [lk_KnowledgeBaseRecord_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_KnowledgeBaseRecord_createdonbehalfby] with(nolock) on ([KnowledgeBaseRecordBase].[CreatedOnBehalfBy] = [lk_KnowledgeBaseRecord_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_KnowledgeBaseRecord_modifiedby] with(nolock) on ([KnowledgeBaseRecordBase].[ModifiedBy] = [lk_KnowledgeBaseRecord_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_KnowledgeBaseRecord_modifiedonbehalfby] with(nolock) on ([KnowledgeBaseRecordBase].[ModifiedOnBehalfBy] = [lk_KnowledgeBaseRecord_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_KnowledgeBaseRecord] with(nolock) on ([KnowledgeBaseRecordBase].[OrganizationId] = [organization_KnowledgeBaseRecord].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_KnowledgeBaseRecord] on ([KnowledgeBaseRecordBase].[TransactionCurrencyId] = [TransactionCurrency_KnowledgeBaseRecord].[TransactionCurrencyId])
GO
