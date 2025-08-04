


--
-- base view for UserQuery
--
create view dbo.[UserQuery]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [QueryType],
    [ModifiedOn],
    [ModifiedBy],
    [StatusCode],
    [VersionNumber],
    [FetchXml],
    [Description],
    [ColumnSetXml],
    [StateCode],
    [UserQueryId],
    [Name],
    [CreatedBy],
    [ReturnedTypeCode],
    [OwningBusinessUnit],
    [LayoutXml],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [AdvancedGroupBy],
    [ConditionalFormatting],
    [ParentQueryId],
    [OfflineSqlQuery],
    [LayoutJson]
) with view_metadata as
select
    -- logical attributes
    [lk_userquery_modifiedby].[FullName],
    [lk_userquery_modifiedby].[YomiFullName],
    [lk_userquery_createdby].[YomiFullName],
    [lk_userquery_createdby].[FullName],
    [lk_userquery_createdonbehalfby].[YomiFullName],
    [lk_userquery_createdonbehalfby].[FullName],
    [lk_userquery_modifiedonbehalfby].[YomiFullName],
    [lk_userquery_modifiedonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [UserQueryBase].OwnerId,
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
    [UserQueryBase].[QueryType],
    [UserQueryBase].[ModifiedOn],
    [UserQueryBase].[ModifiedBy],
    [UserQueryBase].[StatusCode],
    [UserQueryBase].[VersionNumber],
    [UserQueryBase].[FetchXml],
    [UserQueryBase].[Description],
    [UserQueryBase].[ColumnSetXml],
    [UserQueryBase].[StateCode],
    [UserQueryBase].[UserQueryId],
    [UserQueryBase].[Name],
    [UserQueryBase].[CreatedBy],
    [UserQueryBase].[ReturnedTypeCode],
    [UserQueryBase].[OwningBusinessUnit],
    [UserQueryBase].[LayoutXml],
    [UserQueryBase].[CreatedOn],
    [UserQueryBase].[CreatedOnBehalfBy],
    [UserQueryBase].[ModifiedOnBehalfBy],
    [UserQueryBase].[AdvancedGroupBy],
    [UserQueryBase].[ConditionalFormatting],
    [UserQueryBase].[ParentQueryId],
    [UserQueryBase].[OfflineSqlQuery],
    [UserQueryBase].[LayoutJson]
from [UserQueryBase] 
    left join [SystemUserBase] [lk_userquery_createdby]  on ([UserQueryBase].[CreatedBy] = [lk_userquery_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_userquery_createdonbehalfby]  on ([UserQueryBase].[CreatedOnBehalfBy] = [lk_userquery_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_userquery_modifiedby]  on ([UserQueryBase].[ModifiedBy] = [lk_userquery_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_userquery_modifiedonbehalfby]  on ([UserQueryBase].[ModifiedOnBehalfBy] = [lk_userquery_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner  on ([UserQueryBase].OwnerId = XXowner.OwnerId)
