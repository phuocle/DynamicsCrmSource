

--
-- report view for competitorproduct
--
create view dbo.[FilteredCompetitorProduct] (
    [competitorid],
    [competitorproductid],
    [importsequencenumber],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [productid],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [CompetitorProduct].[CompetitorId],
    [CompetitorProduct].[CompetitorProductId],
    [CompetitorProduct].[ImportSequenceNumber],
    [CompetitorProduct].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([CompetitorProduct].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [CompetitorProduct].[OverriddenCreatedOn],
    [CompetitorProduct].[ProductId],
    [CompetitorProduct].[TimeZoneRuleVersionNumber],
    [CompetitorProduct].[UTCConversionTimeZoneCode],
    [CompetitorProduct].[VersionNumber]
from CompetitorProduct
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorProduct] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredCompetitorProduct] TO [CRMReaderRole]
    AS [dbo];

