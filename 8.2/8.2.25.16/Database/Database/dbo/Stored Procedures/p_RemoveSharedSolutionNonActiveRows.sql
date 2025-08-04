

CREATE PROCEDURE dbo.p_RemoveSharedSolutionNonActiveRows
(
	@SolutionId UNIQUEIDENTIFIER
)
AS
BEGIN
	--table to store list of solution aware table names
	DECLARE @solutionAwareEntities TABLE
	(
		BaseTableName SYSNAME,
		IdFieldName SYSNAME NULL
	)

	CREATE TABLE #RemovedComponents
	(
		ComponentId UNIQUEIDENTIFIER,
		CONSTRAINT PK_ComponentId PRIMARY KEY CLUSTERED (ComponentId)  
	)

	DECLARE @publisherId UNIQUEIDENTIFIER
	SELECT @publisherId = PublisherId FROM SolutionBase WHERE SolutionId = @SolutionId

	-- Collect the solution aware table names
	-- remove merge based components/components having special logic as we do not know the impact of deleting from the DB directly.
	-- To-Do: make merge-enabled a part of entity metadata and use it in filtering instead of hard coding
	INSERT INTO @solutionAwareEntities 
	(BaseTableName, IdFieldName)
	SELECT t.Name, a.TableColumnName FROM sys.tables t
	JOIN sys.columns c on c.object_id = t.object_id
	LEFT OUTER JOIN MetadataSchema.Entity e ON e.BaseTableName = t.name
	LEFT OUTER JOIN MetadataSchema.Attribute a ON a.EntityId = e.EntityId AND a.IsPKAttribute=1
	WHERE c.name='SolutionId' AND ((e.IsSolutionAware = 1 AND e.BaseTableName NOT LIKE 'Ribbon%' 
	AND e.BaseTableName NOT IN ('SiteMapBase', 'SystemFormBase', 'WorkflowBase', 'AppModuleBase', 'AppModuleRolesBase','ReportBase')) OR t.schema_id=schema_id('MetadataSchema'))

	DECLARE @tableName SYSNAME
	DECLARE @columnName SYSNAME
	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
	SELECT BaseTableName, IdFieldName FROM @solutionAwareEntities

	-- Go through each solution aware component and cleanup the component records that we can safely delete
	-- The following is a sample SQL that we use for Entity, the same is used in the cursor and is parameterized


	---- collect the rows where the solution being deleted is the base solution and there is another 
	---- shared publisher solution row.
	--INSERT INTO #RemovedComponents(ComponentId) SELECT EntityId FROM MetadataSchema.Entity ent 
	--JOIN DependencyNodeBase dnb ON ent.EntityId = dnb.ObjectId AND ent.SolutionId=dnb.BaseSolutionId 
	--WHERE ent.OverwriteTime !=0 AND dnb.BaseSolutionId = @SolutionId AND dnb.TopSolutionId!=@SolutionId
	--AND dnb.IsSharedComponent=1

	---- Collect the rows it belongs to the solution being deleted and is an intermediate row, they will not cause any update, can be deleted directly
	--INSERT INTO #RemovedComponents(ComponentId) select EntityId from MetadataSchema.Entity ent join DependencyNodeBase dnb on ent.EntityId = dnb.ObjectId 
	--WHERE ent.SolutionId=@SolutionId and ent.OverwriteTime !=0 and ent.ComponentState=0 and dnb.BaseSolutionId != @SolutionId and 
	--dnb.TopSolutionId!=@SolutionId

	---- Update the depdendencynodebase to reflect the new base solution. We set the IsSharedComponent to 0, it will be updated to 1
	---- as part of the next statement if the component is still shared
	--;WITH cte AS
	--(
	--SELECT dnb.BaseSolutionId, ent.SolutionId, dnb.IsSharedComponent, dnb.ObjectId, sb.PublisherId, ROW_NUMBER()  OVER (PARTITION BY ent.EntityId order by OverwriteTime asc) as RowNumber
	--FROM DependencyNodeBase dnb JOIN MetadataSchema.Entity ent on dnb.ObjectId = ent.EntityId 
	--JOIN #RemovedComponents rc ON rc.ComponentId = ent.EntityId
	--JOIN SolutionBase sb ON ent.SolutionId = ent.SolutionId
	--WHERE ent.SolutionId != dnb.TopSolutionId and ent.SolutionId != @SolutionId
	--)
	--UPDATE cte SET BaseSolutionId = SolutionId, IsSharedComponent=0 WHERE RowNumber=1 and PublisherId = @publisherId

	----Remove the componets where the next row is not from the same publisher, these can be complicated, we will let the code handle them
	----We excluded updating their base solution above, if some component in #RemovedComponents still has the old base solution, we need to 
	----Remove it from the collection
	--DELETE FROM #RemovedComponents where ComponentId in (SELECT ObjectId FROM DependencyNodeBase WHERE BaseSolutionId = @SolutionId)

	---- delete the rows we just collected
	--DELETE FROM MetadataSchema.Entity WHERE EntityId IN (SELECT componentid FROM #RemovedComponents) AND SolutionId = @SolutionId

	---- Update the IsSharedComponent to 1 for the components that are still shared.
	--UPDATE dnb set dnb.IsSharedComponent = 1 
	--FROM DependencyNodeBase dnb JOIN MetadataSchema.Entity ent on dnb.ObjectId = ent.EntityId and dnb.BaseSolutionId != ent.SolutionId
	--JOIN #RemovedComponents rc on rc.ComponentId = ent.EntityId JOIN SolutionBase entitySol ON entitySol.SolutionId=ent.SolutionId JOIN
	--SolutionBase baseSol on baseSol.SolutionId = dnb.BaseSolutionId
	-- WHERE baseSol.PublisherId = entitySol.PublisherId

	-- -- We ignored the top solution rows above, if the dependencynode row still has the same basesolution, it means that there is only one row for that
	-- -- component, we need to set BaseSOlutionId same as TopSolutionId and mark it as IsSharedComponent = 0
	-- UPDATE dnb set dnb.BaseSolutionId = dnb.TopSolutionId, dnb.IsSharedComponent=0 
	-- FROM DependencyNodeBase dnb JOIN #RemovedComponents rc ON dnb.ObjectId = rc.ComponentId WHERE BaseSolutionId = @SolutionId 


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

		-- collect the rows where the solution being deleted is the base solution and there is another 
		-- shared publisher solution row.
		EXEC('INSERT INTO #RemovedComponents(ComponentId) SELECT [' + @columnName + '] FROM [' + @tableName + '] tbl 
		JOIN DependencyNodeBase dnb ON tbl.[' + @columnName + '] = dnb.ObjectId AND tbl.SolutionId=dnb.BaseSolutionId 
		WHERE tbl.OverwriteTime !=0 AND dnb.BaseSolutionId = ''' + @SolutionId + '''AND dnb.TopSolutionId != ''' + @SolutionId + '''
		AND dnb.IsSharedComponent=1')

		-- Collect the rows it belongs to the solution being deleted and is an intermediate row, they will not cause any update, can be deleted directly. 
		EXEC('INSERT INTO #RemovedComponents(ComponentId) SELECT [' + @columnName + '] FROM [' + @tableName + '] tbl JOIN DependencyNodeBase dnb ON tbl.[' + @columnName + '] = dnb.ObjectId 
		WHERE tbl.SolutionId=''' + @SolutionId +''' AND tbl.OverwriteTime !=0 AND tbl.ComponentState=0 AND dnb.BaseSolutionId != ''' + @SolutionId +''' AND 
		dnb.TopSolutionId!=''' + @SolutionId +'''')

		-- Update the depdendencynodebase to reflect the new base solution. We set the IsSharedComponent to 0, it will be updated to 1
		-- as part of the next statement if the component is still shared
		EXEC(';WITH cte AS
		(
		SELECT dnb.BaseSolutionId, tbl.SolutionId, dnb.IsSharedComponent, dnb.ObjectId, sb.PublisherId, ROW_NUMBER()  OVER (PARTITION BY tbl.' + @columnName + ' order by OverwriteTime asc) as RowNumber
		FROM DependencyNodeBase dnb JOIN [' + @tableName + '] tbl on dnb.ObjectId = tbl.[' + @columnName + '] 
		JOIN #RemovedComponents rc ON rc.ComponentId = tbl.[' + @columnName + ']
		JOIN SolutionBase sb on sb.SolutionId = tbl.SolutionId
		WHERE tbl.SolutionId != dnb.TopSolutionId and tbl.SolutionId != ''' + @SolutionId + '''
		)
		UPDATE cte SET BaseSolutionId = SolutionId, IsSharedComponent=0 WHERE RowNumber=1 and PublisherId = ''' + @publisherId + '''')

		--Remove the componets where the next row is not from the same publisher, these can be complicated, we will let the code handle them
		--We excluded updating their base solution above, if some component in #RemovedComponents still has the old base solution, we need to 
		--Remove it from the collection
		EXEC('DELETE FROM #RemovedComponents where ComponentId in (SELECT ObjectId FROM DependencyNodeBase WHERE BaseSolutionId = ''' + @SolutionId + ''')')

		-- delete the rows we just collected
		EXEC('DELETE FROM [' + @tableName + ']  WHERE [' + @columnName + '] IN (SELECT componentid FROM #RemovedComponents) AND SolutionId = ''' + @SolutionId +'''')

		-- Update the IsSharedComponent to 1 for the components that are still shared.
		EXEC('UPDATE dnb set dnb.IsSharedComponent = 1 
		FROM DependencyNodeBase dnb JOIN [' + @tableName + '] tbl on dnb.ObjectId = tbl.[' + @columnName + '] and dnb.BaseSolutionId != tbl.SolutionId
		JOIN #RemovedComponents rc on rc.ComponentId = tbl.[' + @columnName + '] JOIN SolutionBase entitySol ON entitySol.SolutionId=tbl.SolutionId JOIN
		SolutionBase baseSol on baseSol.SolutionId = dnb.BaseSolutionId
		WHERE baseSol.PublisherId = entitySol.PublisherId')

		-- We ignored the top solution rows above, if the dependencynode row still has the same basesolution, it means that there is only one row for that
		-- component, we need to set BaseSOlutionId same as TopSolutionId and mark it as IsSharedComponent = 0
		EXEC('UPDATE dnb set dnb.BaseSolutionId = dnb.TopSolutionId, dnb.IsSharedComponent=0 
		FROM DependencyNodeBase dnb JOIN #RemovedComponents rc ON dnb.ObjectId = rc.ComponentId WHERE dnb.BaseSolutionId = ''' + @SolutionId +'''')

		 -- For processing next table
		TRUNCATE TABLE #RemovedComponents

		--prepare for next iteration
		FETCH NEXT FROM tableNameCursor INTO @tableName, @columnName
	END

	--Cleanup
	DROP TABLE #RemovedComponents

	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor
END