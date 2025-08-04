

--
-- report view for recommendeddocument
--
create view dbo.[FilteredRecommendeddocument] (
    [absoluteurl],
    [associatedrecordname],
    [author],
    [contenttype],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [editurl],
    [exchangerate],
    [externaldocumentid],
    [externalmodifiedby],
    [filesize],
    [filetype],
    [fullname],
    [iconclassname],
    [location],
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
    [readurl],
    [recommendeddocumentid],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjecttypecode],
    [source],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [utcconversiontimezonecode],
    [version],
    [versionnumber]
) with view_metadata as
select
    [RecommendedDocument].[AbsoluteUrl],
    [RecommendedDocument].[AssociatedRecordName],
    [RecommendedDocument].[Author],
    [RecommendedDocument].[ContentType],
    [RecommendedDocument].[CreatedBy],
    [RecommendedDocument].[CreatedByName],
    [RecommendedDocument].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RecommendedDocument].[CreatedOn],
			us.TimeZoneCode),
        [RecommendedDocument].[CreatedOn],
    [RecommendedDocument].[CreatedOnBehalfBy],
    [RecommendedDocument].[CreatedOnBehalfByName],
    [RecommendedDocument].[CreatedOnBehalfByYomiName],
    [RecommendedDocument].[EditUrl],
    [RecommendedDocument].[ExchangeRate],
    [RecommendedDocument].[ExternalDocumentId],
    [RecommendedDocument].[ExternalModifiedBy],
    [RecommendedDocument].[FileSize],
    [RecommendedDocument].[FileType],
    [RecommendedDocument].[FullName],
    [RecommendedDocument].[IconClassName],
    [RecommendedDocument].[Location],
    [RecommendedDocument].[ModifiedBy],
    [RecommendedDocument].[ModifiedByName],
    [RecommendedDocument].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([RecommendedDocument].[ModifiedOn],
			us.TimeZoneCode),
        [RecommendedDocument].[ModifiedOn],
    [RecommendedDocument].[ModifiedOnBehalfBy],
    [RecommendedDocument].[ModifiedOnBehalfByName],
    [RecommendedDocument].[ModifiedOnBehalfByYomiName],
    [RecommendedDocument].[OrganizationId],
    [RecommendedDocument].[OrganizationIdName],
    [RecommendedDocument].[ReadUrl],
    [RecommendedDocument].[RecommendedDocumentId],
    [RecommendedDocument].[RegardingObjectId],
    [RecommendedDocument].[RegardingObjectIdName],
    [RecommendedDocument].[RegardingObjectTypeCode],
    [RecommendedDocument].[Source],
    [RecommendedDocument].[TimeZoneRuleVersionNumber],
    [RecommendedDocument].[Title],
    [RecommendedDocument].[TransactionCurrencyId],
    [RecommendedDocument].[TransactionCurrencyIdName],
    [RecommendedDocument].[UTCConversionTimeZoneCode],
    [RecommendedDocument].[Version],
    [RecommendedDocument].[VersionNumber]
from RecommendedDocument
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1189) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [RecommendedDocument].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRecommendeddocument] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredRecommendeddocument] TO [CRMReaderRole]
    AS [dbo];

