SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for accountleads
--
create view [dbo].[FilteredAccountLeads] (
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
GRANT SELECT ON  [dbo].[FilteredAccountLeads] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredAccountLeads] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
