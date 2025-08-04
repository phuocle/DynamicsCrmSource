SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_GetFiscalYearCore] ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@displayCode int,
	@date datetime
)
returns int
as
begin

	if (@date is null)
	begin
		return null
	end

	-- NOTE: Code below is duplicated in fn_GetFiscalPeriodAndYearCLR.sql and fn_GetFiscalPeriodAndYear.sql also. Keep in sync

	declare @useEndDate bit
	declare @fiscalYear int
	declare @dateMonth int
	declare @fiscalCalendarMonth int

	
	-- If the fiscal calendar starts on Jan 1, our job is easy.
	if (month(@fiscalCalendarStart) = 1 and day(@fiscalCalendarStart) = 1)
	begin
		set @fiscalYear = year(@date)
	end
	else
	begin
		-- Fiscal calendar starts on some day other than Jan 1.
		-- Need to compare the date to the start of the fiscal
		-- calendar to see what year we should use.
		set @dateMonth = month(@date)
		set @fiscalCalendarMonth = month(@fiscalCalendarStart)

		-- Determine if we are using the start of the end of the
		-- fiscal calendar to determine the fiscal year.
		set @useEndDate = case @displayCode when 2 then 1 else 0 end
		
		if (@dateMonth > @fiscalCalendarMonth or 
			(@dateMonth = @fiscalCalendarMonth and day(@date) >= day(@fiscalCalendarStart)))
			set @fiscalYear = case @useEndDate when 1 then year(@date) + 1 else year(@date) end
		else
			set @fiscalYear = case @useEndDate when 1 then year(@date) else year(@date) - 1 end
	end
	
	return @fiscalYear
end
GO
