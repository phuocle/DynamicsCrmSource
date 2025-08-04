

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
    [solutioncomponentid],
    [solutionid],
    [solutionidname],
    [versionnumber]
) with view_metadata as
select
    [SolutionComponent].[ComponentType],
    ComponentTypePLTable.Value,
    [SolutionComponent].[CreatedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SolutionComponent].[CreatedOn],
			us.TimeZoneCode),
        [SolutionComponent].[CreatedOn],
    [SolutionComponent].[CreatedOnBehalfBy],
    --[SolutionComponent].[CreatedOnBehalfByDsc]
    0,
    [SolutionComponent].[CreatedOnBehalfByName],
    [SolutionComponent].[CreatedOnBehalfByYomiName],
    [SolutionComponent].[IsMetadata],
    [SolutionComponent].[ModifiedBy],
    dbo.fn_UTCToTzCodeSpecificLocalTime([SolutionComponent].[ModifiedOn],
			us.TimeZoneCode),
        [SolutionComponent].[ModifiedOn],
    [SolutionComponent].[ModifiedOnBehalfBy],
    --[SolutionComponent].[ModifiedOnBehalfByDsc]
    0,
    [SolutionComponent].[ModifiedOnBehalfByName],
    [SolutionComponent].[ModifiedOnBehalfByYomiName],
    [SolutionComponent].[ObjectId],
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
    ON OBJECT::[dbo].[FilteredSolutionComponent] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSolutionComponent] TO [CRMReaderRole]
    AS [dbo];

