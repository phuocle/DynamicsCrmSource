

create function dbo.fn_GetFiscalPeriodAndYear ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@displayCode int,
	@fiscalPeriodsPerYear int,
	@dateUTC datetime,
	@timezonecode int
)
returns nvarchar(7)
as
begin;

	if (@dateUTC is null)
	begin;
		return null;
	end;

	declare @date datetime;

	-- Convert the time to the user's local time, unless the caller has
	-- passed in TimeZoneCode.None.	
	if (@timezonecode = -1)
	begin;
		set @date = @dateUTC;
	end;
	else
	begin;
		set @date = dbo.fn_UTCToTzCodeSpecificLocalTime(@dateUTC, @timezonecode);
	end;

	-- Start : Block 1 Code below is duplicated in fn_GetFiscalYearCore.sql and fn_GetFiscalPeriodAndYearCLR.sql also. Keep in sync
	declare @useEndDate bit;
	declare @fiscalYear int;
	declare @dateMonth int;
	declare @fiscalCalendarMonth int;
	
	
	-- If the fiscal calendar starts on Jan 1, our job is easy.
	if (month(@fiscalCalendarStart) = 1 and day(@fiscalCalendarStart) = 1)
	begin;
		set @fiscalYear = year(@date);
	end;
	else
	begin;
		-- Fiscal calendar starts on some day other than Jan 1.
		-- Need to compare the date to the start of the fiscal
		-- calendar to see what year we should use.
		set @dateMonth = month(@date);
		set @fiscalCalendarMonth = month(@fiscalCalendarStart);

		-- Determine if we are using the start of the end of the
		-- fiscal calendar to determine the fiscal year.
		set @useEndDate = case @displayCode when 2 then 1 else 0 end;
			
		if (@dateMonth > @fiscalCalendarMonth or 
			(@dateMonth = @fiscalCalendarMonth and day(@date) >= day(@fiscalCalendarStart)))
		begin;
			set @fiscalYear = case @useEndDate when 1 then year(@date) + 1 else year(@date) end;
		end;
		else
		begin;
			set @fiscalYear = case @useEndDate when 1 then year(@date) else year(@date) - 1 end;
		end;
	end;
	-- End : Block 1

	-- Start : Block 2 Code below is duplicated in fn_GetFiscaPeriodCore.sql and fn_GetFiscalPeriodAndYearCLR.sql also. Keep in sync
	declare @fiscalPeriodStart datetime;
	declare @periodMonths int;
	declare @fiscalPeriod int;

	-- Annual, semi-annual, quarterly or monthly?
	if (@fiscalPeriodsPerYear = 1 or @fiscalPeriodsPerYear = 2 or @fiscalPeriodsPerYear = 4 or @fiscalPeriodsPerYear = 12)
	begin;
		-- Calculate how many months in a fiscal period and also figure out
		-- the fiscal year start date for the current calendar year.
		set @periodMonths = 12 / @fiscalPeriodsPerYear;
		set @fiscalPeriodStart = dateadd(yy, year(@date) - year(@fiscalCalendarStart), @fiscalCalendarStart);
			
		-- If our date is ahead of the fiscal calendar start for this calendar
		-- year, back up to last year's fiscal calendar start and work forward.
		if (@fiscalPeriodStart > @date)
		begin;
			set @fiscalPeriodStart = dateadd(yy, -1, @fiscalPeriodStart);
		end;

		set @fiscalPeriod = 1;
		while (@date >= dateadd(mm, (@periodMonths * @fiscalPeriod), @fiscalPeriodStart))
		begin;
			set @fiscalPeriod = @fiscalPeriod + 1;
		end;
	end;
	else
	if (@fiscalPeriodsPerYear = 13)
	begin;
		-- Get the fiscal year start date for the current calendar year
		set @fiscalPeriodStart = dateadd(yy, year(@date) - year(@fiscalCalendarStart), @fiscalCalendarStart);

		-- If @date is before this calendar year's fiscal start date, 
		-- we have to go back to last calendar year's start date.
		-- Then we can work forward by 4-week increments until we reach 
		-- the right period (see below)
		if (@fiscalPeriodStart > @date)
		begin;
			set @fiscalPeriodStart = dateadd(yy, -1, @fiscalPeriodStart)
		end;
			
		-- Work forward by 4-week increments until we reach the right period
		set @fiscalPeriod = 1;
		while @date >= dateadd(dd, 28, @fiscalPeriodStart) and @fiscalPeriod <13 
		begin;
			set @fiscalPeriodStart = dateadd(dd, 28, @fiscalPeriodStart);
			set @fiscalPeriod = @fiscalPeriod + 1;
		end;
	end;
	-- End : Block 2 
	
	-- Keep in sync with fn_GetFiscalPeriodAndYearCLR.sql
	return convert(nvarchar(4), @fiscalYear) + '-' + right('0' + convert(nvarchar(2), @fiscalPeriod), 2);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetFiscalPeriodAndYear] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetFiscalPeriodAndYear] TO [CRMReaderRole]
    AS [dbo];

