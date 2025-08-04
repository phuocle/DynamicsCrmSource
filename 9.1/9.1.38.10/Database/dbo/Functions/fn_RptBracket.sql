

create  function dbo.fn_RptBracket
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
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_RptBracket] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_RptBracket] TO [CRMReaderRole]
    AS [dbo];

