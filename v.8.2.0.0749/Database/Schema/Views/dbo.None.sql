SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for channelpropertygroup
--
create view [dbo].[None] (
    [channelpropertygroupid],
    [channelpropertygroupidunique],
    [componentstate],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [importsequencenumber],
    [ismanaged],
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
    [overwritetime],
    [overwritetimeutc],
    [regardingtypecode],
    [regardingtypecodename],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [versionnumber]
) with view_metadata as
select
    [ChannelPropertyGroup].[ChannelPropertyGroupId],
    [ChannelPropertyGroup].[ChannelPropertyGroupIdUnique],
    [ChannelPropertyGroup].[ComponentState],
    [ChannelPropertyGroup].[CreatedBy],
    [ChannelPropertyGroup].[CreatedByName],
    [ChannelPropertyGroup].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelPropertyGroup].[CreatedOn],
			us.TimeZoneCode),
        [ChannelPropertyGroup].[CreatedOn],
    [ChannelPropertyGroup].[CreatedOnBehalfBy],
    [ChannelPropertyGroup].[CreatedOnBehalfByName],
    [ChannelPropertyGroup].[CreatedOnBehalfByYomiName],
    [ChannelPropertyGroup].[Description],
    [ChannelPropertyGroup].[ImportSequenceNumber],
    [ChannelPropertyGroup].[IsManaged],
    [ChannelPropertyGroup].[ModifiedBy],
    [ChannelPropertyGroup].[ModifiedByName],
    [ChannelPropertyGroup].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelPropertyGroup].[ModifiedOn],
			us.TimeZoneCode),
        [ChannelPropertyGroup].[ModifiedOn],
    [ChannelPropertyGroup].[ModifiedOnBehalfBy],
    [ChannelPropertyGroup].[ModifiedOnBehalfByName],
    [ChannelPropertyGroup].[ModifiedOnBehalfByYomiName],
    [ChannelPropertyGroup].[Name],
    [ChannelPropertyGroup].[OrganizationId],
    [ChannelPropertyGroup].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelPropertyGroup].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ChannelPropertyGroup].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ChannelPropertyGroup].[OverwriteTime],
			us.TimeZoneCode),
        [ChannelPropertyGroup].[OverwriteTime],
    [ChannelPropertyGroup].[RegardingTypeCode],
    RegardingTypeCodePLTable.Value,
    [ChannelPropertyGroup].[SolutionId],
    [ChannelPropertyGroup].[statecode],
    statecodePLTable.Value,
    [ChannelPropertyGroup].[statuscode],
    statuscodePLTable.Value,
    [ChannelPropertyGroup].[VersionNumber]
from ChannelPropertyGroup
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [RegardingTypeCodePLTable] on 
		([RegardingTypeCodePLTable].AttributeName = 'regardingtypecode'
		and [RegardingTypeCodePLTable].ObjectTypeCode = 1234
		and [RegardingTypeCodePLTable].AttributeValue = [ChannelPropertyGroup].[RegardingTypeCode]
		and [RegardingTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 1234
		and [statecodePLTable].AttributeValue = [ChannelPropertyGroup].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 1234
		and [statuscodePLTable].AttributeValue = [ChannelPropertyGroup].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1234) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ChannelPropertyGroup].OrganizationId = u.OrganizationId
)
GO
GRANT SELECT ON  [dbo].[None] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[None] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
