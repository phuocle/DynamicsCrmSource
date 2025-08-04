

create function dbo.fn_EndOfYesterday(
	@TodayUTC datetime
)
returns datetime
as
begin;
	return dbo.fn_BeginOfDay(@TodayUTC);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfYesterday] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfYesterday] TO [CRMReaderRole]
    AS [dbo];

