SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for team
--
create view [dbo].[FilteredTeam] (
    [administratorid],
    [administratoridname],
    [administratoridyominame],
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
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
    [emailaddress],
    [exchangerate],
    [importsequencenumber],
    [isdefault],
    [isdefaultname],
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
    [overriddencreatedon],
    [overriddencreatedonutc],
    [processid],
    [queueid],
    [queueidname],
    [regardingobjectid],
    [regardingobjecttypecode],
    [stageid],
    [systemmanaged],
    [systemmanagedname],
    [teamid],
    [teamtemplateid],
    [teamtype],
    [teamtypename],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [traversedpath],
    [versionnumber],
    [yominame]
) with view_metadata as
select
    [Team].[AdministratorId],
    [Team].[AdministratorIdName],
    [Team].[AdministratorIdYomiName],
    [Team].[BusinessUnitId],
    --[Team].[BusinessUnitIdDsc]
    0,
    [Team].[BusinessUnitIdName],
    [Team].[CreatedBy],
    --[Team].[CreatedByDsc]
    0,
    [Team].[CreatedByName],
    [Team].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Team].[CreatedOn],
			us.TimeZoneCode),
        [Team].[CreatedOn],
    [Team].[CreatedOnBehalfBy],
    --[Team].[CreatedOnBehalfByDsc]
    0,
    [Team].[CreatedOnBehalfByName],
    [Team].[CreatedOnBehalfByYomiName],
    [Team].[Description],
    [Team].[EMailAddress],
    [Team].[ExchangeRate],
    [Team].[ImportSequenceNumber],
    [Team].[IsDefault],
    IsDefaultPLTable.Value,
    [Team].[ModifiedBy],
    --[Team].[ModifiedByDsc]
    0,
    [Team].[ModifiedByName],
    [Team].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Team].[ModifiedOn],
			us.TimeZoneCode),
        [Team].[ModifiedOn],
    [Team].[ModifiedOnBehalfBy],
    --[Team].[ModifiedOnBehalfByDsc]
    0,
    [Team].[ModifiedOnBehalfByName],
    [Team].[ModifiedOnBehalfByYomiName],
    [Team].[Name],
    [Team].[OrganizationId],
    --[Team].[OrganizationIdDsc]
    0,
    [Team].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Team].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Team].[OverriddenCreatedOn],
    [Team].[ProcessId],
    [Team].[QueueId],
    [Team].[QueueIdName],
    [Team].[RegardingObjectId],
    [Team].[RegardingObjectTypeCode],
    [Team].[StageId],
    [Team].[SystemManaged],
    SystemManagedPLTable.Value,
    [Team].[TeamId],
    [Team].[TeamTemplateId],
    [Team].[TeamType],
    TeamTypePLTable.Value,
    [Team].[TransactionCurrencyId],
    [Team].[TransactionCurrencyIdName],
    [Team].[TraversedPath],
    [Team].[VersionNumber],
    [Team].[YomiName]
from Team
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [IsDefaultPLTable] on 
		([IsDefaultPLTable].AttributeName = 'isdefault'
		and [IsDefaultPLTable].ObjectTypeCode = 9
		and [IsDefaultPLTable].AttributeValue = [Team].[IsDefault]
		and [IsDefaultPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SystemManagedPLTable] on 
		([SystemManagedPLTable].AttributeName = 'systemmanaged'
		and [SystemManagedPLTable].ObjectTypeCode = 9
		and [SystemManagedPLTable].AttributeValue = [Team].[SystemManaged]
		and [SystemManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TeamTypePLTable] on 
		([TeamTypePLTable].AttributeName = 'teamtype'
		and [TeamTypePLTable].ObjectTypeCode = 9
		and [TeamTypePLTable].AttributeValue = [Team].[TeamType]
		and [TeamTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9) pdm
where
(
    
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Team].[BusinessUnitId] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Team].[BusinessUnitId] is not null 
	) 
)

)
GO
GRANT SELECT ON  [dbo].[FilteredTeam] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredTeam] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
