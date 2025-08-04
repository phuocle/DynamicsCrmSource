

create function dbo.fn_NextXYear ( 
  @TodayUTC     datetime,
  @X		int
)
returns datetime
as
begin
  declare @ToDayUserLocal datetime
  declare @NextXYearTomorrowUserLocal datetime
  set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC)
  set @NextXYearTomorrowUserLocal = dateadd(yy, @X, @ToDayUserLocal)
  set @NextXYearTomorrowUserLocal = dateadd(dd, 1, @NextXYearTomorrowUserLocal)
  -- get to the begining of the day by removing the time
  set @NextXYearTomorrowUserLocal = convert(datetime, convert(nvarchar, @NextXYearTomorrowUserLocal, 112))
  return dbo.fn_LocalTimeToUTC(@NextXYearTomorrowUserLocal)
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NextXYear] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NextXYear] TO [CRMReaderRole]
    AS [dbo];

