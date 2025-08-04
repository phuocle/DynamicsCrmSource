

CREATE PROCEDURE dbo.p_RemoveSharedSolutionNonActiveRows
(
	@SolutionId UNIQUEIDENTIFIER
)
AS
BEGIN
	
	--table to store list of solution aware table names
	CREATE TABLE #solutionAwareEntities
	(
		BaseTableName SYSNAME,
		IdFieldName SYSNAME NULL,
		SolutionComponentType INT NULL
	)

	CREATE TABLE #RemovedComponents
	(
		ComponentId UNIQUEIDENTIFIER,
		CONSTRAINT PK_ComponentId PRIMARY KEY CLUSTERED (ComponentId)  
	)

	DECLARE @publisherId UNIQUEIDENTIFIER
	SELECT @publisherId = PublisherId FROM SolutionBase WHERE SolutionId = @SolutionId
	
	-- Collect the solution aware table names which are not merge enabled components
	INSERT INTO #solutionAwareEntities 
	(BaseTableName, IdFieldName, SolutionComponentType)
	Select BaseTable, PKAttribute, SolutionComponentType from [fn_GetSolutionAwareEntitiesMetadata]() as e
	where (e.IsMergeEnabledSolutionComponent = 0 or e.IsMergeEnabledSolutionComponent IS NULL) and solutionComponentType IS NOT NULL

	DECLARE @tableName SYSNAME
	DECLARE @columnName SYSNAME
	DECLARE @solutionComponentType INT
	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
	SELECT BaseTableName, IdFieldName, SolutionComponentType FROM #solutionAwareEntities

	-- Go through each solution aware component and cleanup the component records that we can safely delete
	-- The following is a sample SQL that we use for Entity, the same is used in the cursor and is parameterized


	---- collect the rows where the solution being deleted is the base solution and there is another 
	---- shared publisher solution row.
	--INSERT INTO #RemovedComponents(ComponentId) SELECT EntityId FROM MetadataSchema.Entity ent 
	--JOIN DependencyNodeBase dnb ON ent.EntityId = dnb.ObjectId AND dnb.ComponentType = 1 AND ent.SolutionId=dnb.BaseSolutionId 
	--WHERE ent.OverwriteTime !=0 AND dnb.BaseSolutionId = @SolutionId AND dnb.TopSolutionId!=@SolutionId
	--AND dnb.IsSharedComponent=1

	---- Collect the rows it belongs to the solution being deleted and is an intermediate row, they will not cause any update, can be deleted directly
	--INSERT INTO #RemovedComponents(ComponentId) select EntityId from MetadataSchema.Entity ent join DependencyNodeBase dnb on ent.EntityId = dnb.ObjectId AND dnb.ComponentType = 1
	--WHERE ent.SolutionId=@SolutionId and ent.OverwriteTime !=0 and ent.ComponentState=0 and dnb.BaseSolutionId != @SolutionId and 
	--dnb.TopSolutionId!=@SolutionId

	---- Update the depdendencynodebase to reflect the new base solution. We set the IsSharedComponent to 0, it will be updated to 1
	---- as part of the next statement if the component is still shared
	--;WITH cte AS
	--(
	--SELECT dnb.BaseSolutionId, ent.SolutionId, dnb.IsSharedComponent, dnb.ObjectId, sb.PublisherId, ROW_NUMBER()  OVER (PARTITION BY ent.EntityId order by OverwriteTime asc) as RowNumber
	--FROM DependencyNodeBase dnb JOIN MetadataSchema.Entity ent on dnb.ObjectId = ent.EntityId AND dnb.ComponentType = 1
	--JOIN #RemovedComponents rc ON rc.ComponentId = ent.EntityId
	--JOIN SolutionBase sb ON ent.SolutionId = ent.SolutionId
	--WHERE ent.SolutionId != dnb.TopSolutionId and ent.SolutionId != @SolutionId
	--)
	--UPDATE cte SET BaseSolutionId = SolutionId, IsSharedComponent=0 WHERE RowNumber=1 and PublisherId = @publisherId

	----Remove the componets where the next row is not from the same publisher, these can be complicated, we will let the code handle them
	----We excluded updating their base solution above, if some component in #RemovedComponents still has the old base solution, we need to 
	----Remove it from the collection
	--DELETE FROM #RemovedComponents where ComponentId in (SELECT ObjectId FROM DependencyNodeBase WHERE BaseSolutionId = @SolutionId AND dnb.ComponentType = 1)

	---- delete the rows we just collected
	--DELETE FROM MetadataSchema.Entity WHERE EntityId IN (SELECT componentid FROM #RemovedComponents) AND SolutionId = @SolutionId

	---- Update the IsSharedComponent to 1 for the components that are still shared.
	--UPDATE dnb set dnb.IsSharedComponent = 1 
	--FROM DependencyNodeBase dnb JOIN MetadataSchema.Entity ent on dnb.ObjectId = ent.EntityId and dnb.BaseSolutionId != ent.SolutionId
	--JOIN #RemovedComponents rc on rc.ComponentId = ent.EntityId JOIN SolutionBase entitySol ON entitySol.SolutionId=ent.SolutionId JOIN
	--SolutionBase baseSol on baseSol.SolutionId = dnb.BaseSolutionId
	-- WHERE baseSol.PublisherId = entitySol.PublisherId AND dnb.ComponentType = 1

	-- -- We ignored the top solution rows above, if the dependencynode row still has the same basesolution, it means that there is only one row for that
	-- -- component, we need to set BaseSOlutionId same as TopSolutionId and mark it as IsSharedComponent = 0
	-- UPDATE dnb set dnb.BaseSolutionId = dnb.TopSolutionId, dnb.IsSharedComponent=0 
	-- FROM DependencyNodeBase dnb JOIN #RemovedComponents rc ON dnb.ObjectId = rc.ComponentId WHERE BaseSolutionId = @SolutionId AND dnb.ComponentType = 1


	OPEN tableNameCursor
	FETCH NEXT
	FROM tableNameCursor into @tableName, @columnName, @solutionComponentType
	WHILE @@FETCH_STATUS = 0
	BEGIN
		
		-- collect the rows where the solution being deleted is the base solution and there is another 
		-- shared publisher solution row.
		EXEC('INSERT INTO #RemovedComponents(ComponentId) SELECT [' + @columnName + '] FROM [' + @tableName + '] tbl 
		JOIN DependencyNodeBase dnb ON tbl.[' + @columnName + '] = dnb.ObjectId AND dnb.ComponentType = ' + @solutionComponentType + ' AND tbl.SolutionId=dnb.BaseSolutionId 
		WHERE tbl.OverwriteTime !=0 AND dnb.BaseSolutionId = ''' + @SolutionId + '''AND dnb.TopSolutionId != ''' + @SolutionId + '''
		AND dnb.IsSharedComponent=1')

		-- Collect the rows it belongs to the solution being deleted and is an intermediate row, they will not cause any update, can be deleted directly
		EXEC('INSERT INTO #RemovedComponents(ComponentId) SELECT [' + @columnName + '] FROM [' + @tableName + '] tbl JOIN DependencyNodeBase dnb ON tbl.[' + @columnName + '] = dnb.ObjectId AND dnb.ComponentType = ' + @solutionComponentType + '
		WHERE tbl.SolutionId=''' + @SolutionId +''' AND tbl.OverwriteTime !=0 AND tbl.ComponentState=0 AND dnb.BaseSolutionId != ''' + @SolutionId +''' AND 
		dnb.TopSolutionId!=''' + @SolutionId +'''')


				-- Update the depdendencynodebase to reflect the new base solution. We set the IsSharedComponent to 0, it will be updated to 1
		-- as part of the next statement if the component is still shared
		EXEC(';WITH cte AS
		(
		SELECT dnb.BaseSolutionId, tbl.SolutionId, dnb.IsSharedComponent, dnb.ObjectId, sb.PublisherId, ROW_NUMBER()  OVER (PARTITION BY tbl.' + @columnName + ' order by OverwriteTime asc) as RowNumber
		FROM DependencyNodeBase dnb JOIN [' + @tableName + '] tbl on dnb.ObjectId = tbl.[' + @columnName + ']  AND dnb.ComponentType = ' + @solutionComponentType + '
		JOIN #RemovedComponents rc ON rc.ComponentId = tbl.[' + @columnName + ']
		JOIN SolutionBase sb on sb.SolutionId = tbl.SolutionId
		WHERE tbl.SolutionId != dnb.TopSolutionId and tbl.SolutionId != ''' + @SolutionId + '''
		)
		UPDATE cte SET BaseSolutionId = SolutionId, IsSharedComponent=0 WHERE RowNumber=1 and PublisherId = ''' + @publisherId + '''')

		--Remove the componets where the next row is not from the same publisher, these can be complicated, we will let the code handle them
		--We excluded updating their base solution above, if some component in #RemovedComponents still has the old base solution, we need to 
		--Remove it from the collection
		EXEC('DELETE FROM #RemovedComponents where ComponentId in (SELECT ObjectId FROM DependencyNodeBase WHERE BaseSolutionId = ''' + @SolutionId + ''' AND ComponentType = ' + @solutionComponentType + ')')
		
		-- delete the rows we just collected
		EXEC('DELETE FROM [' + @tableName + ']  WHERE [' + @columnName + '] IN (SELECT ComponentId FROM #RemovedComponents) AND SolutionId = ''' + @SolutionId +'''')

		-- Update the IsSharedComponent to 1 for the components that are still shared.
		EXEC('UPDATE dnb set dnb.IsSharedComponent = 1 
		FROM DependencyNodeBase dnb JOIN [' + @tableName + '] tbl on dnb.ObjectId = tbl.[' + @columnName + '] and dnb.BaseSolutionId != tbl.SolutionId
		JOIN #RemovedComponents rc on rc.ComponentId = tbl.[' + @columnName + '] 
		JOIN SolutionBase entitySol ON entitySol.SolutionId=tbl.SolutionId JOIN
		SolutionBase baseSol on baseSol.SolutionId = dnb.BaseSolutionId
		WHERE baseSol.PublisherId = entitySol.PublisherId and dnb.ComponentType = ' +  @solutionComponentType)
 
		-- We ignored the top solution rows above, if the dependencynode row still has the same basesolution, it means that there is only one row for that
		-- component, we need to set BaseSOlutionId same as TopSolutionId and mark it as IsSharedComponent = 0
		EXEC('UPDATE dnb set dnb.BaseSolutionId = dnb.TopSolutionId, dnb.IsSharedComponent=0 
		FROM DependencyNodeBase dnb JOIN #RemovedComponents rc ON dnb.ObjectId = rc.ComponentId
		WHERE dnb.BaseSolutionId = ''' + @SolutionId +''' and dnb.ComponentType = ' + @solutionComponentType)

		 -- For processing next table
		TRUNCATE TABLE #RemovedComponents

		--prepare for next iteration
		FETCH NEXT FROM tableNameCursor INTO @tableName, @columnName, @solutionComponentType
	END

	--Cleanup
	DROP TABLE #RemovedComponents
	DROP TABLE #solutionAwareEntities

	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor
END
