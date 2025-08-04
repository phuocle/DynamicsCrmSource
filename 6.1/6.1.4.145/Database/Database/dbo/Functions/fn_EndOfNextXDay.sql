

create function dbo.fn_EndOfNextXDay ( 
  @TodayUTC     datetime,
  @X		int
)
returns datetime
as
begin
  return dbo.fn_BeginOfDay(dateadd(dd, @X+1, @TodayUTC))
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfNextXDay] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_EndOfNextXDay] TO [CRMReaderRole]
    AS [dbo];

