

--
-- report view for entitlementtemplatechannel
--
create view dbo.[FilteredEntitlementTemplateChannel] 
(
    [channel],
    [channelname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entitlementtemplatechannelid],
    [entitlementtemplateid],
    [entitlementtemplateidname],
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
    [timezoneruleversionnumber],
    [totalterms],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [EntitlementTemplateChannel].[Channel],
    ChannelPLTable.Value,
    [EntitlementTemplateChannel].[CreatedBy],
    [EntitlementTemplateChannel].[CreatedByName],
    [EntitlementTemplateChannel].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementTemplateChannel].[CreatedOn],
			us.TimeZoneCode),
        [EntitlementTemplateChannel].[CreatedOn],
    [EntitlementTemplateChannel].[CreatedOnBehalfBy],
    [EntitlementTemplateChannel].[CreatedOnBehalfByName],
    [EntitlementTemplateChannel].[CreatedOnBehalfByYomiName],
    [EntitlementTemplateChannel].[EntitlementTemplateChannelId],
    [EntitlementTemplateChannel].[EntitlementTemplateId],
    [EntitlementTemplateChannel].[EntitlementTemplateIdName],
    [EntitlementTemplateChannel].[ExchangeRate],
    [EntitlementTemplateChannel].[ImportSequenceNumber],
    [EntitlementTemplateChannel].[ModifiedBy],
    [EntitlementTemplateChannel].[ModifiedByName],
    [EntitlementTemplateChannel].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementTemplateChannel].[ModifiedOn],
			us.TimeZoneCode),
        [EntitlementTemplateChannel].[ModifiedOn],
    [EntitlementTemplateChannel].[ModifiedOnBehalfBy],
    [EntitlementTemplateChannel].[ModifiedOnBehalfByName],
    [EntitlementTemplateChannel].[ModifiedOnBehalfByYomiName],
    [EntitlementTemplateChannel].[Name],
    [EntitlementTemplateChannel].[OrganizationId],
    [EntitlementTemplateChannel].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EntitlementTemplateChannel].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [EntitlementTemplateChannel].[OverriddenCreatedOn],
    [EntitlementTemplateChannel].[TimeZoneRuleVersionNumber],
    [EntitlementTemplateChannel].[TotalTerms],
    [EntitlementTemplateChannel].[TransactionCurrencyId],
    [EntitlementTemplateChannel].[TransactionCurrencyIdName],
    [EntitlementTemplateChannel].[UTCConversionTimeZoneCode],
    [EntitlementTemplateChannel].[VersionNumber]
from EntitlementTemplateChannel
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ChannelPLTable] on 
		([ChannelPLTable].AttributeName = 'channel'
		and [ChannelPLTable].ObjectTypeCode = 9703
		and [ChannelPLTable].AttributeValue = [EntitlementTemplateChannel].[Channel]
		and [ChannelPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9702) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [EntitlementTemplateChannel].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateChannel] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredEntitlementTemplateChannel] TO [CRMReaderRole]
    AS [dbo];

