


--
-- base view for SharePointDocumentLocation
--
create view dbo.[SharePointDocumentLocation]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [SharePointDocumentLocationId],
    [Name],
    [RelativeUrl],
    [ParentSiteOrLocation],
    [ParentSiteOrLocationName],
    [ParentSiteOrLocationTypeCode],
    [LocationType],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [StateCode],
    [StatusCode],
    [Description],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [SiteCollectionId],
    [VersionNumber],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [AbsoluteURL],
    [TransactionCurrencyId],
    [ExchangeRate],
    [OwningBusinessUnit],
    [ServiceType],
    [UserId]
) with view_metadata as
select
    -- logical attributes
    [lk_sharepointdocumentlocationbase_modifiedby].[YomiFullName],
    [lk_sharepointdocumentlocationbase_modifiedby].[FullName],
    [lk_sharepointdocumentlocationbase_createdby].[FullName],
    [lk_sharepointdocumentlocationbase_createdby].[YomiFullName],
    [TransactionCurrency_SharePointDocumentLocation].[CurrencyName],
    [lk_sharepointdocumentlocationbase_modifiedonbehalfby].[YomiFullName],
    [lk_sharepointdocumentlocationbase_modifiedonbehalfby].[FullName],
    [lk_sharepointdocumentlocationbase_createdonbehalfby].[FullName],
    [lk_sharepointdocumentlocationbase_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [SharePointDocumentLocationBase].OwnerId,
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
    [SharePointDocumentLocationBase].[SharePointDocumentLocationId],
    [SharePointDocumentLocationBase].[Name],
    [SharePointDocumentLocationBase].[RelativeUrl],
    [SharePointDocumentLocationBase].[ParentSiteOrLocation],
    [SharePointDocumentLocationBase].[ParentSiteOrLocationName],
    [SharePointDocumentLocationBase].[ParentSiteOrLocationTypeCode],
    [SharePointDocumentLocationBase].[LocationType],
    [SharePointDocumentLocationBase].[CreatedBy],
    [SharePointDocumentLocationBase].[CreatedOn],
    [SharePointDocumentLocationBase].[ModifiedBy],
    [SharePointDocumentLocationBase].[ModifiedOn],
    [SharePointDocumentLocationBase].[StateCode],
    [SharePointDocumentLocationBase].[StatusCode],
    [SharePointDocumentLocationBase].[Description],
    [SharePointDocumentLocationBase].[TimeZoneRuleVersionNumber],
    [SharePointDocumentLocationBase].[UTCConversionTimeZoneCode],
    [SharePointDocumentLocationBase].[OverriddenCreatedOn],
    [SharePointDocumentLocationBase].[ImportSequenceNumber],
    [SharePointDocumentLocationBase].[RegardingObjectId],
    [SharePointDocumentLocationBase].[RegardingObjectIdName],
    [SharePointDocumentLocationBase].[RegardingObjectIdYomiName],
    [SharePointDocumentLocationBase].[RegardingObjectTypeCode],
    [SharePointDocumentLocationBase].[SiteCollectionId],
    [SharePointDocumentLocationBase].[VersionNumber],
    [SharePointDocumentLocationBase].[ModifiedOnBehalfBy],
    [SharePointDocumentLocationBase].[CreatedOnBehalfBy],
    [SharePointDocumentLocationBase].[AbsoluteURL],
    [SharePointDocumentLocationBase].[TransactionCurrencyId],
    [SharePointDocumentLocationBase].[ExchangeRate],
    [SharePointDocumentLocationBase].[OwningBusinessUnit],
    [SharePointDocumentLocationBase].[ServiceType],
    [SharePointDocumentLocationBase].[UserId]
from [SharePointDocumentLocationBase] 
    left join [SystemUserBase] [lk_sharepointdocumentlocationbase_createdby] on ([SharePointDocumentLocationBase].[CreatedBy] = [lk_sharepointdocumentlocationbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdocumentlocationbase_createdonbehalfby] on ([SharePointDocumentLocationBase].[CreatedOnBehalfBy] = [lk_sharepointdocumentlocationbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdocumentlocationbase_modifiedby] on ([SharePointDocumentLocationBase].[ModifiedBy] = [lk_sharepointdocumentlocationbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdocumentlocationbase_modifiedonbehalfby] on ([SharePointDocumentLocationBase].[ModifiedOnBehalfBy] = [lk_sharepointdocumentlocationbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_SharePointDocumentLocation] on ([SharePointDocumentLocationBase].[TransactionCurrencyId] = [TransactionCurrency_SharePointDocumentLocation].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([SharePointDocumentLocationBase].OwnerId = XXowner.OwnerId)
