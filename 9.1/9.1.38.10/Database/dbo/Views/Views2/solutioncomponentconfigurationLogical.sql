


--
-- logical view for solutioncomponentconfigurationLogical
--
create view dbo.[solutioncomponentconfigurationLogical]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [EntityIdName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [solutioncomponentconfigurationId],
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
    [EntityId],
    [FileFormat],
    [FileScope],
    [IsSoftDeleteEnabled],
    [isdisplayable],
    [KeepActiveCustomizationAfterConversion]
) with view_metadata as
select
    -- logical attributes
    [lk_solutioncomponentconfiguration_modifiedby].[FullName],
    [lk_solutioncomponentconfiguration_modifiedby].[YomiFullName],
    null,
    [organization_solutioncomponentconfiguration].[Name],
    [lk_solutioncomponentconfiguration_modifiedonbehalfby].[FullName],
    [lk_solutioncomponentconfiguration_modifiedonbehalfby].[YomiFullName],
    [lk_solutioncomponentconfiguration_createdonbehalfby].[FullName],
    [lk_solutioncomponentconfiguration_createdonbehalfby].[YomiFullName],
    [lk_solutioncomponentconfiguration_createdby].[FullName],
    [lk_solutioncomponentconfiguration_createdby].[YomiFullName],

    -- physical attribute
    [T1].[solutioncomponentconfigurationId],
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
    [T1].[EntityId],
    [T1].[FileFormat],
    [T1].[FileScope],
    [T1].[IsSoftDeleteEnabled],
    [T1].[isdisplayable],
    [T1].[KeepActiveCustomizationAfterConversion]
from [solutioncomponentconfigurationBase] [T1]
    left join [Entity] [entity_solutioncomponentconfiguration] on ([T1].[EntityId] = [entity_solutioncomponentconfiguration].[EntityId] and [entity_solutioncomponentconfiguration].OverwriteTime = 0 and [entity_solutioncomponentconfiguration].ComponentState = 0)
    left join [SystemUserBase] [lk_solutioncomponentconfiguration_createdby] on ([T1].[CreatedBy] = [lk_solutioncomponentconfiguration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentconfiguration_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_solutioncomponentconfiguration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentconfiguration_modifiedby] on ([T1].[ModifiedBy] = [lk_solutioncomponentconfiguration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentconfiguration_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_solutioncomponentconfiguration_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_solutioncomponentconfiguration] on ([T1].[OrganizationId] = [organization_solutioncomponentconfiguration].[OrganizationId])
where T1.OverwriteTime = 0