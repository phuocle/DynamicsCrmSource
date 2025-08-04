


--
-- base view for msdyn_playbookinstance
--
create view dbo.[msdyn_playbookinstance]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [msdyn_playbooktemplateidName],
    [msdyn_categoryidName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_playbookinstanceId],
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
    [msdyn_estimatedclose],
    [msdyn_evaluateactivityclosure],
    [msdyn_activitiesassociated],
    [msdyn_activitiesclosed],
    [Regarding],
    [msdyn_categoryid],
    [msdyn_playbooktemplateid],
    [msdyn_trackprogress],
    [RegardingObjectTypeCode],
    [RegardingIdName],
    [RegardingYomiName]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_playbookinstance_createdby].[FullName],
    [lk_msdyn_playbookinstance_createdby].[YomiFullName],
    [lk_msdyn_playbookinstance_createdonbehalfby].[FullName],
    [lk_msdyn_playbookinstance_createdonbehalfby].[YomiFullName],
    [lk_msdyn_playbookinstance_modifiedby].[FullName],
    [lk_msdyn_playbookinstance_modifiedby].[YomiFullName],
    [lk_msdyn_playbookinstance_modifiedonbehalfby].[FullName],
    [lk_msdyn_playbookinstance_modifiedonbehalfby].[YomiFullName],
    [msdyn_playbooktemplate_msdyn_playbookinstance].[msdyn_name],
    [msdyn_playbookcategory_msdyn_playbookinstance].[msdyn_name],

    -- ownership entries
    OwnerId = [msdyn_playbookinstanceBase].OwnerId,
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
    [msdyn_playbookinstanceBase].[msdyn_playbookinstanceId],
    [msdyn_playbookinstanceBase].[CreatedOn],
    [msdyn_playbookinstanceBase].[CreatedBy],
    [msdyn_playbookinstanceBase].[ModifiedOn],
    [msdyn_playbookinstanceBase].[ModifiedBy],
    [msdyn_playbookinstanceBase].[CreatedOnBehalfBy],
    [msdyn_playbookinstanceBase].[ModifiedOnBehalfBy],
    [msdyn_playbookinstanceBase].[OwningBusinessUnit],
    [msdyn_playbookinstanceBase].[statecode],
    [msdyn_playbookinstanceBase].[statuscode],
    [msdyn_playbookinstanceBase].[VersionNumber],
    [msdyn_playbookinstanceBase].[ImportSequenceNumber],
    [msdyn_playbookinstanceBase].[OverriddenCreatedOn],
    [msdyn_playbookinstanceBase].[TimeZoneRuleVersionNumber],
    [msdyn_playbookinstanceBase].[UTCConversionTimeZoneCode],
    [msdyn_playbookinstanceBase].[msdyn_name],
    [msdyn_playbookinstanceBase].[msdyn_estimatedclose],
    [msdyn_playbookinstanceBase].[msdyn_evaluateactivityclosure],
    [msdyn_playbookinstanceBase].[msdyn_activitiesassociated],
    [msdyn_playbookinstanceBase].[msdyn_activitiesclosed],
    [msdyn_playbookinstanceBase].[Regarding],
    [msdyn_playbookinstanceBase].[msdyn_categoryid],
    [msdyn_playbookinstanceBase].[msdyn_playbooktemplateid],
    [msdyn_playbookinstanceBase].[msdyn_trackprogress],
    [msdyn_playbookinstanceBase].[RegardingObjectTypeCode],
    [msdyn_playbookinstanceBase].[RegardingIdName],
    [msdyn_playbookinstanceBase].[RegardingYomiName]
from [msdyn_playbookinstanceBase] 
    left join [SystemUserBase] [lk_msdyn_playbookinstance_createdby] on ([msdyn_playbookinstanceBase].[CreatedBy] = [lk_msdyn_playbookinstance_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookinstance_createdonbehalfby] on ([msdyn_playbookinstanceBase].[CreatedOnBehalfBy] = [lk_msdyn_playbookinstance_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookinstance_modifiedby] on ([msdyn_playbookinstanceBase].[ModifiedBy] = [lk_msdyn_playbookinstance_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookinstance_modifiedonbehalfby] on ([msdyn_playbookinstanceBase].[ModifiedOnBehalfBy] = [lk_msdyn_playbookinstance_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_playbookcategoryBase] [msdyn_playbookcategory_msdyn_playbookinstance] on ([msdyn_playbookinstanceBase].[msdyn_categoryid] = [msdyn_playbookcategory_msdyn_playbookinstance].[msdyn_playbookcategoryId])
    left join [msdyn_playbooktemplateBase] [msdyn_playbooktemplate_msdyn_playbookinstance] on ([msdyn_playbookinstanceBase].[msdyn_playbooktemplateid] = [msdyn_playbooktemplate_msdyn_playbookinstance].[msdyn_playbooktemplateId])
    left join OwnerBase XXowner on ([msdyn_playbookinstanceBase].OwnerId = XXowner.OwnerId)
