


--
-- base view for Team
--
create view dbo.[Team]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [BusinessUnitIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [AdministratorIdName],
    [AdministratorIdYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],
    [QueueIdName],

    -- physical attributes
    [TeamId],
    [OrganizationId],
    [BusinessUnitId],
    [Name],
    [Description],
    [EMailAddress],
    [CreatedOn],
    [ModifiedOn],
    [CreatedBy],
    [ModifiedBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [AdministratorId],
    [IsDefault],
    [YomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TraversedPath],
    [QueueId],
    [TransactionCurrencyId],
    [ExchangeRate],
    [TeamType],
    [TeamTemplateId],
    [RegardingObjectId],
    [SystemManaged],
    [RegardingObjectTypeCode],
    [StageId],
    [ProcessId]
) with view_metadata as
select
    -- logical attributes
    [lk_teambase_modifiedby].[FullName],
    [lk_teambase_modifiedby].[YomiFullName],
    [business_unit_teams].[Name],
    [lk_teambase_createdonbehalfby].[YomiFullName],
    [lk_teambase_createdonbehalfby].[FullName],
    [lk_teambase_administratorid].[FullName],
    [lk_teambase_administratorid].[YomiFullName],
    [lk_teambase_createdby].[FullName],
    [lk_teambase_createdby].[YomiFullName],
    [lk_teambase_modifiedonbehalfby].[YomiFullName],
    [lk_teambase_modifiedonbehalfby].[FullName],
    [TransactionCurrency_Team].[CurrencyName],
    [organization_teams].[Name],
    [queue_team].[Name],

    -- physical attribute
    [TeamBase].[TeamId],
    [TeamBase].[OrganizationId],
    [TeamBase].[BusinessUnitId],
    [TeamBase].[Name],
    [TeamBase].[Description],
    [TeamBase].[EMailAddress],
    [TeamBase].[CreatedOn],
    [TeamBase].[ModifiedOn],
    [TeamBase].[CreatedBy],
    [TeamBase].[ModifiedBy],
    [TeamBase].[VersionNumber],
    [TeamBase].[ImportSequenceNumber],
    [TeamBase].[OverriddenCreatedOn],
    [TeamBase].[AdministratorId],
    [TeamBase].[IsDefault],
    [TeamBase].[YomiName],
    [TeamBase].[CreatedOnBehalfBy],
    [TeamBase].[ModifiedOnBehalfBy],
    [TeamBase].[TraversedPath],
    [TeamBase].[QueueId],
    [TeamBase].[TransactionCurrencyId],
    [TeamBase].[ExchangeRate],
    [TeamBase].[TeamType],
    [TeamBase].[TeamTemplateId],
    [TeamBase].[RegardingObjectId],
    [TeamBase].[SystemManaged],
    [TeamBase].[RegardingObjectTypeCode],
    [TeamBase].[StageId],
    [TeamBase].[ProcessId]
from [TeamBase] 
    left join [BusinessUnitBase] [business_unit_teams] on ([TeamBase].[BusinessUnitId] = [business_unit_teams].[BusinessUnitId])
    left join [SystemUserBase] [lk_teambase_administratorid] with(nolock) on ([TeamBase].[AdministratorId] = [lk_teambase_administratorid].[SystemUserId])
    left join [SystemUserBase] [lk_teambase_createdby] with(nolock) on ([TeamBase].[CreatedBy] = [lk_teambase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_teambase_createdonbehalfby] with(nolock) on ([TeamBase].[CreatedOnBehalfBy] = [lk_teambase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_teambase_modifiedby] with(nolock) on ([TeamBase].[ModifiedBy] = [lk_teambase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_teambase_modifiedonbehalfby] with(nolock) on ([TeamBase].[ModifiedOnBehalfBy] = [lk_teambase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_teams] with(nolock) on ([TeamBase].[OrganizationId] = [organization_teams].[OrganizationId])
    left join [QueueBase] [queue_team] on ([TeamBase].[QueueId] = [queue_team].[QueueId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Team] on ([TeamBase].[TransactionCurrencyId] = [TransactionCurrency_Team].[TransactionCurrencyId])
