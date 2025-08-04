


--
-- base view for msdyn_federatedarticleincident
--
create view dbo.[msdyn_federatedarticleincident]
 (
    -- logical attributes
    [msdyn_incidentidName],
    [msdyn_federatedarticleidName],
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
    [msdyn_federatedarticleincidentId],
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
    [msdyn_name],
    [msdyn_searchproviderarticleid],
    [msdyn_incidentid],
    [msdyn_federatedarticleid]
) with view_metadata as
select
    -- logical attributes
    [msdyn_incident_msdyn_federatedarticleincident_IncidentId].[Title],
    [msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId].[msdyn_title],
    [lk_msdyn_federatedarticleincident_createdby].[FullName],
    [lk_msdyn_federatedarticleincident_createdby].[YomiFullName],
    [lk_msdyn_federatedarticleincident_createdonbehalfby].[FullName],
    [lk_msdyn_federatedarticleincident_createdonbehalfby].[YomiFullName],
    [lk_msdyn_federatedarticleincident_modifiedby].[FullName],
    [lk_msdyn_federatedarticleincident_modifiedby].[YomiFullName],
    [lk_msdyn_federatedarticleincident_modifiedonbehalfby].[FullName],
    [lk_msdyn_federatedarticleincident_modifiedonbehalfby].[YomiFullName],
    [organization_msdyn_federatedarticleincident].[Name],

    -- physical attribute
    [msdyn_federatedarticleincidentBase].[msdyn_federatedarticleincidentId],
    [msdyn_federatedarticleincidentBase].[CreatedOn],
    [msdyn_federatedarticleincidentBase].[CreatedBy],
    [msdyn_federatedarticleincidentBase].[ModifiedOn],
    [msdyn_federatedarticleincidentBase].[ModifiedBy],
    [msdyn_federatedarticleincidentBase].[CreatedOnBehalfBy],
    [msdyn_federatedarticleincidentBase].[ModifiedOnBehalfBy],
    [msdyn_federatedarticleincidentBase].[OrganizationId],
    [msdyn_federatedarticleincidentBase].[statecode],
    [msdyn_federatedarticleincidentBase].[statuscode],
    [msdyn_federatedarticleincidentBase].[VersionNumber],
    [msdyn_federatedarticleincidentBase].[ImportSequenceNumber],
    [msdyn_federatedarticleincidentBase].[OverriddenCreatedOn],
    [msdyn_federatedarticleincidentBase].[TimeZoneRuleVersionNumber],
    [msdyn_federatedarticleincidentBase].[UTCConversionTimeZoneCode],
    [msdyn_federatedarticleincidentBase].[msdyn_name],
    [msdyn_federatedarticleincidentBase].[msdyn_searchproviderarticleid],
    [msdyn_federatedarticleincidentBase].[msdyn_incidentid],
    [msdyn_federatedarticleincidentBase].[msdyn_federatedarticleid]
from [msdyn_federatedarticleincidentBase] 
    left join [SystemUserBase] [lk_msdyn_federatedarticleincident_createdby] on ([msdyn_federatedarticleincidentBase].[CreatedBy] = [lk_msdyn_federatedarticleincident_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_federatedarticleincident_createdonbehalfby] on ([msdyn_federatedarticleincidentBase].[CreatedOnBehalfBy] = [lk_msdyn_federatedarticleincident_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_federatedarticleincident_modifiedby] on ([msdyn_federatedarticleincidentBase].[ModifiedBy] = [lk_msdyn_federatedarticleincident_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_federatedarticleincident_modifiedonbehalfby] on ([msdyn_federatedarticleincidentBase].[ModifiedOnBehalfBy] = [lk_msdyn_federatedarticleincident_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_federatedarticleBase] [msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId] on ([msdyn_federatedarticleincidentBase].[msdyn_federatedarticleid] = [msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId].[msdyn_federatedarticleId])
    left join [IncidentBase] [msdyn_incident_msdyn_federatedarticleincident_IncidentId] on ([msdyn_federatedarticleincidentBase].[msdyn_incidentid] = [msdyn_incident_msdyn_federatedarticleincident_IncidentId].[IncidentId])
    left join [OrganizationBase] [organization_msdyn_federatedarticleincident] on ([msdyn_federatedarticleincidentBase].[OrganizationId] = [organization_msdyn_federatedarticleincident].[OrganizationId])
