

--
-- report view for contactorders
--
create view dbo.[FilteredContactOrders] (
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactOrders] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactOrders] TO [CRMReaderRole]
    AS [dbo];

