

--
-- report view for metric
--
create view dbo.[FilteredMetric] (
    [amountdatatype],
    [amountdatatypename],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [importsequencenumber],
    [isamount],
    [isamountname],
    [isstretchtracked],
    [isstretchtrackedname],
    [metricid],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
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
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [Metric].[AmountDataType],
    AmountDataTypePLTable.Value,
    [Metric].[CreatedBy],
    [Metric].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Metric].[CreatedOn],
			us.TimeZoneCode),
        [Metric].[CreatedOn],
    [Metric].[CreatedOnBehalfBy],
    --[Metric].[CreatedOnBehalfByDsc]
    0,
    [Metric].[CreatedOnBehalfByName],
    [Metric].[CreatedOnBehalfByYomiName],
    [Metric].[Description],
    [Metric].[ImportSequenceNumber],
    [Metric].[IsAmount],
    IsAmountPLTable.Value,
    [Metric].[IsStretchTracked],
    IsStretchTrackedPLTable.Value,
    [Metric].[MetricId],
    [Metric].[ModifiedBy],
    [Metric].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Metric].[ModifiedOn],
			us.TimeZoneCode),
        [Metric].[ModifiedOn],
    [Metric].[ModifiedOnBehalfBy],
    --[Metric].[ModifiedOnBehalfByDsc]
    0,
    [Metric].[ModifiedOnBehalfByName],
    [Metric].[ModifiedOnBehalfByYomiName],
    [Metric].[Name],
    [Metric].[OrganizationId],
    [Metric].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Metric].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Metric].[OverriddenCreatedOn],
    [Metric].[StateCode],
    StateCodePLTable.Value,
    [Metric].[StatusCode],
    StatusCodePLTable.Value,
    [Metric].[TimeZoneRuleVersionNumber],
    [Metric].[UTCConversionTimeZoneCode],
    [Metric].[VersionNumber]
from Metric
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AmountDataTypePLTable] on 
		([AmountDataTypePLTable].AttributeName = 'amountdatatype'
		and [AmountDataTypePLTable].ObjectTypeCode = 9603
		and [AmountDataTypePLTable].AttributeValue = [Metric].[AmountDataType]
		and [AmountDataTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsAmountPLTable] on 
		([IsAmountPLTable].AttributeName = 'isamount'
		and [IsAmountPLTable].ObjectTypeCode = 9603
		and [IsAmountPLTable].AttributeValue = [Metric].[IsAmount]
		and [IsAmountPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsStretchTrackedPLTable] on 
		([IsStretchTrackedPLTable].AttributeName = 'isstretchtracked'
		and [IsStretchTrackedPLTable].ObjectTypeCode = 9603
		and [IsStretchTrackedPLTable].AttributeValue = [Metric].[IsStretchTracked]
		and [IsStretchTrackedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9603
		and [StateCodePLTable].AttributeValue = [Metric].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9603
		and [StatusCodePLTable].AttributeValue = [Metric].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9603) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [Metric].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMetric] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMetric] TO [CRMReaderRole]
    AS [dbo];

