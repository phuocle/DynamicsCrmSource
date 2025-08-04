


--
-- base view for ExternalPartyItem
--
create view dbo.[ExternalPartyItem]
 (
    -- logical attributes
    [OwnerId],
    [ExternalPartyIdName],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OwningUser],
    [ModifiedByYomiName],
    [ModifiedByName],
    [ChannelAccessProfileIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [ExternalPartyId],
    [LastEnabledOn],
    [LastDisabledOn],
    [StateCode],
    [StatusCode],
    [ChannelAccessProfileId],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [IntroducedVersion],
    [ImportSequenceNumber],
    [Name],
    [ExternalPartyItemId],
    [TransactionCurrencyId],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [ExchangeRate],
    [VersionNumber],
    [OverriddenCreatedOn]
) with view_metadata as
select
    -- logical attributes
    [externalparty_entries].[OwnerId],
    [externalparty_entries].[FullName],
    [externalparty_entries].[OwnerIdType],
    [externalparty_entries].[OwningBusinessUnit],
    case when [externalparty_entries].OwnerIdType = 8
    then [externalparty_entries].OwnerId
    else null
    end,
    [lk_externalpartyitem_modifiedby].[YomiFullName],
    [lk_externalpartyitem_modifiedby].[FullName],
    [lk_externalpartyitem_channelaccessprofileid].[Name],
    [lk_externalpartyitem_createdonbehalfby].[FullName],
    [lk_externalpartyitem_createdonbehalfby].[YomiFullName],
    [lk_externalpartyitem_createdby].[FullName],
    [lk_externalpartyitem_createdby].[YomiFullName],
    [lk_externalpartyitem_modifiedonbehalfby].[YomiFullName],
    [lk_externalpartyitem_modifiedonbehalfby].[FullName],
    [TransactionCurrency_externalpartyitem].[CurrencyName],

    -- physical attribute
    [ExternalPartyItemBase].[ExternalPartyId],
    [ExternalPartyItemBase].[LastEnabledOn],
    [ExternalPartyItemBase].[LastDisabledOn],
    [ExternalPartyItemBase].[StateCode],
    [ExternalPartyItemBase].[StatusCode],
    [ExternalPartyItemBase].[ChannelAccessProfileId],
    [ExternalPartyItemBase].[CreatedBy],
    [ExternalPartyItemBase].[CreatedOn],
    [ExternalPartyItemBase].[CreatedOnBehalfBy],
    [ExternalPartyItemBase].[ModifiedBy],
    [ExternalPartyItemBase].[ModifiedOn],
    [ExternalPartyItemBase].[ModifiedOnBehalfBy],
    [ExternalPartyItemBase].[IntroducedVersion],
    [ExternalPartyItemBase].[ImportSequenceNumber],
    [ExternalPartyItemBase].[Name],
    [ExternalPartyItemBase].[ExternalPartyItemId],
    [ExternalPartyItemBase].[TransactionCurrencyId],
    [ExternalPartyItemBase].[RegardingObjectId],
    [ExternalPartyItemBase].[RegardingObjectIdName],
    [ExternalPartyItemBase].[RegardingObjectIdYomiName],
    [ExternalPartyItemBase].[RegardingObjectTypeCode],
    [ExternalPartyItemBase].[ExchangeRate],
    [ExternalPartyItemBase].[VersionNumber],
    [ExternalPartyItemBase].[OverriddenCreatedOn]
from [ExternalPartyItemBase] 
    left join [ExternalPartyBase] [externalparty_entries] on ([ExternalPartyItemBase].[ExternalPartyId] = [externalparty_entries].[ExternalPartyId])
    left join [ChannelAccessProfileBase] [lk_externalpartyitem_channelaccessprofileid] on ([ExternalPartyItemBase].[ChannelAccessProfileId] = [lk_externalpartyitem_channelaccessprofileid].[ChannelAccessProfileId] and [lk_externalpartyitem_channelaccessprofileid].OverwriteTime = 0 and [lk_externalpartyitem_channelaccessprofileid].ComponentState = 0)
    left join [SystemUserBase] [lk_externalpartyitem_createdby] with(nolock) on ([ExternalPartyItemBase].[CreatedBy] = [lk_externalpartyitem_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_externalpartyitem_createdonbehalfby] with(nolock) on ([ExternalPartyItemBase].[CreatedOnBehalfBy] = [lk_externalpartyitem_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_externalpartyitem_modifiedby] with(nolock) on ([ExternalPartyItemBase].[ModifiedBy] = [lk_externalpartyitem_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_externalpartyitem_modifiedonbehalfby] with(nolock) on ([ExternalPartyItemBase].[ModifiedOnBehalfBy] = [lk_externalpartyitem_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_externalpartyitem] on ([ExternalPartyItemBase].[TransactionCurrencyId] = [TransactionCurrency_externalpartyitem].[TransactionCurrencyId])
