USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_NextXMonth]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_NextXMonth] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @NextXMonthTomorrowUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @NextXMonthTomorrowUserLocal = dateadd(mm, @X, @ToDayUserLocal);
	set @NextXMonthTomorrowUserLocal = dateadd(dd, 1, @NextXMonthTomorrowUserLocal);
	-- get to the begining of the day by removing the time
	set @NextXMonthTomorrowUserLocal = convert(datetime, convert(nvarchar, @NextXMonthTomorrowUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@NextXMonthTomorrowUserLocal);
end;
GO
