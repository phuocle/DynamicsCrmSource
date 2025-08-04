

create function dbo.fn_BeginOfSpecificFiscalYear( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@fiscalYearDisplayCode	int,
	@fiscalYear int
)
returns datetime
as
begin
	declare @fiscalYearStart datetime

	-- If we use the start date for the fiscal year, or if the fiscal calendar
	-- starts on January 1st, we just move the calendar start to the specified
	-- year.  In all other cases, the fiscal year starts in the calendar year prior.
	if (@fiscalYearDisplayCode = 1 or (month(@fiscalCalendarStart) = 1 and day(@fiscalCalendarStart) = 1))
		set @fiscalYearStart = dateadd(yy, @fiscalYear - year(@fiscalCalendarStart), @fiscalCalendarStart)
	else
		set @fiscalYearStart = dateadd(yy, @fiscalYear - year(@fiscalCalendarStart) - 1, @fiscalCalendarStart)
	
	return dbo.fn_LocalTimeToUTC(@fiscalYearStart)
end
