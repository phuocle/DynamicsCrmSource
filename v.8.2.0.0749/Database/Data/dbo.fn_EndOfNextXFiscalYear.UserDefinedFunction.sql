USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfNextXFiscalYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfNextXFiscalYear] ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime,
	@x int
)
returns datetime
as
begin;
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, @x + 1, @nowUTC));
end;
GO
