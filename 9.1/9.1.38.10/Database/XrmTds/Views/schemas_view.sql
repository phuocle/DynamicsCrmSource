
	CREATE VIEW [XrmTds].[schemas_view]
	(
		[schema_id],		-- ID of the schema.
		[name],				-- Name of the schema.
		[principal_id]		-- ID of the principal that owns this schema.
	) WITH VIEW_METADATA AS
	SELECT 1, 'dbo', 1
