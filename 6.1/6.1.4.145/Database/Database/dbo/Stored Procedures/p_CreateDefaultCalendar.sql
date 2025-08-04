

CREATE PROCEDURE [dbo].[p_CreateDefaultCalendar](@timeZoneCode int, @userId uniqueidentifier, @businessUnitId uniqueidentifier, @organizationId uniqueidentifier, @primaryUserId uniqueidentifier) as
BEGIN

	set nocount on

	-- Creates sub calendar.
	declare @subCalendarId uniqueidentifier
	select @subCalendarId = NewId()
	
	INSERT INTO CalendarBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, BusinessUnitId, OrganizationId, CalendarId, PrimaryUserId, [Type])
		Values(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @businessUnitId, @organizationId, @subCalendarId, @primaryUserId, -1)

	-- Creates relative calendar rule.
	declare @relativeRuleId uniqueidentifier
	select @relativeRuleId = NewId()
	
	INSERT INTO CalendarRuleBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, CalendarRuleId, CalendarId, IsSimple, Rank, Duration, Effort, TimeZoneCode, Offset, TimeCode, SubCode)
		VALUES(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @relativeRuleId, @subCalendarId, 1, 0, 1440, 1.0, -1, 0, 0, 1)

	-- Creates top level calendar.
	declare @topCalendarId uniqueidentifier
	select @topCalendarId = NewId()

	INSERT INTO CalendarBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, BusinessUnitId, OrganizationId, CalendarId, PrimaryUserId)
		Values(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @businessUnitId, @organizationId, @topCalendarId, @primaryUserId)

	-- Creates nested calendar rule.
	declare @nestedRuleId uniqueidentifier
	select @nestedRuleId = NewId()
	
	-- Sets startTime, The old date of 1900 causes problem for Taiwanese Calendar users, bug# 29230
	declare @startTime datetime
	select @startTime = CONVERT(datetime, '20000101', 112)

	INSERT INTO CalendarRuleBase(CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, CalendarRuleId, CalendarId, InnerCalendarId, Rank, Duration, TimeZoneCode, Pattern, StartTime, GroupDesignator, IsVaried, IsSelected)
		VALUES(@userId, GETUTCDATE(), @userId, GETUTCDATE(), @nestedRuleId, @topCalendarId, @subCalendarId, 2, 1440, @timeZoneCode, 'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU,MO,TU,WE,TH,FR,SA', @startTime, 'FC5769FC-4DE9-445d-8F4E-6E9869E60857', 0, 1)

	select @topCalendarId as 'calendarid'
END