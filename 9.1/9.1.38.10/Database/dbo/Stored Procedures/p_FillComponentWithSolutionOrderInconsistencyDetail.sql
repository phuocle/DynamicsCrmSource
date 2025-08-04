CREATE   PROCEDURE [dbo].[p_FillComponentWithSolutionOrderInconsistencyDetail]
(
	@useJSON bit
)
AS
BEGIN

	DECLARE @sqlToRun nvarchar(max) = ''
	DECLARE @tableName SYSNAME
	DECLARE @columnName SYSNAME
	DECLARE @solutionId_2 varchar(150)
	DECLARE @solutionId_1 varchar(150)
	DECLARE @solutionName_1 varchar(150)
	DECLARE @solutionName_2 varchar(150)

	IF OBJECT_ID('tempdb..#JsonOutput') IS NULL
	BEGIN
		THROW 50100, 'ERROR - The temporary table #JsonOutput does not exist - Check the definition of dbo.p_RetrieveSolutionLayerInversions for schema definition', 1;
	END

	IF OBJECT_ID('tempdb..#ComponentWithSolutionOrderInconsistency') IS NULL
	BEGIN
		THROW 50100, 'ERROR - The temporary table #ComponentWithSolutionOrderInconsistency does not exist - Check the definition of dbo.p_RetrieveSolutionLayerInversions for schema definition', 1;
	END

	DECLARE inconsistenctSolutionPairCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
	SELECT BaseTable, IdColumn, SolutionId_1, SolutionName_1,  SolutionId_2, SolutionName_2 FROM #ComponentWithSolutionOrderInconsistency
		WHERE CountComponents_1x2 IS NOT NULL AND DirectInconstency = 1

	OPEN inconsistenctSolutionPairCursor
	FETCH NEXT FROM inconsistenctSolutionPairCursor into @tableName, @columnName, @solutionId_1, @solutionName_1, @solutionId_2, @solutionName_2
	WHILE @@FETCH_STATUS = 0
	BEGIN

		SET @sqlToRun = '
			SELECT ''' + @tableName + ''' as Component,
			Id,
			CASE WHEN SolutionId = ''' + @solutionId_1 + ''' THEN ''' + @solutionId_1   + ''' ELSE ''' + @solutionId_2   + ''' END as SolutionId, 
			CASE WHEN SolutionId = ''' + @solutionId_1 + ''' THEN ''' + @solutionName_1 + ''' ELSE ''' + @solutionName_2 + ''' END as SolutionName,
			''SELECT sol.UniqueName, sol.SolutionId, src.ComponentState, src.OverwriteTime, * FROM ' + @tableName + ' src (nolock) left join solutionbase sol (nolock) on src.solutionid = sol.solutionid join publisher p (nolock) on sol.publisherid = p.publisherid WHERE ' + @columnName + ' = '''''' + CAST(Id AS VARCHAR(150)) + '''''' order by CASE WHEN OverwriteTime = ''''1900-01-01 00:00:00.000'''' THEN ''''2050-06-11'''' ELSE OverwriteTime END DESC'' as DetailsQuery
			FROM 
			(
				SELECT ' + @columnName + ' as Id, SolutionId,
						LEAD(SolutionId,  1, ''00000000-0000-0000-0000-000000000000'') OVER(PARTITION BY ' + @columnName + ' ORDER BY CASE WHEN OverwriteTime  = ''1900-01-01 00:00:00.000'' THEN ''2050-01-01'' ELSE OverwriteTime  END ASC) as NextSolutionId
				FROM ' + @tableName + ' (nolock)
				WHERE SolutionId IN (''' + @solutionId_1 + ''', ''' + @solutionId_2   + ''')
			) a
			WHERE NextSolutionId <> ''00000000-0000-0000-0000-000000000000''
			ORDER BY CASE WHEN SolutionId = ''' + @solutionId_1 + ''' THEN ''' + @solutionName_1 + ''' ELSE ''' + @solutionName_2 + ''' END'

		IF (@useJSON = 1)
		BEGIN

			SET @sqlToRun = 'INSERT INTO #JsonOutput
			SELECT ''InconsistentComponentsDetail'', (' + @sqlToRun + ' FOR JSON PATH )'

		END

		--PRINT @sqlToRun -- Enable if required
		EXEC (@sqlToRun)

		FETCH NEXT FROM inconsistenctSolutionPairCursor into @tableName, @columnName, @solutionId_1, @solutionName_1, @solutionId_2, @solutionName_2
	END

END