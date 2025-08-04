


--
-- base view for msdyn_databaseversion
--
create view dbo.[msdyn_databaseversion]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [msdyn_databaseversionId],
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
    [msdyn_solutionname],
    [msdyn_dbversion]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_databaseversion_modifiedby].[FullName],
    [lk_msdyn_databaseversion_modifiedby].[YomiFullName],
    [lk_msdyn_databaseversion_modifiedonbehalfby].[FullName],
    [lk_msdyn_databaseversion_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_databaseversion_createdby].[FullName],
    [lk_msdyn_databaseversion_createdby].[YomiFullName],
    [organization_msdyn_databaseversion].[Name],
    [lk_msdyn_databaseversion_createdonbehalfby].[FullName],
    [lk_msdyn_databaseversion_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [msdyn_databaseversionBase].[msdyn_databaseversionId],
    [msdyn_databaseversionBase].[CreatedOn],
    [msdyn_databaseversionBase].[CreatedBy],
    [msdyn_databaseversionBase].[ModifiedOn],
    [msdyn_databaseversionBase].[ModifiedBy],
    [msdyn_databaseversionBase].[CreatedOnBehalfBy],
    [msdyn_databaseversionBase].[ModifiedOnBehalfBy],
    [msdyn_databaseversionBase].[OrganizationId],
    [msdyn_databaseversionBase].[statecode],
    [msdyn_databaseversionBase].[statuscode],
    [msdyn_databaseversionBase].[VersionNumber],
    [msdyn_databaseversionBase].[ImportSequenceNumber],
    [msdyn_databaseversionBase].[OverriddenCreatedOn],
    [msdyn_databaseversionBase].[TimeZoneRuleVersionNumber],
    [msdyn_databaseversionBase].[UTCConversionTimeZoneCode],
    [msdyn_databaseversionBase].[msdyn_solutionname],
    [msdyn_databaseversionBase].[msdyn_dbversion]
from [msdyn_databaseversionBase] 
    left join [SystemUserBase] [lk_msdyn_databaseversion_createdby] on ([msdyn_databaseversionBase].[CreatedBy] = [lk_msdyn_databaseversion_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_databaseversion_createdonbehalfby] on ([msdyn_databaseversionBase].[CreatedOnBehalfBy] = [lk_msdyn_databaseversion_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_databaseversion_modifiedby] on ([msdyn_databaseversionBase].[ModifiedBy] = [lk_msdyn_databaseversion_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_databaseversion_modifiedonbehalfby] on ([msdyn_databaseversionBase].[ModifiedOnBehalfBy] = [lk_msdyn_databaseversion_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_msdyn_databaseversion] on ([msdyn_databaseversionBase].[OrganizationId] = [organization_msdyn_databaseversion].[OrganizationId])
