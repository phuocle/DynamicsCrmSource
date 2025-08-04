SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


---calculate the cutovertime of current year
create function [dbo].[fn_GetCutoverTime](
	@CurrentTime datetime, 
	@Year int, 
	@Month int,
	@Day int,
	@Hour int,
	@Minute int,
	@Second int,
	@Milliseconds int,
	@Weekday int)
returns datetime
as
begin;
	declare @DateCutover datetime;

	if (@Year <> 0)
	begin;
		return null ;---raiseerror here
	end;
	
	declare @WorkingTime datetime
	declare @ScratchTime datetime
	declare @BestWeekdayDate int
	declare @WorkingWeekdayNumber int
	declare @TargetWeekdayNumber int
	declare @TargetYear int
	declare @TargetMonth int
	declare @TargetWeekday int     -- range [0..6] == [Sunday..Saturday]	
	
	-- The time is an day in the month style time
	--
	--   the convention is the Day is 1-5 specifying 1st, 2nd... Last
	--   day within the month. The day is WeekDay.

	--        
	--        Compute the target month and year
	--        

	set @TargetWeekdayNumber = @Day;

	if ( @TargetWeekdayNumber > 5 or @TargetWeekdayNumber = 0 ) 
	begin;
		return null ---raise error here
	end;

	set @TargetWeekday = @Weekday;
	set @TargetMonth = @Month;
	set @TargetYear = datepart(yy, @CurrentTime);

	set @BestWeekdayDate = 0;

	set @WorkingTime = dbo.fn_FirstDayOfMonth(@CurrentTime, @TargetMonth);
	set @WorkingTime = dateadd(hh, @Hour, @WorkingTime);
	set @WorkingTime = dateadd(mi, @Minute, @WorkingTime);
	set @WorkingTime = dateadd(ss, @Second, @WorkingTime);
	set @WorkingTime = dateadd(ms, @Milliseconds, @WorkingTime);

	set @ScratchTime = @WorkingTime;
	
	---	return @WorkingTime

	--        Compute bias to target weekday
	if ( dbo.fn_NTDayOfWeek( @ScratchTime) > @TargetWeekday ) 
	begin;
		set @WorkingTime = dateadd(dd, (7-(dbo.fn_NTDayOfWeek(@ScratchTime) - @TargetWeekday)), @WorkingTime);
	end;
	else if ( dbo.fn_NTDayOfWeek(@ScratchTime) < @TargetWeekday ) 
	begin;
		set @WorkingTime = dateadd(dd, @TargetWeekday - dbo.fn_NTDayOfWeek(@ScratchTime), @WorkingTime);
	end;
	
	---	return @WorkingTime

	--         We are now at the first weekday that matches our target weekday

	set @BestWeekdayDate = datepart(dd, @WorkingTime)
	set @WorkingWeekdayNumber = 1

	-- Keep going one week at a time until we either pass the
	-- target weekday, or we match exactly

		set @ScratchTime = @WorkingTime
	---	return @ScratchTime

	while ( @WorkingWeekdayNumber < @TargetWeekdayNumber ) 
	begin;
		set @WorkingTime = dateadd(dd, 7, @WorkingTime);

		if (datepart(mm, @WorkingTime) <> datepart(mm, @ScratchTime))
		begin;
			break;
		end;

		set @ScratchTime = @WorkingTime;
		set @WorkingWeekdayNumber = @WorkingWeekdayNumber + 1;
	end;

	return @ScratchTime;
end;
GO
