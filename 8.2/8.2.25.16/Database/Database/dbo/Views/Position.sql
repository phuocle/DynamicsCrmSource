


--
-- base view for Position
--
create view dbo.[Position]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ParentPositionIdName],
    [TransactionCurrencyIdName],
    [OrganizationIdName],

    -- physical attributes
    [PositionId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ParentPositionId],
    [ExchangeRate],
    [Description],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_position_modifiedonbehalfby].[FullName],
    [lk_position_modifiedonbehalfby].[YomiFullName],
    [lk_position_modifiedby].[FullName],
    [lk_position_modifiedby].[YomiFullName],
    [lk_position_createdby].[FullName],
    [lk_position_createdby].[YomiFullName],
    [lk_position_createdonbehalfby].[FullName],
    [lk_position_createdonbehalfby].[YomiFullName],
    [position_parent_position].[Name],
    [transactioncurrency_position].[CurrencyName],
    [organization_position].[Name],

    -- physical attribute
    [PositionBase].[PositionId],
    [PositionBase].[CreatedOn],
    [PositionBase].[CreatedBy],
    [PositionBase].[ModifiedOn],
    [PositionBase].[ModifiedBy],
    [PositionBase].[CreatedOnBehalfBy],
    [PositionBase].[ModifiedOnBehalfBy],
    [PositionBase].[OrganizationId],
    [PositionBase].[statecode],
    [PositionBase].[StatusCode],
    [PositionBase].[VersionNumber],
    [PositionBase].[ImportSequenceNumber],
    [PositionBase].[OverriddenCreatedOn],
    [PositionBase].[TimeZoneRuleVersionNumber],
    [PositionBase].[UTCConversionTimeZoneCode],
    [PositionBase].[Name],
    [PositionBase].[ParentPositionId],
    [PositionBase].[ExchangeRate],
    [PositionBase].[Description],
    [PositionBase].[TransactionCurrencyId]
from [PositionBase] 
    left join [SystemUserBase] [lk_position_createdby] with(nolock) on ([PositionBase].[CreatedBy] = [lk_position_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_position_createdonbehalfby] with(nolock) on ([PositionBase].[CreatedOnBehalfBy] = [lk_position_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_position_modifiedby] with(nolock) on ([PositionBase].[ModifiedBy] = [lk_position_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_position_modifiedonbehalfby] with(nolock) on ([PositionBase].[ModifiedOnBehalfBy] = [lk_position_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_position] with(nolock) on ([PositionBase].[OrganizationId] = [organization_position].[OrganizationId])
    left join [PositionBase] [position_parent_position] on ([PositionBase].[ParentPositionId] = [position_parent_position].[PositionId])
    left join [TransactionCurrencyBase] [transactioncurrency_position] on ([PositionBase].[TransactionCurrencyId] = [transactioncurrency_position].[TransactionCurrencyId])
