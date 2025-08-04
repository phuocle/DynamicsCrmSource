


--
-- base view for BookableResource
--
create view dbo.[BookableResource]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CalendarIdName],
    [ContactIdYomiName],
    [ContactIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [AccountIdName],
    [AccountIdYomiName],
    [UserIdYomiName],
    [UserIdName],
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
    [BookableResourceId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [CalendarId],
    [ResourceType],
    [TimeZone],
    [AccountId],
    [ContactId],
    [UserId],
    [ExchangeRate],
    [TransactionCurrencyId],
    [ProcessId],
    [StageId],
    [TraversedPath]
) with view_metadata as
select
    -- logical attributes
    [lk_bookableresource_modifiedby].[FullName],
    [lk_bookableresource_modifiedby].[YomiFullName],
    [lk_bookableresource_createdby].[FullName],
    [lk_bookableresource_createdby].[YomiFullName],
    [lk_bookableresource_modifiedonbehalfby].[FullName],
    [lk_bookableresource_modifiedonbehalfby].[YomiFullName],
    [calendar_bookableresources].[CalendarId],
    [contact_bookableresource_ContactId].[YomiFullName],
    [contact_bookableresource_ContactId].[FullName],
    [lk_bookableresource_createdonbehalfby].[FullName],
    [lk_bookableresource_createdonbehalfby].[YomiFullName],
    [account_bookableresource_AccountId].[Name],
    [account_bookableresource_AccountId].[YomiName],
    [systemuser_bookableresource_UserId].[YomiFullName],
    [systemuser_bookableresource_UserId].[FullName],
    [TransactionCurrency_bookableresource].[CurrencyName],

    -- ownership entries
    OwnerId = [BookableResourceBase].OwnerId,
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
    [BookableResourceBase].[BookableResourceId],
    [BookableResourceBase].[CreatedOn],
    [BookableResourceBase].[CreatedBy],
    [BookableResourceBase].[ModifiedOn],
    [BookableResourceBase].[ModifiedBy],
    [BookableResourceBase].[CreatedOnBehalfBy],
    [BookableResourceBase].[ModifiedOnBehalfBy],
    [BookableResourceBase].[OwningBusinessUnit],
    [BookableResourceBase].[StateCode],
    [BookableResourceBase].[StatusCode],
    [BookableResourceBase].[VersionNumber],
    [BookableResourceBase].[ImportSequenceNumber],
    [BookableResourceBase].[OverriddenCreatedOn],
    [BookableResourceBase].[TimeZoneRuleVersionNumber],
    [BookableResourceBase].[UTCConversionTimeZoneCode],
    [BookableResourceBase].[Name],
    [BookableResourceBase].[CalendarId],
    [BookableResourceBase].[ResourceType],
    [BookableResourceBase].[TimeZone],
    [BookableResourceBase].[AccountId],
    [BookableResourceBase].[ContactId],
    [BookableResourceBase].[UserId],
    [BookableResourceBase].[ExchangeRate],
    [BookableResourceBase].[TransactionCurrencyId],
    [BookableResourceBase].[ProcessId],
    [BookableResourceBase].[StageId],
    [BookableResourceBase].[TraversedPath]
from [BookableResourceBase] 
    left join [AccountBase] [account_bookableresource_AccountId] on ([BookableResourceBase].[AccountId] = [account_bookableresource_AccountId].[AccountId])
    left join [CalendarBase] [calendar_bookableresources] on ([BookableResourceBase].[CalendarId] = [calendar_bookableresources].[CalendarId])
    left join [ContactBase] [contact_bookableresource_ContactId] on ([BookableResourceBase].[ContactId] = [contact_bookableresource_ContactId].[ContactId])
    left join [SystemUserBase] [lk_bookableresource_createdby] with(nolock) on ([BookableResourceBase].[CreatedBy] = [lk_bookableresource_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresource_createdonbehalfby] with(nolock) on ([BookableResourceBase].[CreatedOnBehalfBy] = [lk_bookableresource_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresource_modifiedby] with(nolock) on ([BookableResourceBase].[ModifiedBy] = [lk_bookableresource_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresource_modifiedonbehalfby] with(nolock) on ([BookableResourceBase].[ModifiedOnBehalfBy] = [lk_bookableresource_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [systemuser_bookableresource_UserId] with(nolock) on ([BookableResourceBase].[UserId] = [systemuser_bookableresource_UserId].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresource] on ([BookableResourceBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresource].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([BookableResourceBase].OwnerId = XXowner.OwnerId)
