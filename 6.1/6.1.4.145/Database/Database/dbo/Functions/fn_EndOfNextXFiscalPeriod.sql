

create function dbo.fn_EndOfNextXFiscalPeriod ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@displayCode	int,
	@fiscalPeriodsPerYear int,
	@nowUTC datetime,
	@x int
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

	-- Move forward to the period just beyond the next x periods.
	set @fiscalPeriod = @fiscalPeriod + @x + 1
	while (@fiscalPeriod > @fiscalPeriodsPerYear)
	begin
		set @fiscalPeriod = @fiscalPeriod - @fiscalPeriodsPerYear
		set @fiscalYear = @fiscalYear + 1
	end 

	-- The end of the next x periods is the start of the period after that.
	return dbo.fn_BeginOfFiscalPeriod(@fiscalCalendarStart, @displayCode, @fiscalPeriodsPerYear, @fiscalPeriod, @fiscalYear)
end
