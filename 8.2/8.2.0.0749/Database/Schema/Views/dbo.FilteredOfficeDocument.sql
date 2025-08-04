SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for officedocument
--
create view [dbo].[FilteredOfficeDocument] (
    [clientdata],
    [content],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [documenttype],
    [documenttypename],
    [filelockstate],
    [filesize],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [objectid],
    [objecttypecode],
    [officedocumentid],
    [ownerid],
    [owneridtype],
    [sha256],
    [versionnumber]
) with view_metadata as
select
    [OfficeDocument].[ClientData],
    [OfficeDocument].[Content],
    [OfficeDocument].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OfficeDocument].[CreatedOn],
			us.TimeZoneCode),
        [OfficeDocument].[CreatedOn],
    [OfficeDocument].[CreatedOnBehalfBy],
    [OfficeDocument].[CreatedOnBehalfByName],
    [OfficeDocument].[CreatedOnBehalfByYomiName],
    [OfficeDocument].[DocumentType],
    DocumentTypePLTable.Value,
    [OfficeDocument].[FileLockState],
    [OfficeDocument].[FileSize],
    [OfficeDocument].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OfficeDocument].[ModifiedOn],
			us.TimeZoneCode),
        [OfficeDocument].[ModifiedOn],
    [OfficeDocument].[ModifiedOnBehalfBy],
    [OfficeDocument].[ModifiedOnBehalfByName],
    [OfficeDocument].[ModifiedOnBehalfByYomiName],
    [OfficeDocument].[Name],
    [OfficeDocument].[ObjectId],
    [OfficeDocument].[ObjectTypeCode],
    [OfficeDocument].[OfficeDocumentId],
    [OfficeDocument].[OwnerId],
    [OfficeDocument].[OwnerIdType],
    [OfficeDocument].[SHA256],
    [OfficeDocument].[VersionNumber]
from OfficeDocument
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [DocumentTypePLTable] on 
		([DocumentTypePLTable].AttributeName = 'documenttype'
		and [DocumentTypePLTable].ObjectTypeCode = 4490
		and [DocumentTypePLTable].AttributeValue = [OfficeDocument].[DocumentType]
		and [DocumentTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
GO
GRANT SELECT ON  [dbo].[FilteredOfficeDocument] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredOfficeDocument] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
