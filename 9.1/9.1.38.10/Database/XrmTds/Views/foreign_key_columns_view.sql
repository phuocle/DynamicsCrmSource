	
	CREATE VIEW [XrmTds].[foreign_key_columns_view]
	(	
		[RelationshipId],			-- Metadata id of the relationship.
		[constraint_column_id],		-- ID of the column, or set of columns, that comprise the FOREIGN KEY (1..n).
		[parent_object_id],			-- ID of the parent of the constraint, which is the referencing object.
		[parent_column_id],			-- ID of the parent column, which is the referencing column.
		[referenced_object_id],		-- ID of the referenced object, which has the candidate key.
		[referenced_column_id],		-- ID of the referenced column (candidate key column).
		[VersionNumber]
	)
	WITH VIEW_METADATA AS
	-- Derive foreign key columns also from relationship metadata. Today CDS metadata does not support multi-column foreign keys.
	SELECT rv.[RelationshipId],
			1,						-- Foreign key has only one column. Hence ordinal 1.
			ptb.[object_id],
			pcl.[column_id],
			rtb.[object_id],
			rcl.[column_id],
			rv.[VersionNumber]
		FROM [dbo].[RelationshipView] rv INNER JOIN [XrmTds].[tables_view] ptb ON rv.[ReferencingEntityId] = ptb.[EntityId]
										INNER JOIN [XrmTds].[tables_view] rtb ON rv.[ReferencedEntityId] = rtb.[EntityId]
										INNER JOIN [XrmTds].[columns_view] pcl ON rv.[ReferencingAttributeId] = pcl.[AttributeId]
										INNER JOIN [XrmTds].[columns_view] rcl ON rv.[ReferencedAttributeId] = rcl.[AttributeId]
	WHERE rcl.[IsPKAttribute] = 1
