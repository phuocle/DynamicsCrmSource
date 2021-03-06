USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredContactLeads]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
