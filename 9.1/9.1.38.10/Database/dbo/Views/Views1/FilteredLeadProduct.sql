

--
-- report view for leadproduct
--
create view dbo.[FilteredLeadProduct] (
    [importsequencenumber],
    [leadid],
    [leadproductid],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [productid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [LeadProduct].[ImportSequenceNumber],
    [LeadProduct].[LeadId],
    [LeadProduct].[LeadProductId],
    [LeadProduct].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadProduct].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [LeadProduct].[OverriddenCreatedOn],
    [LeadProduct].[ProductId],
    [LeadProduct].[TimeZoneRuleVersionNumber],
    [LeadProduct].[UTCConversionTimeZoneCode],
    [LeadProduct].[VersionNumber]
from LeadProduct
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadProduct] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadProduct] TO [CRMReaderRole]
    AS [dbo];

