USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredLeadProduct]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for leadproduct
--
create view [dbo].[FilteredLeadProduct] (
    [leadid],
    [leadproductid],
    [productid],
    [versionnumber]
) with view_metadata as
select
    [LeadProduct].[LeadId],
    [LeadProduct].[LeadProductId],
    [LeadProduct].[ProductId],
    [LeadProduct].[VersionNumber]
from LeadProduct

GO
