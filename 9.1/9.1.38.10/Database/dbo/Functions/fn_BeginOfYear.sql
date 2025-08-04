

create function dbo.fn_BeginOfYear ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @DayFirst datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @DayFirst = dbo.fn_FirstDayOfMonth(@DayUserLocal, 1); 

	return dbo.fn_LocalTimeToUTC(@DayFirst);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfYear] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfYear] TO [CRMReaderRole]
    AS [dbo];

