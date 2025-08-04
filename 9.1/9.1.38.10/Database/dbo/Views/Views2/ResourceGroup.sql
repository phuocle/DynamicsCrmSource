


--
-- base view for ResourceGroup
--
create view dbo.[ResourceGroup]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [OrganizationIdName],

    -- physical attributes
    [ResourceGroupId],
    [BusinessUnitId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [GroupTypeCode],
    [ObjectTypeCode],
    [OrganizationId]
) with view_metadata as
select
    -- logical attributes
    [business_unit_resource_groups].[Name],
    [organization_resource_groups].[Name],

    -- physical attribute
    [ResourceGroupBase].[ResourceGroupId],
    [ResourceGroupBase].[BusinessUnitId],
    [ResourceGroupBase].[VersionNumber],
    [ResourceGroupBase].[ImportSequenceNumber],
    [ResourceGroupBase].[OverriddenCreatedOn],
    [ResourceGroupBase].[TimeZoneRuleVersionNumber],
    [ResourceGroupBase].[UTCConversionTimeZoneCode],
    [ResourceGroupBase].[Name],
    [ResourceGroupBase].[GroupTypeCode],
    [ResourceGroupBase].[ObjectTypeCode],
    [ResourceGroupBase].[OrganizationId]
from [ResourceGroupBase] 
    left join [BusinessUnitBase] [business_unit_resource_groups] on ([ResourceGroupBase].[BusinessUnitId] = [business_unit_resource_groups].[BusinessUnitId])
    left join [OrganizationBase] [organization_resource_groups]  on ([ResourceGroupBase].[OrganizationId] = [organization_resource_groups].[OrganizationId])
