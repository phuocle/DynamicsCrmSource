

--
-- report view for documenttemplate
--
create view dbo.[FilteredDocumentTemplate] (
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
    [documenttemplateid],
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
    [organizationid],
    [organizationidname],
    [status],
    [statusname],
    [versionnumber]
) with view_metadata as
select
    [DocumentTemplate].[AssociatedEntityTypeCode],
    AssociatedEntityTypeCodePLTable.Value,
    [DocumentTemplate].[ClientData],
    [DocumentTemplate].[Content],
    [DocumentTemplate].[CreatedBy],
    [DocumentTemplate].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DocumentTemplate].[CreatedOn],
			us.TimeZoneCode),
        [DocumentTemplate].[CreatedOn],
    [DocumentTemplate].[CreatedOnBehalfBy],
    [DocumentTemplate].[CreatedOnBehalfByName],
    [DocumentTemplate].[CreatedOnBehalfByYomiName],
    [DocumentTemplate].[Description],
    [DocumentTemplate].[DocumentTemplateId],
    [DocumentTemplate].[DocumentType],
    DocumentTypePLTable.Value,
    [DocumentTemplate].[LanguageCode],
    [DocumentTemplate].[ModifiedBy],
    [DocumentTemplate].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([DocumentTemplate].[ModifiedOn],
			us.TimeZoneCode),
        [DocumentTemplate].[ModifiedOn],
    [DocumentTemplate].[ModifiedOnBehalfBy],
    [DocumentTemplate].[ModifiedOnBehalfByName],
    [DocumentTemplate].[ModifiedOnBehalfByYomiName],
    [DocumentTemplate].[Name],
    [DocumentTemplate].[OrganizationId],
    [DocumentTemplate].[OrganizationIdName],
    [DocumentTemplate].[Status],
    StatusPLTable.Value,
    [DocumentTemplate].[VersionNumber]
from DocumentTemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AssociatedEntityTypeCodePLTable] on 
		([AssociatedEntityTypeCodePLTable].AttributeName = 'associatedentitytypecode'
		and [AssociatedEntityTypeCodePLTable].ObjectTypeCode = 9940
		and [AssociatedEntityTypeCodePLTable].AttributeValue = [DocumentTemplate].[AssociatedEntityTypeCode]
		and [AssociatedEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DocumentTypePLTable] on 
		([DocumentTypePLTable].AttributeName = 'documenttype'
		and [DocumentTypePLTable].ObjectTypeCode = 9940
		and [DocumentTypePLTable].AttributeValue = [DocumentTemplate].[DocumentType]
		and [DocumentTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusPLTable] on 
		([StatusPLTable].AttributeName = 'status'
		and [StatusPLTable].ObjectTypeCode = 9940
		and [StatusPLTable].AttributeValue = [DocumentTemplate].[Status]
		and [StatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9940) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [DocumentTemplate].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredDocumentTemplate] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredDocumentTemplate] TO [CRMReaderRole]
    AS [dbo];

