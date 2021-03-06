USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredContactOrders]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for contactorders
--
create view [dbo].[FilteredContactOrders] (
    [contactid],
    [contactorderid],
    [salesorderid],
    [versionnumber]
) with view_metadata as
select
    [ContactOrders].[ContactId],
    [ContactOrders].[ContactOrderId],
    [ContactOrders].[SalesOrderId],
    [ContactOrders].[VersionNumber]
from ContactOrders

GO
