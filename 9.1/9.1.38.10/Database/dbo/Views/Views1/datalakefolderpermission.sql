


--
-- base view for datalakefolderpermission
--
create view dbo.[datalakefolderpermission]
 (
    -- logical attributes
    [folderidName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [datalakefolderpermissionId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [appid],
    [canexecute],
    [canread],
    [canwrite],
    [datalakefolderpermission_UniqueName],
    [folderid]
) with view_metadata as
select
    -- logical attributes
    [datalakefolder_datalakefolderpermission].[name],
    [lk_datalakefolderpermission_createdonbehalfby].[FullName],
    [lk_datalakefolderpermission_createdonbehalfby].[YomiFullName],
    [lk_datalakefolderpermission_modifiedonbehalfby].[FullName],
    [lk_datalakefolderpermission_modifiedonbehalfby].[YomiFullName],
    [lk_datalakefolderpermission_modifiedby].[FullName],
    [lk_datalakefolderpermission_modifiedby].[YomiFullName],
    [lk_datalakefolderpermission_createdby].[FullName],
    [lk_datalakefolderpermission_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
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
    [T1].[datalakefolderpermissionId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OwningBusinessUnit],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[appid],
    [T1].[canexecute],
    [T1].[canread],
    [T1].[canwrite],
    [T1].[datalakefolderpermission_UniqueName],
    [T1].[folderid]
from [datalakefolderpermissionBase] [T1]
    left join [datalakefolderBase] [datalakefolder_datalakefolderpermission] on ([T1].[folderid] = [datalakefolder_datalakefolderpermission].[datalakefolderId] and [datalakefolder_datalakefolderpermission].OverwriteTime = 0 and [datalakefolder_datalakefolderpermission].ComponentState = 0)
    left join [SystemUserBase] [lk_datalakefolderpermission_createdby] on ([T1].[CreatedBy] = [lk_datalakefolderpermission_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakefolderpermission_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_datalakefolderpermission_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakefolderpermission_modifiedby] on ([T1].[ModifiedBy] = [lk_datalakefolderpermission_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakefolderpermission_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_datalakefolderpermission_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0