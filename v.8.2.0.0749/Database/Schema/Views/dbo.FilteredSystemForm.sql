SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for systemform
--
create view [dbo].[FilteredSystemForm] (
    [ancestorformid],
    [ancestorformidname],
    [canbedeleted],
    [componentstate],
    [description],
    [formactivationstate],
    [formactivationstatename],
    [formid],
    [formidunique],
    [formpresentation],
    [formpresentationname],
    [formxml],
    [introducedversion],
    [isairmerged],
    [iscustomizable],
    [isdefault],
    [isdefaultname],
    [isdesktopenabled],
    [ismanaged],
    [ismanagedname],
    [istabletenabled],
    [name],
    [objecttypecode],
    [objecttypecodename],
    [organizationid],
    [organizationidname],
    [overwritetime],
    [overwritetimeutc],
    [publishedon],
    [publishedonutc],
    [solutionid],
    [type],
    [typename],
    [uniquename],
    [version],
    [versionnumber]
) with view_metadata as
select
    [SystemForm].[AncestorFormId],
    [SystemForm].[AncestorFormIdName],
    [SystemForm].[CanBeDeleted],
    [SystemForm].[ComponentState],
    coalesce(dbo.fn_GetLocalizedLabel([SystemForm].[FormId], 'description', 5, us.UILanguageId), [SystemForm].[Description]),
    [SystemForm].[FormActivationState],
    FormActivationStatePLTable.Value,
    [SystemForm].[FormId],
    [SystemForm].[FormIdUnique],
    [SystemForm].[FormPresentation],
    FormPresentationPLTable.Value,
    [SystemForm].[FormXml],
    [SystemForm].[IntroducedVersion],
    [SystemForm].[IsAIRMerged],
    [SystemForm].[IsCustomizable],
    [SystemForm].[IsDefault],
    IsDefaultPLTable.Value,
    [SystemForm].[IsDesktopEnabled],
    [SystemForm].[IsManaged],
    IsManagedPLTable.Value,
    [SystemForm].[IsTabletEnabled],
    coalesce(dbo.fn_GetLocalizedLabel([SystemForm].[FormId], 'name', 5, us.UILanguageId), [SystemForm].[Name]),
    [SystemForm].[ObjectTypeCode],
    ObjectTypeCodePLTable.Value,
    [SystemForm].[OrganizationId],
    [SystemForm].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SystemForm].[OverwriteTime],
			us.TimeZoneCode),
        [SystemForm].[OverwriteTime],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SystemForm].[PublishedOn],
			us.TimeZoneCode),
        [SystemForm].[PublishedOn],
    [SystemForm].[SolutionId],
    [SystemForm].[Type],
    TypePLTable.Value,
    [SystemForm].[UniqueName],
    [SystemForm].[Version],
    [SystemForm].[VersionNumber]
from SystemForm
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [FormActivationStatePLTable] on 
		([FormActivationStatePLTable].AttributeName = 'formactivationstate'
		and [FormActivationStatePLTable].ObjectTypeCode = 1030
		and [FormActivationStatePLTable].AttributeValue = [SystemForm].[FormActivationState]
		and [FormActivationStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FormPresentationPLTable] on 
		([FormPresentationPLTable].AttributeName = 'formpresentation'
		and [FormPresentationPLTable].ObjectTypeCode = 1030
		and [FormPresentationPLTable].AttributeValue = [SystemForm].[FormPresentation]
		and [FormPresentationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 1030
		and [IsDefaultPLTable].AttributeValue = [SystemForm].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1030
		and [IsManagedPLTable].AttributeValue = [SystemForm].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ObjectTypeCodePLTable] on 
		([ObjectTypeCodePLTable].AttributeName = 'objecttypecode'
		and [ObjectTypeCodePLTable].ObjectTypeCode = 1030
		and [ObjectTypeCodePLTable].AttributeValue = [SystemForm].[ObjectTypeCode]
		and [ObjectTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TypePLTable] on 
		([TypePLTable].AttributeName = 'type'
		and [TypePLTable].ObjectTypeCode = 1030
		and [TypePLTable].AttributeValue = [SystemForm].[Type]
		and [TypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1030) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SystemForm].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredSystemForm] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSystemForm] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
