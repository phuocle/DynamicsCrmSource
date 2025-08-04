

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
    ON OBJECT::[dbo].[FilteredContactLeads] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactLeads] TO [CRMReaderRole]
    AS [dbo];

