SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for contactleads
--
create view [dbo].[FilteredContactLeads] (
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
GRANT SELECT ON  [dbo].[FilteredContactLeads] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredContactLeads] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
