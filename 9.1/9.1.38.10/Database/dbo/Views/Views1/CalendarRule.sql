


--
-- base view for CalendarRule
--
create view dbo.[CalendarRule]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationId],
    [BusinessUnitId],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ServiceIdName],

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
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ServiceId]
) with view_metadata as
select
    -- logical attributes
    [lk_calendarrule_createdby].[YomiFullName],
    [lk_calendarrule_createdby].[FullName],
    [lk_calendarrule_modifiedonbehalfby].[FullName],
    [lk_calendarrule_modifiedonbehalfby].[YomiFullName],
    [calendar_calendar_rules].[OrganizationId],
    [calendar_calendar_rules].[BusinessUnitId],
    [lk_calendarrule_createdonbehalfby].[YomiFullName],
    [lk_calendarrule_createdonbehalfby].[FullName],
    [lk_calendarrule_modifiedby].[FullName],
    [lk_calendarrule_modifiedby].[YomiFullName],
    [service_calendar_rules].[Name],

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
    [CalendarRuleBase].[CreatedOnBehalfBy],
    [CalendarRuleBase].[ModifiedOnBehalfBy],
    [CalendarRuleBase].[ServiceId]
from [CalendarRuleBase] 
    left join [CalendarBase] [calendar_calendar_rules] on ([CalendarRuleBase].[CalendarId] = [calendar_calendar_rules].[CalendarId])
    left join [SystemUserBase] [lk_calendarrule_createdby]  on ([CalendarRuleBase].[CreatedBy] = [lk_calendarrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_calendarrule_createdonbehalfby]  on ([CalendarRuleBase].[CreatedOnBehalfBy] = [lk_calendarrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_calendarrule_modifiedby]  on ([CalendarRuleBase].[ModifiedBy] = [lk_calendarrule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_calendarrule_modifiedonbehalfby]  on ([CalendarRuleBase].[ModifiedOnBehalfBy] = [lk_calendarrule_modifiedonbehalfby].[SystemUserId])
    left join [ServiceBase] [service_calendar_rules] on ([CalendarRuleBase].[ServiceId] = [service_calendar_rules].[ServiceId])
