

--
-- report view for constraintbasedgroup
--
create view dbo.[FilteredConstraintBasedGroup] 
(
    [businessunitid],
    [businessunitidname],
    [constraintbasedgroupid],
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
    [grouptypecode],
    [grouptypecodename],
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
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ConstraintBasedGroup].[BusinessUnitId],
    [ConstraintBasedGroup].[BusinessUnitIdName],
    [ConstraintBasedGroup].[ConstraintBasedGroupId],
    [ConstraintBasedGroup].[Constraints],
    [ConstraintBasedGroup].[CreatedBy],
    [ConstraintBasedGroup].[CreatedByName],
    [ConstraintBasedGroup].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConstraintBasedGroup].[CreatedOn],
			us.TimeZoneCode),
        [ConstraintBasedGroup].[CreatedOn],
    [ConstraintBasedGroup].[CreatedOnBehalfBy],
    [ConstraintBasedGroup].[CreatedOnBehalfByName],
    [ConstraintBasedGroup].[CreatedOnBehalfByYomiName],
    [ConstraintBasedGroup].[Description],
    [ConstraintBasedGroup].[GroupTypeCode],
    GroupTypeCodePLTable.Value,
    [ConstraintBasedGroup].[ImportSequenceNumber],
    [ConstraintBasedGroup].[ModifiedBy],
    [ConstraintBasedGroup].[ModifiedByName],
    [ConstraintBasedGroup].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConstraintBasedGroup].[ModifiedOn],
			us.TimeZoneCode),
        [ConstraintBasedGroup].[ModifiedOn],
    [ConstraintBasedGroup].[ModifiedOnBehalfBy],
    [ConstraintBasedGroup].[ModifiedOnBehalfByName],
    [ConstraintBasedGroup].[ModifiedOnBehalfByYomiName],
    [ConstraintBasedGroup].[Name],
    [ConstraintBasedGroup].[OrganizationId],
    [ConstraintBasedGroup].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConstraintBasedGroup].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ConstraintBasedGroup].[OverriddenCreatedOn],
    [ConstraintBasedGroup].[TimeZoneRuleVersionNumber],
    [ConstraintBasedGroup].[UTCConversionTimeZoneCode],
    [ConstraintBasedGroup].[VersionNumber]
from ConstraintBasedGroup
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [GroupTypeCodePLTable] on 
		([GroupTypeCodePLTable].AttributeName = 'grouptypecode'
		and [GroupTypeCodePLTable].ObjectTypeCode = 4007
		and [GroupTypeCodePLTable].AttributeValue = [ConstraintBasedGroup].[GroupTypeCode]
		and [GroupTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4007) pdm
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
		[ConstraintBasedGroup].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4007)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ConstraintBasedGroup].[BusinessUnitId] is not null 
	) 
)

)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConstraintBasedGroup] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConstraintBasedGroup] TO [CRMReaderRole]
    AS [dbo];

