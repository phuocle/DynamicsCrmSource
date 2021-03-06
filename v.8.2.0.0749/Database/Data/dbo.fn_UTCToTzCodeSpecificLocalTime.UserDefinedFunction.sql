USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_UTCToTzCodeSpecificLocalTime]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_UTCToTzCodeSpecificLocalTime](	@UTCTime  datetime, @timezonecode int )
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
	declare @EffectiveDateTime datetime;
	declare @ResultDateTime datetime;
	declare @FuzzySearchDateTime datetime;

	set @DaylightMilliseconds = 0;
	set @StandardMilliseconds = 0;
	
	if @UTCTime <= '1/2/1753'
	begin;
		return @UTCTime;
	end;
	
	select @FuzzySearchDateTime = dateadd(day, 1, @UTCTime);

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
		@StandardWeekday = r.StandardDayOfWeek,
		@EffectiveDateTime = r.EffectiveDateTime
	from TimeZoneRule as r
	inner join TimeZoneDefinition as d on d.TimeZoneDefinitionId = r.TimeZoneDefinitionId
	where r.EffectiveDateTime <= @FuzzySearchDateTime and d.TimeZoneCode = @timezonecode 
	order by r.TimeZoneRuleVersionNumber desc, r.EffectiveDateTime desc;

	select @ResultDateTime = dbo.fn_UTCToTzSpecificLocalTime(@UTCTime,
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

	if @ResultDateTime < @EffectiveDateTime
	begin;
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
			@StandardWeekday = r.StandardDayOfWeek,
			@EffectiveDateTime = r.EffectiveDateTime
		from TimeZoneRule as r
		inner join TimeZoneDefinition as d on d.TimeZoneDefinitionId = r.TimeZoneDefinitionId
		where r.EffectiveDateTime <= @ResultDateTime and d.TimeZoneCode = @timezonecode
		order by r.TimeZoneRuleVersionNumber desc, r.EffectiveDateTime desc;

		select @ResultDateTime = dbo.fn_UTCToTzSpecificLocalTime(@UTCTime,
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
	end; -- end of if @ResultDateTime < @EffectiveDateTime

	return @ResultDateTime;
end;
GO
