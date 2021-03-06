USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredAccountLeads]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
