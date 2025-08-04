

create function dbo.fn_BeginOfLastXWeek ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	return dbo.fn_BeginOfDay(dateadd(dd, -7*@X, @TodayUTC));
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastXWeek] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastXWeek] TO [CRMReaderRole]
    AS [dbo];

