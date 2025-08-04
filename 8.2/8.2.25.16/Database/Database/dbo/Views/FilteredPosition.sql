

--
-- report view for position
--
create view dbo.[FilteredPosition] (
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
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
    [name],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentpositionid],
    [parentpositionidname],
    [positionid],
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
    [Position].[CreatedBy],
    [Position].[CreatedByName],
    [Position].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Position].[CreatedOn],
			us.TimeZoneCode),
        [Position].[CreatedOn],
    [Position].[CreatedOnBehalfBy],
    [Position].[CreatedOnBehalfByName],
    [Position].[CreatedOnBehalfByYomiName],
    [Position].[Description],
    [Position].[ExchangeRate],
    [Position].[ImportSequenceNumber],
    [Position].[ModifiedBy],
    [Position].[ModifiedByName],
    [Position].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Position].[ModifiedOn],
			us.TimeZoneCode),
        [Position].[ModifiedOn],
    [Position].[ModifiedOnBehalfBy],
    [Position].[ModifiedOnBehalfByName],
    [Position].[ModifiedOnBehalfByYomiName],
    [Position].[Name],
    [Position].[OrganizationId],
    [Position].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Position].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Position].[OverriddenCreatedOn],
    [Position].[ParentPositionId],
    [Position].[ParentPositionIdName],
    [Position].[PositionId],
    [Position].[statecode],
    statecodePLTable.Value,
    [Position].[StatusCode],
    StatusCodePLTable.Value,
    [Position].[TimeZoneRuleVersionNumber],
    [Position].[TransactionCurrencyId],
    [Position].[TransactionCurrencyIdName],
    [Position].[UTCConversionTimeZoneCode],
    [Position].[VersionNumber]
from Position
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 50
		and [statecodePLTable].AttributeValue = [Position].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 50
		and [StatusCodePLTable].AttributeValue = [Position].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(50) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Position].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPosition] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPosition] TO [CRMReaderRole]
    AS [dbo];

