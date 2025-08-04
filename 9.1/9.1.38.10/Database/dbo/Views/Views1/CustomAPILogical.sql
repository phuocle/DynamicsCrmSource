


--
-- logical view for CustomAPILogical
--
create view dbo.[CustomAPILogical]
 (
    -- logical attributes
    [SdkMessageIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [PluginTypeIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CustomAPIId],
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
    [Name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [AllowedCustomProcessingStepType],
    [BindingType],
    [BoundEntityLogicalName],
    [Description],
    [DisplayName],
    [ExecutePrivilegeName],
    [IsFunction],
    [IsPrivate],
    [PluginTypeId],
    [UniqueName],
    [SdkMessageId]
) with view_metadata as
select
    -- logical attributes
    [sdkmessage_customapi].[Name],
    [lk_customapi_createdby].[FullName],
    [lk_customapi_createdby].[YomiFullName],
    [lk_customapi_createdonbehalfby].[FullName],
    [lk_customapi_createdonbehalfby].[YomiFullName],
    [lk_customapi_modifiedby].[FullName],
    [lk_customapi_modifiedby].[YomiFullName],
    [lk_customapi_modifiedonbehalfby].[FullName],
    [lk_customapi_modifiedonbehalfby].[YomiFullName],
    [plugintype_customapi].[Name],

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
    [T1].[CustomAPIId],
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
    [T1].[Name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[AllowedCustomProcessingStepType],
    [T1].[BindingType],
    [T1].[BoundEntityLogicalName],
    [T1].[Description],
    [T1].[DisplayName],
    [T1].[ExecutePrivilegeName],
    [T1].[IsFunction],
    [T1].[IsPrivate],
    [T1].[PluginTypeId],
    [T1].[UniqueName],
    [T1].[SdkMessageId]
from [CustomAPIBase] [T1]
    left join [SystemUserBase] [lk_customapi_createdby] on ([T1].[CreatedBy] = [lk_customapi_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customapi_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_customapi_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customapi_modifiedby] on ([T1].[ModifiedBy] = [lk_customapi_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customapi_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_customapi_modifiedonbehalfby].[SystemUserId])
    left join [PluginTypeBase] [plugintype_customapi] on ([T1].[PluginTypeId] = [plugintype_customapi].[PluginTypeId] and [plugintype_customapi].OverwriteTime = 0 and [plugintype_customapi].ComponentState = 0)
    left join [SdkMessageBase] [sdkmessage_customapi] on ([T1].[SdkMessageId] = [sdkmessage_customapi].[SdkMessageId] and [sdkmessage_customapi].OverwriteTime = 0 and [sdkmessage_customapi].ComponentState = 0)
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0