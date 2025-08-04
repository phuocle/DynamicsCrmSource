CREATE FUNCTION [dbo].[fn_ConvertUtcToSpecificTimeCLR]
(@UTCTime DATETIME, @timeZoneId NVARCHAR (60))
RETURNS DATETIME
AS
 EXTERNAL NAME [MSCRMSqlClr].[UserDefinedFunctions].[ConvertUtcToSpecificTime]

