

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
    ON OBJECT::[dbo].[fn_LastXMonth] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXMonth] TO [CRMReaderRole]
    AS [dbo];

