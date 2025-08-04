


--
-- base view for List
--
create view dbo.[List]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [ListId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [ListName],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [Cost],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Cost_Base],
    [CreatedFromCode],
    [Description],
    [DoNotSendOnOptOut],
    [IgnoreInactiveListMembers],
    [LastUsedOn],
    [LockStatus],
    [MemberCount],
    [MemberType],
    [Purpose],
    [Query],
    [Source],
    [StateCode],
    [StatusCode],
    [Type],
    [processedMemberCount],
    [processFetchXML]
) with view_metadata as
select
    -- logical attributes
    [lk_list_modifiedby].[FullName],
    [lk_list_modifiedby].[YomiFullName],
    [lk_list_createdonbehalfby].[FullName],
    [lk_list_createdonbehalfby].[YomiFullName],
    [lk_list_modifiedonbehalfby].[FullName],
    [lk_list_modifiedonbehalfby].[YomiFullName],
    [lk_list_createdby].[FullName],
    [lk_list_createdby].[YomiFullName],
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
    [ListBase].[ListId],
    [ListBase].[CreatedOn],
    [ListBase].[CreatedBy],
    [ListBase].[ModifiedOn],
    [ListBase].[ModifiedBy],
    [ListBase].[CreatedOnBehalfBy],
    [ListBase].[ModifiedOnBehalfBy],
    [ListBase].[OwningBusinessUnit],
    [ListBase].[VersionNumber],
    [ListBase].[ImportSequenceNumber],
    [ListBase].[OverriddenCreatedOn],
    [ListBase].[TimeZoneRuleVersionNumber],
    [ListBase].[UTCConversionTimeZoneCode],
    [ListBase].[ListName],
    [ListBase].[ProcessId],
    [ListBase].[StageId],
    [ListBase].[TraversedPath],
    [ListBase].[Cost],
    [ListBase].[TransactionCurrencyId],
    [ListBase].[ExchangeRate],
    [ListBase].[Cost_Base],
    [ListBase].[CreatedFromCode],
    [ListBase].[Description],
    [ListBase].[DoNotSendOnOptOut],
    [ListBase].[IgnoreInactiveListMembers],
    [ListBase].[LastUsedOn],
    [ListBase].[LockStatus],
    [ListBase].[MemberCount],
    [ListBase].[MemberType],
    [ListBase].[Purpose],
    [ListBase].[Query],
    [ListBase].[Source],
    [ListBase].[StateCode],
    [ListBase].[StatusCode],
    [ListBase].[Type],
    [ListBase].[processedMemberCount],
    [ListBase].[processFetchXML]
from [ListBase] 
    left join [SystemUserBase] [lk_list_createdby] on ([ListBase].[CreatedBy] = [lk_list_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_list_createdonbehalfby] on ([ListBase].[CreatedOnBehalfBy] = [lk_list_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_list_modifiedby] on ([ListBase].[ModifiedBy] = [lk_list_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_list_modifiedonbehalfby] on ([ListBase].[ModifiedOnBehalfBy] = [lk_list_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_list] on ([ListBase].[TransactionCurrencyId] = [transactioncurrency_list].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([ListBase].OwnerId = XXowner.OwnerId)
