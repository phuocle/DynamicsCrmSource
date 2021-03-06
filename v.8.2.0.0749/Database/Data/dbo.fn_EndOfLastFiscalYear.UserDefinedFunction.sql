USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfLastFiscalYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfLastFiscalYear] ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@dateUTC datetime
)
returns datetime
as
begin;
	-- The end of the last fiscal year is the beginning of this fiscal year.
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, @dateUTC);
end;
GO
