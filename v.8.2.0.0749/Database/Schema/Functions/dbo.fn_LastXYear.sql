SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_LastXYear] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @LastXYearTodayUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @LastXYearTodayUserLocal = dateadd(yy, -@X, @ToDayUserLocal);
	-- get to the begining of the day by removing the time
	set @LastXYearTodayUserLocal = convert(datetime, convert(nvarchar, @LastXYearTodayUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@LastXYearTodayUserLocal);
end;
GO
GRANT EXECUTE ON  [dbo].[fn_LastXYear] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_LastXYear] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
