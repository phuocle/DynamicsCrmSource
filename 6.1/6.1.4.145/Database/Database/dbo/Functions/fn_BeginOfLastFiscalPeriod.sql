

create function dbo.fn_BeginOfLastFiscalPeriod ( 
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

	-- Back up one period.
	set @fiscalPeriod = @fiscalPeriod - 1
	if (@fiscalPeriod <= 0)
	begin
		set @fiscalPeriod = @fiscalPeriod + @fiscalPeriodsPerYear
		set @fiscalYear = @fiscalYear - 1
	end 

	return dbo.fn_BeginOfFiscalPeriod(@fiscalCalendarStart, @displayCode, @fiscalPeriodsPerYear, @fiscalPeriod, @fiscalYear)
end
