


--
-- base view for SharePointSite
--
create view dbo.[SharePointSite]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedByName],
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
    [SharePointSiteId],
    [ModifiedBy],
    [CreatedBy],
    [OwningBusinessUnit],
    [Name],
    [RelativeUrl],
    [ParentSite],
    [ParentSiteName],
    [ParentSiteObjectTypeCode],
    [ImportSequenceNumber],
    [ValidationStatus],
    [LastValidated],
    [StateCode],
    [StatusCode],
    [Description],
    [SiteCollectionId],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [ValidationStatusErrorCode],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [AbsoluteURL],
    [TransactionCurrencyId],
    [ExchangeRate],
    [VersionNumber],
    [IsGridPresent],
    [IsDefault],
    [FolderStructureEntity]
) with view_metadata as
select
    -- logical attributes
    [lk_sharepointsitebase_modifiedonbehalfby].[YomiFullName],
    [lk_sharepointsitebase_createdonbehalfby].[YomiFullName],
    [lk_sharepointsitebase_modifiedby].[YomiFullName],
    [lk_sharepointsitebase_createdonbehalfby].[FullName],
    [lk_sharepointsitebase_modifiedonbehalfby].[FullName],
    [lk_sharepointsitebase_createdby].[YomiFullName],
    [lk_sharepointsitebase_modifiedby].[FullName],
    [lk_sharepointsitebase_createdby].[FullName],
    [TransactionCurrency_SharePointSite].[CurrencyName],

    -- ownership entries
    OwnerId = [SharePointSiteBase].OwnerId,
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
    [SharePointSiteBase].[CreatedOn],
    [SharePointSiteBase].[ModifiedOn],
    [SharePointSiteBase].[SharePointSiteId],
    [SharePointSiteBase].[ModifiedBy],
    [SharePointSiteBase].[CreatedBy],
    [SharePointSiteBase].[OwningBusinessUnit],
    [SharePointSiteBase].[Name],
    [SharePointSiteBase].[RelativeUrl],
    [SharePointSiteBase].[ParentSite],
    [SharePointSiteBase].[ParentSiteName],
    [SharePointSiteBase].[ParentSiteObjectTypeCode],
    [SharePointSiteBase].[ImportSequenceNumber],
    [SharePointSiteBase].[ValidationStatus],
    [SharePointSiteBase].[LastValidated],
    [SharePointSiteBase].[StateCode],
    [SharePointSiteBase].[StatusCode],
    [SharePointSiteBase].[Description],
    [SharePointSiteBase].[SiteCollectionId],
    [SharePointSiteBase].[TimeZoneRuleVersionNumber],
    [SharePointSiteBase].[UTCConversionTimeZoneCode],
    [SharePointSiteBase].[OverriddenCreatedOn],
    [SharePointSiteBase].[ValidationStatusErrorCode],
    [SharePointSiteBase].[ModifiedOnBehalfBy],
    [SharePointSiteBase].[CreatedOnBehalfBy],
    [SharePointSiteBase].[AbsoluteURL],
    [SharePointSiteBase].[TransactionCurrencyId],
    [SharePointSiteBase].[ExchangeRate],
    [SharePointSiteBase].[VersionNumber],
    [SharePointSiteBase].[IsGridPresent],
    [SharePointSiteBase].[IsDefault],
    [SharePointSiteBase].[FolderStructureEntity]
from [SharePointSiteBase] 
    left join [SystemUserBase] [lk_sharepointsitebase_createdby] with(nolock) on ([SharePointSiteBase].[CreatedBy] = [lk_sharepointsitebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointsitebase_createdonbehalfby] with(nolock) on ([SharePointSiteBase].[CreatedOnBehalfBy] = [lk_sharepointsitebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointsitebase_modifiedby] with(nolock) on ([SharePointSiteBase].[ModifiedBy] = [lk_sharepointsitebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointsitebase_modifiedonbehalfby] with(nolock) on ([SharePointSiteBase].[ModifiedOnBehalfBy] = [lk_sharepointsitebase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_SharePointSite] on ([SharePointSiteBase].[TransactionCurrencyId] = [TransactionCurrency_SharePointSite].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([SharePointSiteBase].OwnerId = XXowner.OwnerId)
