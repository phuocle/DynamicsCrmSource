

create function dbo.fn_NTDayOfWeek(@Date datetime)
returns int
as
begin
	return (DATEPART(dw, @Date) + @@DATEFIRST -1) % 7
	
end
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NTDayOfWeek] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NTDayOfWeek] TO [CRMReaderRole]
    AS [dbo];

