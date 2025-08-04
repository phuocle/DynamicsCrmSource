


--
-- base view for msdyn_playbookactivityattribute
--
create view dbo.[msdyn_playbookactivityattribute]
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
    [msdyn_playbookactivityidName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_playbookactivityattributeId],
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
    [msdyn_attributeLogicalName],
    [msdyn_playbookactivityid],
    [msdyn_attributeType],
    [msdyn_attributeValue]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_playbookactivityattribute_createdby].[FullName],
    [lk_msdyn_playbookactivityattribute_createdby].[YomiFullName],
    [lk_msdyn_playbookactivityattribute_createdonbehalfby].[FullName],
    [lk_msdyn_playbookactivityattribute_createdonbehalfby].[YomiFullName],
    [lk_msdyn_playbookactivityattribute_modifiedby].[FullName],
    [lk_msdyn_playbookactivityattribute_modifiedby].[YomiFullName],
    [lk_msdyn_playbookactivityattribute_modifiedonbehalfby].[FullName],
    [lk_msdyn_playbookactivityattribute_modifiedonbehalfby].[YomiFullName],
    [msdyn_playbookactivity_msdyn_playbookactivityattribute].[msdyn_subject],

    -- ownership entries
    OwnerId = [msdyn_playbookactivityattributeBase].OwnerId,
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
    [msdyn_playbookactivityattributeBase].[msdyn_playbookactivityattributeId],
    [msdyn_playbookactivityattributeBase].[CreatedOn],
    [msdyn_playbookactivityattributeBase].[CreatedBy],
    [msdyn_playbookactivityattributeBase].[ModifiedOn],
    [msdyn_playbookactivityattributeBase].[ModifiedBy],
    [msdyn_playbookactivityattributeBase].[CreatedOnBehalfBy],
    [msdyn_playbookactivityattributeBase].[ModifiedOnBehalfBy],
    [msdyn_playbookactivityattributeBase].[OwningBusinessUnit],
    [msdyn_playbookactivityattributeBase].[statecode],
    [msdyn_playbookactivityattributeBase].[statuscode],
    [msdyn_playbookactivityattributeBase].[VersionNumber],
    [msdyn_playbookactivityattributeBase].[ImportSequenceNumber],
    [msdyn_playbookactivityattributeBase].[OverriddenCreatedOn],
    [msdyn_playbookactivityattributeBase].[TimeZoneRuleVersionNumber],
    [msdyn_playbookactivityattributeBase].[UTCConversionTimeZoneCode],
    [msdyn_playbookactivityattributeBase].[msdyn_attributeLogicalName],
    [msdyn_playbookactivityattributeBase].[msdyn_playbookactivityid],
    [msdyn_playbookactivityattributeBase].[msdyn_attributeType],
    [msdyn_playbookactivityattributeBase].[msdyn_attributeValue]
from [msdyn_playbookactivityattributeBase] 
    left join [SystemUserBase] [lk_msdyn_playbookactivityattribute_createdby] on ([msdyn_playbookactivityattributeBase].[CreatedBy] = [lk_msdyn_playbookactivityattribute_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookactivityattribute_createdonbehalfby] on ([msdyn_playbookactivityattributeBase].[CreatedOnBehalfBy] = [lk_msdyn_playbookactivityattribute_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookactivityattribute_modifiedby] on ([msdyn_playbookactivityattributeBase].[ModifiedBy] = [lk_msdyn_playbookactivityattribute_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_playbookactivityattribute_modifiedonbehalfby] on ([msdyn_playbookactivityattributeBase].[ModifiedOnBehalfBy] = [lk_msdyn_playbookactivityattribute_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_playbookactivityBase] [msdyn_playbookactivity_msdyn_playbookactivityattribute] on ([msdyn_playbookactivityattributeBase].[msdyn_playbookactivityid] = [msdyn_playbookactivity_msdyn_playbookactivityattribute].[msdyn_playbookactivityId])
    left join OwnerBase XXowner on ([msdyn_playbookactivityattributeBase].OwnerId = XXowner.OwnerId)
