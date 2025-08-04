


--
-- base view for msdyn_playbookactivity
--
create view dbo.[msdyn_playbookactivity]
 (
    -- logical attributes
    [msdyn_playbooktemplateidName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_playbookactivityId],
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
    [msdyn_subject],
    [msdyn_activityLogicalName],
    [msdyn_playbooktemplateid],
    [msdyn_activityType],
    [msdyn_playbookactivity_json]
) with view_metadata as
select
    -- logical attributes
    [msdyn_playbooktemplate_msdyn_playbookactivity].[msdyn_name],
    [lk_msdyn_playbookactivity_createdby].[FullName],
    [lk_msdyn_playbookactivity_createdby].[YomiFullName],
    [lk_msdyn_playbookactivity_createdonbehalfby].[FullName],
    [lk_msdyn_playbookactivity_createdonbehalfby].[YomiFullName],
    [lk_msdyn_playbookactivity_modifiedby].[FullName],
    [lk_msdyn_playbookactivity_modifiedby].[YomiFullName],
    [lk_msdyn_playbookactivity_modifiedonbehalfby].[FullName],
    [lk_msdyn_playbookactivity_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_playbookactivityBase].OwnerId,
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
    [msdyn_playbookactivityBase].[msdyn_playbookactivityId],
    [msdyn_playbookactivityBase].[CreatedOn],
    [msdyn_playbookactivityBase].[CreatedBy],
    [msdyn_playbookactivityBase].[ModifiedOn],
    [msdyn_playbookactivityBase].[ModifiedBy],
    [msdyn_playbookactivityBase].[CreatedOnBehalfBy],
    [msdyn_playbookactivityBase].[ModifiedOnBehalfBy],
    [msdyn_playbookactivityBase].[OwningBusinessUnit],
    [msdyn_playbookactivityBase].[statecode],
    [msdyn_playbookactivityBase].[statuscode],
    [msdyn_playbookactivityBase].[VersionNumber],
    [msdyn_playbookactivityBase].[ImportSequenceNumber],
    [msdyn_playbookactivityBase].[OverriddenCreatedOn],
    [msdyn_playbookactivityBase].[TimeZoneRuleVersionNumber],
    [msdyn_playbookactivityBase].[UTCConversionTimeZoneCode],
    [msdyn_playbookactivityBase].[msdyn_subject],
    [msdyn_playbookactivityBase].[msdyn_activityLogicalName],
    [msdyn_playbookactivityBase].[msdyn_playbooktemplateid],
    [msdyn_playbookactivityBase].[msdyn_activityType],
    [msdyn_playbookactivityBase].[msdyn_playbookactivity_json]
from [msdyn_playbookactivityBase] 
    left join [SystemUserBase] [lk_msdyn_playbookactivity_createdby] on ([msdyn_playbookactivityBase].[CreatedBy] = [lk_msdyn_playbookactivity_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookactivity_createdonbehalfby] on ([msdyn_playbookactivityBase].[CreatedOnBehalfBy] = [lk_msdyn_playbookactivity_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookactivity_modifiedby] on ([msdyn_playbookactivityBase].[ModifiedBy] = [lk_msdyn_playbookactivity_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookactivity_modifiedonbehalfby] on ([msdyn_playbookactivityBase].[ModifiedOnBehalfBy] = [lk_msdyn_playbookactivity_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_playbooktemplateBase] [msdyn_playbooktemplate_msdyn_playbookactivity] on ([msdyn_playbookactivityBase].[msdyn_playbooktemplateid] = [msdyn_playbooktemplate_msdyn_playbookactivity].[msdyn_playbooktemplateId])
    left join OwnerBase XXowner on ([msdyn_playbookactivityBase].OwnerId = XXowner.OwnerId)
