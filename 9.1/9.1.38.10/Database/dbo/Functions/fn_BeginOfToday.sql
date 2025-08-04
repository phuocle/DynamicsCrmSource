

create function dbo.fn_BeginOfToday ( 
	@TodayUTC  datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfDay(@TodayUTC);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfToday] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfToday] TO [CRMReaderRole]
    AS [dbo];

