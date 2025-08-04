

create function dbo.fn_EndOfLastFiscalYear ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@dateUTC datetime
)
returns datetime
as
begin
	-- The end of the last fiscal year is the beginning of this fiscal year.
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, @dateUTC)
end
