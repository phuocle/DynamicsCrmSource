SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_BeginOfNextWeek] ( 
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfWeek(dateadd(dd, 7, @TodayUTC));
end;
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfNextWeek] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfNextWeek] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
