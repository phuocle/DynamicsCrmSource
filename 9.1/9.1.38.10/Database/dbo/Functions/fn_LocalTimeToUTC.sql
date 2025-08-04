

create function dbo.fn_LocalTimeToUTC(	@LocalTime  datetime )
returns datetime
as 
begin;
	declare @Bias int;
	declare @DaylightBias int;
	declare @DaylightYear int;
	declare @DaylightMonth int;
	declare @DaylightDay int;
	declare @DaylightHour int;
	declare @DaylightMinute int;
	declare	@DaylightSecond int;
	declare @DaylightMilliseconds int;
	declare @DaylightWeekday int;
	declare @StandardBias int;
	declare @StandardYear int;
	declare	@StandardMonth int;
	declare @StandardDay int;
	declare @StandardHour int;
	declare @StandardMinute int;
	declare @StandardSecond int;
	declare @StandardMilliseconds int;
	declare @StandardWeekday int;

	set @DaylightMilliseconds = 0;
	set @StandardMilliseconds = 0;
	
	if @LocalTime <= '1/2/1753'
	begin;
		return @LocalTime;
	end;

	select top 1 @Bias = r.Bias, 
		@DaylightBias = r.DaylightBias,
		@DaylightYear = r.DaylightYear,
		@DaylightMonth = r.DaylightMonth,
		@DaylightDay = r.DaylightDay,
		@DaylightHour = r.DaylightHour,
		@DaylightMinute = r.DaylightMinute,
		@DaylightSecond = r.DaylightSecond,
		@DaylightWeekday = r.DaylightDayOfWeek,
		@StandardBias = r.StandardBias,
		@StandardYear = r.StandardYear,
		@StandardMonth = r.StandardMonth,
		@StandardDay = r.StandardDay,
		@StandardHour = r.StandardHour,
		@StandardMinute = r.StandardMinute,
		@StandardSecond = r.StandardSecond,
		@StandardWeekday = r.StandardDayOfWeek
	from TimeZoneRule as r
	inner join TimeZoneDefinition as d on d.TimeZoneDefinitionId = r.TimeZoneDefinitionId
	inner join UserSettingsBase as us on d.TimeZoneCode = us.TimeZoneCode
	where r.EffectiveDateTime <= @LocalTime and us.SystemUserId = dbo.fn_FindUserGuid()
	order by r.TimeZoneRuleVersionNumber desc, r.EffectiveDateTime desc;

	return dbo.fn_TzSpecificLocalTimeToUTC(@LocalTime,
									@Bias,
									@DaylightBias,
									@DaylightYear, 
									@DaylightMonth,
									@DaylightDay,
									@DaylightHour,
									@DaylightMinute,
									@DaylightSecond,
									@DaylightMilliseconds,
									@DaylightWeekday,
									@StandardBias,
									@StandardYear, 
									@StandardMonth,
									@StandardDay,
									@StandardHour,
									@StandardMinute,
									@StandardSecond,
									@StandardMilliseconds,
									@StandardWeekday);
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LocalTimeToUTC] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LocalTimeToUTC] TO [CRMReaderRole]
    AS [dbo];

