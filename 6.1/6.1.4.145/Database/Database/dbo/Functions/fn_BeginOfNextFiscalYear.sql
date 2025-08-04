

create function dbo.fn_BeginOfNextFiscalYear ( 
	@fiscalCalendarStart	datetime,
	@nowUTC			datetime
)
returns datetime
as
begin
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, 1, @nowUTC))
end
