

--
-- report view for mailmergetemplate
--
create view dbo.[FilteredMailMergeTemplate] (
    [body],
    [componentstate],
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
    [defaultfilter],
    [description],
    [documentformat],
    [documentformatname],
    [exchangerate],
    [filename],
    [filesize],
    [introducedversion],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [ispersonal],
    [ispersonalname],
    [languagecode],
    [mailmergetemplateid],
    [mailmergetemplateidunique],
    [mailmergetype],
    [mailmergetypename],
    [mimetype],
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
    [overwritetime],
    [overwritetimeutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parameterxml],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [templatetypecode],
    [templatetypecodename],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [MailMergeTemplate].[Body],
    [MailMergeTemplate].[ComponentState],
    [MailMergeTemplate].[CreatedBy],
    --[MailMergeTemplate].[CreatedByDsc]
    0,
    [MailMergeTemplate].[CreatedByName],
    [MailMergeTemplate].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MailMergeTemplate].[CreatedOn],
			us.TimeZoneCode),
        [MailMergeTemplate].[CreatedOn],
    [MailMergeTemplate].[CreatedOnBehalfBy],
    --[MailMergeTemplate].[CreatedOnBehalfByDsc]
    0,
    [MailMergeTemplate].[CreatedOnBehalfByName],
    [MailMergeTemplate].[CreatedOnBehalfByYomiName],
    [MailMergeTemplate].[DefaultFilter],
    [MailMergeTemplate].[Description],
    [MailMergeTemplate].[DocumentFormat],
    DocumentFormatPLTable.Value,
    [MailMergeTemplate].[ExchangeRate],
    [MailMergeTemplate].[FileName],
    [MailMergeTemplate].[FileSize],
    [MailMergeTemplate].[IntroducedVersion],
    [MailMergeTemplate].[IsCustomizable],
    [MailMergeTemplate].[IsManaged],
    IsManagedPLTable.Value,
    [MailMergeTemplate].[IsPersonal],
    IsPersonalPLTable.Value,
    [MailMergeTemplate].[LanguageCode],
    [MailMergeTemplate].[MailMergeTemplateId],
    [MailMergeTemplate].[MailMergeTemplateIdUnique],
    [MailMergeTemplate].[MailMergeType],
    MailMergeTypePLTable.Value,
    [MailMergeTemplate].[MimeType],
    [MailMergeTemplate].[ModifiedBy],
    --[MailMergeTemplate].[ModifiedByDsc]
    0,
    [MailMergeTemplate].[ModifiedByName],
    [MailMergeTemplate].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MailMergeTemplate].[ModifiedOn],
			us.TimeZoneCode),
        [MailMergeTemplate].[ModifiedOn],
    [MailMergeTemplate].[ModifiedOnBehalfBy],
    --[MailMergeTemplate].[ModifiedOnBehalfByDsc]
    0,
    [MailMergeTemplate].[ModifiedOnBehalfByName],
    [MailMergeTemplate].[ModifiedOnBehalfByYomiName],
    [MailMergeTemplate].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MailMergeTemplate].[OverwriteTime],
			us.TimeZoneCode),
        [MailMergeTemplate].[OverwriteTime],
    [MailMergeTemplate].[OwnerId],
    --[MailMergeTemplate].[OwnerIdDsc]
    0,
    [MailMergeTemplate].[OwnerIdName],
    [MailMergeTemplate].[OwnerIdType],
    [MailMergeTemplate].[OwnerIdYomiName],
    [MailMergeTemplate].[OwningBusinessUnit],
    [MailMergeTemplate].[OwningTeam],
    [MailMergeTemplate].[OwningUser],
    [MailMergeTemplate].[ParameterXml],
    [MailMergeTemplate].[SolutionId],
    [MailMergeTemplate].[StateCode],
    StateCodePLTable.Value,
    [MailMergeTemplate].[StatusCode],
    StatusCodePLTable.Value,
    [MailMergeTemplate].[TemplateTypeCode],
    TemplateTypeCodePLTable.Value,
    [MailMergeTemplate].[TimeZoneRuleVersionNumber],
    [MailMergeTemplate].[TransactionCurrencyId],
    [MailMergeTemplate].[TransactionCurrencyIdName],
    [MailMergeTemplate].[UTCConversionTimeZoneCode],
    [MailMergeTemplate].[VersionNumber]
from MailMergeTemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DocumentFormatPLTable] on 
		([DocumentFormatPLTable].AttributeName = 'documentformat'
		and [DocumentFormatPLTable].ObjectTypeCode = 9106
		and [DocumentFormatPLTable].AttributeValue = [MailMergeTemplate].[DocumentFormat]
		and [DocumentFormatPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 9106
		and [IsManagedPLTable].AttributeValue = [MailMergeTemplate].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPersonalPLTable] on 
		([IsPersonalPLTable].AttributeName = 'ispersonal'
		and [IsPersonalPLTable].ObjectTypeCode = 9106
		and [IsPersonalPLTable].AttributeValue = [MailMergeTemplate].[IsPersonal]
		and [IsPersonalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [MailMergeTypePLTable] on 
		([MailMergeTypePLTable].AttributeName = 'mailmergetype'
		and [MailMergeTypePLTable].ObjectTypeCode = 9106
		and [MailMergeTypePLTable].AttributeValue = [MailMergeTemplate].[MailMergeType]
		and [MailMergeTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9106
		and [StateCodePLTable].AttributeValue = [MailMergeTemplate].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9106
		and [StatusCodePLTable].AttributeValue = [MailMergeTemplate].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TemplateTypeCodePLTable] on 
		([TemplateTypeCodePLTable].AttributeName = 'templatetypecode'
		and [TemplateTypeCodePLTable].ObjectTypeCode = 9106
		and [TemplateTypeCodePLTable].AttributeValue = [MailMergeTemplate].[TemplateTypeCode]
		and [TemplateTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9106) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[MailMergeTemplate].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9106
		)
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[MailMergeTemplate].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9106)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[MailMergeTemplate].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[MailMergeTemplate].[MailMergeTemplateId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9106
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMailMergeTemplate] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredMailMergeTemplate] TO [CRMReaderRole]
    AS [dbo];

