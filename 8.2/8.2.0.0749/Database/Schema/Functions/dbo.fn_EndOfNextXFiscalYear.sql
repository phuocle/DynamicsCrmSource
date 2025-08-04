SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
