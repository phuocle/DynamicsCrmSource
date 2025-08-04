SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_NextXMonth] ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @NextXMonthTomorrowUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @NextXMonthTomorrowUserLocal = dateadd(mm, @X, @ToDayUserLocal);
	set @NextXMonthTomorrowUserLocal = dateadd(dd, 1, @NextXMonthTomorrowUserLocal);
	-- get to the begining of the day by removing the time
	set @NextXMonthTomorrowUserLocal = convert(datetime, convert(nvarchar, @NextXMonthTomorrowUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@NextXMonthTomorrowUserLocal);
end;
GO
GRANT EXECUTE ON  [dbo].[fn_NextXMonth] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_NextXMonth] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
