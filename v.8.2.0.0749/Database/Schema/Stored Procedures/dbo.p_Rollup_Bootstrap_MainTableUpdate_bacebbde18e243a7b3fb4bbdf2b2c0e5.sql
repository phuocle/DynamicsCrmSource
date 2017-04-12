SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_MainTableUpdate_bacebbde18e243a7b3fb4bbdf2b2c0e5]

@batchSize INT = 5000
, @operationType INT = 0

AS
BEGIN
SET NOCOUNT ON;


 DECLARE @start  INT 
 DECLARE @end  INT 
 DECLARE @maxRecord  INT 
 DECLARE @recordsTobeProcessed  INT 
 DECLARE @index  INT 
IF(@operationType IN (0,1))
 BEGIN 
		 SELECT TOP (1) @maxRecord = [Id] FROM [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] ORDER BY [Id] DESC 
SET @maxRecord = ISNULL(@maxRecord,0)

		 SELECT @start = [BootstrapTargetPointer] FROM [RollupPropertiesBase] 
		 WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5' 

		 SET @start = ISNULL(@start, 0); 
		 SET @end = @start + @batchSize; 
		 IF @end > @maxRecord SET @end = @maxRecord

		 IF(@operationType = 0) 
		 BEGIN 
			 -- Pass1 for through the entire table and update the main 

			 -- Update Main Table 

			 UPDATE [a]

			 SET [KnowledgeArticleViews] = [b].[OutputValue]
, [KnowledgeArticleViews_Date] = [b].[CalculatedDateTime]
, [KnowledgeArticleViews_State]= CASE WHEN ([b].[Status] IS NULL OR [b].[Status] = 6) THEN 1 ELSE [b].[Status] END
, [a].[ModifiedOn] = GETUTCDATE()
			 FROM [KnowledgeArticleBase] [a]
			 JOIN [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [b]
			 ON [a].[knowledgearticleId] = [b].[EntityId] WHERE ([b].[Id] BETWEEN @start AND @end )

		 END 
		 ELSE IF (@operationType = 1) -- Add entry to Markers table 
		 BEGIN 
				 -- For Rerun on Error Passes, we need to add entry into _markers table if needed 

				 IF NOT EXISTS( SELECT * FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5] WHERE [Start] = @start) 
				 BEGIN 
					 SELECT @index = MAX([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5] 

					 SET @index = ISNULL(@index,0) 

					 INSERT INTO [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]([Id],[Start],[End]) 
					 VALUES (@index +1, @start,@end) 
				 END 
		 END 

		 -- Update Pointer on main table 
		 UPDATE [RollupPropertiesBase] 
		 SET [BootstrapTargetPointer] = @end +1 
		 WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5' 

		 -- Are there any records to be processed? 

		 SET @recordsTobeProcessed = @maxRecord - @end 

		 -- Once all records are processed in Pass 1 
		 IF(@recordsTobeProcessed < 1) 
		 BEGIN 
			 SELECT @index = MIN([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]
			 -- No More records in pass1. so set the Properties ready for next step (Error Pass)
			 UPDATE [RollupPropertiesBase]
			 SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth]=@index
			 WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'
		 END 
		 SELECT @recordsTobeProcessed 
 END 
ELSE IF (@operationType = 2)
 BEGIN 
		 SELECT @index =[BootstrapCurrentDepth] FROM [RollupPropertiesBase] 
		 WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'

		 IF(@index IS NULL)
		 BEGIN
			 SELECT 0
			 RETURN
		 END

		 SELECT @start = [Start], @end = [End]
		 FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]
		 WHERE [Id] = @index

		 -- Update Main Table

			 UPDATE [a]

			 SET [KnowledgeArticleViews] = [b].[OutputValue]
, [KnowledgeArticleViews_Date] = [b].[CalculatedDateTime]
, [KnowledgeArticleViews_State]= CASE WHEN ([b].[Status] IS NULL OR [b].[Status] = 6) THEN 1 ELSE [b].[Status] END
, [a].[ModifiedOn] = GETUTCDATE()
			 FROM [KnowledgeArticleBase] [a]
			 JOIN [dbo].[Rollup_Bootstrap_bacebbde18e243a7b3fb4bbdf2b2c0e5] [b]
			 ON [a].[knowledgearticleId] = [b].[EntityId] WHERE ([b].[Id] BETWEEN @start AND @end )

		 DELETE [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]
		 WHERE [Id] = @index

		 SET @index = NULL
		 SELECT @index = MIN([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_bacebbde18e243a7b3fb4bbdf2b2c0e5]

		 UPDATE [RollupPropertiesBase]
		 SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth]=@index
		 WHERE [RollupPropertiesId] = 'bacebbde-18e2-43a7-b3fb-4bbdf2b2c0e5'

		 IF(@index IS NULL)
			 SELECT 0
		 ELSE
			 SELECT 1

 END
END
GO
