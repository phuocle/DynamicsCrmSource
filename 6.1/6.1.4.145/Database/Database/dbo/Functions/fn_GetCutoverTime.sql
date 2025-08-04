

---calculate the cutovertime of current year
create function dbo.fn_GetCutoverTime(
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
begin
	declare @DateCutover datetime
	if (@Year <> 0)
		return NULL ---raiseerror here
	
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

--        
--        Compute the target month and year
--        

        set @TargetWeekdayNumber = @Day;
        if ( @TargetWeekdayNumber > 5 or @TargetWeekdayNumber = 0 ) 
	begin
            return null ---raise error here
	end

        set @TargetWeekday = @Weekday
        set @TargetMonth = @Month
        set @TargetYear = DATEPART(yy, @CurrentTime)

        set @BestWeekdayDate = 0

	set @WorkingTime = dbo.fn_FirstDayOfMonth(@CurrentTime, @TargetMonth)
	set @WorkingTime = DATEADD(hh, @Hour, @WorkingTime)
	set @WorkingTime = DATEADD(mi, @Minute, @WorkingTime)
	set @WorkingTime = DATEADD(ss, @Second, @WorkingTime)
	set @WorkingTime = DATEADD(ms, @Milliseconds, @WorkingTime)

	set @ScratchTime = @WorkingTime
	
---	return @WorkingTime

--        
--        Compute bias to target weekday
--        
        if ( dbo.fn_NTDayOfWeek( @ScratchTime) > @TargetWeekday ) 
	begin
            set @WorkingTime = DATEADD(dd, (7-(dbo.fn_NTDayOfWeek(@ScratchTime) - @TargetWeekday)), @WorkingTime)
        end
        else if ( dbo.fn_NTDayOfWeek(@ScratchTime) < @TargetWeekday ) 
	begin
            set @WorkingTime = DATEADD(dd, @TargetWeekday - dbo.fn_NTDayOfWeek(@ScratchTime), @WorkingTime)
        end
	
---	return @WorkingTime

--        
--         We are now at the first weekday that matches our target weekday
--        

        set @BestWeekdayDate = DATEPART(dd, @WorkingTime)
        set @WorkingWeekdayNumber = 1

--        
--         Keep going one week at a time until we either pass the
--         target weekday, or we match exactly
--        
	set @ScratchTime = @WorkingTime
---	return @ScratchTime

        while ( @WorkingWeekdayNumber < @TargetWeekdayNumber ) 
	begin
            set @WorkingTime = DATEADD(dd, 7, @WorkingTime)
	    if (DATEPART(mm, @WorkingTime) <> DATEPART(mm, @ScratchTime))
		break;
	    set @ScratchTime = @WorkingTime
            set @WorkingWeekdayNumber = @WorkingWeekdayNumber + 1
        end

        return @ScratchTime  
end