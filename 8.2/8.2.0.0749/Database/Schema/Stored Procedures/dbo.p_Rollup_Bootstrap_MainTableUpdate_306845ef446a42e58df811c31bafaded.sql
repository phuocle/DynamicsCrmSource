SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_MainTableUpdate_306845ef446a42e58df811c31bafaded]

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
		 SELECT TOP (1) @maxRecord = [Id] FROM [dbo].[Rollup_Bootstrap_306845ef446a42e58df811c31bafaded] ORDER BY [Id] DESC 
SET @maxRecord = ISNULL(@maxRecord,0)

		 SELECT @start = [BootstrapTargetPointer] FROM [RollupPropertiesBase] 
		 WHERE [RollupPropertiesId] = '306845ef-446a-42e5-8df8-11c31bafaded' 

		 SET @start = ISNULL(@start, 0); 
		 SET @end = @start + @batchSize; 
		 IF @end > @maxRecord SET @end = @maxRecord

		 IF(@operationType = 0) 
		 BEGIN 
			 -- Pass1 for through the entire table and update the main 

			 -- Update Main Table 

			 UPDATE [a]

			 SET [a].[OpenRevenue] = ROUND(ROUND([b].[OutputValue],2) * [b].[ExchangeRate],2), [OpenRevenue_Base] = ROUND([b].[OutputValue],2)
, [OpenRevenue_Date] = [b].[CalculatedDateTime]
, [OpenRevenue_State]= CASE WHEN ([b].[Status] IS NULL OR [b].[Status] = 6) THEN 1 ELSE [b].[Status] END
, [a].[ModifiedOn] = GETUTCDATE()
			 FROM [AccountBase] [a]
			 JOIN [dbo].[Rollup_Bootstrap_306845ef446a42e58df811c31bafaded] [b]
			 ON [a].[AccountId] = [b].[EntityId] WHERE ([b].[Id] BETWEEN @start AND @end )

		 END 
		 ELSE IF (@operationType = 1) -- Add entry to Markers table 
		 BEGIN 
				 -- For Rerun on Error Passes, we need to add entry into _markers table if needed 

				 IF NOT EXISTS( SELECT * FROM [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded] WHERE [Start] = @start) 
				 BEGIN 
					 SELECT @index = MAX([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded] 

					 SET @index = ISNULL(@index,0) 

					 INSERT INTO [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded]([Id],[Start],[End]) 
					 VALUES (@index +1, @start,@end) 
				 END 
		 END 

		 -- Update Pointer on main table 
		 UPDATE [RollupPropertiesBase] 
		 SET [BootstrapTargetPointer] = @end +1 
		 WHERE [RollupPropertiesId] = '306845ef-446a-42e5-8df8-11c31bafaded' 

		 -- Are there any records to be processed? 

		 SET @recordsTobeProcessed = @maxRecord - @end 

		 -- Once all records are processed in Pass 1 
		 IF(@recordsTobeProcessed < 1) 
		 BEGIN 
			 SELECT @index = MIN([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded]
			 -- No More records in pass1. so set the Properties ready for next step (Error Pass)
			 UPDATE [RollupPropertiesBase]
			 SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth]=@index
			 WHERE [RollupPropertiesId] = '306845ef-446a-42e5-8df8-11c31bafaded'
		 END 
		 SELECT @recordsTobeProcessed 
 END 
ELSE IF (@operationType = 2)
 BEGIN 
		 SELECT @index =[BootstrapCurrentDepth] FROM [RollupPropertiesBase] 
		 WHERE [RollupPropertiesId] = '306845ef-446a-42e5-8df8-11c31bafaded'

		 IF(@index IS NULL)
		 BEGIN
			 SELECT 0
			 RETURN
		 END

		 SELECT @start = [Start], @end = [End]
		 FROM [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded]
		 WHERE [Id] = @index

		 -- Update Main Table

			 UPDATE [a]

			 SET [a].[OpenRevenue] = ROUND(ROUND([b].[OutputValue],2) * [b].[ExchangeRate],2), [OpenRevenue_Base] = ROUND([b].[OutputValue],2)
, [OpenRevenue_Date] = [b].[CalculatedDateTime]
, [OpenRevenue_State]= CASE WHEN ([b].[Status] IS NULL OR [b].[Status] = 6) THEN 1 ELSE [b].[Status] END
, [a].[ModifiedOn] = GETUTCDATE()
			 FROM [AccountBase] [a]
			 JOIN [dbo].[Rollup_Bootstrap_306845ef446a42e58df811c31bafaded] [b]
			 ON [a].[AccountId] = [b].[EntityId] WHERE ([b].[Id] BETWEEN @start AND @end )

		 DELETE [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded]
		 WHERE [Id] = @index

		 SET @index = NULL
		 SELECT @index = MIN([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_306845ef446a42e58df811c31bafaded]

		 UPDATE [RollupPropertiesBase]
		 SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth]=@index
		 WHERE [RollupPropertiesId] = '306845ef-446a-42e5-8df8-11c31bafaded'

		 IF(@index IS NULL)
			 SELECT 0
		 ELSE
			 SELECT 1

 END
END
GO
