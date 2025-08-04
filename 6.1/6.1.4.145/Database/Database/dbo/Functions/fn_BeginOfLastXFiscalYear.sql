

create function dbo.fn_BeginOfLastXFiscalYear ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime,
	@X int
)
returns datetime
as
begin
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, -@X, @nowUTC))
end
