

create function dbo.fn_ConvertUtcToSpecificTimeCLR(@UTCTime datetime, @timeZoneId nvarchar(60)) 
returns datetime 
as
begin;

	if (@UTCTime is null or @timeZoneId is null)
    begin;
        return null;
    end;

	-- If the Time Zone Code is -1 (TimeZoneCode.None) do not convert to user local time.
	-- If the Time Zone Code is UTC (TimeZoneCode.UtcStandardTime) do not convert.
	if (@timeZoneId = '-1' or @timeZoneId ='UTC')
	begin;
		return @UTCTime;
	end;

	return (convert(datetime, @UTCTime at time zone 'UTC' at time zone @timeZoneId));

end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_ConvertUtcToSpecificTimeCLR] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_ConvertUtcToSpecificTimeCLR] TO [CRMReaderRole]
    AS [dbo];

