

create function dbo.fn_GetFiscalPeriodForCurrentUser ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@fiscalPeriodsPerYear int,
	@dateUTC datetime
)
returns int
as
begin

	declare @timezonecode 	int

	select top 1 @timezonecode = us.TimeZoneCode
	from UserSettingsBase as us WHERE us.SystemUserId = dbo.fn_FindUserGuid()

	return dbo.fn_GetFiscalPeriod(@fiscalCalendarStart, @fiscalPeriodsPerYear, @dateUTC, @timezonecode)
end
