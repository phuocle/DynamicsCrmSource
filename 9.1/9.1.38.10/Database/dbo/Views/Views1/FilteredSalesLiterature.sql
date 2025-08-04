

--
-- report view for salesliterature
--
create view dbo.[FilteredSalesLiterature] 
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
    [employeecontactid],
    [employeecontactidname],
    [employeecontactidyominame],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [expirationdate],
    [expirationdateutc],
    [hasattachments],
    [hasattachmentsname],
    [importsequencenumber],
    [iscustomerviewable],
    [iscustomerviewablename],
    [keywords],
    [literaturetypecode],
    [literaturetypecodename],
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
    [processid],
    [salesliteratureid],
    [stageid],
    [subjectid],
    [subjectidname],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [SalesLiterature].[CreatedBy],
    [SalesLiterature].[CreatedByName],
    [SalesLiterature].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiterature].[CreatedOn],
			us.TimeZoneCode),
        [SalesLiterature].[CreatedOn],
    [SalesLiterature].[CreatedOnBehalfBy],
    [SalesLiterature].[CreatedOnBehalfByName],
    [SalesLiterature].[CreatedOnBehalfByYomiName],
    [SalesLiterature].[Description],
    [SalesLiterature].[EmployeeContactId],
    [SalesLiterature].[EmployeeContactIdName],
    [SalesLiterature].[EmployeeContactIdYomiName],
    cast([SalesLiterature].[EntityImage] as varbinary(max)),
    [SalesLiterature].[EntityImageId],
    [SalesLiterature].[EntityImage_Timestamp],
    [SalesLiterature].[EntityImage_URL],
    [SalesLiterature].[ExchangeRate],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiterature].[ExpirationDate],
			us.TimeZoneCode),
        [SalesLiterature].[ExpirationDate],
    [SalesLiterature].[HasAttachments],
    HasAttachmentsPLTable.Value,
    [SalesLiterature].[ImportSequenceNumber],
    [SalesLiterature].[IsCustomerViewable],
    IsCustomerViewablePLTable.Value,
    [SalesLiterature].[KeyWords],
    [SalesLiterature].[LiteratureTypeCode],
    LiteratureTypeCodePLTable.Value,
    [SalesLiterature].[ModifiedBy],
    [SalesLiterature].[ModifiedByName],
    [SalesLiterature].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiterature].[ModifiedOn],
			us.TimeZoneCode),
        [SalesLiterature].[ModifiedOn],
    [SalesLiterature].[ModifiedOnBehalfBy],
    [SalesLiterature].[ModifiedOnBehalfByName],
    [SalesLiterature].[ModifiedOnBehalfByYomiName],
    [SalesLiterature].[Name],
    [SalesLiterature].[OrganizationId],
    [SalesLiterature].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SalesLiterature].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [SalesLiterature].[OverriddenCreatedOn],
    [SalesLiterature].[ProcessId],
    [SalesLiterature].[SalesLiteratureId],
    [SalesLiterature].[StageId],
    [SalesLiterature].[SubjectId],
    [SalesLiterature].[SubjectIdName],
    [SalesLiterature].[TimeZoneRuleVersionNumber],
    [SalesLiterature].[TransactionCurrencyId],
    [SalesLiterature].[TransactionCurrencyIdName],
    [SalesLiterature].[TraversedPath],
    [SalesLiterature].[UTCConversionTimeZoneCode],
    [SalesLiterature].[VersionNumber]
from SalesLiterature
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [HasAttachmentsPLTable] on 
		([HasAttachmentsPLTable].AttributeName = 'hasattachments'
		and [HasAttachmentsPLTable].ObjectTypeCode = 1038
		and [HasAttachmentsPLTable].AttributeValue = [SalesLiterature].[HasAttachments]
		and [HasAttachmentsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsCustomerViewablePLTable] on 
		([IsCustomerViewablePLTable].AttributeName = 'iscustomerviewable'
		and [IsCustomerViewablePLTable].ObjectTypeCode = 1038
		and [IsCustomerViewablePLTable].AttributeValue = [SalesLiterature].[IsCustomerViewable]
		and [IsCustomerViewablePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [LiteratureTypeCodePLTable] on 
		([LiteratureTypeCodePLTable].AttributeName = 'literaturetypecode'
		and [LiteratureTypeCodePLTable].ObjectTypeCode = 1038
		and [LiteratureTypeCodePLTable].AttributeValue = [SalesLiterature].[LiteratureTypeCode]
		and [LiteratureTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1038) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SalesLiterature].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesLiterature] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesLiterature] TO [CRMReaderRole]
    AS [dbo];

