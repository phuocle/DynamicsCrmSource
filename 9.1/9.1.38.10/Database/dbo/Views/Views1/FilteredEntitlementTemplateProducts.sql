

--
-- report view for entitlementtemplateproducts
--
create view dbo.[FilteredEntitlementTemplateProducts] (
    [entitlementtemplateid],
    [entitlementtemplateproductid],
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
    [EntitlementTemplateProducts].[EntitlementTemplateId],
    [EntitlementTemplateProducts].[EntitlementTemplateProductId],
    [EntitlementTemplateProducts].[ImportSequenceNumber],
    [EntitlementTemplateProducts].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementTemplateProducts].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [EntitlementTemplateProducts].[OverriddenCreatedOn],
    [EntitlementTemplateProducts].[ProductId],
    [EntitlementTemplateProducts].[TimeZoneRuleVersionNumber],
    [EntitlementTemplateProducts].[UTCConversionTimeZoneCode],
    [EntitlementTemplateProducts].[VersionNumber]
from EntitlementTemplateProducts
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateProducts] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateProducts] TO [CRMReaderRole]
    AS [dbo];

