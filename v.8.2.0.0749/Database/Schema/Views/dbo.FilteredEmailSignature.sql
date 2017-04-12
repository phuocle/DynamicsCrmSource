SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for emailsignature
--
create view [dbo].[FilteredEmailSignature] (
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
    [description],
    [emailsignatureid],
    [generationtypecode],
    [importsequencenumber],
    [iscustomizable],
    [isdefault],
    [isdefaultname],
    [ispersonal],
    [ispersonalname],
    [languagecode],
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
    [overriddencreatedon],
    [overriddencreatedonutc],
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
    [presentationxml],
    [title]
) with view_metadata as
select
    [EmailSignature].[Body],
    [EmailSignature].[ComponentState],
    [EmailSignature].[CreatedBy],
    --[EmailSignature].[CreatedByDsc]
    0,
    [EmailSignature].[CreatedByName],
    [EmailSignature].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[CreatedOn],
			us.TimeZoneCode),
        [EmailSignature].[CreatedOn],
    [EmailSignature].[CreatedOnBehalfBy],
    --[EmailSignature].[CreatedOnBehalfByDsc]
    0,
    [EmailSignature].[CreatedOnBehalfByName],
    [EmailSignature].[CreatedOnBehalfByYomiName],
    [EmailSignature].[Description],
    [EmailSignature].[EmailSignatureId],
    [EmailSignature].[GenerationTypeCode],
    [EmailSignature].[ImportSequenceNumber],
    [EmailSignature].[IsCustomizable],
    [EmailSignature].[IsDefault],
    IsDefaultPLTable.Value,
    [EmailSignature].[IsPersonal],
    IsPersonalPLTable.Value,
    [EmailSignature].[LanguageCode],
    [EmailSignature].[MimeType],
    [EmailSignature].[ModifiedBy],
    --[EmailSignature].[ModifiedByDsc]
    0,
    [EmailSignature].[ModifiedByName],
    [EmailSignature].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[ModifiedOn],
			us.TimeZoneCode),
        [EmailSignature].[ModifiedOn],
    [EmailSignature].[ModifiedOnBehalfBy],
    --[EmailSignature].[ModifiedOnBehalfByDsc]
    0,
    [EmailSignature].[ModifiedOnBehalfByName],
    [EmailSignature].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [EmailSignature].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([EmailSignature].[OverwriteTime],
			us.TimeZoneCode),
        [EmailSignature].[OverwriteTime],
    [EmailSignature].[OwnerId],
    --[EmailSignature].[OwnerIdDsc]
    0,
    [EmailSignature].[OwnerIdName],
    [EmailSignature].[OwnerIdType],
    [EmailSignature].[OwnerIdYomiName],
    [EmailSignature].[OwningBusinessUnit],
    [EmailSignature].[OwningTeam],
    [EmailSignature].[OwningUser],
    [EmailSignature].[PresentationXml],
    [EmailSignature].[Title]
from EmailSignature
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 9997
		and [IsDefaultPLTable].AttributeValue = [EmailSignature].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPersonalPLTable] on 
		([IsPersonalPLTable].AttributeName = 'ispersonal'
		and [IsPersonalPLTable].ObjectTypeCode = 9997
		and [IsPersonalPLTable].AttributeValue = [EmailSignature].[IsPersonal]
		and [IsPersonalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9997) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[EmailSignature].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9997))
		
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
		[EmailSignature].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9997)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[EmailSignature].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[EmailSignature].[EmailSignatureId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9997))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredEmailSignature] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredEmailSignature] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
