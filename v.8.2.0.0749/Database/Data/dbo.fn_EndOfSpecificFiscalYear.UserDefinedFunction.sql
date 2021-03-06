USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfSpecificFiscalYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfSpecificFiscalYear]( 
	@fiscalCalendarStart datetime,			-- Timezone agnostic
	@fiscalYearDisplayCode int,
	@fiscalYear int
)
returns datetime
as
begin;
	-- The end of the specified fiscal year is the start of the year following.
	return dbo.fn_BeginOfSpecificFiscalYear(@fiscalCalendarStart, @fiscalYearDisplayCode, @fiscalYear + 1);
end;
GO
