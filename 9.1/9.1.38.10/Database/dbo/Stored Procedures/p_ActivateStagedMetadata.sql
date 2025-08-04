


CREATE procedure [dbo].[p_ActivateStagedMetadata]
AS
BEGIN

		--table to store list of solution aware table names
	DECLARE @solutionAwareEntities TABLE
	(
		BaseTableName SYSNAME,
		IdFieldName SYSNAME NULL
	)

	CREATE TABLE #StagedIds
	(
		ObjectId UNIQUEIDENTIFIER,
		CONSTRAINT PK_ObjectId PRIMARY KEY CLUSTERED (ObjectId)  
	)


	INSERT INTO @solutionAwareEntities 
	(BaseTableName, IdFieldName)
	SELECT t.name, a.Name FROM sys.tables t
	JOIN sys.columns c on c.object_id = t.object_id
	LEFT OUTER JOIN MetadataSchema.Entity e ON e.BaseTableName = t.name collate database_default
	LEFT OUTER JOIN MetadataSchema.Attribute a ON a.EntityId = e.EntityId AND a.IsPKAttribute=1
	WHERE c.name='ComponentState' AND t.schema_id=schema_id('MetadataSchema')

	DECLARE @tableName SYSNAME
	DECLARE @columnName SYSNAME
	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
	SELECT BaseTableName, IdFieldName FROM @solutionAwareEntities

	OPEN tableNameCursor
	FETCH NEXT
	FROM tableNameCursor into @tableName, @columnName
	WHILE @@FETCH_STATUS = 0
	BEGIN
		--set the primary key column name on metadata tables
		IF (@columnName is null)
		BEGIN
			IF (@tableName = 'RelationshipExtraCondition')
			BEGIN
				SET @columnName = 'ConditionId'
			END
			ELSE
			BEGIN
				SET @columnName = @tableName + 'Id'
			END
		END

		DELETE FROM #StagedIds
		EXEC('INSERT INTO #StagedIds SELECT ' + @columnName + ' FROM ' +  @tableName + ' WHERE ComponentState = 5')
		EXEC('UPDATE ' +  @tableName + ' SET OverwriteTime = GETUTCDATE()                     WHERE ComponentState = 0 AND ' + @columnName + ' IN (SELECT ObjectId FROM #StagedIds)')
		EXEC('UPDATE ' +  @tableName + ' SET OverwriteTime = 0           , ComponentState = 0 WHERE ComponentState = 5')

		--prepare for next iteration
		FETCH NEXT FROM tableNameCursor INTO @tableName, @columnName
	END

	--Cleanup
	DROP TABLE #StagedIds

	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor

END



