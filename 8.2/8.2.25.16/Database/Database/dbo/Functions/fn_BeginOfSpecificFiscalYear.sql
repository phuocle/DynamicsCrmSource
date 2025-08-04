

create function dbo.fn_BeginOfSpecificFiscalYear( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@fiscalYearDisplayCode	int,
	@fiscalYear int
)
returns datetime
as
begin;
	declare @fiscalYearStart datetime;

	-- If we use the start date for the fiscal year, or if the fiscal calendar
	-- starts on January 1st, we just move the calendar start to the specified
	-- year.  In all other cases, the fiscal year starts in the calendar year prior.
	if (@fiscalYearDisplayCode = 1 or (month(@fiscalCalendarStart) = 1 and day(@fiscalCalendarStart) = 1))
	begin;
		set @fiscalYearStart = dateadd(yy, @fiscalYear - year(@fiscalCalendarStart), @fiscalCalendarStart);
	end;
	else
	begin;
		set @fiscalYearStart = dateadd(yy, @fiscalYear - year(@fiscalCalendarStart) - 1, @fiscalCalendarStart);
	end;
	
	return dbo.fn_LocalTimeToUTC(@fiscalYearStart);
end;