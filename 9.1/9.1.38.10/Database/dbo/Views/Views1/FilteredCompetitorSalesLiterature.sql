

--
-- report view for competitorsalesliterature
--
create view dbo.[FilteredCompetitorSalesLiterature] (
    [competitorid],
    [competitorsalesliteratureid],
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [salesliteratureid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [CompetitorSalesLiterature].[CompetitorId],
    [CompetitorSalesLiterature].[CompetitorSalesLiteratureId],
    [CompetitorSalesLiterature].[ImportSequenceNumber],
    [CompetitorSalesLiterature].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CompetitorSalesLiterature].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CompetitorSalesLiterature].[OverriddenCreatedOn],
    [CompetitorSalesLiterature].[SalesLiteratureId],
    [CompetitorSalesLiterature].[TimeZoneRuleVersionNumber],
    [CompetitorSalesLiterature].[UTCConversionTimeZoneCode],
    [CompetitorSalesLiterature].[VersionNumber]
from CompetitorSalesLiterature
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorSalesLiterature] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

