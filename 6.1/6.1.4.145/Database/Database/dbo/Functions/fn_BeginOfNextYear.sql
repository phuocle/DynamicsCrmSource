

create function dbo.fn_BeginOfNextYear ( 
  @TodayUTC         datetime
)
returns datetime
as
begin
  return dbo.fn_BeginOfYear(dateadd(yy, 1, @TodayUTC))
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfNextYear] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfNextYear] TO [CRMReaderRole]
    AS [dbo];

