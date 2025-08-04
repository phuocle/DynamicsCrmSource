

--
-- report view for officegraphdocument
--
create view dbo.[FilteredOfficegraphdocument] (
    [authornames],
    [createdby],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [createdtime],
    [createdtimeutc],
    [documentid],
    [documentlastmodifiedby],
    [documentlastmodifiedon],
    [documentlastmodifiedonutc],
    [documentpreviewmetadata],
    [exchangerate],
    [fileextension],
    [filetype],
    [modifiedby],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [modifiedtime],
    [modifiedtimeutc],
    [officegraphdocumentid],
    [organizationid],
    [organizationidname],
    [previewimageurl],
    [querytype],
    [rank],
    [readurl],
    [secondaryfileextension],
    [sitetitle],
    [siteurl],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [versionnumber],
    [viewcount],
    [weblocationurl]
) with view_metadata as
select
    [OfficeGraphDocument].[AuthorNames],
    [OfficeGraphDocument].[CreatedBy],
    [OfficeGraphDocument].[CreatedOnBehalfBy],
    [OfficeGraphDocument].[CreatedOnBehalfByName],
    [OfficeGraphDocument].[CreatedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OfficeGraphDocument].[CreatedTime],
			us.TimeZoneCode),
        [OfficeGraphDocument].[CreatedTime],
    [OfficeGraphDocument].[DocumentId],
    [OfficeGraphDocument].[DocumentLastModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OfficeGraphDocument].[DocumentLastModifiedOn],
			us.TimeZoneCode),
        [OfficeGraphDocument].[DocumentLastModifiedOn],
    [OfficeGraphDocument].[DocumentPreviewMetadata],
    [OfficeGraphDocument].[ExchangeRate],
    [OfficeGraphDocument].[FileExtension],
    [OfficeGraphDocument].[FileType],
    [OfficeGraphDocument].[ModifiedBy],
    [OfficeGraphDocument].[ModifiedOnBehalfBy],
    [OfficeGraphDocument].[ModifiedOnBehalfByName],
    [OfficeGraphDocument].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([OfficeGraphDocument].[ModifiedTime],
			us.TimeZoneCode),
        [OfficeGraphDocument].[ModifiedTime],
    [OfficeGraphDocument].[OfficeGraphDocumentId],
    [OfficeGraphDocument].[OrganizationId],
    [OfficeGraphDocument].[OrganizationIdName],
    [OfficeGraphDocument].[PreviewImageUrl],
    [OfficeGraphDocument].[QueryType],
    [OfficeGraphDocument].[Rank],
    [OfficeGraphDocument].[ReadUrl],
    [OfficeGraphDocument].[SecondaryFileExtension],
    [OfficeGraphDocument].[SiteTitle],
    [OfficeGraphDocument].[SiteUrl],
    [OfficeGraphDocument].[TimeZoneRuleVersionNumber],
    [OfficeGraphDocument].[Title],
    [OfficeGraphDocument].[TransactionCurrencyId],
    [OfficeGraphDocument].[TransactionCurrencyIdName],
    [OfficeGraphDocument].[UTCConversionTimeZoneCode],
    [OfficeGraphDocument].[VersionNumber],
    [OfficeGraphDocument].[ViewCount],
    [OfficeGraphDocument].[WebLocationUrl]
from OfficeGraphDocument
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9950) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [OfficeGraphDocument].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOfficegraphdocument] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredOfficegraphdocument] TO [CRMReaderRole]
    AS [dbo];

