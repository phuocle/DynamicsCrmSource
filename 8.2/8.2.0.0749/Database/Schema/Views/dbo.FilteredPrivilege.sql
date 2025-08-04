SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for privilege
--
create view [dbo].[FilteredPrivilege] (
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
    [name],
    [privilegeid],
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
    [Privilege].[Name],
    [Privilege].[PrivilegeId],
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
GO
GRANT SELECT ON  [dbo].[FilteredPrivilege] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredPrivilege] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
