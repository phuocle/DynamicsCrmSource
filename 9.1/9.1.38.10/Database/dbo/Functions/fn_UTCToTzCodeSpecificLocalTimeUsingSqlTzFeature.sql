

CREATE FUNCTION dbo.fn_UTCToTzCodeSpecificLocalTimeUsingSqlTzFeature(@UTCTime DATETIME, @timezonecode INT)
RETURNS DATETIME
AS
BEGIN
	DECLARE @TimeZoneId VARCHAR(200);
    DECLARE @ResultDateTime DATETIME;
	
	IF @UTCTime <= '1/2/1753'
	BEGIN
		RETURN @UTCTime;
	END;
	
	SELECT @TimeZoneId = StandardName
	FROM  TimeZoneDefinition d
	WHERE d.TimeZoneCode = @timezonecode ;

	SET @TimeZoneId = dbo.fn_FindNewTimeZoneIdForRetiredTz(@TimeZoneId)
	
	SET @ResultDateTime = @UTCTime AT TIME ZONE 'UTC' AT TIME ZONE @TimeZoneId

	RETURN @ResultDateTime;
END;