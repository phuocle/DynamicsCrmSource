

create function dbo.fn_BeginOfThisFiscalYear ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime
)
returns datetime
as
begin
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, @nowUTC)
end
