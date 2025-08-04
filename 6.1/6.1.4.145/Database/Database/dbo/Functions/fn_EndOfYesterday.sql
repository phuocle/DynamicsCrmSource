


create function dbo.fn_EndOfYesterday(
  @TodayUTC	datetime
)
returns datetime
as
begin
  return dbo.fn_BeginOfDay(@TodayUTC)
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfYesterday] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfYesterday] TO [CRMReaderRole]
    AS [dbo];

