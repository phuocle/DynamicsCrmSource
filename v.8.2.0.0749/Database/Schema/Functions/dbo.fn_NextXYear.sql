SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_NextXYear] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @NextXYearTomorrowUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @NextXYearTomorrowUserLocal = dateadd(yy, @X, @ToDayUserLocal);
	set @NextXYearTomorrowUserLocal = dateadd(dd, 1, @NextXYearTomorrowUserLocal);
	-- get to the begining of the day by removing the time
	set @NextXYearTomorrowUserLocal = convert(datetime, convert(nvarchar, @NextXYearTomorrowUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@NextXYearTomorrowUserLocal);
end;
GO
GRANT EXECUTE ON  [dbo].[fn_NextXYear] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_NextXYear] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
