

--
-- report view for salesliteratureitem
--
create view dbo.[FilteredSalesLiteratureItem] (
    [abstract],
    [attacheddocumenturl],
    [authorname],
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
    [organizationid],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [salesliteratureid],
    [salesliteratureitemid],
    [title],
    [versionnumber]
) with view_metadata as
select
    [SalesLiteratureItem].[Abstract],
    [SalesLiteratureItem].[AttachedDocumentUrl],
    [SalesLiteratureItem].[AuthorName],
    [SalesLiteratureItem].[CreatedBy],
    --[SalesLiteratureItem].[CreatedByDsc]
    0,
    [SalesLiteratureItem].[CreatedByName],
    [SalesLiteratureItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiteratureItem].[CreatedOn],
			us.TimeZoneCode),
        [SalesLiteratureItem].[CreatedOn],
    [SalesLiteratureItem].[CreatedOnBehalfBy],
    --[SalesLiteratureItem].[CreatedOnBehalfByDsc]
    0,
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
    [SalesLiteratureItem].[ModifiedBy],
    --[SalesLiteratureItem].[ModifiedByDsc]
    0,
    [SalesLiteratureItem].[ModifiedByName],
    [SalesLiteratureItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiteratureItem].[ModifiedOn],
			us.TimeZoneCode),
        [SalesLiteratureItem].[ModifiedOn],
    [SalesLiteratureItem].[ModifiedOnBehalfBy],
    --[SalesLiteratureItem].[ModifiedOnBehalfByDsc]
    0,
    [SalesLiteratureItem].[ModifiedOnBehalfByName],
    [SalesLiteratureItem].[ModifiedOnBehalfByYomiName],
    [SalesLiteratureItem].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiteratureItem].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SalesLiteratureItem].[OverriddenCreatedOn],
    [SalesLiteratureItem].[SalesLiteratureId],
    [SalesLiteratureItem].[SalesLiteratureItemId],
    [SalesLiteratureItem].[Title],
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
    ON OBJECT::[dbo].[FilteredSalesLiteratureItem] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesLiteratureItem] TO [CRMReaderRole]
    AS [dbo];

