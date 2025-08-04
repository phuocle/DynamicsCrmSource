

create function dbo.fn_BeginOfMonth ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @DayFirst datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @DayFirst = dbo.fn_FirstDayOfMonth(@DayUserLocal, datepart(mm, @DayUserLocal));

	return dbo.fn_LocalTimeToUTC(@DayFirst);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfMonth] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfMonth] TO [CRMReaderRole]
    AS [dbo];

