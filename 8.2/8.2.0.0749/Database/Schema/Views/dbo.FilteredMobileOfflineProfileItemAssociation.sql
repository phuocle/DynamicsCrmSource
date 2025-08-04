SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for mobileofflineprofileitemassociation
--
create view [dbo].[FilteredMobileOfflineProfileItemAssociation] (
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [introducedversion],
    [ismanaged],
    [isvalidated],
    [isvalidatedname],
    [mobileofflineprofileitemassociationid],
    [mobileofflineprofileitemassociationidunique],
    [mobileofflineprofileitemid],
    [mobileofflineprofileitemidname],
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
    [profileitemassociationentityfilter],
    [publishedon],
    [publishedonutc],
    [relationshipdata],
    [relationshipdisplayname],
    [relationshipid],
    [relationshipname],
    [selectedrelationshipsschema],
    [selectedrelationshipsschemaname],
    [solutionid],
    [stageid],
    [traversedpath],
    [versionnumber]
) with view_metadata as
select
    [MobileOfflineProfileItemAssociation].[ComponentState],
    [MobileOfflineProfileItemAssociation].[CreatedBy],
    [MobileOfflineProfileItemAssociation].[CreatedByName],
    [MobileOfflineProfileItemAssociation].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItemAssociation].[CreatedOn],
			us.TimeZoneCode),
        [MobileOfflineProfileItemAssociation].[CreatedOn],
    [MobileOfflineProfileItemAssociation].[CreatedOnBehalfBy],
    [MobileOfflineProfileItemAssociation].[CreatedOnBehalfByName],
    [MobileOfflineProfileItemAssociation].[CreatedOnBehalfByYomiName],
    [MobileOfflineProfileItemAssociation].[IntroducedVersion],
    [MobileOfflineProfileItemAssociation].[IsManaged],
    [MobileOfflineProfileItemAssociation].[IsValidated],
    IsValidatedPLTable.Value,
    [MobileOfflineProfileItemAssociation].[MobileOfflineProfileItemAssociationId],
    [MobileOfflineProfileItemAssociation].[MobileOfflineProfileItemAssociationIdUnique],
    [MobileOfflineProfileItemAssociation].[MobileOfflineProfileItemId],
    [MobileOfflineProfileItemAssociation].[MobileOfflineProfileItemIdName],
    [MobileOfflineProfileItemAssociation].[ModifiedBy],
    [MobileOfflineProfileItemAssociation].[ModifiedByName],
    [MobileOfflineProfileItemAssociation].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItemAssociation].[ModifiedOn],
			us.TimeZoneCode),
        [MobileOfflineProfileItemAssociation].[ModifiedOn],
    [MobileOfflineProfileItemAssociation].[ModifiedOnBehalfBy],
    [MobileOfflineProfileItemAssociation].[ModifiedOnBehalfByName],
    [MobileOfflineProfileItemAssociation].[ModifiedOnBehalfByYomiName],
    [MobileOfflineProfileItemAssociation].[Name],
    [MobileOfflineProfileItemAssociation].[OrganizationId],
    [MobileOfflineProfileItemAssociation].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItemAssociation].[OverwriteTime],
			us.TimeZoneCode),
        [MobileOfflineProfileItemAssociation].[OverwriteTime],
    [MobileOfflineProfileItemAssociation].[ProcessId],
    [MobileOfflineProfileItemAssociation].[ProfileItemAssociationEntityFilter],
    dbo.fn_UTCToTzCodeSpecificLocalTime([MobileOfflineProfileItemAssociation].[PublishedOn],
			us.TimeZoneCode),
        [MobileOfflineProfileItemAssociation].[PublishedOn],
    [MobileOfflineProfileItemAssociation].[RelationshipData],
    [MobileOfflineProfileItemAssociation].[RelationshipDisplayName],
    [MobileOfflineProfileItemAssociation].[RelationshipId],
    [MobileOfflineProfileItemAssociation].[RelationshipName],
    [MobileOfflineProfileItemAssociation].[SelectedRelationShipsSchema],
    SelectedRelationShipsSchemaPLTable.Value,
    [MobileOfflineProfileItemAssociation].[SolutionId],
    [MobileOfflineProfileItemAssociation].[StageId],
    [MobileOfflineProfileItemAssociation].[TraversedPath],
    [MobileOfflineProfileItemAssociation].[VersionNumber]
from MobileOfflineProfileItemAssociation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsValidatedPLTable] on 
		([IsValidatedPLTable].AttributeName = 'isvalidated'
		and [IsValidatedPLTable].ObjectTypeCode = 9868
		and [IsValidatedPLTable].AttributeValue = [MobileOfflineProfileItemAssociation].[IsValidated]
		and [IsValidatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SelectedRelationShipsSchemaPLTable] on 
		([SelectedRelationShipsSchemaPLTable].AttributeName = 'selectedrelationshipsschema'
		and [SelectedRelationShipsSchemaPLTable].ObjectTypeCode = 9868
		and [SelectedRelationShipsSchemaPLTable].AttributeValue = [MobileOfflineProfileItemAssociation].[SelectedRelationShipsSchema]
		and [SelectedRelationShipsSchemaPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9867) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [MobileOfflineProfileItemAssociation].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[FilteredMobileOfflineProfileItemAssociation] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredMobileOfflineProfileItemAssociation] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
