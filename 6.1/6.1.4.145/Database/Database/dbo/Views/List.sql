


--
-- base view for List
--
create view dbo.[List]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedOn],
    [ModifiedOn],
    [MemberCount],
    [ListName],
    [LastUsedOn],
    [ListId],
    [StateCode],
    [StatusCode],
    [OwningBusinessUnit],
    [ModifiedBy],
    [DoNotSendOnOptOut],
    [Description],
    [Purpose],
    [Cost],
    [IgnoreInactiveListMembers],
    [MemberType],
    [Source],
    [CreatedFromCode],
    [VersionNumber],
    [LockStatus],
    [CreatedBy],
    [TransactionCurrencyId],
    [ImportSequenceNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [ExchangeRate],
    [OverriddenCreatedOn],
    [Cost_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [Query],
    [Type],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_list_modifiedonbehalfby].[YomiFullName],
    [lk_list_createdonbehalfby].[YomiFullName],
    [lk_list_modifiedonbehalfby].[FullName],
    [lk_list_createdby].[YomiFullName],
    [lk_list_modifiedby].[FullName],
    [lk_list_modifiedby].[YomiFullName],
    [lk_list_createdonbehalfby].[FullName],
    [lk_list_createdby].[FullName],
    [transactioncurrency_list].[CurrencyName],

    -- ownership entries
    OwnerId = [ListBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [ListBase].[CreatedOn],
    [ListBase].[ModifiedOn],
    [ListBase].[MemberCount],
    [ListBase].[ListName],
    [ListBase].[LastUsedOn],
    [ListBase].[ListId],
    [ListBase].[StateCode],
    [ListBase].[StatusCode],
    [ListBase].[OwningBusinessUnit],
    [ListBase].[ModifiedBy],
    [ListBase].[DoNotSendOnOptOut],
    [ListBase].[Description],
    [ListBase].[Purpose],
    [ListBase].[Cost],
    [ListBase].[IgnoreInactiveListMembers],
    [ListBase].[MemberType],
    [ListBase].[Source],
    [ListBase].[CreatedFromCode],
    [ListBase].[VersionNumber],
    [ListBase].[LockStatus],
    [ListBase].[CreatedBy],
    [ListBase].[TransactionCurrencyId],
    [ListBase].[ImportSequenceNumber],
    [ListBase].[TimeZoneRuleVersionNumber],
    [ListBase].[UTCConversionTimeZoneCode],
    [ListBase].[ExchangeRate],
    [ListBase].[OverriddenCreatedOn],
    [ListBase].[Cost_Base],
    [ListBase].[CreatedOnBehalfBy],
    [ListBase].[ModifiedOnBehalfBy],
    [ListBase].[Query],
    [ListBase].[Type],
    [ListBase].[ProcessId],
    [ListBase].[StageId]
from [ListBase] 
    left join [SystemUserBase] [lk_list_createdby] with(nolock) on ([ListBase].[CreatedBy] = [lk_list_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_list_createdonbehalfby] with(nolock) on ([ListBase].[CreatedOnBehalfBy] = [lk_list_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_list_modifiedby] with(nolock) on ([ListBase].[ModifiedBy] = [lk_list_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_list_modifiedonbehalfby] with(nolock) on ([ListBase].[ModifiedOnBehalfBy] = [lk_list_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_list] on ([ListBase].[TransactionCurrencyId] = [transactioncurrency_list].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ListBase].OwnerId = XXowner.OwnerId)
