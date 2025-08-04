

create function dbo.fn_GetFiscalYear ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@displayCode int,
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

	return dbo.fn_GetFiscalYearCore(@fiscalCalendarStart, @displayCode, @date)
end
