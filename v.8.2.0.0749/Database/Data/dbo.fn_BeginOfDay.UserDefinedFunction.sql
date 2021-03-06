USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_BeginOfDay]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_BeginOfDay] ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @BDay datetime;
	declare @BDayUTC datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @BDay = convert(datetime, convert(nvarchar, @DayUserLocal, 112));
	set @BDayUTC = dbo.fn_LocalTimeToUTC(@BDay);

	return @BDayUTC;
end;
GO
