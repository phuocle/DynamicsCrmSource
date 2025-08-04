

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
    ON OBJECT::[dbo].[fn_BeginOfHour] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfHour] TO [CRMReaderRole]
    AS [dbo];

