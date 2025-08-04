

--
-- report view for sharepointdocument
--
create view dbo.[FilteredSharePointDocument] (
    [absoluteurl],
    [appcreatedby],
    [appmodifiedby],
    [author],
    [businessunitid],
    [businessunitidname],
    [checkedoutto],
    [checkincomment],
    [childfoldercount],
    [childitemcount],
    [contenttype],
    [contenttypeid],
    [copysource],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [documentid],
    [documentlocationtype],
    [documentlocationtypename],
    [edit],
    [editurl],
    [exchangerate],
    [filesize],
    [filetype],
    [fullname],
    [iconclassname],
    [ischeckedout],
    [isfolder],
    [isrecursivefetch],
    [locationid],
    [modified],
    [modifiedutc],
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
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [readurl],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [relativelocation],
    [servicetype],
    [servicetypename],
    [sharepointcreatedon],
    [sharepointcreatedonutc],
    [sharepointdocumentid],
    [sharepointmodifiedby],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [version]
) with view_metadata as
select
    [SharePointDocument].[AbsoluteUrl],
    [SharePointDocument].[AppCreatedBy],
    [SharePointDocument].[AppModifiedBy],
    [SharePointDocument].[Author],
    [SharePointDocument].[BusinessUnitId],
    [SharePointDocument].[BusinessUnitIdName],
    [SharePointDocument].[CheckedOutTo],
    [SharePointDocument].[CheckInComment],
    [SharePointDocument].[ChildFolderCount],
    [SharePointDocument].[ChildItemCount],
    [SharePointDocument].[ContentType],
    [SharePointDocument].[ContentTypeId],
    [SharePointDocument].[CopySource],
    [SharePointDocument].[CreatedBy],
    [SharePointDocument].[CreatedByName],
    [SharePointDocument].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocument].[CreatedOn],
			us.TimeZoneCode),
        [SharePointDocument].[CreatedOn],
    [SharePointDocument].[CreatedOnBehalfBy],
    [SharePointDocument].[CreatedOnBehalfByName],
    [SharePointDocument].[CreatedOnBehalfByYomiName],
    [SharePointDocument].[DocumentId],
    [SharePointDocument].[DocumentLocationType],
    DocumentLocationTypePLTable.Value,
    [SharePointDocument].[Edit],
    [SharePointDocument].[EditUrl],
    [SharePointDocument].[ExchangeRate],
    [SharePointDocument].[FileSize],
    [SharePointDocument].[FileType],
    [SharePointDocument].[FullName],
    [SharePointDocument].[IconClassName],
    [SharePointDocument].[IsCheckedOut],
    [SharePointDocument].[IsFolder],
    [SharePointDocument].[IsRecursiveFetch],
    [SharePointDocument].[LocationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocument].[Modified],
			us.TimeZoneCode),
        [SharePointDocument].[Modified],
    [SharePointDocument].[ModifiedBy],
    [SharePointDocument].[ModifiedByName],
    [SharePointDocument].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocument].[ModifiedOn],
			us.TimeZoneCode),
        [SharePointDocument].[ModifiedOn],
    [SharePointDocument].[ModifiedOnBehalfBy],
    [SharePointDocument].[ModifiedOnBehalfByName],
    [SharePointDocument].[ModifiedOnBehalfByYomiName],
    [SharePointDocument].[OrganizationId],
    [SharePointDocument].[OrganizationIdName],
    [SharePointDocument].[OwnerId],
    [SharePointDocument].[OwnerIdName],
    [SharePointDocument].[OwnerIdType],
    [SharePointDocument].[OwnerIdYomiName],
    [SharePointDocument].[OwningBusinessUnit],
    [SharePointDocument].[OwningTeam],
    [SharePointDocument].[OwningUser],
    [SharePointDocument].[ReadUrl],
    [SharePointDocument].[RegardingObjectId],
    [SharePointDocument].[RegardingObjectIdName],
    [SharePointDocument].[RegardingObjectIdYomiName],
    [SharePointDocument].[RegardingObjectTypeCode],
    [SharePointDocument].[RelativeLocation],
    [SharePointDocument].[ServiceType],
    ServiceTypePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([SharePointDocument].[SharePointCreatedOn],
			us.TimeZoneCode),
        [SharePointDocument].[SharePointCreatedOn],
    [SharePointDocument].[SharePointDocumentId],
    [SharePointDocument].[SharePointModifiedBy],
    [SharePointDocument].[Title],
    [SharePointDocument].[TransactionCurrencyId],
    [SharePointDocument].[TransactionCurrencyIdName],
    [SharePointDocument].[Version]
from SharePointDocument
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DocumentLocationTypePLTable] on 
		([DocumentLocationTypePLTable].AttributeName = 'documentlocationtype'
		and [DocumentLocationTypePLTable].ObjectTypeCode = 9507
		and [DocumentLocationTypePLTable].AttributeValue = [SharePointDocument].[DocumentLocationType]
		and [DocumentLocationTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ServiceTypePLTable] on 
		([ServiceTypePLTable].AttributeName = 'servicetype'
		and [ServiceTypePLTable].ObjectTypeCode = 9507
		and [ServiceTypePLTable].AttributeValue = [SharePointDocument].[ServiceType]
		and [ServiceTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9507) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[SharePointDocument].OwnerId in 
		( -- returns only principals with Basic Read privilege for entity
			select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9507
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
		[SharePointDocument].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9507)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[SharePointDocument].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[SharePointDocument].[SharePointDocumentId] in 
		(
			select POA.ObjectId from PrincipalObjectAccess POA WITH (NOLOCK)
			join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId
				and POA.ObjectTypeCode = 9507
				and ((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSharePointDocument] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSharePointDocument] TO [CRMReaderRole]
    AS [dbo];

