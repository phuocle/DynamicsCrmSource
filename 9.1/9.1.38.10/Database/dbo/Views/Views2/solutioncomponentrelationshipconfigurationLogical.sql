


--
-- logical view for solutioncomponentrelationshipconfigurationLogical
--
create view dbo.[solutioncomponentrelationshipconfigurationLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [EntityRelationshipIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [solutioncomponentrelationshipconfigurationId],
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
    [EntityRelationshipId],
    [PrimaryEntityDependencyType],
    [SecondaryEntityDependencyType],
    [AddRelatedComponents]
) with view_metadata as
select
    -- logical attributes
    [lk_solutioncomponentrelationshipconfiguration_modifiedonbehalfby].[FullName],
    [lk_solutioncomponentrelationshipconfiguration_modifiedonbehalfby].[YomiFullName],
    [lk_solutioncomponentrelationshipconfiguration_modifiedby].[FullName],
    [lk_solutioncomponentrelationshipconfiguration_modifiedby].[YomiFullName],
    [organization_solutioncomponentrelationshipconfiguration].[Name],
    [lk_solutioncomponentrelationshipconfiguration_createdby].[FullName],
    [lk_solutioncomponentrelationshipconfiguration_createdby].[YomiFullName],
    null,
    [lk_solutioncomponentrelationshipconfiguration_createdonbehalfby].[FullName],
    [lk_solutioncomponentrelationshipconfiguration_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[solutioncomponentrelationshipconfigurationId],
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
    [T1].[EntityRelationshipId],
    [T1].[PrimaryEntityDependencyType],
    [T1].[SecondaryEntityDependencyType],
    [T1].[AddRelatedComponents]
from [solutioncomponentrelationshipconfigurationBase] [T1]
    left join [EntityRelationship] [entityrelationship_config] on ([T1].[EntityRelationshipId] = [entityrelationship_config].[EntityRelationshipId] and [entityrelationship_config].OverwriteTime = 0 and [entityrelationship_config].ComponentState = 0)
    left join [SystemUserBase] [lk_solutioncomponentrelationshipconfiguration_createdby] on ([T1].[CreatedBy] = [lk_solutioncomponentrelationshipconfiguration_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentrelationshipconfiguration_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_solutioncomponentrelationshipconfiguration_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentrelationshipconfiguration_modifiedby] on ([T1].[ModifiedBy] = [lk_solutioncomponentrelationshipconfiguration_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentrelationshipconfiguration_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_solutioncomponentrelationshipconfiguration_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_solutioncomponentrelationshipconfiguration] on ([T1].[OrganizationId] = [organization_solutioncomponentrelationshipconfiguration].[OrganizationId])
where T1.OverwriteTime = 0