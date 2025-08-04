

create function dbo.fn_EndOfSpecificFiscalYear( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@fiscalYearDisplayCode int,
	@fiscalYear int
)
returns datetime
as
begin
	-- The end of the specified fiscal year is the start of the year following.
	return dbo.fn_BeginOfSpecificFiscalYear(@fiscalCalendarStart, @fiscalYearDisplayCode, @fiscalYear + 1);
end
