SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
