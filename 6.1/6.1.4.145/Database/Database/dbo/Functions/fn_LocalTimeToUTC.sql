

create function dbo.fn_LocalTimeToUTC(	@LocalTime  datetime )
returns datetime
as 
begin
	declare @Bias 	int
	declare @DaylightBias 	int
	declare @DaylightYear 	int
	declare @DaylightMonth 	int
	declare @DaylightDay 	int
	declare @DaylightHour	int
	declare @DaylightMinute	int
	declare	@DaylightSecond	int
	declare @DaylightMilliseconds int
	declare @DaylightWeekday 	int
	declare @StandardBias 	int
	declare @StandardYear 	int
	declare	@StandardMonth 	int
	declare @StandardDay 	int
	declare @StandardHour 	int
	declare @StandardMinute int
	declare @StandardSecond int
	declare @StandardMilliseconds int
	declare @StandardWeekday int 

	set @DaylightMilliseconds = 0
	set @StandardMilliseconds = 0
	
	if @LocalTime <= '1/2/1900'
	begin
		return @LocalTime
	end

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
	join TimeZoneDefinition as d on d.TimeZoneDefinitionId = r.TimeZoneDefinitionId
	join UserSettingsBase as us on d.TimeZoneCode = us.TimeZoneCode
	where r.EffectiveDateTime <= @LocalTime and us.SystemUserId = dbo.fn_FindUserGuid()
	order by r.TimeZoneRuleVersionNumber desc, r.EffectiveDateTime desc

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
									@StandardWeekday)


end
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LocalTimeToUTC] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_LocalTimeToUTC] TO [CRMReaderRole]
    AS [dbo];

