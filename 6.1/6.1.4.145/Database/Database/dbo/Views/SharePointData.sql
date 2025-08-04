


--
-- base view for SharePointData
--
create view dbo.[SharePointData]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [OrganizationIdName],
    [UserName],
    [LocationName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [UserYomiName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Data],
    [IsValid],
    [Location],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [NextPageToken],
    [OrganizationId],
    [OverwriteTime],
    [PreviousPageToken],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [SharePointDataId],
    [UserId]
) with view_metadata as
select
    -- logical attributes
    [lk_SharePointData_modifiedonbehalfby].[YomiFullName],
    [lk_SharePointData_createdby].[YomiFullName],
    [lk_SharePointData_createdby].[FullName],
    [organization_sharepointdata].[Name],
    [lk_sharepointdata_user].[FullName],
    [sharepointdata_sharepointdocumentlocation].[Name],
    [lk_SharePointData_modifiedby].[FullName],
    [lk_SharePointData_createdonbehalfby].[FullName],
    [lk_SharePointData_modifiedby].[YomiFullName],
    [lk_SharePointData_modifiedonbehalfby].[FullName],
    [lk_SharePointData_createdonbehalfby].[YomiFullName],
    [lk_sharepointdata_user].[YomiFullName],

    -- physical attribute
    [SharePointDataBase].[CreatedBy],
    [SharePointDataBase].[CreatedOn],
    [SharePointDataBase].[CreatedOnBehalfBy],
    [SharePointDataBase].[Data],
    [SharePointDataBase].[IsValid],
    [SharePointDataBase].[Location],
    [SharePointDataBase].[ModifiedBy],
    [SharePointDataBase].[ModifiedOn],
    [SharePointDataBase].[ModifiedOnBehalfBy],
    [SharePointDataBase].[NextPageToken],
    [SharePointDataBase].[OrganizationId],
    [SharePointDataBase].[OverwriteTime],
    [SharePointDataBase].[PreviousPageToken],
    [SharePointDataBase].[RegardingObjectId],
    [SharePointDataBase].[RegardingObjectTypeCode],
    [SharePointDataBase].[SharePointDataId],
    [SharePointDataBase].[UserId]
from [SharePointDataBase] 
    left join [SystemUserBase] [lk_SharePointData_createdby] with(nolock) on ([SharePointDataBase].[CreatedBy] = [lk_SharePointData_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_SharePointData_createdonbehalfby] with(nolock) on ([SharePointDataBase].[CreatedOnBehalfBy] = [lk_SharePointData_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_SharePointData_modifiedby] with(nolock) on ([SharePointDataBase].[ModifiedBy] = [lk_SharePointData_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_SharePointData_modifiedonbehalfby] with(nolock) on ([SharePointDataBase].[ModifiedOnBehalfBy] = [lk_SharePointData_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_sharepointdata_user] with(nolock) on ([SharePointDataBase].[UserId] = [lk_sharepointdata_user].[SystemUserId])
    left join [OrganizationBase] [organization_sharepointdata] with(nolock) on ([SharePointDataBase].[OrganizationId] = [organization_sharepointdata].[OrganizationId])
    left join [SharePointDocumentLocationBase] [sharepointdata_sharepointdocumentlocation] on ([SharePointDataBase].[Location] = [sharepointdata_sharepointdocumentlocation].[SharePointDocumentLocationId])
