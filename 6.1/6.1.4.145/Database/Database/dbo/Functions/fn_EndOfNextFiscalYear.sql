

create function dbo.fn_EndOfNextFiscalYear ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime
)
returns datetime
as
begin
	-- The end of the next fiscal year is the beginning of the year following that.
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, 2, @nowUTC))
end
