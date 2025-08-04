
	CREATE VIEW [XrmTds].[tables_view]
	(
		[object_id],		-- Sys table identification number (int).
		[name],				-- Table or view name.
		[schema_id],		-- ID of the schema.
		[TABLE_SCHEMA],		-- Name of schema that contains the table.
		[TABLE_TYPE],		-- Type of table (BASE TABLE or VIEW).
		[type],				-- Object type (E.g. U = Table (user-defined)).
		[type_desc],		-- Description of the object type (E.g. USER_TABLE).
		[TABLE_CATALOG],	-- Table qualifier.
		[EntityId],			-- Metadata id of the entity.
		[parent_object_id],	-- Parent object id.
		[VersionNumber]
	)
	WITH VIEW_METADATA AS
	SELECT ev.[ObjectTypeCode], ev.[LogicalName], 1, sc.name, 'BASE TABLE', 'U', 'USER_TABLE', db.[Name], ev.[EntityId], 0, ev.[VersionNumber]
		FROM [dbo].[EntityView] ev INNER JOIN [XrmTds].[schemas_view] sc
		ON sc.schema_id = 1, [XrmTds].[databases_view] db							-- No explicit join columns exist. But [XrmTds].[databases_view] will always have only one row.
		WHERE ev.[ReportViewName] IS NOT NULL AND LEN(ev.[ReportViewName]) > 0		-- Only return entities that have report view.
			AND ev.[DataProviderId] IS NULL											-- Skip virtual entities. TODO: Some virtual entities have report view name in entity metadata although view does not exist.
			AND ev.[IsPrivate] = 0													-- Skip private entities not exposed to customers.
	