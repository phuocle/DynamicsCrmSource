CREATE   PROCEDURE [dbo].[p_FillComponentWithSolutionOrderInconsistency]
AS
BEGIN

	DECLARE @sqlToRun nvarchar(max) = ''
	DECLARE @tableName SYSNAME
	DECLARE @columnName SYSNAME
	DECLARE @nodeId_1 varchar(150)
	DECLARE @nodeId_2 varchar(150)
	DECLARE @solutionId_2 varchar(150)
	DECLARE @solutionId_1 varchar(150)
	DECLARE @distance int
	DECLARE @rowCount int;

	IF OBJECT_ID('tempdb..#SolutionInconsistency') IS NULL
	BEGIN
		THROW 50100, 'ERROR - The temporary table #SolutionInconsistency does not exist - Check the definition of dbo.p_RetrieveSolutionLayerInversions for schema definition', 1;
	END

	IF OBJECT_ID('tempdb..#ComponentWithSolutionOrderInconsistency') IS NULL
	BEGIN
		THROW 50100, 'ERROR - The temporary table #ComponentWithSolutionOrderInconsistency does not exist - Check the definition of dbo.p_RetrieveSolutionLayerInversions for schema definition', 1;
	END

	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
		SELECT BaseTable, PKAttribute FROM [dbo].[fn_GetSolutionAwareEntitiesMetadata]()

	OPEN tableNameCursor
	FETCH NEXT FROM tableNameCursor into @tableName, @columnName

	WHILE @@FETCH_STATUS = 0
	BEGIN

		DECLARE inconsistenctSolutionPairCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
			SELECT DISTINCT 
					CASE WHEN (SolutionId_1 < SolutionId_2) THEN SolutionId_1 ELSE SolutionId_2 END as SolutionId_1,
					CASE WHEN (SolutionId_1 < SolutionId_2) THEN SolutionId_2 ELSE SolutionId_1 END as SolutionId_2, 
					Distance 
			FROM #SolutionInconsistency 

		OPEN inconsistenctSolutionPairCursor
		FETCH NEXT FROM inconsistenctSolutionPairCursor into @nodeId_1, @nodeId_2, @distance
		
			WHILE @@FETCH_STATUS = 0
			BEGIN

				SET @sqlToRun = '
				INSERT INTO #ComponentWithSolutionOrderInconsistency
				SELECT ''' + @tableName + ''', ''' + @columnName + ''', ' + CAST(@distance as VARCHAR(3)) + ', ''' + @nodeId_1 + ''', s1.UniqueName, ''' + @nodeId_2 + ''', s2.UniqueName, CountComponents_1x2, CountComponents_2x1, DirectInconstency
				FROM
				(
					SELECT
							SUM(CASE WHEN SolutionId = ''' + @nodeId_1 + ''' THEN 1 ELSE 0 END) as CountComponents_1x2, 
							SUM(CASE WHEN SolutionId = ''' + @nodeId_2 + ''' THEN 1 ELSE 0 END) as CountComponents_2x1,
							CASE WHEN (SUM(CASE WHEN SolutionId = ''' + @nodeId_1 + ''' THEN 1 ELSE 0 END) = 0 OR SUM(CASE WHEN SolutionId = ''' + @nodeId_2 + ''' THEN 1 ELSE 0 END) = 0) THEN 0 ELSE 1 END as DirectInconstency
					FROM 
					(
						SELECT ' + @columnName + ', SolutionId,
								LEAD(SolutionId,  1, ''00000000-0000-0000-0000-000000000000'') OVER(PARTITION BY ' + @columnName + ' ORDER BY CASE WHEN OverwriteTime  = ''1900-01-01 00:00:00.000'' THEN ''2050-01-01'' ELSE OverwriteTime  END ASC) as NextSolutionId
						FROM ' + @tableName + ' (nolock)
						WHERE SolutionId IN (''' + @nodeId_1 + ''',''' + @nodeId_2 + ''')
					) a
					WHERE NextSolutionId <> ''00000000-0000-0000-0000-000000000000''
				) b
				LEFT JOIN SolutionBase (nolock) s1 ON s1.SolutionId = ''' + @nodeId_1 + '''
				LEFT JOIN SolutionBase (nolock) s2 ON s2.SolutionId = ''' + @nodeId_2 + ''''

				--PRINT @sqlToRun
				EXEC (@sqlToRun)

				FETCH NEXT FROM inconsistenctSolutionPairCursor into @nodeId_1, @nodeId_2, @distance
			END

			CLOSE inconsistenctSolutionPairCursor
			DEALLOCATE inconsistenctSolutionPairCursor

		FETCH NEXT FROM tableNameCursor INTO @tableName, @columnName
	END

	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor

END