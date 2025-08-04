


--
-- base view for Position
--
create view dbo.[Position]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [ParentPositionIdName],
    [TransactionCurrencyIdName],

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
    [lk_position_createdby].[FullName],
    [lk_position_createdby].[YomiFullName],
    [lk_position_createdonbehalfby].[FullName],
    [lk_position_createdonbehalfby].[YomiFullName],
    [lk_position_modifiedby].[FullName],
    [lk_position_modifiedby].[YomiFullName],
    [lk_position_modifiedonbehalfby].[FullName],
    [lk_position_modifiedonbehalfby].[YomiFullName],
    [organization_position].[Name],
    [position_parent_position].[Name],
    [transactioncurrency_position].[CurrencyName],

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
    left join [SystemUserBase] [lk_position_createdby] on ([PositionBase].[CreatedBy] = [lk_position_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_position_createdonbehalfby] on ([PositionBase].[CreatedOnBehalfBy] = [lk_position_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_position_modifiedby] on ([PositionBase].[ModifiedBy] = [lk_position_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_position_modifiedonbehalfby] on ([PositionBase].[ModifiedOnBehalfBy] = [lk_position_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_position] on ([PositionBase].[OrganizationId] = [organization_position].[OrganizationId])
    left join [PositionBase] [position_parent_position] on ([PositionBase].[ParentPositionId] = [position_parent_position].[PositionId])
    left join [TransactionCurrencyBase] [transactioncurrency_position] on ([PositionBase].[TransactionCurrencyId] = [transactioncurrency_position].[TransactionCurrencyId])
