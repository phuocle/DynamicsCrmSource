CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_MainTableUpdate_e10cdd445c7f4ac8a5d1b2118926f2bd]

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
		 SELECT TOP (1) @maxRecord = [Id] FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] ORDER BY [Id] DESC 
SET @maxRecord = ISNULL(@maxRecord,0)

		 SELECT @start = [BootstrapTargetPointer] FROM [RollupPropertiesBase] 
		 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd' 

		 SET @start = ISNULL(@start, 0); 
		 SET @end = @start + @batchSize; 
		 IF @end > @maxRecord SET @end = @maxRecord

		 IF(@operationType = 0) 
		 BEGIN 
			 -- Pass1 for through the entire table and update the main 

			 -- Update Main Table 

			 UPDATE [a]

			 SET [OpenDeals] = [b].[OutputValue]
, [OpenDeals_Date] = [b].[CalculatedDateTime]
, [OpenDeals_State]= CASE WHEN ([b].[Status] IS NULL OR [b].[Status] = 6) THEN 1 ELSE [b].[Status] END
			 FROM [AccountBase] [a]
			 JOIN [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [b]
			 ON [a].[AccountId] = [b].[EntityId] WHERE ([b].[Id] BETWEEN @start AND @end )

		 END 
		 ELSE IF (@operationType = 1) -- Add entry to Markers table 
		 BEGIN 
				 -- For Rerun on Error Passes, we need to add entry into _markers table if needed 

				 IF NOT EXISTS( SELECT * FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Start] = @start) 
				 BEGIN 
					 SELECT @index = MAX([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] 

					 SET @index = ISNULL(@index,0) 

					 INSERT INTO [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]([Id],[Start],[End]) 
					 VALUES (@index +1, @start,@end) 
				 END 
		 END 

		 -- Update Pointer on main table 
		 UPDATE [RollupPropertiesBase] 
		 SET [BootstrapTargetPointer] = @end +1 
		 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd' 

		 -- Are there any records to be processed? 

		 SET @recordsTobeProcessed = @maxRecord - @end 

		 -- Once all records are processed in Pass 1 
		 IF(@recordsTobeProcessed < 1) 
		 BEGIN 
			 SELECT @index = MIN([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]
			 -- No More records in pass1. so set the Properties ready for next step (Error Pass)
			 UPDATE [RollupPropertiesBase]
			 SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth]=@index
			 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
		 END 
		 SELECT @recordsTobeProcessed 
 END 
ELSE IF (@operationType = 2)
 BEGIN 
		 SELECT @index =[BootstrapCurrentDepth] FROM [RollupPropertiesBase] 
		 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'

		 IF(@index IS NULL)
		 BEGIN
			 SELECT 0
			 RETURN
		 END

		 SELECT @start = [Start], @end = [End]
		 FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]
		 WHERE [Id] = @index

		 -- Update Main Table

			 UPDATE [a]

			 SET [OpenDeals] = [b].[OutputValue]
, [OpenDeals_Date] = [b].[CalculatedDateTime]
, [OpenDeals_State]= CASE WHEN ([b].[Status] IS NULL OR [b].[Status] = 6) THEN 1 ELSE [b].[Status] END
			 FROM [AccountBase] [a]
			 JOIN [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] [b]
			 ON [a].[AccountId] = [b].[EntityId] WHERE ([b].[Id] BETWEEN @start AND @end )

		 DELETE [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]
		 WHERE [Id] = @index

		 SET @index = NULL
		 SELECT @index = MIN([Id]) FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]

		 UPDATE [RollupPropertiesBase]
		 SET [BootstrapTargetPointer] = 0, [BootstrapCurrentDepth]=@index
		 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'

		 IF(@index IS NULL)
			 SELECT 0
		 ELSE
			 SELECT 1

 END
END
