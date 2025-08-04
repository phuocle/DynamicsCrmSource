

CREATE PROCEDURE p_GetAuditDetails(
		@auditId uniqueidentifier
)
AS
BEGIN

SET NOCOUNT ON
DECLARE @objectId uniqueidentifier
DECLARE @objectTypeCode int
DECLARE @attributeMask nvarchar(max)
DECLARE @columnNumber nvarchar(max)
DECLARE @createdOn datetime
DECLARE @commaIndex int

SELECT @objectId = ObjectId, @objectTypeCode = ObjectTypeCode, @attributeMask=AttributeMask, @createdOn=CreatedOn FROM AuditBase WHERE AuditId = @auditId

SELECT @commaIndex = charindex(',', @attributeMask);
SET @attributeMask = substring(@attributeMask, @commaIndex + 1 , LEN(@attributeMask) - @commaIndex)
WHILE charindex(',', @attributeMask) > 0
BEGIN
SELECT @commaIndex = charindex(',', @attributeMask);
SELECT @columnNumber = SUBSTRING(@attributeMask, 1, @commaIndex - 1)
EXEC p_GetNewValueFromAuditTrail @objectId, @objectTypeCode, @columnNumber, @createdOn, @auditId
SET @attributeMask = SUBSTRING(@attributeMask, @commaIndex + 1 , LEN(@attributeMask) - @commaIndex)
END

-- End of stored procedure
END

