

create function dbo.fn_BeginOfMonth ( 
  @DayUTC         datetime
)
returns datetime
as
begin
  declare @DayUserLocal datetime
  declare @DayFirst datetime
  set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC)
  set @DayFirst = dbo.fn_FirstDayOfMonth(@DayUserLocal, datepart(mm, @DayUserLocal))  
  return dbo.fn_LocalTimeToUTC(@DayFirst)
end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfMonth] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfMonth] TO [CRMReaderRole]
    AS [dbo];

