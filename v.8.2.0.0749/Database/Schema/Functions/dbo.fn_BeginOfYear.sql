SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT EXECUTE ON  [dbo].[fn_BeginOfYear] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfYear] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
