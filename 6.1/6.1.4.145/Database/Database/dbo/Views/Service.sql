


--
-- base view for Service
--
create view dbo.[Service]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedByYomiName],
    [ResourceSpecIdName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [Name],
    [OrganizationId],
    [ServiceId],
    [ResourceSpecId],
    [ModifiedBy],
    [AnchorOffset],
    [ModifiedOn],
    [Duration],
    [IsSchedulable],
    [StrategyId],
    [VersionNumber],
    [CreatedBy],
    [InitialStatusCode],
    [CalendarId],
    [ShowResources],
    [Granularity],
    [Description],
    [CreatedOn],
    [IsVisible],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_service_createdby].[FullName],
    [lk_service_createdonbehalfby].[FullName],
    [lk_service_modifiedby].[FullName],
    [lk_service_createdby].[YomiFullName],
    [resource_spec_services].[Name],
    [lk_service_modifiedby].[YomiFullName],
    [organization_services].[Name],
    [lk_service_createdonbehalfby].[YomiFullName],
    [lk_service_modifiedonbehalfby].[FullName],
    [lk_service_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [ServiceBase].[Name],
    [ServiceBase].[OrganizationId],
    [ServiceBase].[ServiceId],
    [ServiceBase].[ResourceSpecId],
    [ServiceBase].[ModifiedBy],
    [ServiceBase].[AnchorOffset],
    [ServiceBase].[ModifiedOn],
    [ServiceBase].[Duration],
    [ServiceBase].[IsSchedulable],
    [ServiceBase].[StrategyId],
    [ServiceBase].[VersionNumber],
    [ServiceBase].[CreatedBy],
    [ServiceBase].[InitialStatusCode],
    [ServiceBase].[CalendarId],
    [ServiceBase].[ShowResources],
    [ServiceBase].[Granularity],
    [ServiceBase].[Description],
    [ServiceBase].[CreatedOn],
    [ServiceBase].[IsVisible],
    [ServiceBase].[ImportSequenceNumber],
    [ServiceBase].[OverriddenCreatedOn],
    [ServiceBase].[CreatedOnBehalfBy],
    [ServiceBase].[ModifiedOnBehalfBy]
from [ServiceBase] 
    left join [SystemUserBase] [lk_service_createdby] with(nolock) on ([ServiceBase].[CreatedBy] = [lk_service_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_service_createdonbehalfby] with(nolock) on ([ServiceBase].[CreatedOnBehalfBy] = [lk_service_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_service_modifiedby] with(nolock) on ([ServiceBase].[ModifiedBy] = [lk_service_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_service_modifiedonbehalfby] with(nolock) on ([ServiceBase].[ModifiedOnBehalfBy] = [lk_service_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_services] with(nolock) on ([ServiceBase].[OrganizationId] = [organization_services].[OrganizationId])
    left join [ResourceSpecBase] [resource_spec_services] on ([ServiceBase].[ResourceSpecId] = [resource_spec_services].[ResourceSpecId])
