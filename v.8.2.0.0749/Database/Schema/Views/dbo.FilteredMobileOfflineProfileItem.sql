SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for mobileofflineprofileitem
--
create view [dbo].[FilteredMobileOfflineProfileItem] (
    [canbefollowed],
    [canbefollowedname],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entityobjecttypecode],
    [getrelatedentityrecords],
    [getrelatedentityrecordsname],
    [introducedversion],
    [ismanaged],
    [isvalidated],
    [isvalidatedname],
    [isvisibleingrid],
    [isvisibleingridname],
    [mobileofflineprofileitemid],
    [mobileofflineprofileitemidunique],
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
    [overwritetime],
    [overwritetimeutc],
    [processid],
    [profileitementityfilter],
    [profileitemrule],
    [profileitemrulename],
    [publishedon],
    [publishedonutc],
    [recorddistributioncriteria],
    [recorddistributioncriterianame],
    [recordsownedbyme],
    [recordsownedbymename],
    [recordsownedbymybusinessunit],
    [recordsownedbymybusinessunitname],
    [recordsownedbymyteam],
    [recordsownedbymyteamname],
    [regardingobjectid],
    [regardingobjectidname],
    [relationshipdata],
    [selectedentitymetadata],
    [selectedentitytypecode],
    [selectedentitytypecodename],
    [solutionid],
    [stageid],
    [traversedpath],
    [versionnumber],
    [viewquery]
) with view_metadata as
select
    [MobileOfflineProfileItem].[CanBeFollowed],
    CanBeFollowedPLTable.Value,
    [MobileOfflineProfileItem].[ComponentState],
    [MobileOfflineProfileItem].[CreatedBy],
    [MobileOfflineProfileItem].[CreatedByName],
    [MobileOfflineProfileItem].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItem].[CreatedOn],
			us.TimeZoneCode),
        [MobileOfflineProfileItem].[CreatedOn],
    [MobileOfflineProfileItem].[CreatedOnBehalfBy],
    [MobileOfflineProfileItem].[CreatedOnBehalfByName],
    [MobileOfflineProfileItem].[CreatedOnBehalfByYomiName],
    [MobileOfflineProfileItem].[EntityObjectTypeCode],
    [MobileOfflineProfileItem].[GetRelatedEntityRecords],
    GetRelatedEntityRecordsPLTable.Value,
    [MobileOfflineProfileItem].[IntroducedVersion],
    [MobileOfflineProfileItem].[IsManaged],
    [MobileOfflineProfileItem].[IsValidated],
    IsValidatedPLTable.Value,
    [MobileOfflineProfileItem].[IsVisibleInGrid],
    IsVisibleInGridPLTable.Value,
    [MobileOfflineProfileItem].[MobileOfflineProfileItemId],
    [MobileOfflineProfileItem].[MobileOfflineProfileItemIdUnique],
    [MobileOfflineProfileItem].[ModifiedBy],
    [MobileOfflineProfileItem].[ModifiedByName],
    [MobileOfflineProfileItem].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItem].[ModifiedOn],
			us.TimeZoneCode),
        [MobileOfflineProfileItem].[ModifiedOn],
    [MobileOfflineProfileItem].[ModifiedOnBehalfBy],
    [MobileOfflineProfileItem].[ModifiedOnBehalfByName],
    [MobileOfflineProfileItem].[ModifiedOnBehalfByYomiName],
    [MobileOfflineProfileItem].[Name],
    [MobileOfflineProfileItem].[OrganizationId],
    [MobileOfflineProfileItem].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItem].[OverwriteTime],
			us.TimeZoneCode),
        [MobileOfflineProfileItem].[OverwriteTime],
    [MobileOfflineProfileItem].[ProcessId],
    [MobileOfflineProfileItem].[ProfileItemEntityFilter],
    [MobileOfflineProfileItem].[ProfileItemRule],
    [MobileOfflineProfileItem].[ProfileItemRuleName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItem].[PublishedOn],
			us.TimeZoneCode),
        [MobileOfflineProfileItem].[PublishedOn],
    [MobileOfflineProfileItem].[RecordDistributionCriteria],
    RecordDistributionCriteriaPLTable.Value,
    [MobileOfflineProfileItem].[RecordsOwnedByMe],
    RecordsOwnedByMePLTable.Value,
    [MobileOfflineProfileItem].[RecordsOwnedByMyBusinessUnit],
    RecordsOwnedByMyBusinessUnitPLTable.Value,
    [MobileOfflineProfileItem].[RecordsOwnedByMyTeam],
    RecordsOwnedByMyTeamPLTable.Value,
    [MobileOfflineProfileItem].[RegardingObjectId],
    [MobileOfflineProfileItem].[RegardingObjectIdName],
    [MobileOfflineProfileItem].[RelationshipData],
    [MobileOfflineProfileItem].[SelectedEntityMetadata],
    [MobileOfflineProfileItem].[SelectedEntityTypeCode],
    SelectedEntityTypeCodePLTable.Value,
    [MobileOfflineProfileItem].[SolutionId],
    [MobileOfflineProfileItem].[StageId],
    [MobileOfflineProfileItem].[TraversedPath],
    [MobileOfflineProfileItem].[VersionNumber],
    [MobileOfflineProfileItem].[ViewQuery]
from MobileOfflineProfileItem
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [CanBeFollowedPLTable] on 
		([CanBeFollowedPLTable].AttributeName = 'canbefollowed'
		and [CanBeFollowedPLTable].ObjectTypeCode = 9867
		and [CanBeFollowedPLTable].AttributeValue = [MobileOfflineProfileItem].[CanBeFollowed]
		and [CanBeFollowedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [GetRelatedEntityRecordsPLTable] on 
		([GetRelatedEntityRecordsPLTable].AttributeName = 'getrelatedentityrecords'
		and [GetRelatedEntityRecordsPLTable].ObjectTypeCode = 9867
		and [GetRelatedEntityRecordsPLTable].AttributeValue = [MobileOfflineProfileItem].[GetRelatedEntityRecords]
		and [GetRelatedEntityRecordsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsValidatedPLTable] on 
		([IsValidatedPLTable].AttributeName = 'isvalidated'
		and [IsValidatedPLTable].ObjectTypeCode = 9867
		and [IsValidatedPLTable].AttributeValue = [MobileOfflineProfileItem].[IsValidated]
		and [IsValidatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsVisibleInGridPLTable] on 
		([IsVisibleInGridPLTable].AttributeName = 'isvisibleingrid'
		and [IsVisibleInGridPLTable].ObjectTypeCode = 9867
		and [IsVisibleInGridPLTable].AttributeValue = [MobileOfflineProfileItem].[IsVisibleInGrid]
		and [IsVisibleInGridPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RecordDistributionCriteriaPLTable] on 
		([RecordDistributionCriteriaPLTable].AttributeName = 'recorddistributioncriteria'
		and [RecordDistributionCriteriaPLTable].ObjectTypeCode = 9867
		and [RecordDistributionCriteriaPLTable].AttributeValue = [MobileOfflineProfileItem].[RecordDistributionCriteria]
		and [RecordDistributionCriteriaPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RecordsOwnedByMePLTable] on 
		([RecordsOwnedByMePLTable].AttributeName = 'recordsownedbyme'
		and [RecordsOwnedByMePLTable].ObjectTypeCode = 9867
		and [RecordsOwnedByMePLTable].AttributeValue = [MobileOfflineProfileItem].[RecordsOwnedByMe]
		and [RecordsOwnedByMePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RecordsOwnedByMyBusinessUnitPLTable] on 
		([RecordsOwnedByMyBusinessUnitPLTable].AttributeName = 'recordsownedbymybusinessunit'
		and [RecordsOwnedByMyBusinessUnitPLTable].ObjectTypeCode = 9867
		and [RecordsOwnedByMyBusinessUnitPLTable].AttributeValue = [MobileOfflineProfileItem].[RecordsOwnedByMyBusinessUnit]
		and [RecordsOwnedByMyBusinessUnitPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RecordsOwnedByMyTeamPLTable] on 
		([RecordsOwnedByMyTeamPLTable].AttributeName = 'recordsownedbymyteam'
		and [RecordsOwnedByMyTeamPLTable].ObjectTypeCode = 9867
		and [RecordsOwnedByMyTeamPLTable].AttributeValue = [MobileOfflineProfileItem].[RecordsOwnedByMyTeam]
		and [RecordsOwnedByMyTeamPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SelectedEntityTypeCodePLTable] on 
		([SelectedEntityTypeCodePLTable].AttributeName = 'selectedentitytypecode'
		and [SelectedEntityTypeCodePLTable].ObjectTypeCode = 9867
		and [SelectedEntityTypeCodePLTable].AttributeValue = [MobileOfflineProfileItem].[SelectedEntityTypeCode]
		and [SelectedEntityTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9866) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [MobileOfflineProfileItem].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredMobileOfflineProfileItem] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredMobileOfflineProfileItem] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
