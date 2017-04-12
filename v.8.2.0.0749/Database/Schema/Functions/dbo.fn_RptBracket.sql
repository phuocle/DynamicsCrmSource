SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
GRANT EXECUTE ON  [dbo].[fn_RptBracket] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_RptBracket] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
