

create function dbo.fn_GetFiscalPeriod ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@fiscalPeriodsPerYear int,
	@dateUTC datetime,
	@timezonecode int
)
returns int
as
begin

	declare @date datetime

	if (@dateUTC is null)
	begin
		return null
	end
	
	-- Convert the time to the user's local time, unless the caller has
	-- passed in TimeZoneCode.None.
	if (@timezonecode = -1)
		set @date = @dateUTC
	else
		set @date = dbo.fn_UTCToTzCodeSpecificLocalTime(@dateUTC, @timezonecode)

	return dbo.fn_GetFiscalPeriodCore(@fiscalCalendarStart, @fiscalPeriodsPerYear, @date)
end
