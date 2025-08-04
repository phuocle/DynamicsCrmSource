


--
-- base view for Resource
--
create view dbo.[Resource]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [OrganizationIdName],
    [EntityImage_Timestamp],
    [EntityImage_URL],
    [EntityImage],
    [SiteIdName],

    -- physical attributes
    [ResourceId],
    [BusinessUnitId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [CalendarId],
    [DisplayInServiceViews],
    [IsDisabled],
    [ObjectTypeCode],
    [OrganizationId],
    [SiteId],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [business_unit_resources].[Name],
    [organization_resources].[Name],
    [lk_resource_entityimage].[ImageTimestamp],
    [lk_resource_entityimage].[ImageURL],
    [lk_resource_entityimage].[ImageData],
    [site_resources].[Name],

    -- physical attribute
    [ResourceBase].[ResourceId],
    [ResourceBase].[BusinessUnitId],
    [ResourceBase].[VersionNumber],
    [ResourceBase].[ImportSequenceNumber],
    [ResourceBase].[OverriddenCreatedOn],
    [ResourceBase].[TimeZoneRuleVersionNumber],
    [ResourceBase].[UTCConversionTimeZoneCode],
    [ResourceBase].[Name],
    [ResourceBase].[CalendarId],
    [ResourceBase].[DisplayInServiceViews],
    [ResourceBase].[IsDisabled],
    [ResourceBase].[ObjectTypeCode],
    [ResourceBase].[OrganizationId],
    [ResourceBase].[SiteId],
    [ResourceBase].[EntityImageId]
from [ResourceBase] 
    left join [BusinessUnitBase] [business_unit_resources] on ([ResourceBase].[BusinessUnitId] = [business_unit_resources].[BusinessUnitId])
    left join [ImageDescriptor] [lk_resource_entityimage] on ([ResourceBase].[EntityImageId] = [lk_resource_entityimage].[ImageDescriptorId])
    left join [OrganizationBase] [organization_resources] on ([ResourceBase].[OrganizationId] = [organization_resources].[OrganizationId])
    left join [SiteBase] [site_resources] on ([ResourceBase].[SiteId] = [site_resources].[SiteId])
