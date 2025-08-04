

--
-- report view for processsession
--
create view dbo.[FilteredProcessSession] (
    [activityname],
    [canceledby],
    [canceledbyname],
    [canceledbyyominame],
    [canceledon],
    [canceledonutc],
    [comments],
    [completedby],
    [completedbyname],
    [completedbyyominame],
    [completedon],
    [completedonutc],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [errorcode],
    [executedby],
    [executedbyname],
    [executedbyyominame],
    [executedon],
    [executedonutc],
    [inputarguments],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [nextlinkedsessionid],
    [nextlinkedsessionidname],
    [originatingsessionid],
    [originatingsessionidname],
    [ownerid],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [previouslinkedsessionid],
    [previouslinkedsessionidname],
    [processid],
    [processiddsc],
    [processidname],
    [processsessionid],
    [processstagename],
    [processstate],
    [regardingobjectid],
    [regardingobjectidname],
    [regardingobjectidyominame],
    [regardingobjecttypecode],
    [startedby],
    [startedbyname],
    [startedbyyominame],
    [startedon],
    [startedonutc],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [stepname]
) with view_metadata as
select
    [ProcessSession].[ActivityName],
    [ProcessSession].[CanceledBy],
    [ProcessSession].[CanceledByName],
    [ProcessSession].[CanceledByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessSession].[CanceledOn],
			us.TimeZoneCode),
        [ProcessSession].[CanceledOn],
    [ProcessSession].[Comments],
    [ProcessSession].[CompletedBy],
    [ProcessSession].[CompletedByName],
    [ProcessSession].[CompletedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessSession].[CompletedOn],
			us.TimeZoneCode),
        [ProcessSession].[CompletedOn],
    [ProcessSession].[CreatedBy],
    [ProcessSession].[CreatedByName],
    [ProcessSession].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessSession].[CreatedOn],
			us.TimeZoneCode),
        [ProcessSession].[CreatedOn],
    [ProcessSession].[CreatedOnBehalfBy],
    --[ProcessSession].[CreatedOnBehalfByDsc]
    0,
    [ProcessSession].[CreatedOnBehalfByName],
    [ProcessSession].[CreatedOnBehalfByYomiName],
    [ProcessSession].[ErrorCode],
    [ProcessSession].[ExecutedBy],
    [ProcessSession].[ExecutedByName],
    [ProcessSession].[ExecutedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessSession].[ExecutedOn],
			us.TimeZoneCode),
        [ProcessSession].[ExecutedOn],
    [ProcessSession].[InputArguments],
    [ProcessSession].[ModifiedBy],
    [ProcessSession].[ModifiedByName],
    [ProcessSession].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessSession].[ModifiedOn],
			us.TimeZoneCode),
        [ProcessSession].[ModifiedOn],
    [ProcessSession].[ModifiedOnBehalfBy],
    --[ProcessSession].[ModifiedOnBehalfByDsc]
    0,
    [ProcessSession].[ModifiedOnBehalfByName],
    [ProcessSession].[ModifiedOnBehalfByYomiName],
    [ProcessSession].[Name],
    [ProcessSession].[NextLinkedSessionId],
    [ProcessSession].[NextLinkedSessionIdName],
    [ProcessSession].[OriginatingSessionId],
    [ProcessSession].[OriginatingSessionIdName],
    [ProcessSession].[OwnerId],
    [ProcessSession].[OwnerIdName],
    [ProcessSession].[OwnerIdType],
    [ProcessSession].[OwnerIdYomiName],
    [ProcessSession].[OwningBusinessUnit],
    [ProcessSession].[OwningTeam],
    [ProcessSession].[OwningUser],
    [ProcessSession].[PreviousLinkedSessionId],
    [ProcessSession].[PreviousLinkedSessionIdName],
    [ProcessSession].[ProcessId],
    --[ProcessSession].[ProcessIdDsc]
    0,
    [ProcessSession].[ProcessIdName],
    [ProcessSession].[ProcessSessionId],
    [ProcessSession].[ProcessStageName],
    [ProcessSession].[ProcessState],
    [ProcessSession].[RegardingObjectId],
    [ProcessSession].[RegardingObjectIdName],
    [ProcessSession].[RegardingObjectIdYomiName],
    [ProcessSession].[RegardingObjectTypeCode],
    [ProcessSession].[StartedBy],
    [ProcessSession].[StartedByName],
    [ProcessSession].[StartedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProcessSession].[StartedOn],
			us.TimeZoneCode),
        [ProcessSession].[StartedOn],
    [ProcessSession].[StateCode],
    StateCodePLTable.Value,
    [ProcessSession].[StatusCode],
    StatusCodePLTable.Value,
    [ProcessSession].[StepName]
from ProcessSession
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 4710
		and [StateCodePLTable].AttributeValue = [ProcessSession].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 4710
		and [StatusCodePLTable].AttributeValue = [ProcessSession].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4710) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[ProcessSession].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 4710
	)	

		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[ProcessSession].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 4710)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[ProcessSession].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[ProcessSession].[ProcessSessionId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 4710 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProcessSession] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredProcessSession] TO [CRMReaderRole]
    AS [dbo];

