

--
-- report view for listmember
--
create view dbo.[FilteredListMember] (
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
    [entityid],
    [entityidtypecode],
    [entitytype],
    [listid],
    [listmemberid],
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
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [versionnumber]
) with view_metadata as
select
    [ListMember].[CreatedBy],
    --[ListMember].[CreatedByDsc]
    0,
    [ListMember].[CreatedByName],
    [ListMember].[CreatedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([ListMember].[CreatedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [ListMember].[CreatedOn],
    [ListMember].[CreatedOnBehalfBy],
    --[ListMember].[CreatedOnBehalfByDsc]
    0,
    [ListMember].[CreatedOnBehalfByName],
    [ListMember].[CreatedOnBehalfByYomiName],
    [ListMember].[EntityId],
    [ListMember].[EntityIdTypeCode],
    [ListMember].[EntityType],
    [ListMember].[ListId],
    [ListMember].[ListMemberId],
    [ListMember].[ModifiedBy],
    --[ListMember].[ModifiedByDsc]
    0,
    [ListMember].[ModifiedByName],
    [ListMember].[ModifiedByYomiName],
    dbo.fn_UTCToTzSpecificLocalTime([ListMember].[ModifiedOn], 
			us.TimeZoneBias,
			us.TimeZoneDaylightBias,
			us.TimeZoneDaylightYear,
			us.TimeZoneDaylightMonth,
			us.TimeZoneDaylightDay,
			us.TimeZoneDaylightHour,
			us.TimeZoneDaylightMinute,
			us.TimeZoneDaylightSecond,
			0,
			us.TimeZoneDaylightDayOfWeek,
			us.TimeZoneStandardBias,
			us.TimeZoneStandardYear,
			us.TimeZoneStandardMonth,
			us.TimeZoneStandardDay,
			us.TimeZoneStandardHour,
			us.TimeZoneStandardMinute,
			us.TimeZoneStandardSecond,
			0,
			us.TimeZoneStandardDayOfWeek),
        [ListMember].[ModifiedOn],
    [ListMember].[ModifiedOnBehalfBy],
    --[ListMember].[ModifiedOnBehalfByDsc]
    0,
    [ListMember].[ModifiedOnBehalfByName],
    [ListMember].[ModifiedOnBehalfByYomiName],
    [ListMember].[OwnerId],
    [ListMember].[OwnerIdType],
    [ListMember].[OwningBusinessUnit],
    [ListMember].[OwningUser],
    [ListMember].[VersionNumber]
from ListMember
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredListMember] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredListMember] TO [CRMReaderRole]
    AS [dbo];

