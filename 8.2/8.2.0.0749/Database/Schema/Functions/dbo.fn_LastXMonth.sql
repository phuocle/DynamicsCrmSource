SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_LastXMonth] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @LastXMonthTodayUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @LastXMonthTodayUserLocal = dateadd(mm, -@X, @ToDayUserLocal);
	-- get to the begining of the day by removing the time
	set @LastXMonthTodayUserLocal = convert(datetime, convert(nvarchar, @LastXMonthTodayUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@LastXMonthTodayUserLocal);
end;
GO
GRANT EXECUTE ON  [dbo].[fn_LastXMonth] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_LastXMonth] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
