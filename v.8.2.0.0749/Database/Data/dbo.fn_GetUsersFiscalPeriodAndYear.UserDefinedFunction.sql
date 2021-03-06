USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetUsersFiscalPeriodAndYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetUsersFiscalPeriodAndYear]
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
begin;
	declare @nowUserLocal datetime;

	set @nowUserLocal = dbo.fn_UTCToLocalTime(@nowUTC);
	
	insert into @fiscalSettings 
	values(
		dbo.fn_GetFiscalYear(@fiscalCalendarStart, @displayCode, @nowUserLocal, -1),
		dbo.fn_GetFiscalPeriod(@fiscalCalendarStart, @fiscalPeriodsPerYear, @nowUserLocal, -1)
		)
	
	return;
end;
GO
