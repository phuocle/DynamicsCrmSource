

create function dbo.fn_BeginOfFiscalYear ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@dateUTC datetime
)
returns datetime
as
begin
	declare @dateUserLocal datetime
	declare @fiscalYearStart datetime
	
	set @dateUserLocal = dbo.fn_UTCToLocalTime(@dateUTC)
	set @fiscalYearStart = dateadd(yy, year(@dateUserLocal) - year(@fiscalCalendarStart), @fiscalCalendarStart)

	-- If our date is ahead of the fiscal calendar start for this calendar
	-- year, back up to last year's fiscal calendar start and work forward.
	if (@fiscalYearStart > @dateUserLocal)
	begin
		set @fiscalYearStart = dateadd(yy, -1, @fiscalYearStart)
	end
	
	return dbo.fn_LocalTimeToUTC(@fiscalYearStart)
end
