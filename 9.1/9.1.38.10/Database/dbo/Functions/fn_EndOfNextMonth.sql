

create function dbo.fn_EndOfNextMonth ( 
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfMonth(dateadd(mm, 2, @TodayUTC));
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfNextMonth] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfNextMonth] TO [CRMReaderRole]
    AS [dbo];

