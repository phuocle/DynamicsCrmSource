


--
-- base view for Resource
--
create view dbo.[Resource]
 (
    -- logical attributes
    [EntityImage_Timestamp],
    [SiteIdName],
    [EntityImage_URL],
    [BusinessUnitIdName],
    [EntityImage],
    [OrganizationIdName],

    -- physical attributes
    [DisplayInServiceViews],
    [ObjectTypeCode],
    [BusinessUnitId],
    [CalendarId],
    [IsDisabled],
    [ResourceId],
    [VersionNumber],
    [OrganizationId],
    [Name],
    [SiteId],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_resource_entityimage].[ImageTimestamp],
    [site_resources].[Name],
    [lk_resource_entityimage].[ImageURL],
    [business_unit_resources].[Name],
    [lk_resource_entityimage].[ImageData],
    [organization_resources].[Name],

    -- physical attribute
    [ResourceBase].[DisplayInServiceViews],
    [ResourceBase].[ObjectTypeCode],
    [ResourceBase].[BusinessUnitId],
    [ResourceBase].[CalendarId],
    [ResourceBase].[IsDisabled],
    [ResourceBase].[ResourceId],
    [ResourceBase].[VersionNumber],
    [ResourceBase].[OrganizationId],
    [ResourceBase].[Name],
    [ResourceBase].[SiteId],
    [ResourceBase].[EntityImageId]
from [ResourceBase] 
    left join [BusinessUnitBase] [business_unit_resources] on ([ResourceBase].[BusinessUnitId] = [business_unit_resources].[BusinessUnitId])
    left join [ImageDescriptor] [lk_resource_entityimage] on ([ResourceBase].[EntityImageId] = [lk_resource_entityimage].[ImageDescriptorId])
    left join [OrganizationBase] [organization_resources] with(nolock) on ([ResourceBase].[OrganizationId] = [organization_resources].[OrganizationId])
    left join [SiteBase] [site_resources] on ([ResourceBase].[SiteId] = [site_resources].[SiteId])
