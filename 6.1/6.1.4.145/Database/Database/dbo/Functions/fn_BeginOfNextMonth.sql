

create function dbo.fn_BeginOfNextMonth ( 
  @TodayUTC         datetime
)
returns datetime
as
begin
  return dbo.fn_BeginOfMonth(dateadd(mm, 1, @TodayUTC))
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfNextMonth] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfNextMonth] TO [CRMReaderRole]
    AS [dbo];

