


--
-- logical view for EnvironmentVariableDefinitionLogical
--
create view dbo.[EnvironmentVariableDefinitionLogical]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
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
    [EnvironmentVariableDefinitionId],
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
    [EnvironmentVariableDefinitionIdUnique],
    [SchemaName],
    [DisplayName],
    [Description],
    [Hint],
    [IsRequired],
    [Type],
    [ValueSchema],
    [DefaultValue],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [IsCustomizable],
    [ConnectionReferenceId],
    [ConnectionId],
    [DataSourceType],
    [ParentDefinitionId]
) with view_metadata as
select
    -- logical attributes
    [lk_environmentvariabledefinition_modifiedby].[FullName],
    [lk_environmentvariabledefinition_modifiedby].[YomiFullName],
    [lk_environmentvariabledefinition_createdonbehalfby].[FullName],
    [lk_environmentvariabledefinition_createdonbehalfby].[YomiFullName],
    [lk_environmentvariabledefinition_modifiedonbehalfby].[FullName],
    [lk_environmentvariabledefinition_modifiedonbehalfby].[YomiFullName],
    [lk_environmentvariabledefinition_createdby].[FullName],
    [lk_environmentvariabledefinition_createdby].[YomiFullName],

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
    [T1].[EnvironmentVariableDefinitionId],
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
    [T1].[EnvironmentVariableDefinitionIdUnique],
    [T1].[SchemaName],
    [T1].[DisplayName],
    [T1].[Description],
    [T1].[Hint],
    [T1].[IsRequired],
    [T1].[Type],
    [T1].[ValueSchema],
    [T1].[DefaultValue],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[IsCustomizable],
    [T1].[ConnectionReferenceId],
    [T1].[ConnectionId],
    [T1].[DataSourceType],
    [T1].[ParentDefinitionId]
from [EnvironmentVariableDefinitionBase] [T1]
    left join [SystemUserBase] [lk_environmentvariabledefinition_createdby] on ([T1].[CreatedBy] = [lk_environmentvariabledefinition_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_environmentvariabledefinition_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_environmentvariabledefinition_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_environmentvariabledefinition_modifiedby] on ([T1].[ModifiedBy] = [lk_environmentvariabledefinition_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_environmentvariabledefinition_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_environmentvariabledefinition_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0