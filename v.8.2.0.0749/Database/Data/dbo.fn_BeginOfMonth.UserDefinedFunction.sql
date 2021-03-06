USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_BeginOfMonth]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_BeginOfMonth] ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @DayFirst datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @DayFirst = dbo.fn_FirstDayOfMonth(@DayUserLocal, datepart(mm, @DayUserLocal));

	return dbo.fn_LocalTimeToUTC(@DayFirst);
end;
GO
