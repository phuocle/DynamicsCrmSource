

create function dbo.fn_EndOfThisFiscalYear ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime
)
returns datetime
as
begin
	-- End of this fiscal year is the start of the next.
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, 1 , @nowUTC))
end
