

create function dbo.fn_BeginOfLastXHour ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	return dbo.fn_BeginOfHour(dateadd(hh, -@X, @TodayUTC));
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastXHour] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastXHour] TO [CRMReaderRole]
    AS [dbo];

