

--
-- report view for sdkmessageprocessingstepimage
--
create view dbo.[FilteredSdkMessageProcessingStepImages] (
    [attributes],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customizationlevel],
    [description],
    [entityalias],
    [imagetype],
    [imagetypename],
    [introducedversion],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
    [messagepropertyname],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [organizationid],
    [overwritetime],
    [overwritetimeutc],
    [relatedattributename],
    [sdkmessageprocessingstepid],
    [sdkmessageprocessingstepimageid],
    [sdkmessageprocessingstepimageidunique],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [SdkMessageProcessingStepImage].[Attributes],
    [SdkMessageProcessingStepImage].[ComponentState],
    [SdkMessageProcessingStepImage].[CreatedBy],
    [SdkMessageProcessingStepImage].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStepImage].[CreatedOn],
			us.TimeZoneCode),
        [SdkMessageProcessingStepImage].[CreatedOn],
    [SdkMessageProcessingStepImage].[CreatedOnBehalfBy],
    --[SdkMessageProcessingStepImage].[CreatedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStepImage].[CreatedOnBehalfByName],
    [SdkMessageProcessingStepImage].[CreatedOnBehalfByYomiName],
    [SdkMessageProcessingStepImage].[CustomizationLevel],
    [SdkMessageProcessingStepImage].[Description],
    [SdkMessageProcessingStepImage].[EntityAlias],
    [SdkMessageProcessingStepImage].[ImageType],
    ImageTypePLTable.Value,
    [SdkMessageProcessingStepImage].[IntroducedVersion],
    [SdkMessageProcessingStepImage].[IsCustomizable],
    [SdkMessageProcessingStepImage].[IsManaged],
    IsManagedPLTable.Value,
    [SdkMessageProcessingStepImage].[MessagePropertyName],
    [SdkMessageProcessingStepImage].[ModifiedBy],
    [SdkMessageProcessingStepImage].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStepImage].[ModifiedOn],
			us.TimeZoneCode),
        [SdkMessageProcessingStepImage].[ModifiedOn],
    [SdkMessageProcessingStepImage].[ModifiedOnBehalfBy],
    --[SdkMessageProcessingStepImage].[ModifiedOnBehalfByDsc]
    0,
    [SdkMessageProcessingStepImage].[ModifiedOnBehalfByName],
    [SdkMessageProcessingStepImage].[ModifiedOnBehalfByYomiName],
    [SdkMessageProcessingStepImage].[Name],
    [SdkMessageProcessingStepImage].[OrganizationId],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SdkMessageProcessingStepImage].[OverwriteTime],
			us.TimeZoneCode),
        [SdkMessageProcessingStepImage].[OverwriteTime],
    [SdkMessageProcessingStepImage].[RelatedAttributeName],
    [SdkMessageProcessingStepImage].[SdkMessageProcessingStepId],
    [SdkMessageProcessingStepImage].[SdkMessageProcessingStepImageId],
    [SdkMessageProcessingStepImage].[SdkMessageProcessingStepImageIdUnique],
    [SdkMessageProcessingStepImage].[SolutionId],
    [SdkMessageProcessingStepImage].[VersionNumber]
from SdkMessageProcessingStepImage
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ImageTypePLTable] on 
		([ImageTypePLTable].AttributeName = 'imagetype'
		and [ImageTypePLTable].ObjectTypeCode = 4615
		and [ImageTypePLTable].AttributeValue = [SdkMessageProcessingStepImage].[ImageType]
		and [ImageTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 4615
		and [IsManagedPLTable].AttributeValue = [SdkMessageProcessingStepImage].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4615) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SdkMessageProcessingStepImage].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageProcessingStepImages] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSdkMessageProcessingStepImages] TO [CRMReaderRole]
    AS [dbo];

