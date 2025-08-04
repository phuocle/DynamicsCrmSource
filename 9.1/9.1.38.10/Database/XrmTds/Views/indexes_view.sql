	
	CREATE VIEW [XrmTds].[indexes_view]
	(
		[object_id],			-- ID of the object to which this index belongs.
		[name],					-- Name of the index.
		[index_id],				-- ID of the index (1 clustered, >1 non clustered).
		[is_primary_key],		-- Is index part of a PRIMARY KEY constraint.
		[is_unique_constraint],	-- Is index part of a UNIQUE constraint.
		[is_unique],			-- Is index unique.
		[type],					-- Type of index (1 clustered, 2 non clustered).
		[type_desc],			-- Description of index type (CLUSTERED, NONCLUSTERED).
		[IndexId],				-- Metadata id of the index.
		[ModifiedOn]			-- Modified date on the index.
	)
	WITH VIEW_METADATA AS
	SELECT tb.[object_id], 
			ei.[Name],
			IIF(ei.[IsClustered] = 1, 1, ABS(checksum(ei.[IndexId]))),	-- TODO: Change this to RecordId, once RecordId column is added to EntityIndex.
			ei.[IsPrimaryKey],
			ei.[IsUniqueConstraint],
			ei.[IsUnique],
			IIF(ei.[IsClustered] = 1, 1, 2),
			IIF(ei.[IsClustered] = 1, 'CLUSTERED', 'NONCLUSTERED'),
			ei.[IndexId],
			ei.[ModifiedOn]
		FROM [Metadataschema].[EntityIndex] ei INNER JOIN [XrmTds].[tables_view] tb ON ei.EntityId = tb.[EntityId]
		WHERE ei.[ComponentState] = 0 AND ei.[OverwriteTime] = 0	-- Filter out solution layers. EntityIndex does not have a view.
			AND ei.[IndexId] IN	(								-- Only return index related to columns supported by TDS.
				SELECT ia.[IndexId]
					FROM [Metadataschema].[IndexAttributes] ia INNER JOIN [XrmTds].[columns_view] cl ON ia.[AttributeId] = cl.[AttributeId]
			)
