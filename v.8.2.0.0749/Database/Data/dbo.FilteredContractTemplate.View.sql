USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredContractTemplate]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for contracttemplate
--
create view [dbo].[FilteredContractTemplate] (
    [abbreviation],
    [allotmenttypecode],
    [allotmenttypecodename],
    [billingfrequencycode],
    [billingfrequencycodename],
    [componentstate],
    [contractservicelevelcode],
    [contractservicelevelcodename],
    [contracttemplateid],
    [contracttemplateidunique],
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
    [effectivitycalendar],
    [importsequencenumber],
    [introducedversion],
    [iscustomizable],
    [ismanaged],
    [ismanagedname],
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
    [overwritetime],
    [overwritetimeutc],
    [solutionid],
    [usediscountaspercentage],
    [usediscountaspercentagename],
    [versionnumber]
) with view_metadata as
select
    [ContractTemplate].[Abbreviation],
    [ContractTemplate].[AllotmentTypeCode],
    AllotmentTypeCodePLTable.Value,
    [ContractTemplate].[BillingFrequencyCode],
    BillingFrequencyCodePLTable.Value,
    [ContractTemplate].[ComponentState],
    [ContractTemplate].[ContractServiceLevelCode],
    ContractServiceLevelCodePLTable.Value,
    [ContractTemplate].[ContractTemplateId],
    [ContractTemplate].[ContractTemplateIdUnique],
    [ContractTemplate].[CreatedBy],
    --[ContractTemplate].[CreatedByDsc]
    0,
    [ContractTemplate].[CreatedByName],
    [ContractTemplate].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[CreatedOn],
			us.TimeZoneCode),
        [ContractTemplate].[CreatedOn],
    [ContractTemplate].[CreatedOnBehalfBy],
    --[ContractTemplate].[CreatedOnBehalfByDsc]
    0,
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
    --[ContractTemplate].[ModifiedByDsc]
    0,
    [ContractTemplate].[ModifiedByName],
    [ContractTemplate].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[ModifiedOn],
			us.TimeZoneCode),
        [ContractTemplate].[ModifiedOn],
    [ContractTemplate].[ModifiedOnBehalfBy],
    --[ContractTemplate].[ModifiedOnBehalfByDsc]
    0,
    [ContractTemplate].[ModifiedOnBehalfByName],
    [ContractTemplate].[ModifiedOnBehalfByYomiName],
    [ContractTemplate].[Name],
    [ContractTemplate].[OrganizationId],
    --[ContractTemplate].[OrganizationIdDsc]
    0,
    [ContractTemplate].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ContractTemplate].[OverriddenCreatedOn],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ContractTemplate].[OverwriteTime],
			us.TimeZoneCode),
        [ContractTemplate].[OverwriteTime],
    [ContractTemplate].[SolutionId],
    [ContractTemplate].[UseDiscountAsPercentage],
    UseDiscountAsPercentagePLTable.Value,
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
