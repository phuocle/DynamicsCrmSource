USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_LastXYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_LastXYear] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @LastXYearTodayUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @LastXYearTodayUserLocal = dateadd(yy, -@X, @ToDayUserLocal);
	-- get to the begining of the day by removing the time
	set @LastXYearTodayUserLocal = convert(datetime, convert(nvarchar, @LastXYearTodayUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@LastXYearTodayUserLocal);
end;
GO
