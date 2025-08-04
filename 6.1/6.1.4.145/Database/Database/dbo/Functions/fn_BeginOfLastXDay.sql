

create function dbo.fn_BeginOfLastXDay ( 
  @TodayUTC     datetime,
  @X		int
)
returns datetime
as
begin
  return dbo.fn_BeginOfDay(dateadd(dd, -@X, @TodayUTC))
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastXDay] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfLastXDay] TO [CRMReaderRole]
    AS [dbo];

