


--
-- base view for AppModuleComponentNode
--
create view dbo.[AppModuleComponentNode]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [AppModuleComponentNodeId],
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
    [ComponentDatabaseVersion],
    [ComponentObjectId],
    [ComponentType],
    [SnapshotVersionNumber],
    [ValidationResult],
    [ValidationStatus]
) with view_metadata as
select
    -- logical attributes
    [lk_appmodulecomponentnode_modifiedby].[FullName],
    [lk_appmodulecomponentnode_modifiedby].[YomiFullName],
    [organization_appmodulecomponentnode].[Name],
    [lk_appmodulecomponentnode_createdonbehalfby].[FullName],
    [lk_appmodulecomponentnode_createdonbehalfby].[YomiFullName],
    [lk_appmodulecomponentnode_createdby].[FullName],
    [lk_appmodulecomponentnode_createdby].[YomiFullName],
    [lk_appmodulecomponentnode_modifiedonbehalfby].[FullName],
    [lk_appmodulecomponentnode_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [AppModuleComponentNodeBase].[AppModuleComponentNodeId],
    [AppModuleComponentNodeBase].[CreatedOn],
    [AppModuleComponentNodeBase].[CreatedBy],
    [AppModuleComponentNodeBase].[ModifiedOn],
    [AppModuleComponentNodeBase].[ModifiedBy],
    [AppModuleComponentNodeBase].[CreatedOnBehalfBy],
    [AppModuleComponentNodeBase].[ModifiedOnBehalfBy],
    [AppModuleComponentNodeBase].[OrganizationId],
    [AppModuleComponentNodeBase].[statecode],
    [AppModuleComponentNodeBase].[statuscode],
    [AppModuleComponentNodeBase].[VersionNumber],
    [AppModuleComponentNodeBase].[ImportSequenceNumber],
    [AppModuleComponentNodeBase].[OverriddenCreatedOn],
    [AppModuleComponentNodeBase].[TimeZoneRuleVersionNumber],
    [AppModuleComponentNodeBase].[UTCConversionTimeZoneCode],
    [AppModuleComponentNodeBase].[Name],
    [AppModuleComponentNodeBase].[ComponentDatabaseVersion],
    [AppModuleComponentNodeBase].[ComponentObjectId],
    [AppModuleComponentNodeBase].[ComponentType],
    [AppModuleComponentNodeBase].[SnapshotVersionNumber],
    [AppModuleComponentNodeBase].[ValidationResult],
    [AppModuleComponentNodeBase].[ValidationStatus]
from [AppModuleComponentNodeBase] 
    left join [SystemUserBase] [lk_appmodulecomponentnode_createdby] on ([AppModuleComponentNodeBase].[CreatedBy] = [lk_appmodulecomponentnode_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponentnode_createdonbehalfby] on ([AppModuleComponentNodeBase].[CreatedOnBehalfBy] = [lk_appmodulecomponentnode_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponentnode_modifiedby] on ([AppModuleComponentNodeBase].[ModifiedBy] = [lk_appmodulecomponentnode_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponentnode_modifiedonbehalfby] on ([AppModuleComponentNodeBase].[ModifiedOnBehalfBy] = [lk_appmodulecomponentnode_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appmodulecomponentnode] on ([AppModuleComponentNodeBase].[OrganizationId] = [organization_appmodulecomponentnode].[OrganizationId])
