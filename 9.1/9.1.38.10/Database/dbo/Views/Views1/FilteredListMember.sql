

--
-- report view for listmember
--
create view dbo.[FilteredListMember] 
(
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entityid],
    [entityidtypecode],
    [entitytype],
    [importsequencenumber],
    [listid],
    [listmemberid],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneridtype],
    [owningbusinessunit],
    [owninguser],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ListMember].[CreatedBy],
    [ListMember].[CreatedByName],
    [ListMember].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ListMember].[CreatedOn],
			us.TimeZoneCode),
        [ListMember].[CreatedOn],
    [ListMember].[CreatedOnBehalfBy],
    [ListMember].[CreatedOnBehalfByName],
    [ListMember].[CreatedOnBehalfByYomiName],
    [ListMember].[EntityId],
    [ListMember].[EntityIdTypeCode],
    [ListMember].[EntityType],
    [ListMember].[ImportSequenceNumber],
    [ListMember].[ListId],
    [ListMember].[ListMemberId],
    [ListMember].[ModifiedBy],
    [ListMember].[ModifiedByName],
    [ListMember].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ListMember].[ModifiedOn],
			us.TimeZoneCode),
        [ListMember].[ModifiedOn],
    [ListMember].[ModifiedOnBehalfBy],
    [ListMember].[ModifiedOnBehalfByName],
    [ListMember].[ModifiedOnBehalfByYomiName],
    [ListMember].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ListMember].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ListMember].[OverriddenCreatedOn],
    [ListMember].[OwnerId],
    [ListMember].[OwnerIdType],
    [ListMember].[OwningBusinessUnit],
    [ListMember].[OwningUser],
    [ListMember].[TimeZoneRuleVersionNumber],
    [ListMember].[UTCConversionTimeZoneCode],
    [ListMember].[VersionNumber]
from ListMember
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredListMember] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredListMember] TO [CRMReaderRole]
    AS [dbo];

