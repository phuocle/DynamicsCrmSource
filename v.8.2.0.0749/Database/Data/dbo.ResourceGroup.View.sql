USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ResourceGroup]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for ResourceGroup
--
create view [dbo].[ResourceGroup]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [OrganizationIdName],

    -- physical attributes
    [Name],
    [ObjectTypeCode],
    [ResourceGroupId],
    [GroupTypeCode],
    [BusinessUnitId],
    [VersionNumber],
    [OrganizationId]
) with view_metadata as
select
    -- logical attributes
    [business_unit_resource_groups].[Name],
    [organization_resource_groups].[Name],

    -- physical attribute
    [ResourceGroupBase].[Name],
    [ResourceGroupBase].[ObjectTypeCode],
    [ResourceGroupBase].[ResourceGroupId],
    [ResourceGroupBase].[GroupTypeCode],
    [ResourceGroupBase].[BusinessUnitId],
    [ResourceGroupBase].[VersionNumber],
    [ResourceGroupBase].[OrganizationId]
from [ResourceGroupBase] 
    left join [BusinessUnitBase] [business_unit_resource_groups] on ([ResourceGroupBase].[BusinessUnitId] = [business_unit_resource_groups].[BusinessUnitId])
    left join [OrganizationBase] [organization_resource_groups] with(nolock) on ([ResourceGroupBase].[OrganizationId] = [organization_resource_groups].[OrganizationId])

GO
