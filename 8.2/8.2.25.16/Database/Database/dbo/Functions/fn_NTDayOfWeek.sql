

create function dbo.fn_NTDayOfWeek(@Date datetime)
returns int
as
begin;
	return (datepart(dw, @Date) + @@datefirst -1) % 7;	
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NTDayOfWeek] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NTDayOfWeek] TO [CRMReaderRole]
    AS [dbo];

