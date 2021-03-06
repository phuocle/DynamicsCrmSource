USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_TzSpecificLocalTimeToUTC]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_TzSpecificLocalTimeToUTC](
	@LocalTime  datetime,
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
begin;
    declare @TimeZoneBias int;
    declare @NewTimeZoneBias int;
    declare @LocalCustomBias int;
    declare @StandardTime datetime;
    declare @DaylightTime datetime;
    declare @ComputedUniversalTime datetime;
    declare @bDaylightTimeZone bit;

	-- //
	-- // Get the new timezone bias
	-- //

    set @NewTimeZoneBias = @Bias;

	-- //
	-- // Now see if we have stored cutover times
	-- //

    if ( @StandardMonth <> 0 and @DaylightMonth <> 0 )
	begin;
	-- //
	-- // We have timezone cutover information. Compute the
	-- // cutover dates and compute what our current bias
	-- // is
	-- //

        set @StandardTime = dbo.fn_GetCutoverTime(	@LocalTime,
												@StandardYear, 
												@StandardMonth,
												@StandardDay,
												@StandardHour,
												@StandardMinute,
												@StandardSecond,
												@StandardMilliseconds,
												@StandardWeekday);

		if ( @StandardTime is null)
		begin;
			return null; --- raise error here
		end;

        set @DaylightTime = dbo.fn_GetCutoverTime(	@LocalTime,
												@DaylightYear, 
												@DaylightMonth,
												@DaylightDay,
												@DaylightHour,
												@DaylightMinute,
												@DaylightSecond,
												@DaylightMilliseconds,
												@DaylightWeekday);

		if ( @DaylightTime is null)
		begin;
			return null --- raise error here
		end;


		-- //
		-- // If daylight < standard, then time >= daylight and
		-- // less than standard is daylight
		-- //

        if ( @DaylightTime < @StandardTime ) 
		begin;
			-- //
			-- // If today is >= DaylightTime and < StandardTime, then
			-- // We are in daylight savings time
			-- //

            if ( ( @LocalTime >= @DaylightTime) and
                 ( @LocalTime <  @StandardTime) ) 
			begin;
                set @bDaylightTimeZone = 1;
            end;
            else 
			begin;
                set @bDaylightTimeZone = 0;
            end;
        end; -- end of if ( @DaylightTime < @StandardTime ) 
        else 
		begin;
			-- //
			-- // If today is >= StandardTime and < DaylightTime, then
			-- // We are in standard time
			-- //

            if ( (@LocalTime >= @StandardTime ) and
                 (@LocalTime <  @DaylightTime ) )
			begin;
				set @bDaylightTimeZone = 0;
			end;
            else
			begin;
				set @bDaylightTimeZone = 1;
            end;
        end; -- end of else for if ( @DaylightTime < @StandardTime ) 

		-- //
		-- // At this point, we know our current timezone and the
		-- // local time of the next cutover.
		-- //

		if ( @bDaylightTimeZone = 1)
		begin;
	        set @LocalCustomBias = @DaylightBias;
		end;
		else
		begin;
			set @LocalCustomBias = @StandardBias;
		end;

        set @TimeZoneBias = @NewTimeZoneBias + @LocalCustomBias;
    end; -- end of if ( @StandardMonth <> 0 and @DaylightMonth <> 0 )
    else 
	begin;
        set @TimeZoneBias = @NewTimeZoneBias;
    end;

    set @ComputedUniversalTime = dateadd(mi, @TimeZoneBias, @LocalTime);

    return @ComputedUniversalTime;
end;
GO
