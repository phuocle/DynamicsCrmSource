


--
-- base view for SharePointDocument
--
create view dbo.[SharePointDocument]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],
    [BusinessUnitIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [AbsoluteUrl],
    [AppCreatedBy],
    [AppModifiedBy],
    [Author],
    [BusinessUnitId],
    [CheckedOutTo],
    [CheckInComment],
    [ContentType],
    [ContentTypeId],
    [CopySource],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [DocumentId],
    [EditUrl],
    [Edit],
    [ExchangeRate],
    [FileSize],
    [FileType],
    [ChildFolderCount],
    [FullName],
    [IsCheckedOut],
    [IsFolder],
    [ChildItemCount],
    [Modified],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [OwningBusinessUnit],
    [ReadUrl],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [SharePointCreatedOn],
    [SharePointDocumentId],
    [LocationId],
    [SharePointModifiedBy],
    [Title],
    [TransactionCurrencyId],
    [Version],
    [RelativeLocation]
) with view_metadata as
select
    -- logical attributes
    [lk_sharepointdocumentbase_createdby].[FullName],
    [lk_sharepointdocumentbase_createdonbehalfby].[YomiFullName],
    [lk_sharepointdocumentbase_modifiedonbehalfby].[FullName],
    [lk_sharepointdocumentbase_modifiedby].[YomiFullName],
    [TransactionCurrency_SharePointDocument].[CurrencyName],
    [business_unit_sharepointdocument2].[Name],
    [lk_sharepointdocumentbase_modifiedonbehalfby].[YomiFullName],
    [lk_sharepointdocumentbase_createdby].[YomiFullName],
    [lk_sharepointdocumentbase_createdonbehalfby].[FullName],
    [organization_sharepointdocument].[Name],
    [lk_sharepointdocumentbase_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [SharePointDocumentBase].OwnerId,
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
    [SharePointDocumentBase].[AbsoluteUrl],
    [SharePointDocumentBase].[AppCreatedBy],
    [SharePointDocumentBase].[AppModifiedBy],
    [SharePointDocumentBase].[Author],
    [SharePointDocumentBase].[BusinessUnitId],
    [SharePointDocumentBase].[CheckedOutTo],
    [SharePointDocumentBase].[CheckInComment],
    [SharePointDocumentBase].[ContentType],
    [SharePointDocumentBase].[ContentTypeId],
    [SharePointDocumentBase].[CopySource],
    [SharePointDocumentBase].[CreatedBy],
    [SharePointDocumentBase].[CreatedOn],
    [SharePointDocumentBase].[CreatedOnBehalfBy],
    [SharePointDocumentBase].[DocumentId],
    [SharePointDocumentBase].[EditUrl],
    [SharePointDocumentBase].[Edit],
    [SharePointDocumentBase].[ExchangeRate],
    [SharePointDocumentBase].[FileSize],
    [SharePointDocumentBase].[FileType],
    [SharePointDocumentBase].[ChildFolderCount],
    [SharePointDocumentBase].[FullName],
    [SharePointDocumentBase].[IsCheckedOut],
    [SharePointDocumentBase].[IsFolder],
    [SharePointDocumentBase].[ChildItemCount],
    [SharePointDocumentBase].[Modified],
    [SharePointDocumentBase].[ModifiedBy],
    [SharePointDocumentBase].[ModifiedOn],
    [SharePointDocumentBase].[ModifiedOnBehalfBy],
    [SharePointDocumentBase].[OrganizationId],
    [SharePointDocumentBase].[OwningBusinessUnit],
    [SharePointDocumentBase].[ReadUrl],
    [SharePointDocumentBase].[RegardingObjectId],
    [SharePointDocumentBase].[RegardingObjectIdName],
    [SharePointDocumentBase].[RegardingObjectIdYomiName],
    [SharePointDocumentBase].[RegardingObjectTypeCode],
    [SharePointDocumentBase].[SharePointCreatedOn],
    [SharePointDocumentBase].[SharePointDocumentId],
    [SharePointDocumentBase].[LocationId],
    [SharePointDocumentBase].[SharePointModifiedBy],
    [SharePointDocumentBase].[Title],
    [SharePointDocumentBase].[TransactionCurrencyId],
    [SharePointDocumentBase].[Version],
    [SharePointDocumentBase].[RelativeLocation]
from [SharePointDocumentBase] 
    left join [BusinessUnitBase] [business_unit_sharepointdocument2] on ([SharePointDocumentBase].[BusinessUnitId] = [business_unit_sharepointdocument2].[BusinessUnitId])
    left join [SystemUserBase] [lk_sharepointdocumentbase_createdby] with(nolock) on ([SharePointDocumentBase].[CreatedBy] = [lk_sharepointdocumentbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdocumentbase_createdonbehalfby] with(nolock) on ([SharePointDocumentBase].[CreatedOnBehalfBy] = [lk_sharepointdocumentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdocumentbase_modifiedby] with(nolock) on ([SharePointDocumentBase].[ModifiedBy] = [lk_sharepointdocumentbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdocumentbase_modifiedonbehalfby] with(nolock) on ([SharePointDocumentBase].[ModifiedOnBehalfBy] = [lk_sharepointdocumentbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_sharepointdocument] with(nolock) on ([SharePointDocumentBase].[OrganizationId] = [organization_sharepointdocument].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_SharePointDocument] on ([SharePointDocumentBase].[TransactionCurrencyId] = [TransactionCurrency_SharePointDocument].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([SharePointDocumentBase].OwnerId = XXowner.OwnerId)
