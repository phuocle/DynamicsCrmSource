

create function dbo.fn_NTDayOfWeek(@Date datetime)
returns int
as
begin;
	return (datepart(dw, @Date) + @@datefirst -1) % 7;	
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NTDayOfWeek] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NTDayOfWeek] TO [CRMReaderRole]
    AS [dbo];

