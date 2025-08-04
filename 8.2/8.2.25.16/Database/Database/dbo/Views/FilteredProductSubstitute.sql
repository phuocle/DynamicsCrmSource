

--
-- report view for productsubstitute
--
create view dbo.[FilteredProductSubstitute] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [direction],
    [directionname],
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
    [productid],
    [productidname],
    [productsubstituteid],
    [salesrelationshiptype],
    [salesrelationshiptypename],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [substitutedproductid],
    [substitutedproductidname],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ProductSubstitute].[CreatedBy],
    [ProductSubstitute].[CreatedByName],
    [ProductSubstitute].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductSubstitute].[CreatedOn],
			us.TimeZoneCode),
        [ProductSubstitute].[CreatedOn],
    [ProductSubstitute].[CreatedOnBehalfBy],
    [ProductSubstitute].[CreatedOnBehalfByName],
    [ProductSubstitute].[CreatedOnBehalfByYomiName],
    [ProductSubstitute].[Direction],
    DirectionPLTable.Value,
    [ProductSubstitute].[ExchangeRate],
    [ProductSubstitute].[ImportSequenceNumber],
    [ProductSubstitute].[ModifiedBy],
    [ProductSubstitute].[ModifiedByName],
    [ProductSubstitute].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductSubstitute].[ModifiedOn],
			us.TimeZoneCode),
        [ProductSubstitute].[ModifiedOn],
    [ProductSubstitute].[ModifiedOnBehalfBy],
    [ProductSubstitute].[ModifiedOnBehalfByName],
    [ProductSubstitute].[ModifiedOnBehalfByYomiName],
    [ProductSubstitute].[OrganizationId],
    [ProductSubstitute].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductSubstitute].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ProductSubstitute].[OverriddenCreatedOn],
    [ProductSubstitute].[ProductId],
    [ProductSubstitute].[ProductIdName],
    [ProductSubstitute].[ProductSubstituteId],
    [ProductSubstitute].[SalesRelationshipType],
    SalesRelationshipTypePLTable.Value,
    [ProductSubstitute].[statecode],
    statecodePLTable.Value,
    [ProductSubstitute].[statuscode],
    statuscodePLTable.Value,
    [ProductSubstitute].[SubstitutedProductId],
    [ProductSubstitute].[SubstitutedProductIdName],
    [ProductSubstitute].[TimeZoneRuleVersionNumber],
    [ProductSubstitute].[TransactionCurrencyId],
    [ProductSubstitute].[TransactionCurrencyIdName],
    [ProductSubstitute].[UTCConversionTimeZoneCode],
    [ProductSubstitute].[VersionNumber]
from ProductSubstitute
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DirectionPLTable] on 
		([DirectionPLTable].AttributeName = 'direction'
		and [DirectionPLTable].ObjectTypeCode = 1028
		and [DirectionPLTable].AttributeValue = [ProductSubstitute].[Direction]
		and [DirectionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesRelationshipTypePLTable] on 
		([SalesRelationshipTypePLTable].AttributeName = 'salesrelationshiptype'
		and [SalesRelationshipTypePLTable].ObjectTypeCode = 1028
		and [SalesRelationshipTypePLTable].AttributeValue = [ProductSubstitute].[SalesRelationshipType]
		and [SalesRelationshipTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 1028
		and [statecodePLTable].AttributeValue = [ProductSubstitute].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 1028
		and [statuscodePLTable].AttributeValue = [ProductSubstitute].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1024) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ProductSubstitute].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSubstitute] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProductSubstitute] TO [CRMReaderRole]
    AS [dbo];

