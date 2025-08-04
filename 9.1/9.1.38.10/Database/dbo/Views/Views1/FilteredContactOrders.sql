

--
-- report view for contactorders
--
create view dbo.[FilteredContactOrders] 
(
    [contactid],
    [contactorderid],
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [salesorderid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ContactOrders].[ContactId],
    [ContactOrders].[ContactOrderId],
    [ContactOrders].[ImportSequenceNumber],
    [ContactOrders].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContactOrders].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContactOrders].[OverriddenCreatedOn],
    [ContactOrders].[SalesOrderId],
    [ContactOrders].[TimeZoneRuleVersionNumber],
    [ContactOrders].[UTCConversionTimeZoneCode],
    [ContactOrders].[VersionNumber]
from ContactOrders
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactOrders] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContactOrders] TO [CRMReaderRole]
    AS [dbo];

