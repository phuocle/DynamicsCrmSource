


--
-- base view for SolutionComponentDefinition
--
create view dbo.[SolutionComponentDefinition]
 (

    -- physical attributes
    [SolutionComponentDefinitionId],
    [ComponentXPath],
    [SolutionComponentType],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [SolutionComponentDefinitionIdUnique],
    [Name],
    [ObjectTypeCode],
    [IsMetadata],
    [LabelTypeCode],
    [UseForceUpdateAlways],
    [UseForceDeleteForSolutionUpdate],
    [UseSentinelRowInBaseSolution],
    [AllowDeleteBaseSolutionRowAndFakeDelete],
    [AllowRecreateForLogicallyDeletedRow],
    [AlwaysRemoveActiveCustomizationsOnUninstall],
    [GroupParentComponentType],
    [GroupParentComponentAttributeName],
    [IsViewable],
    [AllowOverwriteCustomizations],
    [IsMergeable],
    [CanBeHidden],
    [DescendentIsViewableComponent],
    [ViewableDescendentComponentType],
    [ParentAttributeName],
    [IsDependencyDisabled],
    [CanBeAddedToSolutionComponents],
    [RootComponent],
    [RootAttributeName],
    [IntroducedVersion],
    [HasIsRenameableAttribute],
    [IsManaged],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [RemoveActiveCustomizationsBehavior],
    [IsDisplayable],
    [PrimaryEntityName]
) with view_metadata as
select

    -- physical attribute
    [T1].[SolutionComponentDefinitionId],
    [T1].[ComponentXPath],
    [T1].[SolutionComponentType],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionComponentDefinitionIdUnique],
    [T1].[Name],
    [T1].[ObjectTypeCode],
    [T1].[IsMetadata],
    [T1].[LabelTypeCode],
    [T1].[UseForceUpdateAlways],
    [T1].[UseForceDeleteForSolutionUpdate],
    [T1].[UseSentinelRowInBaseSolution],
    [T1].[AllowDeleteBaseSolutionRowAndFakeDelete],
    [T1].[AllowRecreateForLogicallyDeletedRow],
    [T1].[AlwaysRemoveActiveCustomizationsOnUninstall],
    [T1].[GroupParentComponentType],
    [T1].[GroupParentComponentAttributeName],
    [T1].[IsViewable],
    [T1].[AllowOverwriteCustomizations],
    [T1].[IsMergeable],
    [T1].[CanBeHidden],
    [T1].[DescendentIsViewableComponent],
    [T1].[ViewableDescendentComponentType],
    [T1].[ParentAttributeName],
    [T1].[IsDependencyDisabled],
    [T1].[CanBeAddedToSolutionComponents],
    [T1].[RootComponent],
    [T1].[RootAttributeName],
    [T1].[IntroducedVersion],
    [T1].[HasIsRenameableAttribute],
    [T1].[IsManaged],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[RemoveActiveCustomizationsBehavior],
    [T1].[IsDisplayable],
    [T1].[PrimaryEntityName]
from [SolutionComponentDefinitionBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0