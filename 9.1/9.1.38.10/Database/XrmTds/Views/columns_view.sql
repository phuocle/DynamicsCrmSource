	
	CREATE VIEW [XrmTds].[columns_view]
	(
		[name],						-- Name of the column. Is unique within the object.
		[column_id],				-- ID of the column. Is unique within the object.
		[object_id],				-- ID of the object to which this column belongs.
		[system_type_id],			-- ID of the system type of the column.
		[user_type_id],				-- ID of the type of the column as defined by the user.
		[is_nullable],				-- 1 = Column is nullable.
		[precision],				-- Precision of the column if numeric-based.
		[scale],					-- Scale of column if numeric-based.
		[max_length],				-- Maximum length (in bytes) of the column.
		[is_identity],				-- 1 = Column has identity values
		[is_computed],				-- 1 = Column is a computed column.
		[default_object_id],		-- ID of the default object. 0 = No default.
		[AttributeId],				-- Metadata id of the attribute.
		[IsPKAttribute],			-- Is primary key column.
		[VersionNumber]				-- Metadata version number.
	)
	WITH VIEW_METADATA AS
	SELECT  av.[LogicalName], 
			av.[ColumnNumber],
			tb.[object_id],
			at.PSqlServerType,
			at.PSqlServerType,
			av.[IsNullable],
			st.Precision, 
			ISNULL(av.[Accuracy], 0),
			ISNULL(av.[Length], -1),		-- Length property in metadata represents the size of the column in bytes. -1 indicates nvarchar(max).
			av.[IsIdentity], 
			0,					-- Only rollup feature use SQL computed column, using a dynamically generated function which is not exposed. 
			0,					-- TODO: update this when [XrmTds].[default_constraints_view] is created. Low priority.
			av.[AttributeId], 
			av.[IsPKAttribute],
			av.[VersionNumber]
		FROM [dbo].[AttributeView] av INNER JOIN [XrmTds].[tables_view] tb ON av.[EntityId] = tb.[EntityId]
									  INNER JOIN (
											SELECT AttributeTypeId, PSqlServerType = CASE
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000030' THEN 56		-- picklist (int)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000036' THEN 56		-- state (int)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000037' THEN 56		-- status (int)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000031' THEN 36		-- lookup (uniqueidentifier)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000035' THEN 36		-- owner (uniqueidentifier)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000034' THEN 36		-- customer (uniqueidentifier)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000032' THEN 36		-- primarykey (uniqueidentifier)
																		WHEN AttributeTypeId = '00000000-0000-0000-00AA-110000000033' THEN 231	-- virtual (nvarchar). TODO: Currently virtual is only used for picklist names. Need metadata support to distinguish if virtual gets used for something else in the future.
																		ELSE SqlServerType
																	END
											  FROM [MetadataSchema].[AttributeTypes] 
									  ) at ON at.[AttributeTypeId] = av.[AttributeTypeId]
									  INNER JOIN [sys].[types] st ON st.user_type_id = at.PSqlServerType
		WHERE 
			(
				-- Return all valid for read non child columns.
				av.[AttributeOf] IS NULL						-- Non child.
				AND av.[ValidForReadAPI] = 1					-- Valid for read column.
				AND at.[AttributeTypeId] NOT IN (				-- Filter out unsupported column types for TDS.
						'00000000-0000-0000-00AA-110000000012', -- binary.
						'00000000-0000-0000-00AA-110000000018', -- image.
						'00000000-0000-0000-00AA-11000000001C', -- ntext.
						'00000000-0000-0000-00AA-110000000023', -- sql_variant.
						'00000000-0000-0000-00AA-110000000028', -- varbinary.
						'00000000-0000-0000-00AA-110000000033', -- virtual.
						'00000000-0000-0000-00AA-11000000003A', -- HierarchyId.
						'00000000-0000-0000-00AA-11000000003B', -- managedproperty.
						'00000000-0000-0000-00AA-11000000003D', -- file.
						'66DDA8AE-A5DD-459C-9C09-557D66273741', -- xml.
						'00000000-0000-0000-00AA-110000000039', -- party list
						'00000000-0000-0000-00AA-110000000025'  -- timestamp E.g. VersionNumber	
					)
				AND ISNULL(Length, 0) <> -1						-- Exclude nvarchar(max). TODO: Revisit whether we need to support it. Good to filter out ntext, nvarchar(max) from performance standpoint.
			)
			OR
			(
				-- Return valid for read child columns of picklist, lookup, customer, owner, state and status fields.
				av.[AttributeOf] IS NOT NULL					-- Child column.
				AND av.[ValidForReadAPI] = 1					-- Child column is valid for read.
				AND av.[AttributeTypeId] IN (					-- Supported child column types for TDS.
					'00000000-0000-0000-00AA-110000000033',	-- virtual (Picklist, state, status child attributes.)	
					'00000000-0000-0000-00AA-11000000001E'	-- nvarchar	(lookup, customer, owner child attributes.)
				)
				AND av.[AttributeOf] IN (
					SELECT [AttributeId] 
					FROM [MetadataSchema].[Attribute]
					WHERE	av.[ValidForReadAPI] = 1					-- Parent column is valid for read.
							AND [AttributeTypeId] IN (					-- Supported parent column types for TDS.
								'00000000-0000-0000-00AA-110000000030',	-- picklist
								'00000000-0000-0000-00AA-110000000031',	-- lookup
								'00000000-0000-0000-00AA-110000000034',	-- customer
								'00000000-0000-0000-00AA-110000000035', -- owner
								'00000000-0000-0000-00AA-110000000036', -- state
								'00000000-0000-0000-00AA-110000000037', -- status
								'00000000-0000-0000-00AA-110000000013',	-- bit (E.g. donotemail)
								'00000000-0000-0000-00AA-110000000019'	-- int (E.g. languagecode)
							)
				)
			)
