


--
-- base view for BookableResource
--
create view dbo.[BookableResource]
 (
    -- logical attributes
    [AccountIdName],
    [ContactIdName],
    [AccountIdYomiName],
    [ContactIdYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [CalendarIdName],
    [UserIdName],
    [UserIdYomiName],

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
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [AccountId],
    [CalendarId],
    [ContactId],
    [ResourceType],
    [StateCode],
    [StatusCode],
    [TimeZone],
    [UserId],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [account_bookableresource_AccountId].[Name],
    [contact_bookableresource_ContactId].[FullName],
    [account_bookableresource_AccountId].[YomiName],
    [contact_bookableresource_ContactId].[YomiFullName],
    [lk_bookableresource_createdby].[FullName],
    [lk_bookableresource_createdby].[YomiFullName],
    [lk_bookableresource_createdonbehalfby].[FullName],
    [lk_bookableresource_createdonbehalfby].[YomiFullName],
    [lk_bookableresource_modifiedby].[FullName],
    [lk_bookableresource_modifiedby].[YomiFullName],
    [lk_bookableresource_modifiedonbehalfby].[FullName],
    [lk_bookableresource_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_bookableresource].[CurrencyName],
    [calendar_bookableresources].[CalendarId],
    [systemuser_bookableresource_UserId].[FullName],
    [systemuser_bookableresource_UserId].[YomiFullName],

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
    [BookableResourceBase].[VersionNumber],
    [BookableResourceBase].[ImportSequenceNumber],
    [BookableResourceBase].[OverriddenCreatedOn],
    [BookableResourceBase].[TimeZoneRuleVersionNumber],
    [BookableResourceBase].[UTCConversionTimeZoneCode],
    [BookableResourceBase].[Name],
    [BookableResourceBase].[ProcessId],
    [BookableResourceBase].[StageId],
    [BookableResourceBase].[TraversedPath],
    [BookableResourceBase].[AccountId],
    [BookableResourceBase].[CalendarId],
    [BookableResourceBase].[ContactId],
    [BookableResourceBase].[ResourceType],
    [BookableResourceBase].[StateCode],
    [BookableResourceBase].[StatusCode],
    [BookableResourceBase].[TimeZone],
    [BookableResourceBase].[UserId],
    [BookableResourceBase].[ExchangeRate],
    [BookableResourceBase].[TransactionCurrencyId]
from [BookableResourceBase] 
    left join [AccountBase] [account_bookableresource_AccountId] on ([BookableResourceBase].[AccountId] = [account_bookableresource_AccountId].[AccountId])
    left join [CalendarBase] [calendar_bookableresources] on ([BookableResourceBase].[CalendarId] = [calendar_bookableresources].[CalendarId])
    left join [ContactBase] [contact_bookableresource_ContactId] on ([BookableResourceBase].[ContactId] = [contact_bookableresource_ContactId].[ContactId])
    left join [SystemUserBase] [lk_bookableresource_createdby] on ([BookableResourceBase].[CreatedBy] = [lk_bookableresource_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresource_createdonbehalfby] on ([BookableResourceBase].[CreatedOnBehalfBy] = [lk_bookableresource_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresource_modifiedby] on ([BookableResourceBase].[ModifiedBy] = [lk_bookableresource_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_bookableresource_modifiedonbehalfby] on ([BookableResourceBase].[ModifiedOnBehalfBy] = [lk_bookableresource_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [systemuser_bookableresource_UserId] on ([BookableResourceBase].[UserId] = [systemuser_bookableresource_UserId].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_bookableresource] on ([BookableResourceBase].[TransactionCurrencyId] = [TransactionCurrency_bookableresource].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([BookableResourceBase].OwnerId = XXowner.OwnerId)
