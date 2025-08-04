


--
-- logical view for datalakefolderLogical
--
create view dbo.[datalakefolderLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [datalakefolderId],
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
    [containerendpoint],
    [datalakefolder_UniqueName],
    [extendedproperties],
    [path],
    [iscustomercapacity],
    [isprivate],
    [isdeepcopyenabled],
    [owningappid]
) with view_metadata as
select
    -- logical attributes
    [lk_datalakefolder_modifiedonbehalfby].[FullName],
    [lk_datalakefolder_modifiedonbehalfby].[YomiFullName],
    [lk_datalakefolder_modifiedby].[FullName],
    [lk_datalakefolder_modifiedby].[YomiFullName],
    [lk_datalakefolder_createdby].[FullName],
    [lk_datalakefolder_createdby].[YomiFullName],
    [lk_datalakefolder_createdonbehalfby].[FullName],
    [lk_datalakefolder_createdonbehalfby].[YomiFullName],

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
    [T1].[datalakefolderId],
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
    [T1].[containerendpoint],
    [T1].[datalakefolder_UniqueName],
    [T1].[extendedproperties],
    [T1].[path],
    [T1].[iscustomercapacity],
    [T1].[isprivate],
    [T1].[isdeepcopyenabled],
    [T1].[owningappid]
from [datalakefolderBase] [T1]
    left join [SystemUserBase] [lk_datalakefolder_createdby] on ([T1].[CreatedBy] = [lk_datalakefolder_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakefolder_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_datalakefolder_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakefolder_modifiedby] on ([T1].[ModifiedBy] = [lk_datalakefolder_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_datalakefolder_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_datalakefolder_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0