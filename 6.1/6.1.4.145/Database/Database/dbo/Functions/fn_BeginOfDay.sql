

create function dbo.fn_BeginOfDay ( 
  @DayUTC         datetime
)
returns datetime
as
begin
  declare @DayUserLocal datetime
  declare @BDay datetime
  declare @BDayUTC datetime
  set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC)
  set @BDay = convert(datetime, convert(nvarchar, @DayUserLocal, 112))
  set @BDayUTC = dbo.fn_LocalTimeToUTC(@BDay) 
  return @BDayUTC
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfDay] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfDay] TO [CRMReaderRole]
    AS [dbo];

