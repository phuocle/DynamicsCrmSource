

--
-- report view for resourcespec
--
create view dbo.[FilteredResourceSpec] (
    [businessunitid],
    [businessunitidname],
    [constraints],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [effortrequired],
    [groupobjectid],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [objectiveexpression],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [requiredcount],
    [resourcespecid],
    [samesite],
    [samesitename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ResourceSpec].[BusinessUnitId],
    [ResourceSpec].[BusinessUnitIdName],
    [ResourceSpec].[Constraints],
    [ResourceSpec].[CreatedBy],
    [ResourceSpec].[CreatedByName],
    [ResourceSpec].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ResourceSpec].[CreatedOn],
			us.TimeZoneCode),
        [ResourceSpec].[CreatedOn],
    [ResourceSpec].[CreatedOnBehalfBy],
    [ResourceSpec].[CreatedOnBehalfByName],
    [ResourceSpec].[CreatedOnBehalfByYomiName],
    [ResourceSpec].[Description],
    [ResourceSpec].[EffortRequired],
    [ResourceSpec].[GroupObjectId],
    [ResourceSpec].[ImportSequenceNumber],
    [ResourceSpec].[ModifiedBy],
    [ResourceSpec].[ModifiedByName],
    [ResourceSpec].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ResourceSpec].[ModifiedOn],
			us.TimeZoneCode),
        [ResourceSpec].[ModifiedOn],
    [ResourceSpec].[ModifiedOnBehalfBy],
    [ResourceSpec].[ModifiedOnBehalfByName],
    [ResourceSpec].[ModifiedOnBehalfByYomiName],
    [ResourceSpec].[Name],
    [ResourceSpec].[ObjectiveExpression],
    [ResourceSpec].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [ResourceSpec].[OrganizationId],
    [ResourceSpec].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ResourceSpec].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ResourceSpec].[OverriddenCreatedOn],
    [ResourceSpec].[RequiredCount],
    [ResourceSpec].[ResourceSpecId],
    [ResourceSpec].[SameSite],
    SameSitePLTable.Value,
    [ResourceSpec].[TimeZoneRuleVersionNumber],
    [ResourceSpec].[UTCConversionTimeZoneCode],
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
		[ResourceSpec].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4006)
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
    ON OBJECT::[dbo].[FilteredResourceSpec] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredResourceSpec] TO [CRMReaderRole]
    AS [dbo];

