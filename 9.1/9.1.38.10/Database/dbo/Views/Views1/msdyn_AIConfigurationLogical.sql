


--
-- logical view for msdyn_AIConfigurationLogical
--
create view dbo.[msdyn_AIConfigurationLogical]
 (
    -- logical attributes
    [msdyn_CreatedFromConfigurationIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [msdyn_Model_Name],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [msdyn_TrainedModelAIConfigurationPareIdName],
    [msdyn_AIModelIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
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
    [msdyn_AIConfigurationId],
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
    [msdyn_AIConfigurationIdUnique],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [IsCustomizable],
    [msdyn_AIModelId],
    [msdyn_CustomConfiguration],
    [msdyn_DataBinding],
    [msdyn_MajorIterationNumber],
    [msdyn_MinorIterationNumber],
    [msdyn_ModelData],
    [msdyn_ModelPerformance],
    [msdyn_Name],
    [msdyn_ModelRunDataSpecification],
    [msdyn_ResourceInfo],
    [msdyn_SchedulingOptions],
    [msdyn_TrainedModelAIConfigurationPareId],
    [msdyn_Type],
    [msdyn_lasterrors],
    [msdyn_lasttrainorrundate],
    [msdyn_modelglobalexplainability],
    [msdyn_TemplateVersion],
    [msdyn_ModelProvisioningMetadata],
    [msdyn_ModelProvisioningStatus],
    [msdyn_RunConfiguration],
    [msdyn_CreatedFromConfigurationId],
    [msdyn_Model]
) with view_metadata as
select
    -- logical attributes
    [msdyn_createdfromconfiguration_msdyn_toconfiguration].[msdyn_Name],
    [lk_msdyn_aiconfiguration_modifiedby].[FullName],
    [lk_msdyn_aiconfiguration_modifiedby].[YomiFullName],
    [FileAttachment_msdyn_AIConfiguration_msdyn_Model].[FileName],
    [lk_msdyn_aiconfiguration_modifiedonbehalfby].[FullName],
    [lk_msdyn_aiconfiguration_modifiedonbehalfby].[YomiFullName],
    [msdyn_aiconfiguration_msdyn_aiconfiguration].[msdyn_Name],
    [msdyn_aimodel_msdyn_aiconfiguration].[msdyn_Name],
    [lk_msdyn_aiconfiguration_createdonbehalfby].[FullName],
    [lk_msdyn_aiconfiguration_createdonbehalfby].[YomiFullName],
    [lk_msdyn_aiconfiguration_createdby].[FullName],
    [lk_msdyn_aiconfiguration_createdby].[YomiFullName],

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
    [T1].[msdyn_AIConfigurationId],
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
    [T1].[msdyn_AIConfigurationIdUnique],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[IsCustomizable],
    [T1].[msdyn_AIModelId],
    [T1].[msdyn_CustomConfiguration],
    [T1].[msdyn_DataBinding],
    [T1].[msdyn_MajorIterationNumber],
    [T1].[msdyn_MinorIterationNumber],
    [T1].[msdyn_ModelData],
    [T1].[msdyn_ModelPerformance],
    [T1].[msdyn_Name],
    [T1].[msdyn_ModelRunDataSpecification],
    [T1].[msdyn_ResourceInfo],
    [T1].[msdyn_SchedulingOptions],
    [T1].[msdyn_TrainedModelAIConfigurationPareId],
    [T1].[msdyn_Type],
    [T1].[msdyn_lasterrors],
    [T1].[msdyn_lasttrainorrundate],
    [T1].[msdyn_modelglobalexplainability],
    [T1].[msdyn_TemplateVersion],
    [T1].[msdyn_ModelProvisioningMetadata],
    [T1].[msdyn_ModelProvisioningStatus],
    [T1].[msdyn_RunConfiguration],
    [T1].[msdyn_CreatedFromConfigurationId],
    [T1].[msdyn_Model]
from [msdyn_AIConfigurationBase] [T1]
    left join [FileAttachmentBase] [FileAttachment_msdyn_AIConfiguration_msdyn_Model] on ([T1].[msdyn_Model] = [FileAttachment_msdyn_AIConfiguration_msdyn_Model].[FileAttachmentId])
    left join [SystemUserBase] [lk_msdyn_aiconfiguration_createdby] on ([T1].[CreatedBy] = [lk_msdyn_aiconfiguration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiconfiguration_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_msdyn_aiconfiguration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiconfiguration_modifiedby] on ([T1].[ModifiedBy] = [lk_msdyn_aiconfiguration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aiconfiguration_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_msdyn_aiconfiguration_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AIConfigurationBase] [msdyn_aiconfiguration_msdyn_aiconfiguration] on ([T1].[msdyn_TrainedModelAIConfigurationPareId] = [msdyn_aiconfiguration_msdyn_aiconfiguration].[msdyn_AIConfigurationId] and [msdyn_aiconfiguration_msdyn_aiconfiguration].OverwriteTime = 0 and [msdyn_aiconfiguration_msdyn_aiconfiguration].ComponentState = 0)
    left join [msdyn_AIModelBase] [msdyn_aimodel_msdyn_aiconfiguration] on ([T1].[msdyn_AIModelId] = [msdyn_aimodel_msdyn_aiconfiguration].[msdyn_AIModelId] and [msdyn_aimodel_msdyn_aiconfiguration].OverwriteTime = 0 and [msdyn_aimodel_msdyn_aiconfiguration].ComponentState = 0)
    left join [msdyn_AIConfigurationBase] [msdyn_createdfromconfiguration_msdyn_toconfiguration] on ([T1].[msdyn_CreatedFromConfigurationId] = [msdyn_createdfromconfiguration_msdyn_toconfiguration].[msdyn_AIConfigurationId] and [msdyn_createdfromconfiguration_msdyn_toconfiguration].OverwriteTime = 0 and [msdyn_createdfromconfiguration_msdyn_toconfiguration].ComponentState = 0)
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0