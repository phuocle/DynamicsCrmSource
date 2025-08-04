SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


----return first day of the month of the give day
create function [dbo].[fn_FirstDayOfMonth] ( 
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
GRANT EXECUTE ON  [dbo].[fn_FirstDayOfMonth] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_FirstDayOfMonth] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
