USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_LastXMonth]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_LastXMonth] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @LastXMonthTodayUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @LastXMonthTodayUserLocal = dateadd(mm, -@X, @ToDayUserLocal);
	-- get to the begining of the day by removing the time
	set @LastXMonthTodayUserLocal = convert(datetime, convert(nvarchar, @LastXMonthTodayUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@LastXMonthTodayUserLocal);
end;
GO
