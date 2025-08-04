SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_GetFiscalPeriodCore] ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@fiscalPeriodsPerYear int,
	@date datetime
)
returns int
as
begin;

	if (@date is null)
	begin;
		return null;
	end;

	-- NOTE: Code below is duplicated in fn_GetFiscalPeriodAndYearCLR.sql and fn_GetFiscalPeriodAndYear.sql also. Keep in sync

	declare @fiscalPeriodStart datetime;
	declare @periodMonths int;
	declare @fiscalPeriod int;
	
	-- Annual, semi-annual, quarterly or monthly?
	if (@fiscalPeriodsPerYear = 1 or @fiscalPeriodsPerYear = 2 or @fiscalPeriodsPerYear = 4 or @fiscalPeriodsPerYear = 12)
	begin;
		-- Calculate how many months in a fiscal period and also figure out
		-- the fiscal year start date for the current calendar year.
		-- If the year is 1753, we dont subtract the year instead add 1 year to fiscal period start and 2 years to the date as the minimum date supported by sql is 1753.
		set @periodMonths = 12 / @fiscalPeriodsPerYear;
		set @fiscalPeriodStart = dateadd(yy, year(@date) - year(@fiscalCalendarStart), @fiscalCalendarStart);
		
		-- If our date is ahead of the fiscal calendar start for this calendar
		-- year, back up to last year's fiscal calendar start and work forward.
		if (@fiscalPeriodStart > @date)
		begin;
			if(datepart(yy,@fiscalPeriodStart) = '1753' AND datepart(mm,@fiscalPeriodStart) > datepart(mm,@date))
			begin;
				set @fiscalPeriodStart = dateadd(yy, 1, @fiscalPeriodStart);
				set @date = dateadd(yy, 2, @date);
			end;
			else
			begin;
				set @fiscalPeriodStart = dateadd(yy, -1, @fiscalPeriodStart);
			end;
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
			if(datepart(yy,@fiscalPeriodStart) = '1753' AND datepart(mm,@fiscalPeriodStart) > datepart(mm,@date))
			begin;
				set @fiscalPeriodStart = dateadd(yy, 1, @fiscalPeriodStart);
				set @date = dateadd(yy, 2, @date);
			end;
			else
			begin;
				set @fiscalPeriodStart = dateadd(yy, -1, @fiscalPeriodStart);
			end;
		end;
		
		-- Work forward by 4-week increments until we reach the right period
		set @fiscalPeriod = 1
		while @date >= dateadd(dd, 28, @fiscalPeriodStart)
		begin;
			set @fiscalPeriodStart = dateadd(dd, 28, @fiscalPeriodStart);
			set @fiscalPeriod = @fiscalPeriod + 1;
		end;
	end;

	return @fiscalPeriod;
end;
GO
