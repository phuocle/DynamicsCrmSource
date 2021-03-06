USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredPersonalDocumentTemplate]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for personaldocumenttemplate
--
create view [dbo].[FilteredPersonalDocumentTemplate] (
    [associatedentitytypecode],
    [associatedentitytypecodename],
    [clientdata],
    [content],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [documenttype],
    [documenttypename],
    [languagecode],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [personaldocumenttemplateid],
    [status],
    [statusname],
    [versionnumber]
) with view_metadata as
select
    [PersonalDocumentTemplate].[AssociatedEntityTypeCode],
    AssociatedEntityTypeCodePLTable.Value,
    [PersonalDocumentTemplate].[ClientData],
    [PersonalDocumentTemplate].[Content],
    [PersonalDocumentTemplate].[CreatedBy],
    [PersonalDocumentTemplate].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PersonalDocumentTemplate].[CreatedOn],
			us.TimeZoneCode),
        [PersonalDocumentTemplate].[CreatedOn],
    [PersonalDocumentTemplate].[CreatedOnBehalfBy],
    [PersonalDocumentTemplate].[CreatedOnBehalfByName],
    [PersonalDocumentTemplate].[CreatedOnBehalfByYomiName],
    [PersonalDocumentTemplate].[Description],
    [PersonalDocumentTemplate].[DocumentType],
    DocumentTypePLTable.Value,
    [PersonalDocumentTemplate].[LanguageCode],
    [PersonalDocumentTemplate].[ModifiedBy],
    [PersonalDocumentTemplate].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([PersonalDocumentTemplate].[ModifiedOn],
			us.TimeZoneCode),
        [PersonalDocumentTemplate].[ModifiedOn],
    [PersonalDocumentTemplate].[ModifiedOnBehalfBy],
    [PersonalDocumentTemplate].[ModifiedOnBehalfByName],
    [PersonalDocumentTemplate].[ModifiedOnBehalfByYomiName],
    [PersonalDocumentTemplate].[Name],
    [PersonalDocumentTemplate].[OwnerId],
    [PersonalDocumentTemplate].[OwnerIdName],
    [PersonalDocumentTemplate].[OwnerIdType],
    [PersonalDocumentTemplate].[OwningBusinessUnit],
    [PersonalDocumentTemplate].[OwningTeam],
    [PersonalDocumentTemplate].[OwningUser],
    [PersonalDocumentTemplate].[PersonalDocumentTemplateId],
    [PersonalDocumentTemplate].[Status],
    StatusPLTable.Value,
    [PersonalDocumentTemplate].[VersionNumber]
from PersonalDocumentTemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AssociatedEntityTypeCodePLTable] on 
		([AssociatedEntityTypeCodePLTable].AttributeName = 'associatedentitytypecode'
		and [AssociatedEntityTypeCodePLTable].ObjectTypeCode = 9941
		and [AssociatedEntityTypeCodePLTable].AttributeValue = [PersonalDocumentTemplate].[AssociatedEntityTypeCode]
		and [AssociatedEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DocumentTypePLTable] on 
		([DocumentTypePLTable].AttributeName = 'documenttype'
		and [DocumentTypePLTable].ObjectTypeCode = 9941
		and [DocumentTypePLTable].AttributeValue = [PersonalDocumentTemplate].[DocumentType]
		and [DocumentTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusPLTable] on 
		([StatusPLTable].AttributeName = 'status'
		and [StatusPLTable].ObjectTypeCode = 9941
		and [StatusPLTable].AttributeValue = [PersonalDocumentTemplate].[Status]
		and [StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9941) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[PersonalDocumentTemplate].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 9941))
		
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
		[PersonalDocumentTemplate].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9941)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[PersonalDocumentTemplate].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[PersonalDocumentTemplate].[PersonalDocumentTemplateId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 9941))
	)
)

GO
