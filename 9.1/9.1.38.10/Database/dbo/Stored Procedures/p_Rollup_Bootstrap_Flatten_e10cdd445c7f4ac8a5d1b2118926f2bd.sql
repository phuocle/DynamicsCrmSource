CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_Flatten_e10cdd445c7f4ac8a5d1b2118926f2bd]

@operationType INT 

, @batchSize INT = 100000 

 ,@moreRecords INT OUT

AS
BEGIN
SET NOCOUNT ON;


 DECLARE @currentDepth INT, @start INT, @end INT, @maxRecord INT, @parentDepthStart INT, @parentDepthEnd INT, @RecordMaxIdInserted INT, @calculatedDate DATETIME

SET @calculatedDate =  dbo.fn_GetUtcDateTrunc()
Select @currentDepth = [BootstrapCurrentDepth] , @start = [BootstrapTargetPointer] FROM [RollupPropertiesBase] WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
SELECT TOP (1) @maxRecord = [Id] FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] ORDER BY [Id] DESC
SET @maxRecord = ISNULL(@maxRecord,0)
IF(@currentDepth IS NULL OR @currentDepth < 1)
	 SET @currentDepth = 1
SET @start = ISNULL(@start,0)
IF (@start > @maxRecord)
	 SET @start = @maxRecord
SET @end = @start + @batchSize
IF (@end > @maxRecord)
	 SET @end = @maxRecord

IF @operationType = 0 
BEGIN

	IF(@currentDepth =1)
	BEGIN
 -- Mark Roots
		 IF NOT EXISTS( Select 1 FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Id] = @currentDepth)
		 BEGIN

		 	 INSERT INTO [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]([Id],[Start])
		 	 VALUES(@currentDepth,1)
		 END
		 INSERT INTO [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]([EntityId],[ParentEntityId],[Depth],[Status],[OutputValue] ,[ExchangeRate],[CalculatedDateTime])
SELECT [EntityId],[ParentEntityId],@currentDepth,[Status], CASE WHEN [OutputValue] IS NULL THEN 0 ELSE [OutputValue] END  , [ExchangeRate], @calculatedDate FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd]  WITH (TABLOCK HOLDLOCK) WHERE [Id] BETWEEN @start AND @end AND [ParentEntityId] IS NULL

	END

	ELSE IF (@currentDepth<=100)	BEGIN

		 SELECT @parentDepthStart = [Start], @parentDepthEnd = [End] FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Id] = @currentDepth -1

		 INSERT INTO [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]([EntityId],[ParentEntityId],[Depth],[Status],[OutputValue] ,[ExchangeRate],[CalculatedDateTime])
SELECT SRC.[EntityId], SRC.[ParentEntityId], @currentDepth, SRC.[Status],  CASE WHEN SRC.[OutputValue] IS NULL THEN 0 ELSE SRC.[OutputValue] END  , SRC.[ExchangeRate], @calculatedDate 
			FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] SRC  WITH (TABLOCK HOLDLOCK)
	 		 WHERE SRC.[Id] BETWEEN @start AND @end
		 	 AND EXISTS (SELECT 1 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] Parents  WITH (TABLOCK HOLDLOCK) WHERE SRC.[ParentEntityId] = Parents.[EntityId] AND (Parents.[Id] BETWEEN @parentDepthStart AND @parentDepthEnd))
	END

	ELSE IF (@currentDepth=101)	BEGIN

		 SELECT @parentDepthStart = [Start], @parentDepthEnd = [End] FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Id] = @currentDepth -1

		 INSERT INTO [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]([EntityId],[ParentEntityId],[Depth],[Status],[OutputValue] ,[ExchangeRate],[CalculatedDateTime])
SELECT SRC.[EntityId], SRC.[ParentEntityId], @currentDepth, 5,  CASE WHEN SRC.[OutputValue] IS NULL THEN 0 ELSE SRC.[OutputValue] END  , SRC.[ExchangeRate], @calculatedDate 
			FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] SRC  WITH (TABLOCK HOLDLOCK)
	 		 WHERE SRC.[Id] BETWEEN @start AND @end
		 	 AND EXISTS (SELECT 1 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] Parents  WITH (TABLOCK HOLDLOCK) WHERE SRC.[ParentEntityId] = Parents.[EntityId] AND (Parents.[Id] BETWEEN @parentDepthStart AND @parentDepthEnd))
	END

	ELSE
	BEGIN

		 -- We need to add index at this point. This step occurs when the depth limit has been crossed. At that time, we have to insert all records that have not already been flattened and we need to add an index for it. The index is removed after flattening

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]') AND name = N'ndx_EntityId')
CREATE NONCLUSTERED  INDEX ndx_EntityId ON [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]  (EntityId) 

		 INSERT INTO [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd]([EntityId],[ParentEntityId],[Depth],[Status],[OutputValue] ,[ExchangeRate],[CalculatedDateTime])
SELECT SRC.[EntityId], NULL, NULL, 5, NULL , NULL, @calculatedDate FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] SRC  WITH (TABLOCK HOLDLOCK)
	 		 WHERE SRC.[Id] BETWEEN @start AND @end
		 	 AND NOT EXISTS (SELECT 1 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] Parents  WITH (TABLOCK HOLDLOCK) WHERE SRC.[EntityId] = Parents.[EntityId])
	END


	SELECT TOP (1) @RecordMaxIdInserted=[Id] FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] ORDER BY [Id] DESC
	IF (@end >= @maxRecord) -- We are done with current Depth
	BEGIN

		 IF NOT EXISTS (SELECT 1 FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Id] = @currentDepth AND [Start] > @RecordMaxIdInserted) -- More depths present in system
		 BEGIN

			 IF (@currentDepth = 100+2)
			 BEGIN

				 DELETE FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Id] = 100+2
				 SET @moreRecords= 0
			 END

			 ELSE

			 BEGIN


				 UPDATE [RollupPropertiesBase] SET [BootstrapCurrentDepth] = @currentDepth +1, [BootstrapTargetPointer] =0 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
				 UPDATE [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] SET [End] = @RecordMaxIdInserted WHERE [Id] = @currentDepth
				 INSERT INTO [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd]([Id],[Start]) 
				 VALUES(@currentDepth +1, @RecordMaxIdInserted +1)
				 SET @moreRecords= 1
			 END


		 END

		 ELSE

		 BEGIN

		 	 UPDATE [RollupPropertiesBase] SET [BootstrapCurrentDepth] = @currentDepth-1, [BootstrapTargetPointer] =0 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
	 		 SET @moreRecords= 0
			 DELETE FROM [dbo].[Rollup_Bootstrap_Markers_e10cdd445c7f4ac8a5d1b2118926f2bd] WHERE [Id] = @currentDepth
		 END

	END

	ELSE

	BEGIN

		 UPDATE [RollupPropertiesBase] SET [BootstrapCurrentDepth] = @currentDepth, [BootstrapTargetPointer] =@end +1 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
		 SET @moreRecords= 1
	END

END
ELSE IF @operationType = 1 
BEGIN

	INSERT INTO [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd] ([EntityId],[ParentEntityId],[Status],[OutputValue],[ExchangeRate] )
	SELECT SRC.[EntityId], SRC.[ParentEntityId], SRC.[Status], SRC.[OutputValue], SRC.[ExchangeRate]  FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] SRC  WITH (TABLOCK HOLDLOCK)
	WHERE SRC.[Id] BETWEEN @start AND @end 
	AND NOT EXISTS (SELECT 1 FROM [dbo].[Rollup_Bootstrap_e10cdd445c7f4ac8a5d1b2118926f2bd] Parents  WITH (TABLOCK HOLDLOCK) WHERE SRC.[EntityId] = Parents.[EntityId])

	IF (@end >= @maxRecord)
	BEGIN
		UPDATE [RollupPropertiesBase] SET [BootstrapCurrentDepth] =NULL, [BootstrapTargetPointer] =0 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
		SET @moreRecords = 0
	END
	ELSE
	BEGIN
		Update [RollupPropertiesBase] SET [BootstrapTargetPointer] =@end +1 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
		SET @moreRecords = 0
	END
 END

ELSE IF @operationType = 2 
BEGIN

	UPDATE O SET O.[ParentEntityId] = NULL FROM [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd] O WHERE O.[Id] BETWEEN @start AND @end
	AND NOT EXISTS (SELECT 1 FROM [dbo].[Rollup_Bootstrap_Orphans_e10cdd445c7f4ac8a5d1b2118926f2bd] P WHERE P.[EntityId] = O.[ParentEntityId])

	IF (@end >= @maxRecord)
	BEGIN
		UPDATE [RollupPropertiesBase] SET [BootstrapCurrentDepth] =NULL, [BootstrapTargetPointer] =0 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
		SET @moreRecords = 0
	END
	ELSE
	BEGIN
		Update [RollupPropertiesBase] SET [BootstrapTargetPointer] =@end +1 WHERE [RollupPropertiesId] = 'e10cdd44-5c7f-4ac8-a5d1-b2118926f2bd'
		SET @moreRecords = 0
	END
 END

END
