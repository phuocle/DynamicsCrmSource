SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT EXECUTE ON  [dbo].[fn_BeginOfWeek] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfWeek] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
