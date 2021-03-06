USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_ConvertUtcToSpecificTimeCLR]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS OFF
GO
SET QUOTED_IDENTIFIER OFF
GO
CREATE FUNCTION [dbo].[fn_ConvertUtcToSpecificTimeCLR](@UTCTime [datetime], @timeZoneId [nvarchar](60))
RETURNS [datetime] WITH EXECUTE AS CALLER
AS 
EXTERNAL NAME [MSCRMSqlClr].[UserDefinedFunctions].[ConvertUtcToSpecificTime]
GO
