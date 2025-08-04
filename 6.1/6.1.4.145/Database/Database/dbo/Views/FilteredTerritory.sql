

--
-- report view for territory
--
create view dbo.[FilteredTerritory] (
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
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
    [manageriddsc],
    [manageridname],
    [manageridyominame],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [territoryid],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [versionnumber]
) with view_metadata as
select
    [Territory].[CreatedBy],
    --[Territory].[CreatedByDsc]
    0,
    [Territory].[CreatedByName],
    [Territory].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Territory].[CreatedOn],
			us.TimeZoneCode),
        [Territory].[CreatedOn],
    [Territory].[CreatedOnBehalfBy],
    --[Territory].[CreatedOnBehalfByDsc]
    0,
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
    --[Territory].[ManagerIdDsc]
    0,
    [Territory].[ManagerIdName],
    [Territory].[ManagerIdYomiName],
    [Territory].[ModifiedBy],
    --[Territory].[ModifiedByDsc]
    0,
    [Territory].[ModifiedByName],
    [Territory].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Territory].[ModifiedOn],
			us.TimeZoneCode),
        [Territory].[ModifiedOn],
    [Territory].[ModifiedOnBehalfBy],
    --[Territory].[ModifiedOnBehalfByDsc]
    0,
    [Territory].[ModifiedOnBehalfByName],
    [Territory].[ModifiedOnBehalfByYomiName],
    [Territory].[Name],
    [Territory].[OrganizationId],
    --[Territory].[OrganizationIdDsc]
    0,
    [Territory].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Territory].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Territory].[OverriddenCreatedOn],
    [Territory].[TerritoryId],
    [Territory].[TransactionCurrencyId],
    [Territory].[TransactionCurrencyIdName],
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
    ON OBJECT::[dbo].[FilteredTerritory] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredTerritory] TO [CRMReaderRole]
    AS [dbo];

