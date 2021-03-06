USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfFiscalPeriod]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfFiscalPeriod] ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@displayCode	int,
	@fiscalPeriodsPerYear int,
	@fiscalPeriod int,
	@fiscalYear int
)
returns datetime
as
begin;
	declare @nowUserLocal datetime;

	-- Move forward one fiscal period.
	set @fiscalPeriod = @fiscalPeriod + 1;

	if (@fiscalPeriod > @fiscalPeriodsPerYear)
	begin;
		set @fiscalPeriod = @fiscalPeriod - @fiscalPeriodsPerYear;
		set @fiscalYear = @fiscalYear + 1;
	end;

	-- End of the specified fiscal period is the start of the next.
	return dbo.fn_BeginOfFiscalPeriod(@fiscalCalendarStart, @displayCode, @fiscalPeriodsPerYear, @fiscalPeriod, @fiscalYear);
end;
GO
