SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT EXECUTE ON  [dbo].[fn_BeginOfHour] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfHour] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
