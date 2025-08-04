SET QUOTED_IDENTIFIER OFF
GO
SET ANSI_NULLS OFF
GO
CREATE FUNCTION [dbo].[fn_ConvertUtcToSpecificTimeCLR] (@UTCTime [datetime], @timeZoneId [nvarchar] (60))
RETURNS [datetime]
WITH EXECUTE AS CALLER
EXTERNAL NAME [MSCRMSqlClr].[UserDefinedFunctions].[ConvertUtcToSpecificTime]
GO
