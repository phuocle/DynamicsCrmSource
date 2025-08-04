

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
    ON OBJECT::[dbo].[fn_RptBracket] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_RptBracket] TO [CRMReaderRole]
    AS [dbo];

