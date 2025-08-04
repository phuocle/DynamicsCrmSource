

create function dbo.fn_LastXMonth ( 
  @TodayUTC     datetime,
  @X		int
)
returns datetime
as
begin
  declare @ToDayUserLocal datetime
  declare @LastXMonthTodayUserLocal datetime
  set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC)
  set @LastXMonthTodayUserLocal = dateadd(mm, -@X, @ToDayUserLocal)
  -- get to the begining of the day by removing the time
  set @LastXMonthTodayUserLocal = convert(datetime, convert(nvarchar, @LastXMonthTodayUserLocal, 112))
  return dbo.fn_LocalTimeToUTC(@LastXMonthTodayUserLocal)
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXMonth] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LastXMonth] TO [CRMReaderRole]
    AS [dbo];

