	
	CREATE VIEW [XrmTds].[foreign_keys_view]
	(
		[RelationshipId],			-- Metadata id of the relationship.
		[schema_id],				-- Id of the schema that the object is contained in.
		[name],						-- Name of the foreign key constraint.
		[parent_object_id],			-- Id of the parent of the constraint, which is the referencing object.
		[referenced_object_id],		-- Id of the referenced object, which has the candidate key.
		[key_index_id],				-- Id of the key index within the referenced object. (1 clustered index, > 1 non clustered index)
		[type],						-- Object type (E.g. F = Foreign key).
		[type_desc],				-- Description of the object type (E.g. FOREIGN_KEY_CONSTRAINT).
		[VersionNumber]
	)
	WITH VIEW_METADATA AS
	-- Derive foreign keys from relationship metadata. 
	SELECT rv.[RelationshipId],
			1,
			rv.[Name],
			ptb.[object_id],
			rtb.[object_id], 
			1,			-- Referenced column is a primary key.
			'F',
			'FOREIGN_KEY_CONSTRAINT',
			rv.[VersionNumber]
		FROM [dbo].[RelationshipView] rv INNER JOIN [XrmTds].[tables_view] ptb ON rv.[ReferencingEntityId] = ptb.[EntityId]
										INNER JOIN [XrmTds].[tables_view] rtb ON rv.[ReferencedEntityId] = rtb.[EntityId]
										INNER JOIN [XrmTds].[columns_view] rcl ON rv.[ReferencedAttributeId] = rcl.[AttributeId]
	WHERE rcl.[IsPKAttribute] = 1
