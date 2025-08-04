

-- Create the stored procedure.
CREATE PROCEDURE [XrmTds].[p_CreatePSqlSchemaViews]
AS
BEGIN

/* -----------------------------------------------------------------------------------------------------------------*/
/* TDS schema views. Provides SQL server schema model on top of CDS Metadata.                                       */
/* Used for servicing schema requests from TDS clients like Power BI, SSMS.                                         */
/* Range for object_id: Table: 0 - 999999; ForeignKey: 1000000 - 1999999.                                           */
/* These views are used for feeding data to TDS schema tables.                                                      */
/* -----------------------------------------------------------------------------------------------------------------*/

-- TODO: Currently only tables and columns that Power BI requests are modeled. Re-visit and add additional
-- tables and columns for additional clients to work E.g. SSMS. Also currently these views return logical name. 
-- Need to re-visit when we need to also accomodate display names.

-- TODO: These views will be slow. Need to check performance in TIP. Hence materializing them to a table and adding
-- indexes is a must. The materialized tables need to be refreshed whenever metadata changes. Indexed views also has
-- limitations, it does not support unions, cross schema queries and nesting.

-- TODO: Currently using Exec statement to execute create view command. This is because the create view statement needs
-- to be the first statement in the batch. The diffbuilder removes all GO statements because GO statement is not a TSQL
-- construct and SQL server does not understand it (Fails with incorrect syntax error when the script is executed through
-- ADO.NET). Need to revisit for alternative solutions.

/*------ Model [sys].[databases]. ----------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[databases_view]

EXEC (N'
	CREATE VIEW [XrmTds].[databases_view]
	(
		[name],				-- Name of database.
		[database_id],		-- ID of the database.
		[collation_name],	-- Collation for the database.
		[create_date]		-- Date the database was created.
	) WITH VIEW_METADATA AS
	SELECT TOP 1 [Name], 1, CONVERT(varchar(128), SERVERPROPERTY(''collation'')), [CreatedOn] FROM [dbo].[OrganizationBase] ORDER BY [VersionNumber] DESC
')

/*------ Model [sys].[schemas] -------------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[schemas_view]

-- Surface a different virtual schema name for data tables from TDS endpoint.
EXEC (N'
	CREATE VIEW [XrmTds].[schemas_view]
	(
		[schema_id],		-- ID of the schema.
		[name],				-- Name of the schema.
		[principal_id]		-- ID of the principal that owns this schema.
	) WITH VIEW_METADATA AS
	SELECT 1, ''dbo'', 1
')

/*------ Model [INFORMATION_SCHEMA].[TABLES]/[sys].[tables] --------------------------------------------------------*/

-- TODO: This view populates data for both [sys].[tables] and [INFORMATION_SCHEMA].[TABLES]
-- revisit and evaluate should they be seperate views.
DROP VIEW IF EXISTS [XrmTds].[tables_view]

EXEC (N'
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
	SELECT ev.[ObjectTypeCode], ev.[LogicalName], 1, sc.name, ''BASE TABLE'', ''U'', ''USER_TABLE'', db.[Name], ev.[EntityId], 0, ev.[VersionNumber]
		FROM [dbo].[EntityView] ev INNER JOIN [XrmTds].[schemas_view] sc
		ON sc.schema_id = 1, [XrmTds].[databases_view] db							-- No explicit join columns exist. But [XrmTds].[databases_view] will always have only one row.
		WHERE ev.[ReportViewName] IS NOT NULL AND LEN(ev.[ReportViewName]) > 0		-- Only return entities that have report view.
			AND ev.[DataProviderId] IS NULL											-- Skip virtual entities. TODO: Some virtual entities have report view name in entity metadata although view does not exist.
			AND ev.[IsPrivate] = 0													-- Skip private entities not exposed to customers.
	')

/*------ Model [sys].[types] --------------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[types_view]

EXEC (N'
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
')

/*------ Model [sys].[columns] -----------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[columns_view]

EXEC (N'	
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
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000030'' THEN 56		-- picklist (int)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000036'' THEN 56		-- state (int)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000037'' THEN 56		-- status (int)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000031'' THEN 36		-- lookup (uniqueidentifier)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000035'' THEN 36		-- owner (uniqueidentifier)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000034'' THEN 36		-- customer (uniqueidentifier)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000032'' THEN 36		-- primarykey (uniqueidentifier)
																		WHEN AttributeTypeId = ''00000000-0000-0000-00AA-110000000033'' THEN 231	-- virtual (nvarchar). TODO: Currently virtual is only used for picklist names. Need metadata support to distinguish if virtual gets used for something else in the future.
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
						''00000000-0000-0000-00AA-110000000012'', -- binary.
						''00000000-0000-0000-00AA-110000000018'', -- image.
						''00000000-0000-0000-00AA-11000000001C'', -- ntext.
						''00000000-0000-0000-00AA-110000000023'', -- sql_variant.
						''00000000-0000-0000-00AA-110000000028'', -- varbinary.
						''00000000-0000-0000-00AA-110000000033'', -- virtual.
						''00000000-0000-0000-00AA-11000000003A'', -- HierarchyId.
						''00000000-0000-0000-00AA-11000000003B'', -- managedproperty.
						''00000000-0000-0000-00AA-11000000003D'', -- file.
						''66DDA8AE-A5DD-459C-9C09-557D66273741'', -- xml.
						''00000000-0000-0000-00AA-110000000039'', -- party list
						''00000000-0000-0000-00AA-110000000025''  -- timestamp E.g. VersionNumber	
					)
				AND ISNULL(Length, 0) <> -1						-- Exclude nvarchar(max). TODO: Revisit whether we need to support it. Good to filter out ntext, nvarchar(max) from performance standpoint.
			)
			OR
			(
				-- Return valid for read child columns of picklist, lookup, customer, owner, state and status fields.
				av.[AttributeOf] IS NOT NULL					-- Child column.
				AND av.[ValidForReadAPI] = 1					-- Child column is valid for read.
				AND av.[AttributeTypeId] IN (					-- Supported child column types for TDS.
					''00000000-0000-0000-00AA-110000000033'',	-- virtual (Picklist, state, status child attributes.)	
					''00000000-0000-0000-00AA-11000000001E''	-- nvarchar	(lookup, customer, owner child attributes.)
				)
				AND av.[AttributeOf] IN (
					SELECT [AttributeId] 
					FROM [MetadataSchema].[Attribute]
					WHERE	av.[ValidForReadAPI] = 1					-- Parent column is valid for read.
							AND [AttributeTypeId] IN (					-- Supported parent column types for TDS.
								''00000000-0000-0000-00AA-110000000030'',	-- picklist
								''00000000-0000-0000-00AA-110000000031'',	-- lookup
								''00000000-0000-0000-00AA-110000000034'',	-- customer
								''00000000-0000-0000-00AA-110000000035'', -- owner
								''00000000-0000-0000-00AA-110000000036'', -- state
								''00000000-0000-0000-00AA-110000000037'', -- status
								''00000000-0000-0000-00AA-110000000013'',	-- bit (E.g. donotemail)
								''00000000-0000-0000-00AA-110000000019''	-- int (E.g. languagecode)
							)
				)
			)
')

/*------ Model foreign_keys --------------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[foreign_keys_view]

EXEC (N'	
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
			''F'',
			''FOREIGN_KEY_CONSTRAINT'',
			rv.[VersionNumber]
		FROM [dbo].[RelationshipView] rv INNER JOIN [XrmTds].[tables_view] ptb ON rv.[ReferencingEntityId] = ptb.[EntityId]
										INNER JOIN [XrmTds].[tables_view] rtb ON rv.[ReferencedEntityId] = rtb.[EntityId]
										INNER JOIN [XrmTds].[columns_view] rcl ON rv.[ReferencedAttributeId] = rcl.[AttributeId]
	WHERE rcl.[IsPKAttribute] = 1
')
	
/*------ Model foreign_key_columns -------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[foreign_key_columns_view]

-- TODO: RecordId property of RelationshipView currently cannot be used to generate object_id property of sys_foreign_key_columns
-- table because of deployment sequence issue. During creation of new org the pSqlSchemaViews gets deployed during ApplyDBUpdate
-- step. The RecordId property gets added to RelationshipView after ApplyDBUpdate step. Until the deployment sequence issue is fixed
-- object_id for sys_foreign_key_columns is generated using IDENTITY column.
EXEC (N'	
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
')

/*------ Model sys.indexes -----------------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[indexes_view]

EXEC (N'	
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
			IIF(ei.[IsClustered] = 1, ''CLUSTERED'', ''NONCLUSTERED''),
			ei.[IndexId],
			ei.[ModifiedOn]
		FROM [Metadataschema].[EntityIndex] ei INNER JOIN [XrmTds].[tables_view] tb ON ei.EntityId = tb.[EntityId]
		WHERE ei.[ComponentState] = 0 AND ei.[OverwriteTime] = 0	-- Filter out solution layers. EntityIndex does not have a view.
			AND ei.[IndexId] IN	(								-- Only return index related to columns supported by TDS.
				SELECT ia.[IndexId]
					FROM [Metadataschema].[IndexAttributes] ia INNER JOIN [XrmTds].[columns_view] cl ON ia.[AttributeId] = cl.[AttributeId]
			)
')

/*------ Model sys.indexes_columns -------------------------------------------------------------------------*/

DROP VIEW IF EXISTS [XrmTds].[index_columns_view]

EXEC (N'	
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
')

-- TODO: Add views for computed_columns, ROUTINES and default_constraints.
-- * Some of the defaults in our metadata has functions.
-- * Only rollup feature creates SQL computed column, using a dynamically generated function which is not exposed.
-- * We could expose some of the CDS SQL functions as routines E.g. fn_NextXYear().


END