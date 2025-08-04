


--
-- logical view for msdyn_AITemplateLogical
--
create view dbo.[msdyn_AITemplateLogical]
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

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AITemplateId],
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
    [msdyn_AITemplateIdUnique],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [IsCustomizable],
    [msdyn_ResourceInfo],
    [msdyn_RunConfigSchema],
    [msdyn_IsTrainable],
    [msdyn_TrainingDataSpecification],
    [msdyn_RunDataSpecification],
    [msdyn_TrainingConfigSchema],
    [msdyn_UniqueName],
    [msdyn_defaultrunschedulingoptions],
    [msdyn_TemplateVersion],
    [msdyn_DataBinding],
    [msdyn_UXConfiguration]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_aitemplate_createdby].[FullName],
    [lk_msdyn_aitemplate_createdby].[YomiFullName],
    [lk_msdyn_aitemplate_createdonbehalfby].[FullName],
    [lk_msdyn_aitemplate_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aitemplate_modifiedby].[FullName],
    [lk_msdyn_aitemplate_modifiedby].[YomiFullName],
    [lk_msdyn_aitemplate_modifiedonbehalfby].[FullName],
    [lk_msdyn_aitemplate_modifiedonbehalfby].[YomiFullName],

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
    [T1].[msdyn_AITemplateId],
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
    [T1].[msdyn_AITemplateIdUnique],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[IsCustomizable],
    [T1].[msdyn_ResourceInfo],
    [T1].[msdyn_RunConfigSchema],
    [T1].[msdyn_IsTrainable],
    [T1].[msdyn_TrainingDataSpecification],
    [T1].[msdyn_RunDataSpecification],
    [T1].[msdyn_TrainingConfigSchema],
    [T1].[msdyn_UniqueName],
    [T1].[msdyn_defaultrunschedulingoptions],
    [T1].[msdyn_TemplateVersion],
    [T1].[msdyn_DataBinding],
    [T1].[msdyn_UXConfiguration]
from [msdyn_AITemplateBase] [T1]
    left join [SystemUserBase] [lk_msdyn_aitemplate_createdby] on ([T1].[CreatedBy] = [lk_msdyn_aitemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aitemplate_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_msdyn_aitemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aitemplate_modifiedby] on ([T1].[ModifiedBy] = [lk_msdyn_aitemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aitemplate_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_msdyn_aitemplate_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0