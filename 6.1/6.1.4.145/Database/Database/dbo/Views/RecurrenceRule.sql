


--
-- base view for RecurrenceRule
--
create view dbo.[RecurrenceRule]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [DayOfMonth],
    [Duration],
    [CreatedBy],
    [ObjectTypeCode],
    [ModifiedOn],
    [CreatedOn],
    [RuleId],
    [IsNthMonthly],
    [VersionNumber],
    [EffectiveStartDate],
    [RecurrencePatternType],
    [OwningBusinessUnit],
    [MonthOfYear],
    [EffectiveEndDate],
    [StartTime],
    [Interval],
    [EndTime],
    [PatternEndType],
    [IsNthYearly],
    [PatternStartDate],
    [Instance],
    [IsWeekDayPattern],
    [PatternEndDate],
    [FirstDayOfWeek],
    [IsRegenerate],
    [ObjectId],
    [DaysOfWeekMask],
    [ModifiedBy],
    [Occurrences],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_recurrencerule_modifiedby].[YomiFullName],
    [lk_recurrencerule_modifiedby].[FullName],
    [lk_recurrencerulebase_createdonbehalfby].[YomiFullName],
    [lk_recurrencerule_createdby].[FullName],
    [lk_recurrencerule_createdby].[YomiFullName],
    [lk_recurrencerulebase_createdonbehalfby].[FullName],
    [lk_recurrencerulebase_modifiedonbehalfby].[YomiFullName],
    [lk_recurrencerulebase_modifiedonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [RecurrenceRuleBase].OwnerId,
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
    [RecurrenceRuleBase].[DayOfMonth],
    [RecurrenceRuleBase].[Duration],
    [RecurrenceRuleBase].[CreatedBy],
    [RecurrenceRuleBase].[ObjectTypeCode],
    [RecurrenceRuleBase].[ModifiedOn],
    [RecurrenceRuleBase].[CreatedOn],
    [RecurrenceRuleBase].[RuleId],
    [RecurrenceRuleBase].[IsNthMonthly],
    [RecurrenceRuleBase].[VersionNumber],
    [RecurrenceRuleBase].[EffectiveStartDate],
    [RecurrenceRuleBase].[RecurrencePatternType],
    [RecurrenceRuleBase].[OwningBusinessUnit],
    [RecurrenceRuleBase].[MonthOfYear],
    [RecurrenceRuleBase].[EffectiveEndDate],
    [RecurrenceRuleBase].[StartTime],
    [RecurrenceRuleBase].[Interval],
    [RecurrenceRuleBase].[EndTime],
    [RecurrenceRuleBase].[PatternEndType],
    [RecurrenceRuleBase].[IsNthYearly],
    [RecurrenceRuleBase].[PatternStartDate],
    [RecurrenceRuleBase].[Instance],
    [RecurrenceRuleBase].[IsWeekDayPattern],
    [RecurrenceRuleBase].[PatternEndDate],
    [RecurrenceRuleBase].[FirstDayOfWeek],
    [RecurrenceRuleBase].[IsRegenerate],
    [RecurrenceRuleBase].[ObjectId],
    [RecurrenceRuleBase].[DaysOfWeekMask],
    [RecurrenceRuleBase].[ModifiedBy],
    [RecurrenceRuleBase].[Occurrences],
    [RecurrenceRuleBase].[ModifiedOnBehalfBy],
    [RecurrenceRuleBase].[CreatedOnBehalfBy]
from [RecurrenceRuleBase] 
    left join [SystemUserBase] [lk_recurrencerule_createdby] with(nolock) on ([RecurrenceRuleBase].[CreatedBy] = [lk_recurrencerule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_recurrencerule_modifiedby] with(nolock) on ([RecurrenceRuleBase].[ModifiedBy] = [lk_recurrencerule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_recurrencerulebase_createdonbehalfby] with(nolock) on ([RecurrenceRuleBase].[CreatedOnBehalfBy] = [lk_recurrencerulebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_recurrencerulebase_modifiedonbehalfby] with(nolock) on ([RecurrenceRuleBase].[ModifiedOnBehalfBy] = [lk_recurrencerulebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([RecurrenceRuleBase].OwnerId = XXowner.OwnerId)
