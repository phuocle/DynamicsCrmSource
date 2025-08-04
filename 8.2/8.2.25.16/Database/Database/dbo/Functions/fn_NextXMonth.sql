

create function dbo.fn_NextXMonth ( 
	@TodayUTC datetime,
	@X int
)
returns datetime
as
begin;
	declare @ToDayUserLocal datetime;
	declare @NextXMonthTomorrowUserLocal datetime;

	set @ToDayUserLocal = dbo.fn_UTCToLocalTime(@TodayUTC);
	set @NextXMonthTomorrowUserLocal = dateadd(mm, @X, @ToDayUserLocal);
	set @NextXMonthTomorrowUserLocal = dateadd(dd, 1, @NextXMonthTomorrowUserLocal);
	-- get to the begining of the day by removing the time
	set @NextXMonthTomorrowUserLocal = convert(datetime, convert(nvarchar, @NextXMonthTomorrowUserLocal, 112));

	return dbo.fn_LocalTimeToUTC(@NextXMonthTomorrowUserLocal);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NextXMonth] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_NextXMonth] TO [CRMReaderRole]
    AS [dbo];

