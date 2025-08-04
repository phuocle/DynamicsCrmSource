

create function dbo.fn_UTCToTzSpecificLocalTime(
	@UTCTime  datetime,
	@Bias int,
	@DaylightBias int,
	@DaylightYear int, 
	@DaylightMonth int,
	@DaylightDay int,
	@DaylightHour int,
	@DaylightMinute int,
	@DaylightSecond int,
	@DaylightMilliseconds int,
	@DaylightWeekday int,
	@StandardBias int,
	@StandardYear int, 
	@StandardMonth int,
	@StandardDay int,
	@StandardHour int,
	@StandardMinute int,
	@StandardSecond int,
	@StandardMilliseconds int,
	@StandardWeekday int )
returns datetime
as 
begin

    declare @TimeZoneBias int
    declare @NewTimeZoneBias int
    declare @LocalCustomBias int
    declare @StandardTime datetime
    declare @DaylightTime datetime
    declare @UtcStandardTime datetime
    declare @UtcDaylightTime datetime
    declare @ComputedLocalTime datetime
    declare @bDaylightTimeZone bit

--    //
--    // Get the timezone information into a useful format
--    //

--    //
--    // Get the new timezone bias
--    //

    set @NewTimeZoneBias = @Bias

--    //
--    // Now see if we have stored cutover times
--    //

	if ( @StandardMonth <> 0 and @DaylightMonth <> 0) 
	begin

--        //
--        // We have timezone cutover information. Compute the
--        // cutover dates and compute what our current bias
--        // is
--        //

        set @StandardTime = dbo.fn_GetCutoverTime(	@UTCTime,
						@StandardYear, 
						@StandardMonth,
						@StandardDay,
						@StandardHour,
						@StandardMinute,
						@StandardSecond,
						@StandardMilliseconds,
						@StandardWeekday)

		if ( @StandardTime is NULL)
		begin
			return NULL --- raise error here
		end

        set @DaylightTime = dbo.fn_GetCutoverTime(	@UTCTime,
						@DaylightYear, 
						@DaylightMonth,
						@DaylightDay,
						@DaylightHour,
						@DaylightMinute,
						@DaylightSecond,
						@DaylightMilliseconds,
						@DaylightWeekday)

		if ( @DaylightTime is NULL)
		begin
			return NULL --- raise error here
		end

--        //
--        // Convert standard time and daylight time to utc
--        //

        set @LocalCustomBias = @StandardBias
        set @TimeZoneBias = @NewTimeZoneBias + @LocalCustomBias
        set @UtcDaylightTime = DATEADD(mi, @TimeZoneBias, @DaylightTime)

        set @LocalCustomBias = @DaylightBias
        set @TimeZoneBias = @NewTimeZoneBias + @LocalCustomBias
        set @UtcStandardTime = DATEADD(mi, @TimeZoneBias, @StandardTime)

--        //
--        // If daylight < standard, then time >= daylight and
--        // less than standard is daylight
--        //

        if ( @UtcDaylightTime < @UtcStandardTime ) 
		begin

--            //
--            // If today is >= DaylightTime and < StandardTime, then
--            // We are in daylight savings time
--            //

            if ( (@UTCTime >= @UtcDaylightTime) and
                 (@UTCTime < @UtcStandardTime) ) 
			begin
                set @bDaylightTimeZone = 1
            end
			else
			begin
				set @bDaylightTimeZone = 0
			end
        end
        else 
		begin

--            //
--            // If today is >= StandardTime and < DaylightTime, then
--            // We are in standard time
--            //

            if ( (@UTCTime >= @UtcStandardTime ) and
                 (@UTCTime < @UtcDaylightTime) ) 
			begin

                set @bDaylightTimeZone = 0
			end
            else 
			begin
                set @bDaylightTimeZone = 1
            end
		 end

--        //
--        // At this point, we know our current timezone and the
--        // Universal time of the next cutover.
--        //

		if ( @bDaylightTimeZone = 1)
		begin
	        set @LocalCustomBias = @DaylightBias
		end
		else
		begin
	        set @LocalCustomBias = @StandardBias
		end

        set @TimeZoneBias = @NewTimeZoneBias + @LocalCustomBias

    end
    else 
	begin
        set @TimeZoneBias = @NewTimeZoneBias
    end

    set @ComputedLocalTime = DATEADD(mi, - @TimeZoneBias, @UTCTime)

	return @ComputedLocalTime
end