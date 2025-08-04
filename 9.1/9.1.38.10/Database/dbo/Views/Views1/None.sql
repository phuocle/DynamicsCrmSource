

--
-- report view for dynamicpropertyoptionsetitem
--
create view dbo.[None] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [dynamicpropertyid],
    [dynamicpropertyidname],
    [dynamicpropertyoptiondescription],
    [dynamicpropertyoptionname],
    [dynamicpropertyoptionsetvalueid],
    [dynamicpropertyoptionsetvaluesequencenumber],
    [dynamicpropertyoptionvalue],
    [exchangerate],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [DynamicPropertyOptionSetItem].[CreatedBy],
    [DynamicPropertyOptionSetItem].[CreatedByName],
    [DynamicPropertyOptionSetItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DynamicPropertyOptionSetItem].[CreatedOn],
			us.TimeZoneCode),
        [DynamicPropertyOptionSetItem].[CreatedOn],
    [DynamicPropertyOptionSetItem].[CreatedOnBehalfBy],
    [DynamicPropertyOptionSetItem].[CreatedOnBehalfByName],
    [DynamicPropertyOptionSetItem].[CreatedOnBehalfByYomiName],
    [DynamicPropertyOptionSetItem].[DynamicPropertyId],
    [DynamicPropertyOptionSetItem].[DynamicPropertyIdName],
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([DynamicPropertyOptionSetItem].[DynamicPropertyOptionSetValueId], 'dynamicpropertyoptiondescription', 1049, us.UILanguageId), [DynamicPropertyOptionSetItem].[DynamicPropertyOptionDescription]),
    coalesce(dbo.fn_GetBusinessDataLocalizedLabel([DynamicPropertyOptionSetItem].[DynamicPropertyOptionSetValueId], 'dynamicpropertyoptionname', 1049, us.UILanguageId), [DynamicPropertyOptionSetItem].[DynamicPropertyOptionName]),
    [DynamicPropertyOptionSetItem].[DynamicPropertyOptionSetValueId],
    [DynamicPropertyOptionSetItem].[DynamicPropertyOptionSetValueSequenceNumber],
    [DynamicPropertyOptionSetItem].[DynamicPropertyOptionValue],
    [DynamicPropertyOptionSetItem].[ExchangeRate],
    [DynamicPropertyOptionSetItem].[ImportSequenceNumber],
    [DynamicPropertyOptionSetItem].[ModifiedBy],
    [DynamicPropertyOptionSetItem].[ModifiedByName],
    [DynamicPropertyOptionSetItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DynamicPropertyOptionSetItem].[ModifiedOn],
			us.TimeZoneCode),
        [DynamicPropertyOptionSetItem].[ModifiedOn],
    [DynamicPropertyOptionSetItem].[ModifiedOnBehalfBy],
    [DynamicPropertyOptionSetItem].[ModifiedOnBehalfByName],
    [DynamicPropertyOptionSetItem].[ModifiedOnBehalfByYomiName],
    [DynamicPropertyOptionSetItem].[OrganizationId],
    [DynamicPropertyOptionSetItem].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DynamicPropertyOptionSetItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [DynamicPropertyOptionSetItem].[OverriddenCreatedOn],
    [DynamicPropertyOptionSetItem].[TimeZoneRuleVersionNumber],
    [DynamicPropertyOptionSetItem].[TransactionCurrencyId],
    [DynamicPropertyOptionSetItem].[TransactionCurrencyIdName],
    [DynamicPropertyOptionSetItem].[UTCConversionTimeZoneCode],
    [DynamicPropertyOptionSetItem].[VersionNumber]
from DynamicPropertyOptionSetItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1049) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [DynamicPropertyOptionSetItem].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[None] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[None] TO [CRMReaderRole]
    AS [dbo];

