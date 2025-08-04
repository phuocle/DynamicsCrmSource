

--
-- report view for contracttemplate
--
create view dbo.[FilteredContractTemplate] 
(
    [abbreviation],
    [allotmenttypecode],
    [allotmenttypecodename],
    [billingfrequencycode],
    [billingfrequencycodename],
    [componentstate],
    [componentstatename],
    [contractservicelevelcode],
    [contractservicelevelcodename],
    [contracttemplateid],
    [contracttemplateidunique],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [description],
    [effectivitycalendar],
    [importsequencenumber],
    [introducedversion],
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
    [solutionid],
    [timezoneruleversionnumber],
    [usediscountaspercentage],
    [usediscountaspercentagename],
    [utcconversiontimezonecode],
    [versionnumber]
) with view_metadata as
select
    [ContractTemplate].[Abbreviation],
    [ContractTemplate].[AllotmentTypeCode],
    AllotmentTypeCodePLTable.Value,
    [ContractTemplate].[BillingFrequencyCode],
    BillingFrequencyCodePLTable.Value,
    [ContractTemplate].[ComponentState],
    ComponentStatePLTable.Value,
    [ContractTemplate].[ContractServiceLevelCode],
    ContractServiceLevelCodePLTable.Value,
    [ContractTemplate].[ContractTemplateId],
    [ContractTemplate].[ContractTemplateIdUnique],
    [ContractTemplate].[CreatedBy],
    [ContractTemplate].[CreatedByName],
    [ContractTemplate].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[CreatedOn],
			us.TimeZoneCode),
        [ContractTemplate].[CreatedOn],
    [ContractTemplate].[CreatedOnBehalfBy],
    [ContractTemplate].[CreatedOnBehalfByName],
    [ContractTemplate].[CreatedOnBehalfByYomiName],
    [ContractTemplate].[Description],
    [ContractTemplate].[EffectivityCalendar],
    [ContractTemplate].[ImportSequenceNumber],
    [ContractTemplate].[IntroducedVersion],
    [ContractTemplate].[IsCustomizable],
    [ContractTemplate].[IsManaged],
    IsManagedPLTable.Value,
    [ContractTemplate].[ModifiedBy],
    [ContractTemplate].[ModifiedByName],
    [ContractTemplate].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[ModifiedOn],
			us.TimeZoneCode),
        [ContractTemplate].[ModifiedOn],
    [ContractTemplate].[ModifiedOnBehalfBy],
    [ContractTemplate].[ModifiedOnBehalfByName],
    [ContractTemplate].[ModifiedOnBehalfByYomiName],
    [ContractTemplate].[Name],
    [ContractTemplate].[OrganizationId],
    [ContractTemplate].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContractTemplate].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[OverwriteTime],
			us.TimeZoneCode),
        [ContractTemplate].[OverwriteTime],
    [ContractTemplate].[SolutionId],
    [ContractTemplate].[TimeZoneRuleVersionNumber],
    [ContractTemplate].[UseDiscountAsPercentage],
    UseDiscountAsPercentagePLTable.Value,
    [ContractTemplate].[UTCConversionTimeZoneCode],
    [ContractTemplate].[VersionNumber]
from ContractTemplate
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AllotmentTypeCodePLTable] on 
		([AllotmentTypeCodePLTable].AttributeName = 'allotmenttypecode'
		and [AllotmentTypeCodePLTable].ObjectTypeCode = 2011
		and [AllotmentTypeCodePLTable].AttributeValue = [ContractTemplate].[AllotmentTypeCode]
		and [AllotmentTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [BillingFrequencyCodePLTable] on 
		([BillingFrequencyCodePLTable].AttributeName = 'billingfrequencycode'
		and [BillingFrequencyCodePLTable].ObjectTypeCode = 2011
		and [BillingFrequencyCodePLTable].AttributeValue = [ContractTemplate].[BillingFrequencyCode]
		and [BillingFrequencyCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ComponentStatePLTable] on 
		([ComponentStatePLTable].AttributeName = 'componentstate'
		and [ComponentStatePLTable].ObjectTypeCode = 2011
		and [ComponentStatePLTable].AttributeValue = [ContractTemplate].[ComponentState]
		and [ComponentStatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ContractServiceLevelCodePLTable] on 
		([ContractServiceLevelCodePLTable].AttributeName = 'contractservicelevelcode'
		and [ContractServiceLevelCodePLTable].ObjectTypeCode = 2011
		and [ContractServiceLevelCodePLTable].AttributeValue = [ContractTemplate].[ContractServiceLevelCode]
		and [ContractServiceLevelCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsManagedPLTable] on 
		([IsManagedPLTable].AttributeName = 'ismanaged'
		and [IsManagedPLTable].ObjectTypeCode = 2011
		and [IsManagedPLTable].AttributeValue = [ContractTemplate].[IsManaged]
		and [IsManagedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [UseDiscountAsPercentagePLTable] on 
		([UseDiscountAsPercentagePLTable].AttributeName = 'usediscountaspercentage'
		and [UseDiscountAsPercentagePLTable].ObjectTypeCode = 2011
		and [UseDiscountAsPercentagePLTable].AttributeValue = [ContractTemplate].[UseDiscountAsPercentage]
		and [UseDiscountAsPercentagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(2011) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ContractTemplate].OrganizationId = u.OrganizationId
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContractTemplate] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredContractTemplate] TO [CRMReaderRole]
    AS [dbo];

