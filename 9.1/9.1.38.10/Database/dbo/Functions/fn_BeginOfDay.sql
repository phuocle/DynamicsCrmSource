

create function dbo.fn_BeginOfDay ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @BDay datetime;
	declare @BDayUTC datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @BDay = convert(datetime, convert(nvarchar, @DayUserLocal, 112));
	set @BDayUTC = dbo.fn_LocalTimeToUTC(@BDay);

	return @BDayUTC;
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfDay] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_BeginOfDay] TO [CRMReaderRole]
    AS [dbo];

