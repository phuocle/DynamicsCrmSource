USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Goal]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Goal
--
create view [dbo].[Goal]
 (
    -- logical attributes
    [GoalWithErrorIdName],
    [RollUpQueryActualMoneyIdName],
    [RollUpQueryActualDecimalIdName],
    [ParentGoalIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [RollUpQueryCustomIntegerIdName],
    [ModifiedByName],
    [RollUpQueryInprogressDecimalIdName],
    [CreatedByName],
    [RollUpQueryInprogressIntegerIdName],
    [RollupQueryActualIntegerIdName],
    [RollUpQueryCustomMoneyIdName],
    [EntityImage_URL],
    [EntityImage_Timestamp],
    [EntityImage],
    [RollUpQueryInprogressMoneyIdName],
    [RollUpQueryCustomDecimalIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [IsAmount],
    [MetricIdName],
    [AmountDataType],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [GoalId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Title],
    [FiscalPeriod],
    [FiscalYear],
    [GoalStartDate],
    [GoalEndDate],
    [GoalOwnerId],
    [GoalOwnerIdName],
    [GoalOwnerIdYomiName],
    [ParentGoalId],
    [TransactionCurrencyId],
    [ExchangeRate],
    [MetricId],
    [TreeId],
    [Depth],
    [StretchTargetMoney],
    [StretchTargetMoney_Base],
    [StretchTargetDecimal],
    [StretchTargetInteger],
    [TargetMoney],
    [TargetMoney_Base],
    [TargetDecimal],
    [TargetInteger],
    [ActualMoney],
    [ActualMoney_Base],
    [CustomRollupFieldMoney],
    [CustomRollupFieldMoney_Base],
    [InProgressMoney],
    [InProgressMoney_Base],
    [ActualDecimal],
    [CustomRollupFieldDecimal],
    [InProgressDecimal],
    [ActualInteger],
    [CustomRollupFieldInteger],
    [InProgressInteger],
    [Percentage],
    [IsFiscalPeriodGoal],
    [ConsiderOnlyGoalOwnersRecords],
    [LastRolledupDate],
    [TargetString],
    [StretchTargetString],
    [ActualString],
    [CustomRollupFieldString],
    [InProgressString],
    [RollupQueryActualIntegerId],
    [RollUpQueryActualMoneyId],
    [RollUpQueryActualDecimalId],
    [RollUpQueryCustomIntegerId],
    [RollUpQueryCustomMoneyId],
    [RollUpQueryCustomDecimalId],
    [RollUpQueryInprogressIntegerId],
    [RollUpQueryInprogressMoneyId],
    [RollUpQueryInprogressDecimalId],
    [RollupOnlyFromChildGoals],
    [GoalWithErrorId],
    [RollupErrorCode],
    [GoalOwnerIdType],
    [ComputedTargetAsOfTodayPercentageAchieved],
    [ComputedTargetAsOfTodayMoney],
    [ComputedTargetAsOfTodayMoney_Base],
    [ComputedTargetAsOfTodayDecimal],
    [ComputedTargetAsOfTodayInteger],
    [IsOverride],
    [IsOverridden],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [goal_rolluperror_goal].[Title],
    [goal_rollupquery_actualmoney].[Name],
    [goal_rollupquery_actualdecimal].[Name],
    [goal_parent_goal].[Title],
    [lk_goal_modifiedonbehalfby].[YomiFullName],
    [lk_goal_modifiedonbehalfby].[FullName],
    [goal_rollupquery_customint].[Name],
    [lk_goal_modifiedby].[FullName],
    [goal_rollupquery_inprogressdecimal].[Name],
    [lk_goal_createdby].[FullName],
    [goal_rollupquery_inprogressint].[Name],
    [goalrollupquery_actualint].[Name],
    [goal_rollupquery_custommoney].[Name],
    [lk_goal_entityimage].[ImageURL],
    [lk_goal_entityimage].[ImageTimestamp],
    [lk_goal_entityimage].[ImageData],
    [goal_rollupquery_inprogressmoney].[Name],
    [goal_rollupquery_customdecimal].[Name],
    [lk_goal_createdonbehalfby].[FullName],
    [lk_goal_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_Goal].[CurrencyName],
    [metric_goal].[IsAmount],
    [metric_goal].[Name],
    [metric_goal].[AmountDataType],

    -- ownership entries
    OwnerId = [GoalBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [GoalBase].[GoalId],
    [GoalBase].[CreatedOn],
    [GoalBase].[CreatedBy],
    [GoalBase].[ModifiedOn],
    [GoalBase].[ModifiedBy],
    [GoalBase].[CreatedOnBehalfBy],
    [GoalBase].[ModifiedOnBehalfBy],
    [GoalBase].[OwningBusinessUnit],
    [GoalBase].[StateCode],
    [GoalBase].[StatusCode],
    [GoalBase].[VersionNumber],
    [GoalBase].[ImportSequenceNumber],
    [GoalBase].[OverriddenCreatedOn],
    [GoalBase].[TimeZoneRuleVersionNumber],
    [GoalBase].[UTCConversionTimeZoneCode],
    [GoalBase].[Title],
    [GoalBase].[FiscalPeriod],
    [GoalBase].[FiscalYear],
    [GoalBase].[GoalStartDate],
    [GoalBase].[GoalEndDate],
    [GoalBase].[GoalOwnerId],
    [GoalBase].[GoalOwnerIdName],
    [GoalBase].[GoalOwnerIdYomiName],
    [GoalBase].[ParentGoalId],
    [GoalBase].[TransactionCurrencyId],
    [GoalBase].[ExchangeRate],
    [GoalBase].[MetricId],
    [GoalBase].[TreeId],
    [GoalBase].[Depth],
    [GoalBase].[StretchTargetMoney],
    [GoalBase].[StretchTargetMoney_Base],
    [GoalBase].[StretchTargetDecimal],
    [GoalBase].[StretchTargetInteger],
    [GoalBase].[TargetMoney],
    [GoalBase].[TargetMoney_Base],
    [GoalBase].[TargetDecimal],
    [GoalBase].[TargetInteger],
    [GoalBase].[ActualMoney],
    [GoalBase].[ActualMoney_Base],
    [GoalBase].[CustomRollupFieldMoney],
    [GoalBase].[CustomRollupFieldMoney_Base],
    [GoalBase].[InProgressMoney],
    [GoalBase].[InProgressMoney_Base],
    [GoalBase].[ActualDecimal],
    [GoalBase].[CustomRollupFieldDecimal],
    [GoalBase].[InProgressDecimal],
    [GoalBase].[ActualInteger],
    [GoalBase].[CustomRollupFieldInteger],
    [GoalBase].[InProgressInteger],
    [GoalBase].[Percentage],
    [GoalBase].[IsFiscalPeriodGoal],
    [GoalBase].[ConsiderOnlyGoalOwnersRecords],
    [GoalBase].[LastRolledupDate],
    [GoalBase].[TargetString],
    [GoalBase].[StretchTargetString],
    [GoalBase].[ActualString],
    [GoalBase].[CustomRollupFieldString],
    [GoalBase].[InProgressString],
    [GoalBase].[RollupQueryActualIntegerId],
    [GoalBase].[RollUpQueryActualMoneyId],
    [GoalBase].[RollUpQueryActualDecimalId],
    [GoalBase].[RollUpQueryCustomIntegerId],
    [GoalBase].[RollUpQueryCustomMoneyId],
    [GoalBase].[RollUpQueryCustomDecimalId],
    [GoalBase].[RollUpQueryInprogressIntegerId],
    [GoalBase].[RollUpQueryInprogressMoneyId],
    [GoalBase].[RollUpQueryInprogressDecimalId],
    [GoalBase].[RollupOnlyFromChildGoals],
    [GoalBase].[GoalWithErrorId],
    [GoalBase].[RollupErrorCode],
    [GoalBase].[GoalOwnerIdType],
    [GoalBase].[ComputedTargetAsOfTodayPercentageAchieved],
    [GoalBase].[ComputedTargetAsOfTodayMoney],
    [GoalBase].[ComputedTargetAsOfTodayMoney_Base],
    [GoalBase].[ComputedTargetAsOfTodayDecimal],
    [GoalBase].[ComputedTargetAsOfTodayInteger],
    [GoalBase].[IsOverride],
    [GoalBase].[IsOverridden],
    [GoalBase].[EntityImageId]
from [GoalBase] 
    left join [GoalBase] [goal_parent_goal] on ([GoalBase].[ParentGoalId] = [goal_parent_goal].[GoalId])
    left join [GoalBase] [goal_rolluperror_goal] on ([GoalBase].[GoalWithErrorId] = [goal_rolluperror_goal].[GoalId])
    left join [GoalRollupQueryBase] [goal_rollupquery_actualdecimal] on ([GoalBase].[RollUpQueryActualDecimalId] = [goal_rollupquery_actualdecimal].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_actualmoney] on ([GoalBase].[RollUpQueryActualMoneyId] = [goal_rollupquery_actualmoney].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_customdecimal] on ([GoalBase].[RollUpQueryCustomDecimalId] = [goal_rollupquery_customdecimal].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_customint] on ([GoalBase].[RollUpQueryCustomIntegerId] = [goal_rollupquery_customint].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_custommoney] on ([GoalBase].[RollUpQueryCustomMoneyId] = [goal_rollupquery_custommoney].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_inprogressdecimal] on ([GoalBase].[RollUpQueryInprogressDecimalId] = [goal_rollupquery_inprogressdecimal].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_inprogressint] on ([GoalBase].[RollUpQueryInprogressIntegerId] = [goal_rollupquery_inprogressint].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goal_rollupquery_inprogressmoney] on ([GoalBase].[RollUpQueryInprogressMoneyId] = [goal_rollupquery_inprogressmoney].[GoalRollupQueryId])
    left join [GoalRollupQueryBase] [goalrollupquery_actualint] on ([GoalBase].[RollupQueryActualIntegerId] = [goalrollupquery_actualint].[GoalRollupQueryId])
    left join [SystemUserBase] [lk_goal_createdby] with(nolock) on ([GoalBase].[CreatedBy] = [lk_goal_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_goal_createdonbehalfby] with(nolock) on ([GoalBase].[CreatedOnBehalfBy] = [lk_goal_createdonbehalfby].[SystemUserId])
    left join [ImageDescriptor] [lk_goal_entityimage] on ([GoalBase].[EntityImageId] = [lk_goal_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_goal_modifiedby] with(nolock) on ([GoalBase].[ModifiedBy] = [lk_goal_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_goal_modifiedonbehalfby] with(nolock) on ([GoalBase].[ModifiedOnBehalfBy] = [lk_goal_modifiedonbehalfby].[SystemUserId])
    left join [MetricBase] [metric_goal] on ([GoalBase].[MetricId] = [metric_goal].[MetricId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Goal] on ([GoalBase].[TransactionCurrencyId] = [TransactionCurrency_Goal].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([GoalBase].OwnerId = XXowner.OwnerId)

GO
