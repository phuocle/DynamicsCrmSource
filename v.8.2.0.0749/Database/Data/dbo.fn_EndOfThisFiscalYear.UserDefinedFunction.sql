USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfThisFiscalYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfThisFiscalYear] ( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@nowUTC datetime
)
returns datetime
as
begin;
	-- End of this fiscal year is the start of the next.
	return dbo.fn_BeginOfFiscalYear(@fiscalCalendarStart, dateadd(yy, 1 , @nowUTC));
end;
GO
