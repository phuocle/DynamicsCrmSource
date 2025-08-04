


--
-- base view for AppElement
--
create view dbo.[AppElement]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ParentAppModuleIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CanvasAppIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [AppElementId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
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
    [ParentAppModuleId],
    [PublishConfiguration],
    [UniqueName],
    [CanvasAppId]
) with view_metadata as
select
    -- logical attributes
    [lk_appelement_createdonbehalfby].[FullName],
    [lk_appelement_createdonbehalfby].[YomiFullName],
    [appmodule_appelement_parentappmoduleid].[Name],
    [lk_appelement_modifiedby].[FullName],
    [lk_appelement_modifiedby].[YomiFullName],
    [organization_appelement].[Name],
    [canvasapp_appelement_canvasappid].[Name],
    [lk_appelement_modifiedonbehalfby].[FullName],
    [lk_appelement_modifiedonbehalfby].[YomiFullName],
    [lk_appelement_createdby].[FullName],
    [lk_appelement_createdby].[YomiFullName],

    -- physical attribute
    [T1].[AppElementId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
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
    [T1].[ParentAppModuleId],
    [T1].[PublishConfiguration],
    [T1].[UniqueName],
    [T1].[CanvasAppId]
from [AppElementBase] [T1]
    left join [AppModuleBase] [appmodule_appelement_parentappmoduleid] on ([T1].[ParentAppModuleId] = [appmodule_appelement_parentappmoduleid].[AppModuleId] and [appmodule_appelement_parentappmoduleid].OverwriteTime = 0 and [appmodule_appelement_parentappmoduleid].ComponentState = 0)
    left join [CanvasAppBase] [canvasapp_appelement_canvasappid] on ([T1].[CanvasAppId] = [canvasapp_appelement_canvasappid].[CanvasAppId] and [canvasapp_appelement_canvasappid].OverwriteTime = 0 and [canvasapp_appelement_canvasappid].ComponentState = 0)
    left join [SystemUserBase] [lk_appelement_createdby] on ([T1].[CreatedBy] = [lk_appelement_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appelement_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_appelement_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appelement_modifiedby] on ([T1].[ModifiedBy] = [lk_appelement_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appelement_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_appelement_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appelement] on ([T1].[OrganizationId] = [organization_appelement].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0