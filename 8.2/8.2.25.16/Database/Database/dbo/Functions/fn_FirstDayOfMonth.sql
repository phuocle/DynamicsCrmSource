

----return first day of the month of the give day
create function dbo.fn_FirstDayOfMonth ( 
  @Date         DATETIME,
  @Month	int
)
returns datetime
as
begin
  declare @Result datetime
  set @Result = dateadd( day, 1 - datepart( day, @Date ), @Date )
  if datepart( month, @Result ) <> datepart( month, @Date ) 
    set @Result = NULL
  set @Result = dateadd( mm, @Month - datepart(mm, @Result), @Result)
  return (convert(datetime, convert(nvarchar, @Result, 112)))
end
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_FirstDayOfMonth] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_FirstDayOfMonth] TO [CRMReaderRole]
    AS [dbo];

