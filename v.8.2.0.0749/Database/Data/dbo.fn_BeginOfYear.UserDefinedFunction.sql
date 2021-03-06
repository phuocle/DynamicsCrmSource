USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_BeginOfYear]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_BeginOfYear] ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @DayFirst datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @DayFirst = dbo.fn_FirstDayOfMonth(@DayUserLocal, 1); 

	return dbo.fn_LocalTimeToUTC(@DayFirst);
end;
GO
