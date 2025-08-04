

--
-- report view for constraintbasedgroup
--
create view dbo.[FilteredConstraintBasedGroup] (
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [constraintbasedgroupid],
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
    [grouptypecode],
    [grouptypecodename],
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
    [organizationid],
    [organizationiddsc],
    [organizationidname],
    [versionnumber]
) with view_metadata as
select
    [ConstraintBasedGroup].[BusinessUnitId],
    --[ConstraintBasedGroup].[BusinessUnitIdDsc]
    0,
    [ConstraintBasedGroup].[BusinessUnitIdName],
    [ConstraintBasedGroup].[ConstraintBasedGroupId],
    [ConstraintBasedGroup].[Constraints],
    [ConstraintBasedGroup].[CreatedBy],
    --[ConstraintBasedGroup].[CreatedByDsc]
    0,
    [ConstraintBasedGroup].[CreatedByName],
    [ConstraintBasedGroup].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConstraintBasedGroup].[CreatedOn],
			us.TimeZoneCode),
        [ConstraintBasedGroup].[CreatedOn],
    [ConstraintBasedGroup].[CreatedOnBehalfBy],
    --[ConstraintBasedGroup].[CreatedOnBehalfByDsc]
    0,
    [ConstraintBasedGroup].[CreatedOnBehalfByName],
    [ConstraintBasedGroup].[CreatedOnBehalfByYomiName],
    [ConstraintBasedGroup].[Description],
    [ConstraintBasedGroup].[GroupTypeCode],
    GroupTypeCodePLTable.Value,
    [ConstraintBasedGroup].[ModifiedBy],
    --[ConstraintBasedGroup].[ModifiedByDsc]
    0,
    [ConstraintBasedGroup].[ModifiedByName],
    [ConstraintBasedGroup].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ConstraintBasedGroup].[ModifiedOn],
			us.TimeZoneCode),
        [ConstraintBasedGroup].[ModifiedOn],
    [ConstraintBasedGroup].[ModifiedOnBehalfBy],
    --[ConstraintBasedGroup].[ModifiedOnBehalfByDsc]
    0,
    [ConstraintBasedGroup].[ModifiedOnBehalfByName],
    [ConstraintBasedGroup].[ModifiedOnBehalfByYomiName],
    [ConstraintBasedGroup].[Name],
    [ConstraintBasedGroup].[OrganizationId],
    --[ConstraintBasedGroup].[OrganizationIdDsc]
    0,
    [ConstraintBasedGroup].[OrganizationIdName],
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
		[ConstraintBasedGroup].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4007)
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
    ON OBJECT::[dbo].[FilteredConstraintBasedGroup] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredConstraintBasedGroup] TO [CRMReaderRole]
    AS [dbo];

