

create function dbo.fn_EndOfNextXHour ( 
  @TodayUTC     datetime,
  @X		int
)
returns datetime
as
begin
  return dbo.fn_BeginOfHour(dateadd(hh, @X+1, @TodayUTC))
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfNextXHour] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfNextXHour] TO [CRMReaderRole]
    AS [dbo];

