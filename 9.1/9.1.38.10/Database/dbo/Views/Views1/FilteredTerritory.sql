

--
-- report view for territory
--
create view dbo.[FilteredTerritory] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [importsequencenumber],
    [managerid],
    [manageridname],
    [manageridyominame],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentterritoryid],
    [parentterritoryidname],
    [territoryid],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Territory].[CreatedBy],
    [Territory].[CreatedByName],
    [Territory].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Territory].[CreatedOn],
			us.TimeZoneCode),
        [Territory].[CreatedOn],
    [Territory].[CreatedOnBehalfBy],
    [Territory].[CreatedOnBehalfByName],
    [Territory].[CreatedOnBehalfByYomiName],
    [Territory].[Description],
    cast([Territory].[EntityImage] as varbinary(max)),
    [Territory].[EntityImageId],
    [Territory].[EntityImage_Timestamp],
    [Territory].[EntityImage_URL],
    [Territory].[ExchangeRate],
    [Territory].[ImportSequenceNumber],
    [Territory].[ManagerId],
    [Territory].[ManagerIdName],
    [Territory].[ManagerIdYomiName],
    [Territory].[ModifiedBy],
    [Territory].[ModifiedByName],
    [Territory].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Territory].[ModifiedOn],
			us.TimeZoneCode),
        [Territory].[ModifiedOn],
    [Territory].[ModifiedOnBehalfBy],
    [Territory].[ModifiedOnBehalfByName],
    [Territory].[ModifiedOnBehalfByYomiName],
    [Territory].[Name],
    [Territory].[OrganizationId],
    [Territory].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Territory].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Territory].[OverriddenCreatedOn],
    [Territory].[ParentTerritoryId],
    [Territory].[ParentTerritoryIdName],
    [Territory].[TerritoryId],
    [Territory].[TimeZoneRuleVersionNumber],
    [Territory].[TransactionCurrencyId],
    [Territory].[TransactionCurrencyIdName],
    [Territory].[UTCConversionTimeZoneCode],
    [Territory].[VersionNumber]
from Territory
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2013) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Territory].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTerritory] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTerritory] TO [CRMReaderRole]
    AS [dbo];

