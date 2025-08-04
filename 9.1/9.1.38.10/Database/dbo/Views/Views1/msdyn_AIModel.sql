


--
-- base view for msdyn_AIModel
--
create view dbo.[msdyn_AIModel]
 (
    -- logical attributes
    [msdyn_retrainworkflowidName],
    [msdyn_scheduleinferenceworkflowidName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [msdyn_TemplateIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_AIModelId],
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
    [msdyn_AIModelIdUnique],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [IsCustomizable],
    [msdyn_Name],
    [msdyn_TemplateId],
    [msdyn_ActiveRunConfigurationId],
    [msdyn_ShareWithOrganizationOnCreate],
    [msdyn_ModelCreationContext],
    [msdyn_RetrainWorkflowId],
    [msdyn_ScheduleInferenceWorkflowId]
) with view_metadata as
select
    -- logical attributes
    [msdyn_retrainworkflow_msdyn_toaimodel].[Name],
    [msdyn_scheduleinferenceworkflow_msdyn_toaimodel].[Name],
    [lk_msdyn_aimodel_createdby].[FullName],
    [lk_msdyn_aimodel_createdby].[YomiFullName],
    [lk_msdyn_aimodel_modifiedby].[FullName],
    [lk_msdyn_aimodel_modifiedby].[YomiFullName],
    [lk_msdyn_aimodel_modifiedonbehalfby].[FullName],
    [lk_msdyn_aimodel_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_aimodel_createdonbehalfby].[FullName],
    [lk_msdyn_aimodel_createdonbehalfby].[YomiFullName],
    [msdyn_aitemplate_msdyn_aimodel].[msdyn_UniqueName],

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
    [T1].[msdyn_AIModelId],
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
    [T1].[msdyn_AIModelIdUnique],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[IsCustomizable],
    [T1].[msdyn_Name],
    [T1].[msdyn_TemplateId],
    [T1].[msdyn_ActiveRunConfigurationId],
    [T1].[msdyn_ShareWithOrganizationOnCreate],
    [T1].[msdyn_ModelCreationContext],
    [T1].[msdyn_RetrainWorkflowId],
    [T1].[msdyn_ScheduleInferenceWorkflowId]
from [msdyn_AIModelBase] [T1]
    left join [SystemUserBase] [lk_msdyn_aimodel_createdby] on ([T1].[CreatedBy] = [lk_msdyn_aimodel_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aimodel_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_msdyn_aimodel_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aimodel_modifiedby] on ([T1].[ModifiedBy] = [lk_msdyn_aimodel_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_aimodel_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_msdyn_aimodel_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_AITemplateBase] [msdyn_aitemplate_msdyn_aimodel] on ([T1].[msdyn_TemplateId] = [msdyn_aitemplate_msdyn_aimodel].[msdyn_AITemplateId] and [msdyn_aitemplate_msdyn_aimodel].OverwriteTime = 0 and [msdyn_aitemplate_msdyn_aimodel].ComponentState = 0)
    left join [WorkflowBase] [msdyn_retrainworkflow_msdyn_toaimodel] on ([T1].[msdyn_RetrainWorkflowId] = [msdyn_retrainworkflow_msdyn_toaimodel].[WorkflowId] and [msdyn_retrainworkflow_msdyn_toaimodel].OverwriteTime = 0 and [msdyn_retrainworkflow_msdyn_toaimodel].ComponentState = 0)
    left join [WorkflowBase] [msdyn_scheduleinferenceworkflow_msdyn_toaimodel] on ([T1].[msdyn_ScheduleInferenceWorkflowId] = [msdyn_scheduleinferenceworkflow_msdyn_toaimodel].[WorkflowId] and [msdyn_scheduleinferenceworkflow_msdyn_toaimodel].OverwriteTime = 0 and [msdyn_scheduleinferenceworkflow_msdyn_toaimodel].ComponentState = 0)
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0