

create function dbo.fn_GetFiscalYearCLR ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@displayCode int,
	@dateUTC datetime,
	@timeZoneId nvarchar(60)
)
returns int
as
begin

	declare @date datetime

	if (@dateUTC is null)
	begin
		return null
	end
	
	-- Convert the time to the user's local time.
	set @date = dbo.fn_ConvertUtcToSpecificTimeCLR(@dateUTC, @timeZoneId)

	return dbo.fn_GetFiscalYearCore(@fiscalCalendarStart, @displayCode, @date)
end
