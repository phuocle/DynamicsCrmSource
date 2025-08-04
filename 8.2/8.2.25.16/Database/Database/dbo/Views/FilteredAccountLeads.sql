

--
-- report view for accountleads
--
create view dbo.[FilteredAccountLeads] (
    [accountid],
    [accountleadid],
    [leadid],
    [versionnumber]
) with view_metadata as
select
    [AccountLeads].[AccountId],
    [AccountLeads].[AccountLeadId],
    [AccountLeads].[LeadId],
    [AccountLeads].[VersionNumber]
from AccountLeads

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAccountLeads] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAccountLeads] TO [CRMReaderRole]
    AS [dbo];

