

create function dbo.fn_LastXYear ( 
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
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXYear] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXYear] TO [CRMReaderRole]
    AS [dbo];

