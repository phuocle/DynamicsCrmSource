

--
-- report view for discounttype
--
create view dbo.[FilteredDiscountType] 
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
    [discounttypeid],
    [importsequencenumber],
    [isamounttype],
    [isamounttypename],
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
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [DiscountType].[CreatedBy],
    [DiscountType].[CreatedByName],
    [DiscountType].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DiscountType].[CreatedOn],
			us.TimeZoneCode),
        [DiscountType].[CreatedOn],
    [DiscountType].[CreatedOnBehalfBy],
    [DiscountType].[CreatedOnBehalfByName],
    [DiscountType].[CreatedOnBehalfByYomiName],
    [DiscountType].[Description],
    [DiscountType].[DiscountTypeId],
    [DiscountType].[ImportSequenceNumber],
    [DiscountType].[IsAmountType],
    IsAmountTypePLTable.Value,
    [DiscountType].[ModifiedBy],
    [DiscountType].[ModifiedByName],
    [DiscountType].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DiscountType].[ModifiedOn],
			us.TimeZoneCode),
        [DiscountType].[ModifiedOn],
    [DiscountType].[ModifiedOnBehalfBy],
    [DiscountType].[ModifiedOnBehalfByName],
    [DiscountType].[ModifiedOnBehalfByYomiName],
    [DiscountType].[Name],
    [DiscountType].[OrganizationId],
    [DiscountType].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DiscountType].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [DiscountType].[OverriddenCreatedOn],
    [DiscountType].[StateCode],
    StateCodePLTable.Value,
    [DiscountType].[StatusCode],
    StatusCodePLTable.Value,
    [DiscountType].[TimeZoneRuleVersionNumber],
    [DiscountType].[TransactionCurrencyId],
    [DiscountType].[TransactionCurrencyIdName],
    [DiscountType].[UTCConversionTimeZoneCode],
    [DiscountType].[VersionNumber]
from DiscountType
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsAmountTypePLTable] on 
		([IsAmountTypePLTable].AttributeName = 'isamounttype'
		and [IsAmountTypePLTable].ObjectTypeCode = 1080
		and [IsAmountTypePLTable].AttributeValue = [DiscountType].[IsAmountType]
		and [IsAmountTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1080
		and [StateCodePLTable].AttributeValue = [DiscountType].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1080
		and [StatusCodePLTable].AttributeValue = [DiscountType].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1080) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [DiscountType].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredDiscountType] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredDiscountType] TO [CRMReaderRole]
    AS [dbo];

