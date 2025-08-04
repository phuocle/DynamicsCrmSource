

--
-- report view for contactinvoices
--
create view dbo.[FilteredContactInvoices] 
(
    [contactid],
    [contactinvoiceid],
    [importsequencenumber],
    [invoiceid],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ContactInvoices].[ContactId],
    [ContactInvoices].[ContactInvoiceId],
    [ContactInvoices].[ImportSequenceNumber],
    [ContactInvoices].[InvoiceId],
    [ContactInvoices].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContactInvoices].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContactInvoices].[OverriddenCreatedOn],
    [ContactInvoices].[TimeZoneRuleVersionNumber],
    [ContactInvoices].[UTCConversionTimeZoneCode],
    [ContactInvoices].[VersionNumber]
from ContactInvoices
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactInvoices] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactInvoices] TO [CRMReaderRole]
    AS [dbo];

