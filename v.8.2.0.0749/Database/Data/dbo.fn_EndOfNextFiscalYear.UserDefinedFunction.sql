USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfNextFiscalYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfNextFiscalYear] ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime
)
returns datetime
as
begin;
	-- The end of the next fiscal year is the beginning of the year following that.
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, 2, @nowUTC));
end;
GO
