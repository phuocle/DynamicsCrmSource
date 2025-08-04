

create procedure dbo.p_CreateBusinessClosureCalendar(
    @calendarId uniqueidentifier,
    @organizationId uniqueidentifier,
    @rootBusinessUnitId uniqueidentifier,
    @systemUserId uniqueidentifier,
    @name nvarchar(160),
    @description nvarchar(max))
as
begin;
    set nocount on;

    insert into CalendarBase(CalendarId, BusinessUnitId, CreatedBy, ModifiedBy, Description, Name, OrganizationId, IsShared)
    values (@calendarId, @rootBusinessUnitId, @systemUserId, @systemUserId, @name, @description, @organizationId, 1);

    select @calendarId;
end;