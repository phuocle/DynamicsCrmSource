


--
-- base view for Calendar
--
create view dbo.[Calendar]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [BusinessUnitIdName],
    [HolidayScheduleCalendarIdName],
    [ModifiedByName],

    -- physical attributes
    [ModifiedBy],
    [CalendarId],
    [Description],
    [CreatedOn],
    [Name],
    [BusinessUnitId],
    [VersionNumber],
    [ModifiedOn],
    [CreatedBy],
    [PrimaryUserId],
    [OrganizationId],
    [IsShared],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [Type],
    [HolidayScheduleCalendarId]
) with view_metadata as
select
    -- logical attributes
    [lk_calendar_modifiedonbehalfby].[FullName],
    [organization_calendars].[Name],
    [lk_calendar_createdby].[FullName],
    [lk_calendar_createdonbehalfby].[FullName],
    [lk_calendar_createdby].[YomiFullName],
    [lk_calendar_modifiedby].[YomiFullName],
    [lk_calendar_createdonbehalfby].[YomiFullName],
    [lk_calendar_modifiedonbehalfby].[YomiFullName],
    [business_unit_calendars].[Name],
    [calendar_customercalendar_holidaycalendar].[Name],
    [lk_calendar_modifiedby].[FullName],

    -- physical attribute
    [CalendarBase].[ModifiedBy],
    [CalendarBase].[CalendarId],
    [CalendarBase].[Description],
    [CalendarBase].[CreatedOn],
    [CalendarBase].[Name],
    [CalendarBase].[BusinessUnitId],
    [CalendarBase].[VersionNumber],
    [CalendarBase].[ModifiedOn],
    [CalendarBase].[CreatedBy],
    [CalendarBase].[PrimaryUserId],
    [CalendarBase].[OrganizationId],
    [CalendarBase].[IsShared],
    [CalendarBase].[CreatedOnBehalfBy],
    [CalendarBase].[ModifiedOnBehalfBy],
    [CalendarBase].[Type],
    [CalendarBase].[HolidayScheduleCalendarId]
from [CalendarBase] 
    left join [BusinessUnitBase] [business_unit_calendars] on ([CalendarBase].[BusinessUnitId] = [business_unit_calendars].[BusinessUnitId])
    left join [CalendarBase] [calendar_customercalendar_holidaycalendar] on ([CalendarBase].[HolidayScheduleCalendarId] = [calendar_customercalendar_holidaycalendar].[CalendarId])
    left join [SystemUserBase] [lk_calendar_createdby] with(nolock) on ([CalendarBase].[CreatedBy] = [lk_calendar_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_calendar_createdonbehalfby] with(nolock) on ([CalendarBase].[CreatedOnBehalfBy] = [lk_calendar_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_calendar_modifiedby] with(nolock) on ([CalendarBase].[ModifiedBy] = [lk_calendar_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_calendar_modifiedonbehalfby] with(nolock) on ([CalendarBase].[ModifiedOnBehalfBy] = [lk_calendar_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_calendars] with(nolock) on ([CalendarBase].[OrganizationId] = [organization_calendars].[OrganizationId])
