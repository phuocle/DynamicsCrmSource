

--
-- report view for leadcompetitors
--
create view dbo.[FilteredLeadCompetitors] (
    [competitorid],
    [importsequencenumber],
    [leadcompetitorid],
    [leadid],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [LeadCompetitors].[CompetitorId],
    [LeadCompetitors].[ImportSequenceNumber],
    [LeadCompetitors].[LeadCompetitorId],
    [LeadCompetitors].[LeadId],
    [LeadCompetitors].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadCompetitors].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [LeadCompetitors].[OverriddenCreatedOn],
    [LeadCompetitors].[TimeZoneRuleVersionNumber],
    [LeadCompetitors].[UTCConversionTimeZoneCode],
    [LeadCompetitors].[VersionNumber]
from LeadCompetitors
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadCompetitors] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadCompetitors] TO [CRMReaderRole]
    AS [dbo];

