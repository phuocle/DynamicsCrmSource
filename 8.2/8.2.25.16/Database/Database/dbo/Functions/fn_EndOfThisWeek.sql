

create function dbo.fn_EndOfThisWeek ( 
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfWeek(dateadd(dd, 7 , @TodayUTC));
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfThisWeek] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfThisWeek] TO [CRMReaderRole]
    AS [dbo];

