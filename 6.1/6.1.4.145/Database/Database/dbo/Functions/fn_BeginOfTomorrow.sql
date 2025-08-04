


create function dbo.fn_BeginOfTomorrow(
  @TodayUTC	datetime
)
returns datetime
as
begin
  return dbo.fn_EndOfToday(@TodayUTC)
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfTomorrow] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfTomorrow] TO [CRMReaderRole]
    AS [dbo];

