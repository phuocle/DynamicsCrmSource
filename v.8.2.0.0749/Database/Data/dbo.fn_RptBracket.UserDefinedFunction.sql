USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_RptBracket]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create  function [dbo].[fn_RptBracket]
   (@MyDiff int, @NDays int )
returns nvarchar(10)
as
begin;
	if(@MyDiff >= 5*@NDays)
	begin;
		return ( cast(5 * @NDays as nvarchar(5)) + N'+');
	end;

	return ( cast(floor(@MyDiff / @NDays) * @NDays as nvarchar(5)) + N' - ' + cast(Floor(@MyDiff / @NDays + 1) * @NDays - 1 as nvarchar(5)));
end;
GO
