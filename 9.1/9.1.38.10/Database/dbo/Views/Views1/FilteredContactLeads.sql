

--
-- report view for contactleads
--
create view dbo.[FilteredContactLeads] 
(
    [contactid],
    [contactleadid],
    [importsequencenumber],
    [leadid],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ContactLeads].[ContactId],
    [ContactLeads].[ContactLeadId],
    [ContactLeads].[ImportSequenceNumber],
    [ContactLeads].[LeadId],
    [ContactLeads].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContactLeads].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContactLeads].[OverriddenCreatedOn],
    [ContactLeads].[TimeZoneRuleVersionNumber],
    [ContactLeads].[UTCConversionTimeZoneCode],
    [ContactLeads].[VersionNumber]
from ContactLeads
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactLeads] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactLeads] TO [CRMReaderRole]
    AS [dbo];

