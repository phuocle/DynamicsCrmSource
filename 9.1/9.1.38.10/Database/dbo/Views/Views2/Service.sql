


--
-- base view for Service
--
create view dbo.[Service]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ResourceSpecIdName],

    -- physical attributes
    [ServiceId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [AnchorOffset],
    [CalendarId],
    [Description],
    [Duration],
    [Granularity],
    [InitialStatusCode],
    [IsSchedulable],
    [IsVisible],
    [ResourceSpecId],
    [ShowResources],
    [StrategyId]
) with view_metadata as
select
    -- logical attributes
    [lk_service_createdby].[FullName],
    [lk_service_createdby].[YomiFullName],
    [lk_service_modifiedonbehalfby].[FullName],
    [lk_service_modifiedonbehalfby].[YomiFullName],
    [organization_services].[Name],
    [lk_service_createdonbehalfby].[FullName],
    [lk_service_createdonbehalfby].[YomiFullName],
    [lk_service_modifiedby].[FullName],
    [lk_service_modifiedby].[YomiFullName],
    [resource_spec_services].[Name],

    -- physical attribute
    [ServiceBase].[ServiceId],
    [ServiceBase].[CreatedOn],
    [ServiceBase].[CreatedBy],
    [ServiceBase].[ModifiedOn],
    [ServiceBase].[ModifiedBy],
    [ServiceBase].[CreatedOnBehalfBy],
    [ServiceBase].[ModifiedOnBehalfBy],
    [ServiceBase].[OrganizationId],
    [ServiceBase].[VersionNumber],
    [ServiceBase].[ImportSequenceNumber],
    [ServiceBase].[OverriddenCreatedOn],
    [ServiceBase].[TimeZoneRuleVersionNumber],
    [ServiceBase].[UTCConversionTimeZoneCode],
    [ServiceBase].[Name],
    [ServiceBase].[AnchorOffset],
    [ServiceBase].[CalendarId],
    [ServiceBase].[Description],
    [ServiceBase].[Duration],
    [ServiceBase].[Granularity],
    [ServiceBase].[InitialStatusCode],
    [ServiceBase].[IsSchedulable],
    [ServiceBase].[IsVisible],
    [ServiceBase].[ResourceSpecId],
    [ServiceBase].[ShowResources],
    [ServiceBase].[StrategyId]
from [ServiceBase] 
    left join [SystemUserBase] [lk_service_createdby] on ([ServiceBase].[CreatedBy] = [lk_service_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_service_createdonbehalfby] on ([ServiceBase].[CreatedOnBehalfBy] = [lk_service_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_service_modifiedby] on ([ServiceBase].[ModifiedBy] = [lk_service_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_service_modifiedonbehalfby] on ([ServiceBase].[ModifiedOnBehalfBy] = [lk_service_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_services] on ([ServiceBase].[OrganizationId] = [organization_services].[OrganizationId])
    left join [ResourceSpecBase] [resource_spec_services] on ([ServiceBase].[ResourceSpecId] = [resource_spec_services].[ResourceSpecId])
