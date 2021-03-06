USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_Rollup_Bootstrap_Calculate_bacebbde18e243a7b3fb4bbdf2b2c0e5]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_Calculate_bacebbde18e243a7b3fb4bbdf2b2c0e5]
@batchSize int, @operationType int = 0

AS
BEGIN
SET NOCOUNT ON;

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
IF @operationType = 0 
BEGIN

		 SELECT TOP (1) @maxRecord=[Id] FROM [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5] ORDER BY [Id] DESC
		 SET @maxRecord = ISNULL(@maxRecord, 0)
		 SELECT @start = [BootstrapTargetPointer] FROM [RollupPropertiesBase]		 WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
		 SET @start= ISNULL(@start,0)
		 SET @end = @start + @batchSize
		 IF @end > @maxRecord  SET @end = @maxRecord

		 UPDATE [RBT] SET [RBT].[OutputValue] = ISNULL([RBT].[OutputValue],0) + ISNULL(result.[OutputValue],0) 

		 FROM [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [RBT] WITH (TABLOCK) 
		 JOIN
			 (
				 SELECT [T].[ParentEntityId], SUM([T].[OutputValue]) AS [OutputValue] 
				 FROM [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5] [T] WITH (TABLOCK) 
				 WHERE [T].[Id] BETWEEN @start AND @end
				 GROUP BY [T].[ParentEntityId]
			 )result
			 ON [RBT].[EntityId] = [result].[ParentEntityId]
			 WHERE [RBT].[Status] IS NULL
		 SET @recordsTobeProcessed = @maxRecord - @end 
		 IF(@recordsTobeProcessed < 1) -- Termination condition
		 BEGIN

					UPDATE [RollupPropertiesBase]
					SET [BootstrapTargetPointer] = 0
					WHERE [RollupPropertiesId]='bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
		 END
		 ELSE
		 BEGIN

					UPDATE [RollupPropertiesBase]
					SET [BootstrapTargetPointer] = @end + 1
					WHERE [RollupPropertiesId]='bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
		 END
		 SELECT @recordsTobeProcessed

END
ELSE IF @operationType = 3 
BEGIN
		 SELECT @start = [BootstrapTargetPointer] , @currDepth= [BootstrapCurrentDepth] 
		 FROM [RollupPropertiesBase] WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
-- Get parent depth markers

					SELECT @startParentId = [Start], @endParentId =[End]
					FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5] 
					WHERE [Id] = @currDepth -1
		 SET @start= ISNULL(@start,0)


		SELECT @start = CASE WHEN (@start> [Start]) THEN @start ELSE [Start] END , @maxRecord = [End]
		FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]
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


				UPDATE [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] WITH (TABLOCK) 
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
						 FROM [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [parent] WITH (TABLOCK) 
						 JOIN (

							SELECT [c].[ParentEntityId], SUM([c].[OutputValue]) AS [OutputValue] 
							FROM [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [c] WITH (TABLOCK) 
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
						 FROM [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [parent] WITH (TABLOCK) 
						 WHERE EXISTS( SELECT 1 FROM  [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [c] WITH (TABLOCK) 
										WHERE [c].[Id] BETWEEN @start AND @end
										AND [c].[Status] != 6 AND [c].[Status] IS NOT NULL
										AND [c].[ParentEntityId] = [parent].[EntityId])
								AND [parent].[Id] BETWEEN @startParentId AND @endParentId
			 END
			 SET @recordsTobeProcessed = @maxRecord - @end

			 IF(@recordsTobeProcessed >0)
			 BEGIN

					UPDATE [RollupPropertiesBase]
					SET [BootstrapTargetPointer] = @end + 1
					WHERE [RollupPropertiesId]='bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
				 SET @rowCount = 1
			 END
			 ELSE IF(@currDepth >0)
			 BEGIN

					UPDATE [RollupPropertiesBase]
					SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth] = @currDepth -1 
					WHERE [RollupPropertiesId]='bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
				 SET @rowCount = 1
			 END
			 ELSE
			 BEGIN -- Termination condition

					UPDATE [RollupPropertiesBase]
					SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth] = 0 
					WHERE [RollupPropertiesId]='bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'

				 TRUNCATE TABLE [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]
				 SET @rowCount = 0
			 END

		 END
		 SELECT @rowCount
 END

END

GO
