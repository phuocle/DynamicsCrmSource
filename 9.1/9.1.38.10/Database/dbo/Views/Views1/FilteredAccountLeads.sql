

--
-- report view for accountleads
--
create view dbo.[FilteredAccountLeads] 
(
    [accountid],
    [accountleadid],
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
    [AccountLeads].[AccountId],
    [AccountLeads].[AccountLeadId],
    [AccountLeads].[ImportSequenceNumber],
    [AccountLeads].[LeadId],
    [AccountLeads].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([AccountLeads].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [AccountLeads].[OverriddenCreatedOn],
    [AccountLeads].[TimeZoneRuleVersionNumber],
    [AccountLeads].[UTCConversionTimeZoneCode],
    [AccountLeads].[VersionNumber]
from AccountLeads
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAccountLeads] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAccountLeads] TO [CRMReaderRole]
    AS [dbo];

