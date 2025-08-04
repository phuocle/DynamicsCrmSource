

--
-- report view for goal
--
create view dbo.[FilteredGoal] (
    [actualdecimal],
    [actualinteger],
    [actualmoney],
    [actualmoney_base],
    [actualstring],
    [amountdatatype],
    [amountdatatypename],
    [computedtargetasoftodaydecimal],
    [computedtargetasoftodayinteger],
    [computedtargetasoftodaymoney],
    [computedtargetasoftodaymoney_base],
    [computedtargetasoftodaypercentageachieved],
    [consideronlygoalownersrecords],
    [consideronlygoalownersrecordsname],
    [createdby],
    [createdbyname],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [customrollupfielddecimal],
    [customrollupfieldinteger],
    [customrollupfieldmoney],
    [customrollupfieldmoney_base],
    [customrollupfieldstring],
    [depth],
    [entityimage],
    [entityimageid],
    [entityimage_timestamp],
    [entityimage_url],
    [exchangerate],
    [fiscalperiod],
    [fiscalperiodname],
    [fiscalyear],
    [fiscalyearname],
    [goalenddate],
    [goalenddateutc],
    [goalid],
    [goalownerid],
    [goalowneridname],
    [goalowneridtype],
    [goalowneridyominame],
    [goalstartdate],
    [goalstartdateutc],
    [goalwitherrorid],
    [goalwitherroridname],
    [importsequencenumber],
    [inprogressdecimal],
    [inprogressinteger],
    [inprogressmoney],
    [inprogressmoney_base],
    [inprogressstring],
    [isamount],
    [isamountname],
    [isfiscalperiodgoal],
    [isfiscalperiodgoalname],
    [isoverridden],
    [isoverriddenname],
    [isoverride],
    [isoverridename],
    [lastrolledupdate],
    [lastrolledupdateutc],
    [metricid],
    [metricidname],
    [modifiedby],
    [modifiedbyname],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parentgoalid],
    [parentgoalidname],
    [percentage],
    [rolluperrorcode],
    [rolluponlyfromchildgoals],
    [rolluponlyfromchildgoalsname],
    [rollupqueryactualdecimalid],
    [rollupqueryactualdecimalidname],
    [rollupqueryactualintegerid],
    [rollupqueryactualintegeridname],
    [rollupqueryactualmoneyid],
    [rollupqueryactualmoneyidname],
    [rollupquerycustomdecimalid],
    [rollupquerycustomdecimalidname],
    [rollupquerycustomintegerid],
    [rollupquerycustomintegeridname],
    [rollupquerycustommoneyid],
    [rollupquerycustommoneyidname],
    [rollupqueryinprogressdecimalid],
    [rollupqueryinprogressdecimalidname],
    [rollupqueryinprogressintegerid],
    [rollupqueryinprogressintegeridname],
    [rollupqueryinprogressmoneyid],
    [rollupqueryinprogressmoneyidname],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [stretchtargetdecimal],
    [stretchtargetinteger],
    [stretchtargetmoney],
    [stretchtargetmoney_base],
    [stretchtargetstring],
    [targetdecimal],
    [targetinteger],
    [targetmoney],
    [targetmoney_base],
    [targetstring],
    [timezoneruleversionnumber],
    [title],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [treeid],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Goal].[ActualDecimal],
    [Goal].[ActualInteger],
    [Goal].[ActualMoney],
    [Goal].[ActualMoney_Base],
    [Goal].[ActualString],
    [Goal].[AmountDataType],
    AmountDataTypePLTable.Value,
    [Goal].[ComputedTargetAsOfTodayDecimal],
    [Goal].[ComputedTargetAsOfTodayInteger],
    [Goal].[ComputedTargetAsOfTodayMoney],
    [Goal].[ComputedTargetAsOfTodayMoney_Base],
    [Goal].[ComputedTargetAsOfTodayPercentageAchieved],
    [Goal].[ConsiderOnlyGoalOwnersRecords],
    ConsiderOnlyGoalOwnersRecordsPLTable.Value,
    [Goal].[CreatedBy],
    [Goal].[CreatedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Goal].[CreatedOn],
			us.TimeZoneCode),
        [Goal].[CreatedOn],
    [Goal].[CreatedOnBehalfBy],
    --[Goal].[CreatedOnBehalfByDsc]
    0,
    [Goal].[CreatedOnBehalfByName],
    [Goal].[CreatedOnBehalfByYomiName],
    [Goal].[CustomRollupFieldDecimal],
    [Goal].[CustomRollupFieldInteger],
    [Goal].[CustomRollupFieldMoney],
    [Goal].[CustomRollupFieldMoney_Base],
    [Goal].[CustomRollupFieldString],
    [Goal].[Depth],
    cast([Goal].[EntityImage] as varbinary(max)),
    [Goal].[EntityImageId],
    [Goal].[EntityImage_Timestamp],
    [Goal].[EntityImage_URL],
    [Goal].[ExchangeRate],
    [Goal].[FiscalPeriod],
    FiscalPeriodPLTable.Value,
    [Goal].[FiscalYear],
    FiscalYearPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Goal].[GoalEndDate],
			us.TimeZoneCode),
        [Goal].[GoalEndDate],
    [Goal].[GoalId],
    [Goal].[GoalOwnerId],
    [Goal].[GoalOwnerIdName],
    [Goal].[GoalOwnerIdType],
    [Goal].[GoalOwnerIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Goal].[GoalStartDate],
			us.TimeZoneCode),
        [Goal].[GoalStartDate],
    [Goal].[GoalWithErrorId],
    [Goal].[GoalWithErrorIdName],
    [Goal].[ImportSequenceNumber],
    [Goal].[InProgressDecimal],
    [Goal].[InProgressInteger],
    [Goal].[InProgressMoney],
    [Goal].[InProgressMoney_Base],
    [Goal].[InProgressString],
    [Goal].[IsAmount],
    IsAmountPLTable.Value,
    [Goal].[IsFiscalPeriodGoal],
    IsFiscalPeriodGoalPLTable.Value,
    [Goal].[IsOverridden],
    IsOverriddenPLTable.Value,
    [Goal].[IsOverride],
    IsOverridePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Goal].[LastRolledupDate],
			us.TimeZoneCode),
        [Goal].[LastRolledupDate],
    [Goal].[MetricId],
    [Goal].[MetricIdName],
    [Goal].[ModifiedBy],
    [Goal].[ModifiedByName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Goal].[ModifiedOn],
			us.TimeZoneCode),
        [Goal].[ModifiedOn],
    [Goal].[ModifiedOnBehalfBy],
    --[Goal].[ModifiedOnBehalfByDsc]
    0,
    [Goal].[ModifiedOnBehalfByName],
    [Goal].[ModifiedOnBehalfByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Goal].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Goal].[OverriddenCreatedOn],
    [Goal].[OwnerId],
    --[Goal].[OwnerIdDsc]
    0,
    [Goal].[OwnerIdName],
    [Goal].[OwnerIdType],
    [Goal].[OwnerIdYomiName],
    [Goal].[OwningBusinessUnit],
    [Goal].[OwningTeam],
    [Goal].[OwningUser],
    [Goal].[ParentGoalId],
    [Goal].[ParentGoalIdName],
    [Goal].[Percentage],
    [Goal].[RollupErrorCode],
    [Goal].[RollupOnlyFromChildGoals],
    RollupOnlyFromChildGoalsPLTable.Value,
    [Goal].[RollUpQueryActualDecimalId],
    [Goal].[RollUpQueryActualDecimalIdName],
    [Goal].[RollupQueryActualIntegerId],
    [Goal].[RollupQueryActualIntegerIdName],
    [Goal].[RollUpQueryActualMoneyId],
    [Goal].[RollUpQueryActualMoneyIdName],
    [Goal].[RollUpQueryCustomDecimalId],
    [Goal].[RollUpQueryCustomDecimalIdName],
    [Goal].[RollUpQueryCustomIntegerId],
    [Goal].[RollUpQueryCustomIntegerIdName],
    [Goal].[RollUpQueryCustomMoneyId],
    [Goal].[RollUpQueryCustomMoneyIdName],
    [Goal].[RollUpQueryInprogressDecimalId],
    [Goal].[RollUpQueryInprogressDecimalIdName],
    [Goal].[RollUpQueryInprogressIntegerId],
    [Goal].[RollUpQueryInprogressIntegerIdName],
    [Goal].[RollUpQueryInprogressMoneyId],
    [Goal].[RollUpQueryInprogressMoneyIdName],
    [Goal].[StateCode],
    StateCodePLTable.Value,
    [Goal].[StatusCode],
    StatusCodePLTable.Value,
    [Goal].[StretchTargetDecimal],
    [Goal].[StretchTargetInteger],
    [Goal].[StretchTargetMoney],
    [Goal].[StretchTargetMoney_Base],
    [Goal].[StretchTargetString],
    [Goal].[TargetDecimal],
    [Goal].[TargetInteger],
    [Goal].[TargetMoney],
    [Goal].[TargetMoney_Base],
    [Goal].[TargetString],
    [Goal].[TimeZoneRuleVersionNumber],
    [Goal].[Title],
    [Goal].[TransactionCurrencyId],
    [Goal].[TransactionCurrencyIdName],
    [Goal].[TreeId],
    [Goal].[UTCConversionTimeZoneCode],
    [Goal].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Goal
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Goal].TransactionCurrencyId
    left outer join StringMap [AmountDataTypePLTable] on 
		([AmountDataTypePLTable].AttributeName = 'amountdatatype'
		and [AmountDataTypePLTable].ObjectTypeCode = 9600
		and [AmountDataTypePLTable].AttributeValue = [Goal].[AmountDataType]
		and [AmountDataTypePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ConsiderOnlyGoalOwnersRecordsPLTable] on 
		([ConsiderOnlyGoalOwnersRecordsPLTable].AttributeName = 'consideronlygoalownersrecords'
		and [ConsiderOnlyGoalOwnersRecordsPLTable].ObjectTypeCode = 9600
		and [ConsiderOnlyGoalOwnersRecordsPLTable].AttributeValue = [Goal].[ConsiderOnlyGoalOwnersRecords]
		and [ConsiderOnlyGoalOwnersRecordsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalPeriodPLTable] on 
		([FiscalPeriodPLTable].AttributeName = 'fiscalperiod'
		and [FiscalPeriodPLTable].ObjectTypeCode = 9600
		and [FiscalPeriodPLTable].AttributeValue = [Goal].[FiscalPeriod]
		and [FiscalPeriodPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FiscalYearPLTable] on 
		([FiscalYearPLTable].AttributeName = 'fiscalyear'
		and [FiscalYearPLTable].ObjectTypeCode = 9600
		and [FiscalYearPLTable].AttributeValue = [Goal].[FiscalYear]
		and [FiscalYearPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsAmountPLTable] on 
		([IsAmountPLTable].AttributeName = 'isamount'
		and [IsAmountPLTable].ObjectTypeCode = 9600
		and [IsAmountPLTable].AttributeValue = [Goal].[IsAmount]
		and [IsAmountPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsFiscalPeriodGoalPLTable] on 
		([IsFiscalPeriodGoalPLTable].AttributeName = 'isfiscalperiodgoal'
		and [IsFiscalPeriodGoalPLTable].ObjectTypeCode = 9600
		and [IsFiscalPeriodGoalPLTable].AttributeValue = [Goal].[IsFiscalPeriodGoal]
		and [IsFiscalPeriodGoalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsOverriddenPLTable] on 
		([IsOverriddenPLTable].AttributeName = 'isoverridden'
		and [IsOverriddenPLTable].ObjectTypeCode = 9600
		and [IsOverriddenPLTable].AttributeValue = [Goal].[IsOverridden]
		and [IsOverriddenPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsOverridePLTable] on 
		([IsOverridePLTable].AttributeName = 'isoverride'
		and [IsOverridePLTable].ObjectTypeCode = 9600
		and [IsOverridePLTable].AttributeValue = [Goal].[IsOverride]
		and [IsOverridePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [RollupOnlyFromChildGoalsPLTable] on 
		([RollupOnlyFromChildGoalsPLTable].AttributeName = 'rolluponlyfromchildgoals'
		and [RollupOnlyFromChildGoalsPLTable].ObjectTypeCode = 9600
		and [RollupOnlyFromChildGoalsPLTable].AttributeValue = [Goal].[RollupOnlyFromChildGoals]
		and [RollupOnlyFromChildGoalsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 9600
		and [StateCodePLTable].AttributeValue = [Goal].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 9600
		and [StatusCodePLTable].AttributeValue = [Goal].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(9600) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	--
	[Goal].OwnerId in 
	( 	-- returns only principals with Basic Read privilege for entity
		select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
			join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
			where sup.SystemUserId = u.SystemUserId 
				and pem.ObjectTypeCode = 9600
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
		[Goal].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 9600)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Goal].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Goal].[GoalId] in 
		(
		select  POA.ObjectId from PrincipalObjectAccess POA 
		join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
			where sup.SystemUserId = u.SystemUserId and
				POA.ObjectTypeCode = 9600 and
				((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
		)
	)
)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredGoal] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredGoal] TO [CRMReaderRole]
    AS [dbo];

