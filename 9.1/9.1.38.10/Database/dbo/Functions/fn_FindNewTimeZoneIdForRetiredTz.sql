

CREATE FUNCTION dbo.fn_FindNewTimeZoneIdForRetiredTz( @TimeZoneId  VARCHAR(200) )
RETURNS VARCHAR(200)
AS 
BEGIN
	DECLARE @NewTimeZoneId VARCHAR(200)

	SET @NewTimeZoneId = 
		CASE @TimeZoneId
			WHEN 'Mexico Standard Time 2' THEN 'Mountain Standard Time (Mexico)'
			WHEN 'Mexico Standard Time' THEN 'Central Standard Time (Mexico)'
			WHEN 'Adelaide (Commonwealth Games 2006)' THEN 'Cen. Australia Standard Time'
			WHEN 'Canberra, Melbourne, Sydney (Commonwealth Games 2006)' THEN 'AUS Eastern Standard Time'
			WHEN 'Hobart (Commonwealth Games 2006)' THEN 'Tasmania Standard Time'
			ELSE @TimeZoneId 
		END;
	
	RETURN @NewTimeZoneId;
END;