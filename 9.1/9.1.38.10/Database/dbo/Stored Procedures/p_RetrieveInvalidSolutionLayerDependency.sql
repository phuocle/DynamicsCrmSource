CREATE   PROCEDURE [dbo].[p_RetrieveInvalidSolutionLayerDependency]
(
	-- #1 Controls which dependencies we'll consider
	@ignoreSystemSolutions bit = 1, -- Ignores 'MicrosoftCorporation' publisher
	@ignoreActiveSolution  bit = 1, -- Ignores the 'FD140AAE-4DF4-11DD-BD17-0019B9312238' solution
	@ignoreAdditionalSolutions  varchar(8000) = NULL, -- Comma separated list
	@ignoreAdditionalPublishers varchar(8000) = NULL, -- Comma separated list
	@useJSON bit = 1, -- Outputs results in JSON
	-- End of #1

	-- #2 Controls the output
	@showOnlyLevel0 bit = 1, -- Shows inconsistencies that happened in the level 0
	@showComponentSummary bit = 0, -- Get a summary of affected components
	@showDetailedDirectComponent bit = 0 -- Get IDs of components with direct inversion
	-- End of #2
)
AS
BEGIN

	SET NOCOUNT ON

	-- Cleanup the temp tables
	-- Temp tables have to be used because SQL Server does not allow nested INSERT/SELECT statements

	IF OBJECT_ID('tempdb..#ComponentDependency') IS NOT NULL
			DROP TABLE #ComponentDependency

	IF OBJECT_ID('tempdb..#SolutionDependency') IS NOT NULL
			DROP TABLE #SolutionDependency

	IF OBJECT_ID('tempdb..#SolutionInconsistency') IS NOT NULL
			DROP TABLE #SolutionInconsistency

	IF OBJECT_ID('tempdb..#ComponentWithSolutionOrderInconsistency') IS NOT NULL
			DROP TABLE #ComponentWithSolutionOrderInconsistency

	IF OBJECT_ID('tempdb..#JsonOutput') IS NOT NULL
			DROP TABLE #JsonOutput

	-- Recreate the temp tables

	CREATE TABLE #ComponentDependency 
	(
		ComponentUniqueId varchar(150),
		ReqSolutionId UniqueIdentifier,
		DepSolutionId UniqueIdentifier,
		IsBase bit,
		Level int
	)

	CREATE NONCLUSTERED INDEX [ndx_ComponentDependency_IdReqDep]
	ON [#ComponentDependency] ([ComponentUniqueId],[ReqSolutionId])
	INCLUDE ([DepSolutionId])

	CREATE TABLE #SolutionDependency 
	(
		ReqSolutionId UniqueIdentifier,
		DepSolutionId UniqueIdentifier,
		IsBase bit,
		Level int
	)

	CREATE TABLE #SolutionInconsistency 
	(
		SolutionId_1 UniqueIdentifier,
		SolutionId_2 UniqueIdentifier,
		Distance int
	)

	CREATE TABLE #ComponentWithSolutionOrderInconsistency 
	(
		BaseTable varchar(150),
		IdColumn  varchar(150),
		Distance int,
		SolutionId_1 UniqueIdentifier,
		SolutionName_1 varchar(150),
		SolutionId_2 UniqueIdentifier,
		SolutionName_2 varchar(150),
		CountComponents_1x2 int,
		CountComponents_2x1 int,
		DirectInconstency bit
	)

	CREATE TABLE #JsonOutput 
	(
		Kind varchar(150),
		JsonContent varchar(max)
	)

	DECLARE @solutionsToIgnore varchar(8000) = null
	DECLARE @publishersToIgnore varchar(8000) = null

	IF (@ignoreActiveSolution = 1)
	BEGIN
		SET @solutionsToIgnore = 'FD140AAE-4DF4-11DD-BD17-0019B9312238'
	END

	IF (LEN(@ignoreAdditionalSolutions) > 0)
	BEGIN
		IF (LEN(@solutionsToIgnore) > 0)
		BEGIN
			SET @solutionsToIgnore = @solutionsToIgnore + ',' + @ignoreAdditionalSolutions
		END
		ELSE
		BEGIN
			SET @solutionsToIgnore = @ignoreAdditionalSolutions
		END
	END

	IF (@ignoreSystemSolutions = 1)
	BEGIN
		SET @publishersToIgnore = 'D21AAB70-79E7-11DD-8874-00188B01E34F' -- MicrosoftCorporation
	END

	IF (LEN(@ignoreAdditionalPublishers) > 0)
	BEGIN
		IF (LEN(@publishersToIgnore) > 0)
		BEGIN
			SET @publishersToIgnore = @publishersToIgnore + ',' + @ignoreAdditionalPublishers
		END
		ELSE
		BEGIN
			SET @publishersToIgnore = @ignoreAdditionalPublishers
		END
	END

	-- This proc builds the dependency graph walking the dependencies
	EXEC p_FillSolutionDependencies @solutionsToIgnore, @publishersToIgnore

	-- Refer to the bottom for documentation: #1 Algorith: Find Cyclic Dependencies
	IF (@showOnlyLevel0 = 1)
	BEGIN

		-- If we're limiting to Level 0 we keep the relative position of teh solutions the same as the Level 0 dependency
		INSERT INTO #SolutionInconsistency
		SELECT error.SolutionId_1, error.SolutionId_2, Distance
		FROM 
			(
				SELECT DISTINCT
					CASE WHEN (s1.Level = 0) THEN s1.ReqSolutionId 
						ELSE CASE WHEN (s2.Level = 0) THEN s2.ReqSolutionId 
							ELSE CASE WHEN (s1.ReqSolutionId < s1.DepSolutionId) THEN s1.ReqSolutionId ELSE s1.DepSolutionId END END END as SolutionId_1,
					CASE WHEN (s1.Level = 0) THEN s1.DepSolutionId 
						ELSE CASE WHEN (s2.Level = 0) THEN s2.DepSolutionId 
							ELSE CASE WHEN (s1.ReqSolutionId < s1.DepSolutionId) THEN s1.DepSolutionId ELSE s1.ReqSolutionId END END END as SolutionId_2,
					s1.Level + s2.Level as Distance
				FROM #SolutionDependency s1
						JOIN #SolutionDependency s2	ON s1.DepSolutionId = s2.ReqSolutionId
				WHERE s1.ReqSolutionId = s2.DepSolutionId
			) error
			JOIN #SolutionDependency d ON SolutionId_1 = d.ReqSolutionId AND SolutionId_2 = d.DepSolutionId
			JOIN SolutionBase sb1 ON SolutionId_1 = sb1.SolutionId
			JOIN SolutionBase sb2 ON SolutionId_2 = sb2.SolutionId
		WHERE d.Level = 0 AND sb1.PublisherId <> sb2.PublisherId

	END 
	ELSE
	BEGIN

		-- If not, put the 'smaller' first to get a distinct list
		INSERT INTO #SolutionInconsistency
		SELECT error.SolutionId_1, error.SolutionId_2, Distance
		FROM 
			(
				SELECT DISTINCT
					CASE WHEN (s1.ReqSolutionId < s1.DepSolutionId) THEN s1.ReqSolutionId ELSE s1.DepSolutionId END as SolutionId_1,
					CASE WHEN (s1.ReqSolutionId < s1.DepSolutionId) THEN s1.DepSolutionId ELSE s1.ReqSolutionId END as SolutionId_2,
					s1.Level + s2.Level as Distance
				FROM #SolutionDependency s1
					JOIN #SolutionDependency s2	ON s1.DepSolutionId = s2.ReqSolutionId
				WHERE s1.ReqSolutionId = s2.DepSolutionId 
			) error
			JOIN SolutionBase sb1 ON SolutionId_1 = sb1.SolutionId
			JOIN SolutionBase sb2 ON SolutionId_2 = sb2.SolutionId
			WHERE sb1.PublisherId <> sb2.PublisherId

	END

	-- First output - Solutions that have cyclic depedencies due to layering
	IF (@useJSON = 1)
	BEGIN

		INSERT INTO #JsonOutput
		SELECT 'Inconsistency', (
		SELECT s1.UniqueName as SolutionName_1, s2.UniqueName as SolutionName_2, Distance, SolutionId_1, SolutionId_2
		FROM #SolutionInconsistency
				LEFT JOIN SolutionBase s1 ON SolutionId_1 = s1.SolutionId
				LEFT JOIN SolutionBase s2 ON SolutionId_2 = s2.SolutionId
		ORDER BY Distance, s1.UniqueName, s2.UniqueName 
		FOR JSON PATH )

	END
	ELSE
	BEGIN

		SELECT s1.UniqueName as SolutionName_1, s2.UniqueName as SolutionName_2, Distance, SolutionId_1, SolutionId_2
		FROM #SolutionInconsistency
				LEFT JOIN SolutionBase s1 ON SolutionId_1 = s1.SolutionId
				LEFT JOIN SolutionBase s2 ON SolutionId_2 = s2.SolutionId
		ORDER BY Distance, s1.UniqueName, s2.UniqueName 

	END

	-- Get details of the components that are invoved in the cross dependency
	IF ((@showComponentSummary = 1) AND EXISTS(SELECT TOP 1 * FROM #SolutionInconsistency))
	BEGIN

		EXEC p_FillComponentWithSolutionOrderInconsistency 

		IF (@useJSON = 1)
		BEGIN

			INSERT INTO #JsonOutput
			SELECT 'InconsistentComponentsSummary', (
				SELECT SolutionName_1, SolutionName_2, Distance, BaseTable, CountComponents_1x2, CountComponents_2x1, DirectInconstency, SolutionId_1, SolutionId_2
				FROM #ComponentWithSolutionOrderInconsistency
				WHERE CountComponents_1x2 IS NOT NULL 
				ORDER BY Distance, SolutionName_1, SolutionName_2
			FOR JSON PATH )

		END
		ELSE
		BEGIN

			SELECT SolutionName_1, SolutionName_2, Distance, BaseTable, CountComponents_1x2, CountComponents_2x1, DirectInconstency, SolutionId_1, SolutionId_2
			FROM #ComponentWithSolutionOrderInconsistency
			WHERE CountComponents_1x2 IS NOT NULL 
			ORDER BY Distance, SolutionName_1, SolutionName_2

		END

		-- If there are Direct inversions get the actual components involved in the inversion
		-- Refer to the bottom for documentation: #2 Direct x Indirect Cyclic Dependencies
		IF (@showDetailedDirectComponent = 1 AND  EXISTS(SELECT TOP 1 * FROM #ComponentWithSolutionOrderInconsistency))
		BEGIN

			EXEC p_FillComponentWithSolutionOrderInconsistencyDetail @useJSON

		END

	END

	IF (@useJSON = 1)
	BEGIN
		SELECT * FROM #JsonOutput
	END

	DROP TABLE #ComponentDependency
	DROP TABLE #SolutionDependency
	DROP TABLE #SolutionInconsistency
	DROP TABLE #ComponentWithSolutionOrderInconsistency
	DROP TABLE #JsonOutput

-- #1 Algorith: Find Cyclic Dependencies

-- Then do a self join on Dep = Req
-- If Req1 = Dep2, then it's a cyclic dependency
--
-- +------+------+------+------+------+
-- | Req1 | Dep1 | Req2 | Dep2 | Dist |
-- +------+------+------+------+------+
-- |  S1  |  S3  |  S3  |  S4  |  1   |
-- +------+------+------+------+------+
-- |  S1  |  S3  |  S3  |  S1  |  1   | <- Cyclic dependency
-- +------+------+------+------+------+
-- |  S1  |  S3  |  S3  |  S2  |  2   |
-- +------+------+------+------+------+
-- |  S3  |  S4  |  S4  |  S1  |  0   |
-- +------+------+------+------+------+
-- |  S3  |  S4  |  S4  |  S2  |  1   |
-- +------+------+------+------+------+
-- |  S3  |  S4  |  S4  |  S3  |  1   | <- Cyclic dependency
-- +------+------+------+------+------+
-- |  S4  |  S1  |  S1  |  S2  |  0   |
-- +------+------+------+------+------+
-- |  S4  |  S1  |  S1  |  S3  |  1   |
-- +------+------+------+------+------+
-- |  S4  |  S1  |  S1  |  S4  |  1   | <- Cyclic dependency
-- +------+------+------+------+------+
-- |  S3  |  S1  |  S1  |  S2  |  0   |
-- +------+------+------+------+------+
-- |  S3  |  S1  |  S1  |  S3  |  1   | <- Cyclic dependency
-- +------+------+------+------+------+
-- |  S3  |  S1  |  S1  |  S4  |  1   |
-- +------+------+------+------+------+
-- |  S1  |  S4  |  S4  |  S1  |  1   | <- Cyclic dependency
-- +------+------+------+------+------+
-- |  S1  |  S4  |  S4  |  S2  |  2   |
-- +------+------+------+------+------+
-- |  S1  |  S4  |  S4  |  S3  |  2   |
-- +------+------+------+------+------+
-- |  S4  |  S3  |  S3  |  S4  |  1   | <- Cyclic dependency
-- +------+------+------+------+------+
-- |  S4  |  S3  |  S3  |  S1  |  1   |
-- +------+------+------+------+------+
-- |  S4  |  S3  |  S3  |  S2  |  2   |
-- +------+------+------+------+------+
--
-- Final result, without unnecessary duplication 
-- (If S1 x S3 are cyclic, I don't have to report S3 x S1)
--
-- +------+------+------+
-- | Req1 | Dep1 | Dist |
-- +------+------+------+
-- |  S1  |  S3  |  1   | 
-- +------+------+------+
-- |  S3  |  S4  |  1   | 
-- +------+------+------+
-- |  S4  |  S1  |  1   | 
-- +------+------+------+
--
-- #2 Direct x Indirect Cyclic Dependencies
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
-- In this example:
--   Component01 and Component04 have a DIRECT cyclic dependency
--    S1 -> S3, then S3 cannot -> S1
--
--   Component01 and Component03 have an INDIRECT cyclic dependency
--   S1 -> S4, because S1 -> S3 AND S3 -> S4, then S4 cannot S1

END