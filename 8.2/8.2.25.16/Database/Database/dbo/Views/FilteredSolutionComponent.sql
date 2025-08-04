

--
-- report view for solutioncomponent
--
create view dbo.[FilteredSolutionComponent] (
    [componenttype],
    [componenttypename],
    [createdby],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [ismetadata],
    [modifiedby],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [objectid],
    [rootcomponentbehavior],
    [rootsolutioncomponentid],
    [solutioncomponentid],
    [solutionid],
    [solutionidname],
    [versionnumber]
) with view_metadata as
select
    [SolutionComponent].[ComponentType],
    ComponentTypePLTable.Value,
    [SolutionComponent].[CreatedBy],
    dbo.fn_UTCToTzSpecificLocalTime([SolutionComponent].[CreatedOn], 
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
        [SolutionComponent].[CreatedOn],
    [SolutionComponent].[CreatedOnBehalfBy],
    --[SolutionComponent].[CreatedOnBehalfByDsc]
    0,
    [SolutionComponent].[CreatedOnBehalfByName],
    [SolutionComponent].[CreatedOnBehalfByYomiName],
    [SolutionComponent].[IsMetadata],
    [SolutionComponent].[ModifiedBy],
    dbo.fn_UTCToTzSpecificLocalTime([SolutionComponent].[ModifiedOn], 
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
        [SolutionComponent].[ModifiedOn],
    [SolutionComponent].[ModifiedOnBehalfBy],
    --[SolutionComponent].[ModifiedOnBehalfByDsc]
    0,
    [SolutionComponent].[ModifiedOnBehalfByName],
    [SolutionComponent].[ModifiedOnBehalfByYomiName],
    [SolutionComponent].[ObjectId],
    [SolutionComponent].[RootComponentBehavior],
    [SolutionComponent].[RootSolutionComponentId],
    [SolutionComponent].[SolutionComponentId],
    [SolutionComponent].[SolutionId],
    [SolutionComponent].[SolutionIdName],
    [SolutionComponent].[VersionNumber]
from SolutionComponent
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ComponentTypePLTable] on 
		([ComponentTypePLTable].AttributeName = 'componenttype'
		and [ComponentTypePLTable].ObjectTypeCode = 7103
		and [ComponentTypePLTable].AttributeValue = [SolutionComponent].[ComponentType]
		and [ComponentTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSolutionComponent] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSolutionComponent] TO [CRMReaderRole]
    AS [dbo];

