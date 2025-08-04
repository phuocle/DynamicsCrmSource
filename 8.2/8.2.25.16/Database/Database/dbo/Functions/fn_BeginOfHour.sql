

create function dbo.fn_BeginOfHour ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayBeginUTC datetime;

	set @DayBeginUTC = convert(datetime, convert(nvarchar, @DayUTC, 112));

	return dateadd(hh, datepart(hh, @DayUTC), @DayBeginUTC);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfHour] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfHour] TO [CRMReaderRole]
    AS [dbo];

