

--
-- report view for contactquotes
--
create view dbo.[FilteredContactQuotes] 
(
    [contactid],
    [contactquoteid],
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [quoteid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ContactQuotes].[ContactId],
    [ContactQuotes].[ContactQuoteId],
    [ContactQuotes].[ImportSequenceNumber],
    [ContactQuotes].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContactQuotes].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContactQuotes].[OverriddenCreatedOn],
    [ContactQuotes].[QuoteId],
    [ContactQuotes].[TimeZoneRuleVersionNumber],
    [ContactQuotes].[UTCConversionTimeZoneCode],
    [ContactQuotes].[VersionNumber]
from ContactQuotes
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactQuotes] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactQuotes] TO [CRMReaderRole]
    AS [dbo];

