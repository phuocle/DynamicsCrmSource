USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_BeginOfYesterday]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_BeginOfYesterday](
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfDay(dateadd(dd, -1, @TodayUTC));
end;
GO
