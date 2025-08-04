

--
-- report view for resourcespec
--
create view dbo.[FilteredResourceSpec] (
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [constraints],
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
    [description],
    [effortrequired],
    [groupobjectid],
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
    [name],
    [objectiveexpression],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [requiredcount],
    [resourcespecid],
    [samesite],
    [samesitename],
    [versionnumber]
) with view_metadata as
select
    [ResourceSpec].[BusinessUnitId],
    --[ResourceSpec].[BusinessUnitIdDsc]
    0,
    [ResourceSpec].[BusinessUnitIdName],
    [ResourceSpec].[Constraints],
    [ResourceSpec].[CreatedBy],
    --[ResourceSpec].[CreatedByDsc]
    0,
    [ResourceSpec].[CreatedByName],
    [ResourceSpec].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ResourceSpec].[CreatedOn],
			us.TimeZoneCode),
        [ResourceSpec].[CreatedOn],
    [ResourceSpec].[CreatedOnBehalfBy],
    --[ResourceSpec].[CreatedOnBehalfByDsc]
    0,
    [ResourceSpec].[CreatedOnBehalfByName],
    [ResourceSpec].[CreatedOnBehalfByYomiName],
    [ResourceSpec].[Description],
    [ResourceSpec].[EffortRequired],
    [ResourceSpec].[GroupObjectId],
    [ResourceSpec].[ModifiedBy],
    --[ResourceSpec].[ModifiedByDsc]
    0,
    [ResourceSpec].[ModifiedByName],
    [ResourceSpec].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ResourceSpec].[ModifiedOn],
			us.TimeZoneCode),
        [ResourceSpec].[ModifiedOn],
    [ResourceSpec].[ModifiedOnBehalfBy],
    --[ResourceSpec].[ModifiedOnBehalfByDsc]
    0,
    [ResourceSpec].[ModifiedOnBehalfByName],
    [ResourceSpec].[ModifiedOnBehalfByYomiName],
    [ResourceSpec].[Name],
    [ResourceSpec].[ObjectiveExpression],
    [ResourceSpec].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [ResourceSpec].[OrganizationId],
    --[ResourceSpec].[OrganizationIdDsc]
    0,
    [ResourceSpec].[OrganizationIdName],
    [ResourceSpec].[RequiredCount],
    [ResourceSpec].[ResourceSpecId],
    [ResourceSpec].[SameSite],
    SameSitePLTable.Value,
    [ResourceSpec].[VersionNumber]
from ResourceSpec
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 4006
		and [ObjectTypeCodePLTable].AttributeValue = [ResourceSpec].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SameSitePLTable] on 
		([SameSitePLTable].AttributeName = 'samesite'
		and [SameSitePLTable].ObjectTypeCode = 4006
		and [SameSitePLTable].AttributeValue = [ResourceSpec].[SameSite]
		and [SameSitePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4006) pdm
where
(
    
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[ResourceSpec].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4006)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ResourceSpec].[BusinessUnitId] is not null 
	) 
)

)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredResourceSpec] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredResourceSpec] TO [CRMReaderRole]
    AS [dbo];

