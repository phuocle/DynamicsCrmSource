
create function dbo.fn_GetUsersFiscalPeriodAndYear
(
	@fiscalCalendarStart datetime,		-- Timezone agnostic
	@displayCode int,
	@fiscalPeriodsPerYear int,
	@nowUTC datetime
)
returns @fiscalSettings table
(
	FiscalYear int,
	FiscalPeriod int
)
as
begin
	declare @nowUserLocal datetime

	set @nowUserLocal = dbo.fn_UTCToLocalTime(@nowUTC)
	
	insert into @fiscalSettings values(
		dbo.fn_GetFiscalYear(@fiscalCalendarStart, @displayCode, @nowUserLocal, -1),
		dbo.fn_GetFiscalPeriod(@fiscalCalendarStart, @fiscalPeriodsPerYear, @nowUserLocal, -1))
	
	return
end
