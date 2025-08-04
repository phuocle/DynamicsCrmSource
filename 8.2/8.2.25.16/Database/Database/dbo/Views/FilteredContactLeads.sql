

--
-- report view for contactleads
--
create view dbo.[FilteredContactLeads] (
    [contactid],
    [contactleadid],
    [leadid],
    [versionnumber]
) with view_metadata as
select
    [ContactLeads].[ContactId],
    [ContactLeads].[ContactLeadId],
    [ContactLeads].[LeadId],
    [ContactLeads].[VersionNumber]
from ContactLeads

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactLeads] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactLeads] TO [CRMReaderRole]
    AS [dbo];

