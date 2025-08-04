

create function dbo.fn_BeginOfLastYear ( 
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfYear(dateadd(yy, -1, @TodayUTC));
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastYear] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastYear] TO [CRMReaderRole]
    AS [dbo];

