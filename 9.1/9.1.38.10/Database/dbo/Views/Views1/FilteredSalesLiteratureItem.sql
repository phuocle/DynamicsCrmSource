

--
-- report view for salesliteratureitem
--
create view dbo.[FilteredSalesLiteratureItem] 
(
    [abstract],
    [attacheddocumenturl],
    [authorname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [documentbody],
    [filename],
    [filesize],
    [filetypecode],
    [filetypecodename],
    [importsequencenumber],
    [iscustomerviewable],
    [iscustomerviewablename],
    [keywords],
    [mimetype],
    [mode],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [salesliteratureid],
    [salesliteratureidname],
    [salesliteratureitemid],
    [timezoneruleversionnumber],
    [title],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [SalesLiteratureItem].[Abstract],
    [SalesLiteratureItem].[AttachedDocumentUrl],
    [SalesLiteratureItem].[AuthorName],
    [SalesLiteratureItem].[CreatedBy],
    [SalesLiteratureItem].[CreatedByName],
    [SalesLiteratureItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiteratureItem].[CreatedOn],
			us.TimeZoneCode),
        [SalesLiteratureItem].[CreatedOn],
    [SalesLiteratureItem].[CreatedOnBehalfBy],
    [SalesLiteratureItem].[CreatedOnBehalfByName],
    [SalesLiteratureItem].[CreatedOnBehalfByYomiName],
    [SalesLiteratureItem].[DocumentBody],
    [SalesLiteratureItem].[FileName],
    [SalesLiteratureItem].[FileSize],
    [SalesLiteratureItem].[FileTypeCode],
    FileTypeCodePLTable.Value,
    [SalesLiteratureItem].[ImportSequenceNumber],
    [SalesLiteratureItem].[IsCustomerViewable],
    IsCustomerViewablePLTable.Value,
    [SalesLiteratureItem].[KeyWords],
    [SalesLiteratureItem].[MimeType],
    [SalesLiteratureItem].[Mode],
    [SalesLiteratureItem].[ModifiedBy],
    [SalesLiteratureItem].[ModifiedByName],
    [SalesLiteratureItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiteratureItem].[ModifiedOn],
			us.TimeZoneCode),
        [SalesLiteratureItem].[ModifiedOn],
    [SalesLiteratureItem].[ModifiedOnBehalfBy],
    [SalesLiteratureItem].[ModifiedOnBehalfByName],
    [SalesLiteratureItem].[ModifiedOnBehalfByYomiName],
    [SalesLiteratureItem].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiteratureItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SalesLiteratureItem].[OverriddenCreatedOn],
    [SalesLiteratureItem].[SalesLiteratureId],
    [SalesLiteratureItem].[SalesLiteratureIdName],
    [SalesLiteratureItem].[SalesLiteratureItemId],
    [SalesLiteratureItem].[TimeZoneRuleVersionNumber],
    [SalesLiteratureItem].[Title],
    [SalesLiteratureItem].[UTCConversionTimeZoneCode],
    [SalesLiteratureItem].[VersionNumber]
from SalesLiteratureItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [FileTypeCodePLTable] on 
		([FileTypeCodePLTable].AttributeName = 'filetypecode'
		and [FileTypeCodePLTable].ObjectTypeCode = 1070
		and [FileTypeCodePLTable].AttributeValue = [SalesLiteratureItem].[FileTypeCode]
		and [FileTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsCustomerViewablePLTable] on 
		([IsCustomerViewablePLTable].AttributeName = 'iscustomerviewable'
		and [IsCustomerViewablePLTable].ObjectTypeCode = 1070
		and [IsCustomerViewablePLTable].AttributeValue = [SalesLiteratureItem].[IsCustomerViewable]
		and [IsCustomerViewablePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1038) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SalesLiteratureItem].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesLiteratureItem] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesLiteratureItem] TO [CRMReaderRole]
    AS [dbo];

