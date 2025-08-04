

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
    ON OBJECT::[dbo].[FilteredContactOrders] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactOrders] TO [CRMReaderRole]
    AS [dbo];

