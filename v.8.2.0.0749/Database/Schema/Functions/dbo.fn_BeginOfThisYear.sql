SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_BeginOfThisYear] ( 
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfYear(@TodayUTC);
end;
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfThisYear] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfThisYear] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
