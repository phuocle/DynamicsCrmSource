CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_Calculate_e10cdd445c7f4ac8a5d1b2118926f2bd]
@batchSize int, @operationType int = 0

AS
BEGIN
SET NOCOUNT ON;
DECLARE @v0 int
SET @v0 = 0

-- Declarations
DECLARE @currDepth INT
DECLARE @rowCount INT
DECLARE @maxDepth INT
DECLARE @updatedDate DATETIME
DECLARE @maxRecord INT
DECLARE @start INT
DECLARE @end INT
DECLARE @startParentId INT
DECLARE @endParentId INT
DECLARE @recordsTobeProcessed INT
DECLARE @rollupPropertyId UNIQUEIDENTIFIER

 SET @rollupPropertyId = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'; 
IF @operationType = 0 
BEGIN

		 SELECT TOP (1) @maxRecord=[Id] FROM [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] ORDER BY [Id] DESC
		 SET @maxRecord = ISNULL(@maxRecord, 0)
		 SELECT @start = [BootstrapTargetPointer] FROM [RollupPropertiesBase] WHERE [RollupPropertiesId] = @rollupPropertyId
		 SET @start= ISNULL(@start,0)
		 SET @end = @start + @batchSize
		 IF @end > @maxRecord  SET @end = @maxRecord

		 UPDATE [RBT] SET [RBT].[OutputValue] = ISNULL([RBT].[OutputValue],0) + ISNULL(result.[OutputValue],0) 

		 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [RBT] WITH (TABLOCK) 
		 JOIN
			 (
				 SELECT [T].[ParentEntityId], COUNT([T].[OutputValue]) AS [OutputValue] 
				 FROM [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] [T] WITH (TABLOCK) 
				 WHERE [T].[Id] BETWEEN @start AND @end
				 GROUP BY [T].[ParentEntityId]
			 )result
			 ON [RBT].[EntityId] = [result].[ParentEntityId]
			 WHERE [RBT].[Status] IS NULL
		 SET @recordsTobeProcessed = @maxRecord - @end 
		 IF(@recordsTobeProcessed < 1) -- Termination condition
		 BEGIN
 UPDATE [RollupPropertiesBase] SET [BootstrapTargetPointer] = 0 WHERE [RollupPropertiesId] = @rollupPropertyId
		 END
		 ELSE
		 BEGIN
 UPDATE [RollupPropertiesBase] SET [BootstrapTargetPointer] = @end +1 WHERE [RollupPropertiesId] = @rollupPropertyId
		 END
		 SELECT @recordsTobeProcessed

END
ELSE IF @operationType = 3 
BEGIN
		 SELECT @start = [BootstrapTargetPointer] , @currDepth= [BootstrapCurrentDepth] 
FROM [RollupPropertiesBase] WHERE [RollupPropertiesId] = @rollupPropertyId
-- Get parent depth markers

					SELECT @startParentId = [Start], @endParentId =[End]
					FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] 
					WHERE [Id] = @currDepth -1
		 SET @start= ISNULL(@start,0)


		SELECT @start = CASE WHEN (@start> [Start]) THEN @start ELSE [Start] END , @maxRecord = [End]
		FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]
		WHERE [Id] = @currDepth

		 -- If we are past the processing counter, then we are done
		 IF(@start > @maxRecord)
			  SET @start = @maxRecord
		 -- CAP the processing to the max
		  SET @end = @start + @batchSize
		 IF(@end > @maxRecord)
			  SET @end = @maxRecord
		 IF (@currDepth < 1)
		 BEGIN
			  SET @rowCount =0
		 END
		 ELSE
		 BEGIN
				 SET @rowCount =0
				 --  Mark for Overflow Error on current set


				UPDATE [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] WITH (TABLOCK) 
				SET [Status] =2, [OutputValue]=NULL
				WHERE [Id] BETWEEN @start AND @end 
				AND [OutputValue] IS NOT NULL
				AND ([OutputValue] NOT BETWEEN -2147483648 AND 2147483647)
			 -- For Depth higher than 1, we need to bubble up the error or calculations
			 IF (@currDepth > 1)
			 BEGIN

						UPDATE [parent]
						 SET 
						 [parent].[OutputValue] = CASE WHEN ([parent].[Status] IS NOT NULL AND [parent].[Status] != 6 ) THEN NULL ELSE ISNULL([parent].[OutputValue],0) + ISNULL(result.[OutputValue],0) END 
						 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [parent] WITH (TABLOCK) 
						 JOIN (

							SELECT [c].[ParentEntityId], SUM([c].[OutputValue]) AS [OutputValue] 
							FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [c] WITH (TABLOCK) 
							WHERE [c].[Id] BETWEEN @start AND @end
							AND [c].[Status] IS NULL OR [c].[Status] = 6
							GROUP BY [c].[ParentEntityId]
						 ) result
						 ON [parent].[EntityId] = result.[ParentEntityId]
						 WHERE ([parent].[Id] BETWEEN @startParentId AND @endParentId)						-- Needed to filter the record selection on parent Side (also Uses Index)
				 -- Bubble up Errors for Overflow,Hierarchy TO other Error

						UPDATE [parent]
						 SET [parent].[Status] = 3,
						 [parent].[OutputValue] = NULL 
						 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [parent] WITH (TABLOCK) 
						 WHERE EXISTS( SELECT 1 FROM  [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [c] WITH (TABLOCK) 
										WHERE [c].[Id] BETWEEN @start AND @end
										AND [c].[Status] != 6 AND [c].[Status] IS NOT NULL
										AND [c].[ParentEntityId] = [parent].[EntityId])
								AND [parent].[Id] BETWEEN @startParentId AND @endParentId
			 END
			 SET @recordsTobeProcessed = @maxRecord - @end

			 IF(@recordsTobeProcessed >0)
			 BEGIN
 UPDATE [RollupPropertiesBase] SET [BootstrapTargetPointer] = @end +1 WHERE [RollupPropertiesId] = @rollupPropertyId
				 SET @rowCount = 1
			 END
			 ELSE IF(@currDepth >0)
			 BEGIN
 UPDATE [RollupPropertiesBase] SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth] = @currDepth -1  WHERE [RollupPropertiesId] = @rollupPropertyId
				 SET @rowCount = 1
			 END
			 ELSE
			 BEGIN -- Termination condition
 UPDATE [RollupPropertiesBase] SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth] = 0  WHERE [RollupPropertiesId] = @rollupPropertyId

				 TRUNCATE TABLE [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]
				 SET @rowCount = 0
			 END

		 END
		 SELECT @rowCount
 END

END
