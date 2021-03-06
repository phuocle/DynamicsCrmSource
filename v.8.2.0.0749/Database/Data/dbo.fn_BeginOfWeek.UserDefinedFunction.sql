USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_BeginOfWeek]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_BeginOfWeek] ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @WeekStartDay int;
	declare @DayDiffFromStart int ;
	declare @BDayUTC datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);

	--- select the first day of the week from orgnization setting table
	select @WeekStartDay = og.WeekStartDayCode
	from OrganizationBase as og
	inner join SystemUserBase as su on og.OrganizationId = su.OrganizationId
	where su.SystemUserId = dbo.fn_FindUserGuid();

	--- calculate the first day diff from the first day
	set @DayDiffFromStart = (7 + ( dbo.fn_NTDayOfWeek(@DayUserLocal) - @WeekStartDay)) %7;
 
	--- calculate the first day of the week
	set @BDayUTC = dbo.fn_BeginOfDay( dateadd(dd, 0 - @DayDiffFromStart, @DayUTC));
	return @BDayUTC;
end;
GO
