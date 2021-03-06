USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_UDF_702d7f7e040e41bcbf34bc65ab49b22a]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE FUNCTION [dbo].[fn_UDF_702d7f7e040e41bcbf34bc65ab49b22a](@v0 datetime,@v1 datetime)
RETURNS int
AS
BEGIN
DECLARE @v3 int
DECLARE @maxInputDate datetime,@maxAllowedDate datetime
IF(1=1)
BEGIN
IF(@v0 < @v1) 
	BEGIN 
		SET @maxInputDate=@v1 
		SET @maxAllowedDate=DATEADD(mi,2147483647,@v0)
	END 
ELSE 
	BEGIN 
		SET @maxInputDate=@v0 
		SET @maxAllowedDate=DATEADD(mi,2147483647,@v1)
	END 
IF(@maxAllowedDate<@maxInputDate OR @v0 IS NULL OR @v1 IS NULL)BEGIN RETURN NULL END
DECLARE @v2 int
SET @v2 = (DATEDIFF(minute, @v0, @v1))
IF(@v2<-2147483648 OR @v2>2147483647) BEGIN RETURN NULL END
SET @v3 = @v2
END
RETURN @v3
END

GO
