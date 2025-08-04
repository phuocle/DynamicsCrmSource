

create procedure dbo.p_CreateDefaultCalendar(
    @timeZoneCode int,
    @userId uniqueidentifier,
    @businessUnitId uniqueidentifier,
    @organizationId uniqueidentifier,
    @primaryUserId uniqueidentifier)
as
begin;
    set nocount on;

    -- Creates sub calendar.
    declare @subCalendarId uniqueidentifier = newid();
    
    insert into CalendarBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, BusinessUnitId, OrganizationId, CalendarId, PrimaryUserId, [Type])
    values(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @businessUnitId, @organizationId, @subCalendarId, @primaryUserId, -1)

    -- Creates relative calendar rule.
    declare @relativeRuleId uniqueidentifier = newid();

    insert into CalendarRuleBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, CalendarRuleId, CalendarId, IsSimple, Rank, Duration, Effort, TimeZoneCode, Offset, TimeCode, SubCode)
    values (@userId, GETUTCDATE(), @userId, GETUTCDATE(), @relativeRuleId, @subCalendarId, 1, 0, 1440, 1.0, -1, 0, 0, 1);

    -- Creates top level calendar.
    declare @topCalendarId uniqueidentifier = newid();

    insert into CalendarBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, BusinessUnitId, OrganizationId, CalendarId, PrimaryUserId)
    values(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @businessUnitId, @organizationId, @topCalendarId, @primaryUserId);

    -- Creates nested calendar rule.
    declare @nestedRuleId uniqueidentifier = newid();

    -- Sets startTime, The old date of 1900 causes problem for Taiwanese Calendar users, bug# 29230
    declare @startTime datetime = convert(datetime, '20000101', 112);

    insert into CalendarRuleBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, CalendarRuleId, CalendarId, InnerCalendarId, Rank, Duration, TimeZoneCode, Pattern, StartTime, GroupDesignator, IsVaried, IsSelected)
    values(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @nestedRuleId, @topCalendarId, @subCalendarId, 2, 1440, @timeZoneCode, 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU,MO,TU,WE,TH,FR,SA', @startTime, 'FC5769FC-4DE9-445d-8F4E-6E9869E60857', 0, 1);

    select @topCalendarId as 'calendarid';
end;