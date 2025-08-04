

--
-- report view for fileattachment
--
create view dbo.[FilteredAttachment] 
(
    [createdon],
    [createdonutc],
    [fileattachmentid],
    [filename],
    [filesizeinbytes],
    [iscommittedname],
    [mimetype],
    [objectid],
    [objectidtypecode],
    [objecttypecode],
    [objecttypecodename],
    [regardingfieldname],
    [versionnumber]
) with view_metadata as
select
    dbo.fn_UTCToTzCodeSpecificLocalTime([FileAttachment].[CreatedOn],
			us.TimeZoneCode),
        [FileAttachment].[CreatedOn],
    [FileAttachment].[FileAttachmentId],
    [FileAttachment].[FileName],
    [FileAttachment].[FileSizeInBytes],
    IsCommittedPLTable.Value,
    [FileAttachment].[MimeType],
    [FileAttachment].[ObjectId],
    [FileAttachment].[ObjectIdTypeCode],
    [FileAttachment].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [FileAttachment].[RegardingFieldName],
    [FileAttachment].[VersionNumber]
from FileAttachment
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsCommittedPLTable] on 
		([IsCommittedPLTable].AttributeName = 'iscommitted'
		and [IsCommittedPLTable].ObjectTypeCode = 55
		and [IsCommittedPLTable].AttributeValue = [FileAttachment].[IsCommitted]
		and [IsCommittedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 55
		and [ObjectTypeCodePLTable].AttributeValue = [FileAttachment].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAttachment] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredAttachment] TO [CRMReaderRole]
    AS [dbo];

