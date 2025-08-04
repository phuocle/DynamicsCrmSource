

--
-- report view for entitlementproducts
--
create view dbo.[FilteredEntitlementProducts] (
    [entitlementid],
    [entitlementproductid],
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [productid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [EntitlementProducts].[EntitlementId],
    [EntitlementProducts].[EntitlementProductId],
    [EntitlementProducts].[ImportSequenceNumber],
    [EntitlementProducts].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementProducts].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [EntitlementProducts].[OverriddenCreatedOn],
    [EntitlementProducts].[ProductId],
    [EntitlementProducts].[TimeZoneRuleVersionNumber],
    [EntitlementProducts].[UTCConversionTimeZoneCode],
    [EntitlementProducts].[VersionNumber]
from EntitlementProducts
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementProducts] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementProducts] TO [CRMReaderRole]
    AS [dbo];

