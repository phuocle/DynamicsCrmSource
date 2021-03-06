USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetUtcDateTrunc]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE FUNCTION [dbo].[fn_GetUtcDateTrunc]()
RETURNS DATETIME
AS
BEGIN

DECLARE @curDate DATETIME
SET @curDate= GETUTCDATE();
RETURN DATEADD(ms,(0 - DATEPART(ms,@curDate)), @curDate)

END

GO
