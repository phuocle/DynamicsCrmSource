

-- Create the stored procedure.
CREATE PROCEDURE [XrmTds].[p_CleanupObsoletePSqlSchema]
AS
BEGIN

	-- Obsolete PSql stored procedures.
	DROP PROCEDURE IF EXISTS [XrmTds].[p_CreatePSqlSchemaFunctions]

	-- Obsolete PSql functions.
	DROP FUNCTION IF EXISTS [XrmTds].[fn_GetSqlPrecision];
	DROP FUNCTION IF EXISTS [XrmTds].[fn_GetSqlType];

END