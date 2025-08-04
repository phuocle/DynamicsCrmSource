

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
    ON OBJECT::[dbo].[fn_FirstDayOfMonth] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_FirstDayOfMonth] TO [CRMReaderRole]
    AS [dbo];

