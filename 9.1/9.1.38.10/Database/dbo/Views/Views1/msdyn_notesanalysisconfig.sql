


--
-- base view for msdyn_notesanalysisconfig
--
create view dbo.[msdyn_notesanalysisconfig]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_notesanalysisconfigId],
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
    [msdyn_name],
    [msdyn_isadminsettingenabled],
    [msdyn_aretermsaccepted],
    [msdyn_throttlelimit]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_notesanalysisconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_notesanalysisconfig_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_notesanalysisconfig_createdonbehalfby].[FullName],
    [lk_msdyn_notesanalysisconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_notesanalysisconfig_createdby].[FullName],
    [lk_msdyn_notesanalysisconfig_createdby].[YomiFullName],
    [lk_msdyn_notesanalysisconfig_modifiedby].[FullName],
    [lk_msdyn_notesanalysisconfig_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_notesanalysisconfigBase].OwnerId,
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
    [msdyn_notesanalysisconfigBase].[msdyn_notesanalysisconfigId],
    [msdyn_notesanalysisconfigBase].[CreatedOn],
    [msdyn_notesanalysisconfigBase].[CreatedBy],
    [msdyn_notesanalysisconfigBase].[ModifiedOn],
    [msdyn_notesanalysisconfigBase].[ModifiedBy],
    [msdyn_notesanalysisconfigBase].[CreatedOnBehalfBy],
    [msdyn_notesanalysisconfigBase].[ModifiedOnBehalfBy],
    [msdyn_notesanalysisconfigBase].[OwningBusinessUnit],
    [msdyn_notesanalysisconfigBase].[statecode],
    [msdyn_notesanalysisconfigBase].[statuscode],
    [msdyn_notesanalysisconfigBase].[VersionNumber],
    [msdyn_notesanalysisconfigBase].[ImportSequenceNumber],
    [msdyn_notesanalysisconfigBase].[OverriddenCreatedOn],
    [msdyn_notesanalysisconfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_notesanalysisconfigBase].[UTCConversionTimeZoneCode],
    [msdyn_notesanalysisconfigBase].[msdyn_name],
    [msdyn_notesanalysisconfigBase].[msdyn_isadminsettingenabled],
    [msdyn_notesanalysisconfigBase].[msdyn_aretermsaccepted],
    [msdyn_notesanalysisconfigBase].[msdyn_throttlelimit]
from [msdyn_notesanalysisconfigBase] 
    left join [SystemUserBase] [lk_msdyn_notesanalysisconfig_createdby] on ([msdyn_notesanalysisconfigBase].[CreatedBy] = [lk_msdyn_notesanalysisconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_notesanalysisconfig_createdonbehalfby] on ([msdyn_notesanalysisconfigBase].[CreatedOnBehalfBy] = [lk_msdyn_notesanalysisconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_notesanalysisconfig_modifiedby] on ([msdyn_notesanalysisconfigBase].[ModifiedBy] = [lk_msdyn_notesanalysisconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_notesanalysisconfig_modifiedonbehalfby] on ([msdyn_notesanalysisconfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_notesanalysisconfig_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_notesanalysisconfigBase].OwnerId = XXowner.OwnerId)
