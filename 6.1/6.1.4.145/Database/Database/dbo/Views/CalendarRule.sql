


--
-- base view for CalendarRule
--
create view dbo.[CalendarRule]
 (
    -- logical attributes
    [ServiceIdName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [OrganizationId],
    [ModifiedByYomiName],
    [CreatedByName],
    [BusinessUnitId],

    -- physical attributes
    [IsVaried],
    [Rank],
    [CreatedOn],
    [ModifiedBy],
    [Description],
    [CalendarRuleId],
    [Effort],
    [EndTime],
    [TimeCode],
    [StartTime],
    [CreatedBy],
    [VersionNumber],
    [Offset],
    [IsSimple],
    [Name],
    [TimeZoneCode],
    [IsSelected],
    [ExtentCode],
    [EffectiveIntervalEnd],
    [ModifiedOn],
    [CalendarId],
    [InnerCalendarId],
    [Pattern],
    [GroupDesignator],
    [IsModified],
    [SubCode],
    [Duration],
    [EffectiveIntervalStart],
    [ServiceId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [service_calendar_rules].[Name],
    [lk_calendarrule_modifiedonbehalfby].[FullName],
    [lk_calendarrule_createdonbehalfby].[YomiFullName],
    [lk_calendarrule_modifiedonbehalfby].[YomiFullName],
    [lk_calendarrule_modifiedby].[FullName],
    [lk_calendarrule_createdonbehalfby].[FullName],
    [lk_calendarrule_createdby].[YomiFullName],
    [calendar_calendar_rules].[OrganizationId],
    [lk_calendarrule_modifiedby].[YomiFullName],
    [lk_calendarrule_createdby].[FullName],
    [calendar_calendar_rules].[BusinessUnitId],

    -- physical attribute
    [CalendarRuleBase].[IsVaried],
    [CalendarRuleBase].[Rank],
    [CalendarRuleBase].[CreatedOn],
    [CalendarRuleBase].[ModifiedBy],
    [CalendarRuleBase].[Description],
    [CalendarRuleBase].[CalendarRuleId],
    [CalendarRuleBase].[Effort],
    [CalendarRuleBase].[EndTime],
    [CalendarRuleBase].[TimeCode],
    [CalendarRuleBase].[StartTime],
    [CalendarRuleBase].[CreatedBy],
    [CalendarRuleBase].[VersionNumber],
    [CalendarRuleBase].[Offset],
    [CalendarRuleBase].[IsSimple],
    [CalendarRuleBase].[Name],
    [CalendarRuleBase].[TimeZoneCode],
    [CalendarRuleBase].[IsSelected],
    [CalendarRuleBase].[ExtentCode],
    [CalendarRuleBase].[EffectiveIntervalEnd],
    [CalendarRuleBase].[ModifiedOn],
    [CalendarRuleBase].[CalendarId],
    [CalendarRuleBase].[InnerCalendarId],
    [CalendarRuleBase].[Pattern],
    [CalendarRuleBase].[GroupDesignator],
    [CalendarRuleBase].[IsModified],
    [CalendarRuleBase].[SubCode],
    [CalendarRuleBase].[Duration],
    [CalendarRuleBase].[EffectiveIntervalStart],
    [CalendarRuleBase].[ServiceId],
    [CalendarRuleBase].[CreatedOnBehalfBy],
    [CalendarRuleBase].[ModifiedOnBehalfBy]
from [CalendarRuleBase] 
    left join [CalendarBase] [calendar_calendar_rules] on ([CalendarRuleBase].[CalendarId] = [calendar_calendar_rules].[CalendarId])
    left join [SystemUserBase] [lk_calendarrule_createdby] with(nolock) on ([CalendarRuleBase].[CreatedBy] = [lk_calendarrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_calendarrule_createdonbehalfby] with(nolock) on ([CalendarRuleBase].[CreatedOnBehalfBy] = [lk_calendarrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_calendarrule_modifiedby] with(nolock) on ([CalendarRuleBase].[ModifiedBy] = [lk_calendarrule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_calendarrule_modifiedonbehalfby] with(nolock) on ([CalendarRuleBase].[ModifiedOnBehalfBy] = [lk_calendarrule_modifiedonbehalfby].[SystemUserId])
    left join [ServiceBase] [service_calendar_rules] on ([CalendarRuleBase].[ServiceId] = [service_calendar_rules].[ServiceId])
