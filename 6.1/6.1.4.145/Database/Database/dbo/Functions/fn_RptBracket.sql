

CREATE  FUNCTION [dbo].[fn_RptBracket]
   (@MyDiff int, @NDays int )
RETURNS nvarchar(10)
AS
BEGIN
   if(@MyDiff >= 5*@NDays)
   begin
	RETURN ( Cast(5 * @NDays as nvarchar(5)) + N'+')
   end

   RETURN ( Cast(Floor(@MyDiff / @NDays) * @NDays as nvarchar(5)) + N' - ' + Cast(Floor(@MyDiff / @NDays + 1) * @NDays - 1 as nvarchar(5)))
END
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_RptBracket] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_RptBracket] TO [CRMReaderRole]
    AS [dbo];

