USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_BeginOfHour]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_BeginOfHour] ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayBeginUTC datetime;

	set @DayBeginUTC = convert(datetime, convert(nvarchar, @DayUTC, 112));

	return dateadd(hh, datepart(hh, @DayUTC), @DayBeginUTC);
end;
GO
