SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for savedquery
--
create view [dbo].[FilteredSavedQuery] (
    [advancedgroupby],
    [canbedeleted],
    [columnsetxml],
    [componentstate],
    [conditionalformatting],
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
    [fetchxml],
    [introducedversion],
    [iscustom],
    [iscustomizable],
    [iscustomizablename],
    [isdefault],
    [isdefaultname],
    [ismanaged],
    [ismanagedname],
    [isprivate],
    [isquickfindquery],
    [isquickfindqueryname],
    [isuserdefined],
    [isuserdefinedname],
    [layoutxml],
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
    [organizationtaborder],
    [overwritetime],
    [overwritetimeutc],
    [queryapi],
    [queryappusage],
    [querytype],
    [returnedtypecode],
    [savedqueryid],
    [savedqueryidunique],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [versionnumber]
) with view_metadata as
select
    [SavedQuery].[AdvancedGroupBy],
    [SavedQuery].[CanBeDeleted],
    [SavedQuery].[ColumnSetXml],
    [SavedQuery].[ComponentState],
    [SavedQuery].[ConditionalFormatting],
    [SavedQuery].[CreatedBy],
    --[SavedQuery].[CreatedByDsc]
    0,
    [SavedQuery].[CreatedByName],
    [SavedQuery].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SavedQuery].[CreatedOn],
			us.TimeZoneCode),
        [SavedQuery].[CreatedOn],
    [SavedQuery].[CreatedOnBehalfBy],
    --[SavedQuery].[CreatedOnBehalfByDsc]
    0,
    [SavedQuery].[CreatedOnBehalfByName],
    [SavedQuery].[CreatedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([SavedQuery].[SavedQueryId], 'description', 4, us.UILanguageId), [SavedQuery].[Description]),
    [SavedQuery].[FetchXml],
    [SavedQuery].[IntroducedVersion],
    [SavedQuery].[IsCustom],
    [SavedQuery].[IsCustomizable],
    IsCustomizablePLTable.Value,
    [SavedQuery].[IsDefault],
    IsDefaultPLTable.Value,
    [SavedQuery].[IsManaged],
    IsManagedPLTable.Value,
    [SavedQuery].[IsPrivate],
    [SavedQuery].[IsQuickFindQuery],
    IsQuickFindQueryPLTable.Value,
    [SavedQuery].[IsUserDefined],
    IsUserDefinedPLTable.Value,
    [SavedQuery].[LayoutXml],
    [SavedQuery].[ModifiedBy],
    --[SavedQuery].[ModifiedByDsc]
    0,
    [SavedQuery].[ModifiedByName],
    [SavedQuery].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SavedQuery].[ModifiedOn],
			us.TimeZoneCode),
        [SavedQuery].[ModifiedOn],
    [SavedQuery].[ModifiedOnBehalfBy],
    --[SavedQuery].[ModifiedOnBehalfByDsc]
    0,
    [SavedQuery].[ModifiedOnBehalfByName],
    [SavedQuery].[ModifiedOnBehalfByYomiName],
    coalesce(dbo.fn_GetLocalizedLabel([SavedQuery].[SavedQueryId], 'name', 4, us.UILanguageId), [SavedQuery].[Name]),
    [SavedQuery].[OrganizationId],
    --[SavedQuery].[OrganizationIdDsc]
    0,
    [SavedQuery].[OrganizationIdName],
    [SavedQuery].[OrganizationTabOrder],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SavedQuery].[OverwriteTime],
			us.TimeZoneCode),
        [SavedQuery].[OverwriteTime],
    [SavedQuery].[QueryAPI],
    [SavedQuery].[QueryAppUsage],
    [SavedQuery].[QueryType],
    [SavedQuery].[ReturnedTypeCode],
    [SavedQuery].[SavedQueryId],
    [SavedQuery].[SavedQueryIdUnique],
    [SavedQuery].[SolutionId],
    [SavedQuery].[StateCode],
    StateCodePLTable.Value,
    [SavedQuery].[StatusCode],
    StatusCodePLTable.Value,
    [SavedQuery].[VersionNumber]
from SavedQuery
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsCustomizablePLTable] on 
		([IsCustomizablePLTable].AttributeName = 'iscustomizable'
		and [IsCustomizablePLTable].ObjectTypeCode = 1039
		and [IsCustomizablePLTable].AttributeValue = [SavedQuery].[IsCustomizable]
		and [IsCustomizablePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 1039
		and [IsDefaultPLTable].AttributeValue = [SavedQuery].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 1039
		and [IsManagedPLTable].AttributeValue = [SavedQuery].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsQuickFindQueryPLTable] on 
		([IsQuickFindQueryPLTable].AttributeName = 'isquickfindquery'
		and [IsQuickFindQueryPLTable].ObjectTypeCode = 1039
		and [IsQuickFindQueryPLTable].AttributeValue = [SavedQuery].[IsQuickFindQuery]
		and [IsQuickFindQueryPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsUserDefinedPLTable] on 
		([IsUserDefinedPLTable].AttributeName = 'isuserdefined'
		and [IsUserDefinedPLTable].ObjectTypeCode = 1039
		and [IsUserDefinedPLTable].AttributeValue = [SavedQuery].[IsUserDefined]
		and [IsUserDefinedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 1039
		and [StateCodePLTable].AttributeValue = [SavedQuery].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 1039
		and [StatusCodePLTable].AttributeValue = [SavedQuery].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1039) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [SavedQuery].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredSavedQuery] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSavedQuery] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
