


--
-- base view for msdyn_playbooktemplate
--
create view dbo.[msdyn_playbooktemplate]
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
    [msdyn_playbooktemplateId],
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
    [msdyn_categoryid],
    [msdyn_fullentitylist],
    [msdyn_relatedentitylist],
    [msdyn_Description],
    [msdyn_EstimatedDuration],
    [msdyn_trackprogress]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_playbooktemplate_createdby].[FullName],
    [lk_msdyn_playbooktemplate_createdby].[YomiFullName],
    [lk_msdyn_playbooktemplate_createdonbehalfby].[FullName],
    [lk_msdyn_playbooktemplate_createdonbehalfby].[YomiFullName],
    [lk_msdyn_playbooktemplate_modifiedby].[FullName],
    [lk_msdyn_playbooktemplate_modifiedby].[YomiFullName],
    [lk_msdyn_playbooktemplate_modifiedonbehalfby].[FullName],
    [lk_msdyn_playbooktemplate_modifiedonbehalfby].[YomiFullName],
    [category_playbooktemplate].[msdyn_name],

    -- ownership entries
    OwnerId = [msdyn_playbooktemplateBase].OwnerId,
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
    [msdyn_playbooktemplateBase].[msdyn_playbooktemplateId],
    [msdyn_playbooktemplateBase].[CreatedOn],
    [msdyn_playbooktemplateBase].[CreatedBy],
    [msdyn_playbooktemplateBase].[ModifiedOn],
    [msdyn_playbooktemplateBase].[ModifiedBy],
    [msdyn_playbooktemplateBase].[CreatedOnBehalfBy],
    [msdyn_playbooktemplateBase].[ModifiedOnBehalfBy],
    [msdyn_playbooktemplateBase].[OwningBusinessUnit],
    [msdyn_playbooktemplateBase].[statecode],
    [msdyn_playbooktemplateBase].[statuscode],
    [msdyn_playbooktemplateBase].[VersionNumber],
    [msdyn_playbooktemplateBase].[ImportSequenceNumber],
    [msdyn_playbooktemplateBase].[OverriddenCreatedOn],
    [msdyn_playbooktemplateBase].[TimeZoneRuleVersionNumber],
    [msdyn_playbooktemplateBase].[UTCConversionTimeZoneCode],
    [msdyn_playbooktemplateBase].[msdyn_name],
    [msdyn_playbooktemplateBase].[msdyn_categoryid],
    [msdyn_playbooktemplateBase].[msdyn_fullentitylist],
    [msdyn_playbooktemplateBase].[msdyn_relatedentitylist],
    [msdyn_playbooktemplateBase].[msdyn_Description],
    [msdyn_playbooktemplateBase].[msdyn_EstimatedDuration],
    [msdyn_playbooktemplateBase].[msdyn_trackprogress]
from [msdyn_playbooktemplateBase] 
    left join [msdyn_playbookcategoryBase] [category_playbooktemplate] on ([msdyn_playbooktemplateBase].[msdyn_categoryid] = [category_playbooktemplate].[msdyn_playbookcategoryId])
    left join [SystemUserBase] [lk_msdyn_playbooktemplate_createdby] on ([msdyn_playbooktemplateBase].[CreatedBy] = [lk_msdyn_playbooktemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbooktemplate_createdonbehalfby] on ([msdyn_playbooktemplateBase].[CreatedOnBehalfBy] = [lk_msdyn_playbooktemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbooktemplate_modifiedby] on ([msdyn_playbooktemplateBase].[ModifiedBy] = [lk_msdyn_playbooktemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbooktemplate_modifiedonbehalfby] on ([msdyn_playbooktemplateBase].[ModifiedOnBehalfBy] = [lk_msdyn_playbooktemplate_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_playbooktemplateBase].OwnerId = XXowner.OwnerId)
