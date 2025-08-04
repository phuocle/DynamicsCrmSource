

create function dbo.fn_BeginOfFiscalPeriod ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@displayCode int,
	@fiscalPeriodsPerYear int,
	@fiscalPeriod int,
	@fiscalYear int
)
returns datetime
as
begin
	declare @fiscalPeriodStart datetime

	-- Get the fiscal year start in UTC.
	set @fiscalPeriodStart = dbo.fn_BeginOfSpecificFiscalYear(@fiscalCalendarStart, @displayCode, @fiscalYear)

	-- Fixed monthly calendar?
	if (@fiscalPeriodsPerYear = 13)
	begin
		set @fiscalPeriodStart = dateadd(dd, (28 * (@fiscalPeriod - 1)), @fiscalPeriodStart)
	end
	else
	begin
		declare @periodMonths int

		-- @fiscalPeriodsPerYear should always be a positive integer,
		-- but we check it anyway to avoid dividing by zero.
		if (@fiscalPeriodsPerYear = 0)
		begin
			return null
		end
		
		set @periodMonths = 12 / @fiscalPeriodsPerYear;
		set @fiscalPeriodStart = dateadd(mm, (@periodMonths * (@fiscalPeriod - 1)), @fiscalPeriodStart)
	end
	
	return @fiscalPeriodStart;
end
