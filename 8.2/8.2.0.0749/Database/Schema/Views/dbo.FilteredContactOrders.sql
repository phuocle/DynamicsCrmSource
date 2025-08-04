SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT SELECT ON  [dbo].[FilteredContactOrders] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredContactOrders] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
