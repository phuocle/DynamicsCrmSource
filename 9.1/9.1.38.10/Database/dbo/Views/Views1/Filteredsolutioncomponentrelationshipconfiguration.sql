

--
-- report view for solutioncomponentrelationshipconfiguration
--
create view dbo.[Filteredsolutioncomponentrelationshipconfiguration] 
(
    [addrelatedcomponents],
    [addrelatedcomponentsname],
    [componentidunique],
    [componentstate],
    [componentstatename],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [entityrelationshipid],
    [entityrelationshipidname],
    [importsequencenumber],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
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
    [primaryentitydependencytype],
    [primaryentitydependencytypename],
    [secondaryentitydependencytype],
    [secondaryentitydependencytypename],
    [solutioncomponentrelationshipconfigurationid],
    [solutionid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [timezoneruleversionnumber],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [solutioncomponentrelationshipconfiguration].[AddRelatedComponents],
    AddRelatedComponentsPLTable.Value,
    [solutioncomponentrelationshipconfiguration].[ComponentIdUnique],
    [solutioncomponentrelationshipconfiguration].[ComponentState],
    ComponentStatePLTable.Value,
    [solutioncomponentrelationshipconfiguration].[CreatedBy],
    [solutioncomponentrelationshipconfiguration].[CreatedByName],
    [solutioncomponentrelationshipconfiguration].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentrelationshipconfiguration].[CreatedOn],
			us.TimeZoneCode),
        [solutioncomponentrelationshipconfiguration].[CreatedOn],
    [solutioncomponentrelationshipconfiguration].[CreatedOnBehalfBy],
    [solutioncomponentrelationshipconfiguration].[CreatedOnBehalfByName],
    [solutioncomponentrelationshipconfiguration].[CreatedOnBehalfByYomiName],
    [solutioncomponentrelationshipconfiguration].[EntityRelationshipId],
    [solutioncomponentrelationshipconfiguration].[EntityRelationshipIdName],
    [solutioncomponentrelationshipconfiguration].[ImportSequenceNumber],
    [solutioncomponentrelationshipconfiguration].[IsCustomizable],
    [solutioncomponentrelationshipconfiguration].[IsManaged],
    IsManagedPLTable.Value,
    [solutioncomponentrelationshipconfiguration].[ModifiedBy],
    [solutioncomponentrelationshipconfiguration].[ModifiedByName],
    [solutioncomponentrelationshipconfiguration].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentrelationshipconfiguration].[ModifiedOn],
			us.TimeZoneCode),
        [solutioncomponentrelationshipconfiguration].[ModifiedOn],
    [solutioncomponentrelationshipconfiguration].[ModifiedOnBehalfBy],
    [solutioncomponentrelationshipconfiguration].[ModifiedOnBehalfByName],
    [solutioncomponentrelationshipconfiguration].[ModifiedOnBehalfByYomiName],
    [solutioncomponentrelationshipconfiguration].[name],
    [solutioncomponentrelationshipconfiguration].[OrganizationId],
    [solutioncomponentrelationshipconfiguration].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentrelationshipconfiguration].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [solutioncomponentrelationshipconfiguration].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([solutioncomponentrelationshipconfiguration].[OverwriteTime],
			us.TimeZoneCode),
        [solutioncomponentrelationshipconfiguration].[OverwriteTime],
    [solutioncomponentrelationshipconfiguration].[PrimaryEntityDependencyType],
    PrimaryEntityDependencyTypePLTable.Value,
    [solutioncomponentrelationshipconfiguration].[SecondaryEntityDependencyType],
    SecondaryEntityDependencyTypePLTable.Value,
    [solutioncomponentrelationshipconfiguration].[solutioncomponentrelationshipconfigurationId],
    [solutioncomponentrelationshipconfiguration].[SolutionId],
    [solutioncomponentrelationshipconfiguration].[statecode],
    statecodePLTable.Value,
    [solutioncomponentrelationshipconfiguration].[statuscode],
    statuscodePLTable.Value,
    [solutioncomponentrelationshipconfiguration].[TimeZoneRuleVersionNumber],
    [solutioncomponentrelationshipconfiguration].[UTCConversionTimeZoneCode],
    [solutioncomponentrelationshipconfiguration].[VersionNumber]
from solutioncomponentrelationshipconfiguration
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddRelatedComponentsPLTable] on 
		([AddRelatedComponentsPLTable].AttributeName = 'addrelatedcomponents'
		and [AddRelatedComponentsPLTable].ObjectTypeCode = 10012
		and [AddRelatedComponentsPLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[AddRelatedComponents]
		and [AddRelatedComponentsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 10012
		and [ComponentStatePLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 10012
		and [IsManagedPLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PrimaryEntityDependencyTypePLTable] on 
		([PrimaryEntityDependencyTypePLTable].AttributeName = 'primaryentitydependencytype'
		and [PrimaryEntityDependencyTypePLTable].ObjectTypeCode = 10012
		and [PrimaryEntityDependencyTypePLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[PrimaryEntityDependencyType]
		and [PrimaryEntityDependencyTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SecondaryEntityDependencyTypePLTable] on 
		([SecondaryEntityDependencyTypePLTable].AttributeName = 'secondaryentitydependencytype'
		and [SecondaryEntityDependencyTypePLTable].ObjectTypeCode = 10012
		and [SecondaryEntityDependencyTypePLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[SecondaryEntityDependencyType]
		and [SecondaryEntityDependencyTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 10012
		and [statecodePLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 10012
		and [statuscodePLTable].AttributeValue = [solutioncomponentrelationshipconfiguration].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)

GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredsolutioncomponentrelationshipconfiguration] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[Filteredsolutioncomponentrelationshipconfiguration] TO [CRMReaderRole]
    AS [dbo];

