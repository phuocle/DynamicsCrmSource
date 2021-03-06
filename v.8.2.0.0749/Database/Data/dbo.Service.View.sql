USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Service]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Service
--
create view [dbo].[Service]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [ResourceSpecIdName],

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
    [lk_service_createdby].[YomiFullName],
    [lk_service_createdonbehalfby].[FullName],
    [lk_service_createdonbehalfby].[YomiFullName],
    [lk_service_modifiedby].[FullName],
    [lk_service_modifiedby].[YomiFullName],
    [lk_service_modifiedonbehalfby].[FullName],
    [lk_service_modifiedonbehalfby].[YomiFullName],
    [organization_services].[Name],
    [resource_spec_services].[Name],

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

GO
