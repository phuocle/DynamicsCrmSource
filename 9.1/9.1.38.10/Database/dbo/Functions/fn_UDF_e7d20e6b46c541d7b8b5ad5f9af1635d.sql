CREATE FUNCTION [dbo].[fn_UDF_e7d20e6b46c541d7b8b5ad5f9af1635d](@v0 datetime,@v1 datetime)
RETURNS int
WITH SCHEMABINDING
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
