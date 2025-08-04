


--
-- base view for AppModuleComponentEdge
--
create view dbo.[AppModuleComponentEdge]
 (
    -- logical attributes
    [ComponentNodeToName],
    [ComponentNodeFromName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [AppModuleComponentEdgeId],
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
    [ComponentNodeFrom],
    [ComponentNodeTo]
) with view_metadata as
select
    -- logical attributes
    [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo].[Name],
    [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom].[Name],
    [lk_appmodulecomponentedge_createdby].[FullName],
    [lk_appmodulecomponentedge_createdby].[YomiFullName],
    [lk_appmodulecomponentedge_createdonbehalfby].[FullName],
    [lk_appmodulecomponentedge_createdonbehalfby].[YomiFullName],
    [lk_appmodulecomponentedge_modifiedby].[FullName],
    [lk_appmodulecomponentedge_modifiedby].[YomiFullName],
    [lk_appmodulecomponentedge_modifiedonbehalfby].[FullName],
    [lk_appmodulecomponentedge_modifiedonbehalfby].[YomiFullName],
    [organization_appmodulecomponentedge].[Name],

    -- physical attribute
    [AppModuleComponentEdgeBase].[AppModuleComponentEdgeId],
    [AppModuleComponentEdgeBase].[CreatedOn],
    [AppModuleComponentEdgeBase].[CreatedBy],
    [AppModuleComponentEdgeBase].[ModifiedOn],
    [AppModuleComponentEdgeBase].[ModifiedBy],
    [AppModuleComponentEdgeBase].[CreatedOnBehalfBy],
    [AppModuleComponentEdgeBase].[ModifiedOnBehalfBy],
    [AppModuleComponentEdgeBase].[OrganizationId],
    [AppModuleComponentEdgeBase].[statecode],
    [AppModuleComponentEdgeBase].[statuscode],
    [AppModuleComponentEdgeBase].[VersionNumber],
    [AppModuleComponentEdgeBase].[ImportSequenceNumber],
    [AppModuleComponentEdgeBase].[OverriddenCreatedOn],
    [AppModuleComponentEdgeBase].[TimeZoneRuleVersionNumber],
    [AppModuleComponentEdgeBase].[UTCConversionTimeZoneCode],
    [AppModuleComponentEdgeBase].[Name],
    [AppModuleComponentEdgeBase].[ComponentNodeFrom],
    [AppModuleComponentEdgeBase].[ComponentNodeTo]
from [AppModuleComponentEdgeBase] 
    left join [AppModuleComponentNodeBase] [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom] on ([AppModuleComponentEdgeBase].[ComponentNodeFrom] = [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeFrom].[AppModuleComponentNodeId])
    left join [AppModuleComponentNodeBase] [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo] on ([AppModuleComponentEdgeBase].[ComponentNodeTo] = [appmodulecomponentnode_appmodulecomponentedge_ComponentNodeTo].[AppModuleComponentNodeId])
    left join [SystemUserBase] [lk_appmodulecomponentedge_createdby] on ([AppModuleComponentEdgeBase].[CreatedBy] = [lk_appmodulecomponentedge_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponentedge_createdonbehalfby] on ([AppModuleComponentEdgeBase].[CreatedOnBehalfBy] = [lk_appmodulecomponentedge_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponentedge_modifiedby] on ([AppModuleComponentEdgeBase].[ModifiedBy] = [lk_appmodulecomponentedge_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponentedge_modifiedonbehalfby] on ([AppModuleComponentEdgeBase].[ModifiedOnBehalfBy] = [lk_appmodulecomponentedge_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appmodulecomponentedge] on ([AppModuleComponentEdgeBase].[OrganizationId] = [organization_appmodulecomponentedge].[OrganizationId])
