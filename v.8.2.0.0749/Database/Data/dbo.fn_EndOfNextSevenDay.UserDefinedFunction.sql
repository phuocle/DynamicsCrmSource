USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_EndOfNextSevenDay]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_EndOfNextSevenDay](
	@TodayUTC	datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfDay(dateadd(dd, 8, @TodayUTC));
end;
GO
