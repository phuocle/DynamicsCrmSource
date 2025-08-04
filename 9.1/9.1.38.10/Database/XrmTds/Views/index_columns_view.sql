	
	CREATE VIEW [XrmTds].[index_columns_view]
	(
		[object_id],		-- ID of the object the index is defined on.
		[index_id],			-- ID of the index in which the column is defined.
		[key_ordinal],		-- Ordinal (1-based) within set of key-columns.
		[column_id],		-- ID of the column in object_id.
		[index_column_id],	-- ID of the index column. index_column_id is unique only within index_id.
		[IndexAttributeId],	-- Metadata id of the index attribute.
		[ModifiedOn]		-- Modified date of the index.
	)
	WITH VIEW_METADATA AS
	SELECT id.[object_id],
			id.[index_id],
			IIF(ia.[IsIncludeAttribute] = 1, 0, ia.[IndexOrder] + 1),						-- Index order in metadata starts with 0. In SQL server its starts with 1.
			cl.[column_id],
			IIF(ia.[IsIncludeAttribute] = 1, ia.[IndexOrder] + 100, ia.[IndexOrder] + 1),	-- The index order overlaps for include and key attributes. Hence adding a range buffer.
			IndexAttributeId,
			ia.ModifiedOn
		FROM [Metadataschema].[IndexAttributes] ia INNER JOIN [XrmTds].[indexes_view] id ON ia.[IndexId] = id.[IndexId]
													INNER JOIN [XrmTds].[columns_view] cl ON ia.[AttributeId] = cl.[AttributeId]
