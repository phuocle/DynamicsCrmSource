

create function dbo.fn_BeginOfThisFiscalPeriod ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@displayCode int,
	@fiscalPeriodsPerYear int,
	@nowUTC datetime
)
returns datetime
as
begin	
	declare @fiscalYear int
	declare @fiscalPeriod int

	-- Get the user's year and period	
	select @fiscalPeriod = FiscalPeriod, @fiscalYear = FiscalYear FROM
		dbo.fn_GetUsersFiscalPeriodAndYear(
			@fiscalCalendarStart, 
			@displayCode, 
			@fiscalPeriodsPerYear, 
			@nowUTC)

	return dbo.fn_BeginOfFiscalPeriod(@fiscalCalendarStart, @displayCode, @fiscalPeriodsPerYear, @fiscalPeriod, @fiscalYear);
end
