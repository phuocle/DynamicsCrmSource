

--
-- report view for productsalesliterature
--
create view dbo.[FilteredProductSalesLiterature] (
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [productid],
    [productsalesliteratureid],
    [salesliteratureid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ProductSalesLiterature].[ImportSequenceNumber],
    [ProductSalesLiterature].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductSalesLiterature].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ProductSalesLiterature].[OverriddenCreatedOn],
    [ProductSalesLiterature].[ProductId],
    [ProductSalesLiterature].[ProductSalesLiteratureId],
    [ProductSalesLiterature].[SalesLiteratureId],
    [ProductSalesLiterature].[TimeZoneRuleVersionNumber],
    [ProductSalesLiterature].[UTCConversionTimeZoneCode],
    [ProductSalesLiterature].[VersionNumber]
from ProductSalesLiterature
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSalesLiterature] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

