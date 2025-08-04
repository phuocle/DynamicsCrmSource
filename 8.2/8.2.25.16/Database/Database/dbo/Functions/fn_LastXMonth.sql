

create function dbo.fn_LastXMonth ( 
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
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXMonth] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXMonth] TO [CRMReaderRole]
    AS [dbo];

