

--
-- report view for privilege
--
create view dbo.[FilteredPrivilege] 
(
    [accessright],
    [canbebasic],
    [canbebasicname],
    [canbedeep],
    [canbedeepname],
    [canbeentityreference],
    [canbeentityreferencename],
    [canbeglobal],
    [canbeglobalname],
    [canbelocal],
    [canbelocalname],
    [canbeparententityreference],
    [canbeparententityreferencename],
    [componentstate],
    [introducedversion],
    [ismanaged],
    [ismanagedname],
    [name],
    [overwritetime],
    [overwritetimeutc],
    [privilegeid],
    [privilegerowid],
    [solutionid],
    [versionnumber]
) with view_metadata as
select
    [Privilege].[AccessRight],
    [Privilege].[CanBeBasic],
    CanBeBasicPLTable.Value,
    [Privilege].[CanBeDeep],
    CanBeDeepPLTable.Value,
    [Privilege].[CanBeEntityReference],
    CanBeEntityReferencePLTable.Value,
    [Privilege].[CanBeGlobal],
    CanBeGlobalPLTable.Value,
    [Privilege].[CanBeLocal],
    CanBeLocalPLTable.Value,
    [Privilege].[CanBeParentEntityReference],
    CanBeParentEntityReferencePLTable.Value,
    [Privilege].[ComponentState],
    [Privilege].[IntroducedVersion],
    [Privilege].[IsManaged],
    IsManagedPLTable.Value,
    [Privilege].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Privilege].[OverwriteTime],
			us.TimeZoneCode),
        [Privilege].[OverwriteTime],
    [Privilege].[PrivilegeId],
    [Privilege].[PrivilegeRowId],
    [Privilege].[SolutionId],
    [Privilege].[VersionNumber]
from Privilege
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [CanBeBasicPLTable] on 
		([CanBeBasicPLTable].AttributeName = 'canbebasic'
		and [CanBeBasicPLTable].ObjectTypeCode = 1023
		and [CanBeBasicPLTable].AttributeValue = [Privilege].[CanBeBasic]
		and [CanBeBasicPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CanBeDeepPLTable] on 
		([CanBeDeepPLTable].AttributeName = 'canbedeep'
		and [CanBeDeepPLTable].ObjectTypeCode = 1023
		and [CanBeDeepPLTable].AttributeValue = [Privilege].[CanBeDeep]
		and [CanBeDeepPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CanBeEntityReferencePLTable] on 
		([CanBeEntityReferencePLTable].AttributeName = 'canbeentityreference'
		and [CanBeEntityReferencePLTable].ObjectTypeCode = 1023
		and [CanBeEntityReferencePLTable].AttributeValue = [Privilege].[CanBeEntityReference]
		and [CanBeEntityReferencePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CanBeGlobalPLTable] on 
		([CanBeGlobalPLTable].AttributeName = 'canbeglobal'
		and [CanBeGlobalPLTable].ObjectTypeCode = 1023
		and [CanBeGlobalPLTable].AttributeValue = [Privilege].[CanBeGlobal]
		and [CanBeGlobalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CanBeLocalPLTable] on 
		([CanBeLocalPLTable].AttributeName = 'canbelocal'
		and [CanBeLocalPLTable].ObjectTypeCode = 1023
		and [CanBeLocalPLTable].AttributeValue = [Privilege].[CanBeLocal]
		and [CanBeLocalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CanBeParentEntityReferencePLTable] on 
		([CanBeParentEntityReferencePLTable].AttributeName = 'canbeparententityreference'
		and [CanBeParentEntityReferencePLTable].ObjectTypeCode = 1023
		and [CanBeParentEntityReferencePLTable].AttributeValue = [Privilege].[CanBeParentEntityReference]
		and [CanBeParentEntityReferencePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1023
		and [IsManagedPLTable].AttributeValue = [Privilege].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPrivilege] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredPrivilege] TO [CRMReaderRole]
    AS [dbo];

