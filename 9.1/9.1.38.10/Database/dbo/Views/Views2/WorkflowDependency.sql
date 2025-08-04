


--
-- base view for WorkflowDependency
--
create view dbo.[WorkflowDependency]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningUser],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedByName],
    [OwningBusinessUnit],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [ParameterName],
    [RelatedEntityName],
    [RelatedAttributeName],
    [WorkflowId],
    [SdkMessageId],
    [ModifiedBy],
    [ModifiedOn],
    [Type],
    [EntityAttributes],
    [CustomEntityName],
    [DependentEntityName],
    [DependentAttributeName],
    [WorkflowDependencyId],
    [CreatedBy],
    [CreatedOn],
    [ParameterType],
    [VersionNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [workflow_dependencies].[OwnerId],
    [workflow_dependencies].[OwnerIdType],
    case when [workflow_dependencies].OwnerIdType = 8
    then [workflow_dependencies].OwnerId
    else null
    end,
    [workflow_dependency_modifiedonbehalfby].[FullName],
    [workflow_dependency_modifiedby].[FullName],
    [workflow_dependency_createdby].[FullName],
    [workflow_dependencies].[OwningBusinessUnit],
    [workflow_dependency_createdonbehalfby].[FullName],
    [workflow_dependency_createdby].[YomiFullName],
    [workflow_dependency_modifiedonbehalfby].[YomiFullName],
    [workflow_dependency_modifiedby].[YomiFullName],
    [workflow_dependency_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [WorkflowDependencyBase].[ParameterName],
    [WorkflowDependencyBase].[RelatedEntityName],
    [WorkflowDependencyBase].[RelatedAttributeName],
    [WorkflowDependencyBase].[WorkflowId],
    [WorkflowDependencyBase].[SdkMessageId],
    [WorkflowDependencyBase].[ModifiedBy],
    [WorkflowDependencyBase].[ModifiedOn],
    [WorkflowDependencyBase].[Type],
    [WorkflowDependencyBase].[EntityAttributes],
    [WorkflowDependencyBase].[CustomEntityName],
    [WorkflowDependencyBase].[DependentEntityName],
    [WorkflowDependencyBase].[DependentAttributeName],
    [WorkflowDependencyBase].[WorkflowDependencyId],
    [WorkflowDependencyBase].[CreatedBy],
    [WorkflowDependencyBase].[CreatedOn],
    [WorkflowDependencyBase].[ParameterType],
    [WorkflowDependencyBase].[VersionNumber],
    [WorkflowDependencyBase].[CreatedOnBehalfBy],
    [WorkflowDependencyBase].[ModifiedOnBehalfBy]
from [WorkflowDependencyBase] 
    left join [WorkflowBase] [workflow_dependencies] on ([WorkflowDependencyBase].[WorkflowId] = [workflow_dependencies].[WorkflowId] and [workflow_dependencies].OverwriteTime = 0 and [workflow_dependencies].ComponentState = 0)
    left join [SystemUserBase] [workflow_dependency_createdby] on ([WorkflowDependencyBase].[CreatedBy] = [workflow_dependency_createdby].[SystemUserId])
    left join [SystemUserBase] [workflow_dependency_createdonbehalfby] on ([WorkflowDependencyBase].[CreatedOnBehalfBy] = [workflow_dependency_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [workflow_dependency_modifiedby] on ([WorkflowDependencyBase].[ModifiedBy] = [workflow_dependency_modifiedby].[SystemUserId])
    left join [SystemUserBase] [workflow_dependency_modifiedonbehalfby] on ([WorkflowDependencyBase].[ModifiedOnBehalfBy] = [workflow_dependency_modifiedonbehalfby].[SystemUserId])
