CREATE   PROCEDURE [dbo].[p_FillSolutionDependencies]
(
	@solutionsToIgnore   varchar(8000) = NULL, -- Comma separated list 
	@publishersToIgnore	 varchar(8000) = NULL  -- Comma separated list
) 
AS
BEGIN

	IF OBJECT_ID('tempdb..#ComponentDependency') IS NULL
	BEGIN
		THROW 50100, 'ERROR - The temporary table #ComponentDependency does not exist - Check the definition of dbo.p_RetrieveSolutionLayerInversions for schema definition', 1;
	END

	IF OBJECT_ID('tempdb..#SolutionDependency') IS NULL
	BEGIN
		THROW 50100, 'ERROR - The temporary table #SolutionDependency does not exist - Check the definition of dbo.p_RetrieveSolutionLayerInversions for schema definition', 1;
	END

	DECLARE @sqlToRun nvarchar(max) = ''
	DECLARE @tableName SYSNAME
	DECLARE @columnName SYSNAME
	DECLARE @rowCount int
	DECLARE @level int = 0

	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
		SELECT BaseTable, PKAttribute FROM [dbo].[fn_GetSolutionAwareEntitiesMetadata]()

	OPEN tableNameCursor
	FETCH NEXT
	FROM tableNameCursor into @tableName, @columnName
	WHILE @@FETCH_STATUS = 0
	BEGIN

		-- Queries and calulates the level 0 dependency for each component
		SET @sqlToRun = '
		SELECT ComponentUniqueId, SolutionId, NextSolutionId, IsBase, Level
		FROM
		(
			SELECT	DISTINCT 
				ComponentUniqueId,
				SolutionId,
 				LEAD(SolutionId,  1, ''00000000-0000-0000-0000-000000000000'') OVER(PARTITION BY ComponentUniqueId ORDER BY CASE WHEN OverwriteTime  = ''1900-01-01 00:00:00.000'' THEN ''2050-06-11'' ELSE OverwriteTime  END ASC) as NextSolutionId,
				IsBase,
				0 as Level
			FROM 
			(
				SELECT ''' + @tableName + ''' + CAST(Id as VARCHAR(150)) as ComponentUniqueId, OverwriteTime, SolutionId, IsBase
				FROM
				(
					SELECT src.' + @columnName + ' as Id, src.OverwriteTime, src.ComponentState, src.SolutionId,
						   CASE WHEN ROW_NUMBER() OVER(PARTITION BY src.' + @columnName + ' ORDER BY CASE WHEN OverwriteTime = ''1900-01-01 00:00:00.000'' THEN ''2050-06-11'' ELSE OverwriteTime END ASC) = 1 THEN 1 ELSE 0 END as IsBase
					FROM ' + @tableName + ' src (nolock) 
				) i
				WHERE ComponentState = 0 '
				
		IF (LEN(@publishersToIgnore) > 0)
		BEGIN
			SET @sqlToRun = @sqlToRun + ' AND SolutionId NOT IN ( SELECT SolutionId FROM SolutionBase (nolock) WHERE PublisherId IN (''' + REPLACE(@publishersToIgnore, ',', ''',''') + ''')) '
		END

		IF (LEN(@solutionsToIgnore) > 0)
		BEGIN
			SET @sqlToRun = @sqlToRun + ' AND SolutionId NOT IN (''' + REPLACE(@solutionsToIgnore, ',', ''',''') + ''') '
		END

		SET @sqlToRun = @sqlToRun + ' ) a ) b WHERE NextSolutionId <> ''00000000-0000-0000-0000-000000000000'' AND SolutionId <> NextSolutionId '

		--PRINT @sqlToRun -- Enable if required
		INSERT INTO #ComponentDependency
		EXEC (@sqlToRun)

		FETCH NEXT FROM tableNameCursor INTO @tableName, @columnName
	END

	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor

	SET @level = 0

	-- Recurse and expand each component individually
	DO1: 

	BEGIN

		SET @level = @level + 1

		INSERT INTO #ComponentDependency
		SELECT ComponentUniqueId, ReqSolutionId, DepSolutionId, IsBase, @level
		FROM 
		(
			SELECT DISTINCT s1.ComponentUniqueId, s1.ReqSolutionId, s2.DepSolutionId, s1.IsBase as IsBase -- Propagate the parent status if the required is the base row
			FROM #ComponentDependency s1
				JOIN #ComponentDependency s2  ON s1.DepSolutionId = s2.ReqSolutionId AND s1.ComponentUniqueId = s2.ComponentUniqueId
			EXCEPT
			SELECT ComponentUniqueId, ReqSolutionId, DepSolutionId, IsBase FROM #ComponentDependency
		) e
		WHERE ReqSolutionId <> DepSolutionId

		SET @rowCount = @@rowcount

	END
	IF (@rowCount > 0) GOTO DO1;

	-- Add only the Base dependencies to the final table

	INSERT INTO #SolutionDependency
	SELECT ReqSolutionId, DepSolutionId, IsBase, min(Level) as Level
		FROM #ComponentDependency
		WHERE IsBase = 1
		GROUP BY ReqSolutionId, DepSolutionId, IsBase

	SET @level = 0

	-- Calculate cross component dependencies 
	DO: 

	BEGIN

		SET @level = @level + 1

		INSERT INTO #SolutionDependency
		SELECT ReqSolutionId, DepSolutionId, IsBase, @level
		FROM 
		(
			SELECT DISTINCT s1.ReqSolutionId, s2.DepSolutionId, CASE WHEN (s1.IsBase = 1 AND s2.IsBase = 1) THEN 1 ELSE 0 END as IsBase  -- Propagate the parent status if the required AND dependent are both base rows
			FROM #SolutionDependency s1
				JOIN #SolutionDependency s2	ON s1.DepSolutionId = s2.ReqSolutionId
			EXCEPT
			SELECT ReqSolutionId, DepSolutionId, IsBase FROM #SolutionDependency
		) e
		WHERE ReqSolutionId <> DepSolutionId

		SET @rowCount = @@rowcount

	END
	IF (@rowCount > 0) GOTO DO;

--
-- Algorithm
--
-- +-----+----------+   +-----+----------+   +-----+----------+   +-----+----------+
-- |  Component01   |   |  Component02   |   |  Component03   |   |  Component04   |
-- +-----+----------+   +-----+----------+   +-----+----------+   +-----+----------+
-- | Sol | Ovwrtime |   | Sol | Ovwrtime |   | Sol | Ovwrtime |   | Sol | Ovwrtime |
-- +-----+----------+   +-----+----------+   +-----+----------+   +-----+----------+
-- | S3  |    0     |   | S4  |    X     |   | S1  |    X     |   | S1  |    X     |
-- +-----+----------+   +-----+----------+   +-----+----------+   +-----+----------+
-- | S2  |    X     |   | S3  |  X - 1   |   | S4  |  X - 1   |   | S3  |  X - 1   |
-- +-----+----------+   +-----+----------+   +-----+----------+   +-----+----------+
-- | S1  |  X - 1   |   
-- +-----+----------+   
-- 
-- Dependencies by each individual component:
-- (When calculating all possibilities if the required is the base the IsBase flag is set to 1) 
-- 
-- +------+-----+-----+--------+-------+
-- | Comp | Req | Dep | IsBase | Level |
-- +------+-----+-----+--------+-------+
-- |  C1  | S1  | S2  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C1  | S2  | S3  |   0    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C1  | S1  | S3  |   1    |   1   |
-- +------+-----+-----+--------+-------+
-- |  C2  | S3  | S4  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C3  | S4  | S1  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C4  | S3  | S1  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- 
-- Then it ignores all dependencies that are not on the Base:
-- 
-- +------+-----+-----+--------+-------+
-- | Comp | Req | Dep | IsBase | Level |
-- +------+-----+-----+--------+-------+
-- |  C1  | S1  | S2  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C1  | S1  | S3  |   1    |   1   |
-- +------+-----+-----+--------+-------+
-- |  C2  | S3  | S4  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C3  | S4  | S1  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- |  C4  | S3  | S1  |   1    |   0   |
-- +------+-----+-----+--------+-------+
-- 
-- Then removes the component column, get a distinct list (with the lower level):
-- 
-- +-----+-----+--------+-------+
-- | Req | Dep | IsBase | Level |
-- +-----+-----+--------+-------+
-- | S1  | S2  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S1  | S3  |   1    |   1   |
-- +-----+-----+--------+-------+
-- | S3  | S4  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S4  | S1  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S3  | S1  |   1    |   0   |
-- +-----+-----+--------+-------+
-- 
-- Then calculate all possibilities 
-- (When calculating all possibilities if the IsBase is set to 1 one ony if BOTH Req and Dep are Base)
-- 
-- +-----+-----+--------+-------+
-- | Req | Dep | IsBase | Level |
-- +-----+-----+--------+-------+
-- | S1  | S2  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S1  | S3  |   1    |   1   |
-- +-----+-----+--------+-------+
-- | S3  | S4  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S4  | S1  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S3  | S1  |   1    |   0   |
-- +-----+-----+--------+-------+
-- | S1  | S4  |   1    |   0   |  <- This is a cross component dependency
-- +-----+-----+--------+-------+
-- | S4  | S2  |   1    |   0   |  <- This is a cross component dependency
-- +-----+-----+--------+-------+
-- | S4  | S3  |   1    |   0   |  <- This is a cross component dependency
-- +-----+-----+--------+-------+
-- | S3  | S2  |   1    |   0   |  <- This is a cross component dependency
-- +-----+-----+--------+-------+

END