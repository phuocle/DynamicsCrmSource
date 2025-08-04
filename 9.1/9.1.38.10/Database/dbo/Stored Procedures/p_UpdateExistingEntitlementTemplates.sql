

CREATE PROCEDURE [dbo].[p_UpdateExistingEntitlementTemplates]
	@BatchSize INT,
	@BatchStart INT
AS
BEGIN
	-- Option Set Value corresponding to Case
	DECLARE @EntityType INT = 0;

	UPDATE TOP(@BatchSize) EntitlementTemplateBase
	SET entitytype = @EntityType
	WHERE entitytype IS NULL

	SELECT 'success:' + CONVERT(NVARCHAR(MAX), @@ROWCOUNT) + ':'
         + 'updated ' + CONVERT(NVARCHAR(MAX), @@ROWCOUNT) + ' EntitlementTemplates'
END