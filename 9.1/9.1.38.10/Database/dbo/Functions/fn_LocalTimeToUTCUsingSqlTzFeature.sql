

CREATE FUNCTION dbo.fn_LocalTimeToUTCUsingSqlTzFeature(	@LocalTime DATETIME )
RETURNS DATETIME
AS 
BEGIN
	DECLARE @TimeZoneId VARCHAR(200);
    DECLARE @ResultDateTime DATETIME;
	
	IF @LocalTime <= '1/2/1753'
	BEGIN
		RETURN @LocalTime;
	END;
	
	SELECT @TimeZoneId = StandardName
    FROM TimeZoneDefinition AS d
	INNER JOIN UserSettingsBase AS us ON d.TimeZoneCode = us.TimeZoneCode
	WHERE us.SystemUserId = dbo.fn_FindUserGuid();
	
	SET @TimeZoneId = dbo.fn_FindNewTimeZoneIdForRetiredTz(@TimeZoneId)
	
    SET @ResultDateTime = @LocalTime AT TIME ZONE @TimeZoneId AT TIME ZONE 'UTC'
    RETURN @ResultDateTime;
	
END;