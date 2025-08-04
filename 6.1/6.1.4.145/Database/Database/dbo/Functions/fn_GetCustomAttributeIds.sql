

CREATE FUNCTION fn_GetCustomAttributeIds() 
RETURNS TABLE
AS
RETURN 
(
	SELECT DISTINCT AttributeId 
	FROM MetadataSchema.Attribute 
	WHERE AttributeId NOT IN
		(SELECT AttributeId 
		 FROM MetadataSchema.Attribute 
		 WHERE SolutionId = 'FD140AAD-4DF4-11DD-BD17-0019B9312238') -- SystemSolutionId
)

