USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_FirstDayOfMonth]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
