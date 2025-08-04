


--
-- logical view for EnvironmentVariableValueLogical
--
create view dbo.[EnvironmentVariableValueLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [EnvironmentVariableDefinitionIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [EnvironmentVariableValueId],
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
    [EnvironmentVariableValueIdUnique],
    [SchemaName],
    [Value],
    [EnvironmentVariableDefinitionId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [IsCustomizable]
) with view_metadata as
select
    -- logical attributes
    [lk_environmentvariablevalue_createdonbehalfby].[FullName],
    [lk_environmentvariablevalue_createdonbehalfby].[YomiFullName],
    [lk_environmentvariablevalue_createdby].[FullName],
    [lk_environmentvariablevalue_createdby].[YomiFullName],
    [lk_environmentvariablevalue_modifiedonbehalfby].[FullName],
    [lk_environmentvariablevalue_modifiedonbehalfby].[YomiFullName],
    [lk_environmentvariablevalue_modifiedby].[FullName],
    [lk_environmentvariablevalue_modifiedby].[YomiFullName],
    [environmentvariabledefinition_environmentvariablevalue].[SchemaName],

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
    [T1].[EnvironmentVariableValueId],
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
    [T1].[EnvironmentVariableValueIdUnique],
    [T1].[SchemaName],
    [T1].[Value],
    [T1].[EnvironmentVariableDefinitionId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[IsCustomizable]
from [EnvironmentVariableValueBase] [T1]
    left join [EnvironmentVariableDefinitionBase] [environmentvariabledefinition_environmentvariablevalue] on ([T1].[EnvironmentVariableDefinitionId] = [environmentvariabledefinition_environmentvariablevalue].[EnvironmentVariableDefinitionId] and [environmentvariabledefinition_environmentvariablevalue].OverwriteTime = 0 and [environmentvariabledefinition_environmentvariablevalue].ComponentState = 0)
    left join [SystemUserBase] [lk_environmentvariablevalue_createdby] on ([T1].[CreatedBy] = [lk_environmentvariablevalue_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_environmentvariablevalue_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_environmentvariablevalue_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_environmentvariablevalue_modifiedby] on ([T1].[ModifiedBy] = [lk_environmentvariablevalue_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_environmentvariablevalue_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_environmentvariablevalue_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0