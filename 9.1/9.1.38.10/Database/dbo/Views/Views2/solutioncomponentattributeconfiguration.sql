


--
-- base view for solutioncomponentattributeconfiguration
--
create view dbo.[solutioncomponentattributeconfiguration]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [AttributeIdName],
    [solutioncomponentconfigurationidName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [solutioncomponentattributeconfigurationId],
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
    [name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [AttributeId],
    [SolutionComponentConfigurationId],
    [EncodingFormat],
    [IsExportDisabled],
    [FileExtension],
    [IsExportedAsFile]
) with view_metadata as
select
    -- logical attributes
    [lk_solutioncomponentattributeconfiguration_createdby].[FullName],
    [lk_solutioncomponentattributeconfiguration_createdby].[YomiFullName],
    [organization_solutioncomponentattributeconfiguration].[Name],
    [lk_solutioncomponentattributeconfiguration_modifiedonbehalfby].[FullName],
    [lk_solutioncomponentattributeconfiguration_modifiedonbehalfby].[YomiFullName],
    [lk_solutioncomponentattributeconfiguration_createdonbehalfby].[FullName],
    [lk_solutioncomponentattributeconfiguration_createdonbehalfby].[YomiFullName],
    null,
    [solutioncomponentconfig_solutioncomponentattrconfig].[name],
    [lk_solutioncomponentattributeconfiguration_modifiedby].[FullName],
    [lk_solutioncomponentattributeconfiguration_modifiedby].[YomiFullName],

    -- physical attribute
    [T1].[solutioncomponentattributeconfigurationId],
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
    [T1].[name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[AttributeId],
    [T1].[SolutionComponentConfigurationId],
    [T1].[EncodingFormat],
    [T1].[IsExportDisabled],
    [T1].[FileExtension],
    [T1].[IsExportedAsFile]
from [solutioncomponentattributeconfigurationBase] [T1]
    left join [Attribute] [attribute_solutioncomponentattrconfig] on ([T1].[AttributeId] = [attribute_solutioncomponentattrconfig].[AttributeId] and [attribute_solutioncomponentattrconfig].OverwriteTime = 0 and [attribute_solutioncomponentattrconfig].ComponentState = 0)
    left join [SystemUserBase] [lk_solutioncomponentattributeconfiguration_createdby] on ([T1].[CreatedBy] = [lk_solutioncomponentattributeconfiguration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentattributeconfiguration_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_solutioncomponentattributeconfiguration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentattributeconfiguration_modifiedby] on ([T1].[ModifiedBy] = [lk_solutioncomponentattributeconfiguration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentattributeconfiguration_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_solutioncomponentattributeconfiguration_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_solutioncomponentattributeconfiguration] on ([T1].[OrganizationId] = [organization_solutioncomponentattributeconfiguration].[OrganizationId])
    left join [solutioncomponentconfigurationBase] [solutioncomponentconfig_solutioncomponentattrconfig] on ([T1].[SolutionComponentConfigurationId] = [solutioncomponentconfig_solutioncomponentattrconfig].[solutioncomponentconfigurationId] and [solutioncomponentconfig_solutioncomponentattrconfig].OverwriteTime = 0 and [solutioncomponentconfig_solutioncomponentattrconfig].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0