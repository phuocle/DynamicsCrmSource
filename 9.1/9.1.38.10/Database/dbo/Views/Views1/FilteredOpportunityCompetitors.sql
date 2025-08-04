

--
-- report view for opportunitycompetitors
--
create view dbo.[FilteredOpportunityCompetitors] (
    [competitorid],
    [importsequencenumber],
    [name],
    [opportunitycompetitorid],
    [opportunityid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [OpportunityCompetitors].[CompetitorId],
    [OpportunityCompetitors].[ImportSequenceNumber],
    [OpportunityCompetitors].[Name],
    [OpportunityCompetitors].[OpportunityCompetitorId],
    [OpportunityCompetitors].[OpportunityId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OpportunityCompetitors].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [OpportunityCompetitors].[OverriddenCreatedOn],
    [OpportunityCompetitors].[TimeZoneRuleVersionNumber],
    [OpportunityCompetitors].[UTCConversionTimeZoneCode],
    [OpportunityCompetitors].[VersionNumber]
from OpportunityCompetitors
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityCompetitors] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOpportunityCompetitors] TO [CRMReaderRole]
    AS [dbo];

