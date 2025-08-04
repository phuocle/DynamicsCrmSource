
	CREATE VIEW [XrmTds].[types_view]
	(
		[name],				-- Name of the type.
		[schema_id],		-- ID of the schema to which the type belongs. 1 = dbo.
		[system_type_id],	-- ID of the internal system-type of the type.
		[user_type_id],		-- ID of the type. For system data types, user_type_id = system_type_id.
		[is_user_defined],	-- 1 = User-defined type. 0 = SQL Server system data type.
		[max_length],		-- Maximum length (in bytes) of the type.
		[precision],		-- Max precision of the type if it is numeric-based; otherwise, 0.
		[scale],			-- Max scale of the type if it is numeric-based; otherwise, 0.
		[collation_name],	-- Name of the collation of the type if it is character-based; other wise, NULL.
		[AttributeTypeId]	-- Metadata id of the attribute type.
	)
	WITH VIEW_METADATA AS
	SELECT at.[Description], 1, at.[SQLServerType], at.[SQLServerType], 0, t.[max_length], t.[precision], t.[scale], t.[collation_name], at.[AttributeTypeId]
		FROM [MetadataSchema].[AttributeTypes] at INNER JOIN [sys].[types] t ON [at].[Description] collate database_default = t.[name]
		WHERE [SQLServerType] IS NOT NULL	-- CDS specific types will also be map to a SQL type. E.g. statecode to int, statecodename to nvarchar.
