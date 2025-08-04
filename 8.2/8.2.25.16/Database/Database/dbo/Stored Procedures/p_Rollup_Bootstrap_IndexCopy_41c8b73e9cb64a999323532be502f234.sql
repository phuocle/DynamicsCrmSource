CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_IndexCopy_41c8b73e9cb64a999323532be502f234]

@batchSize INT = 5000
,@copyType INT = 2

AS
BEGIN
SET NOCOUNT ON;


 DECLARE @entityId UNIQUEIDENTIFIER
 DECLARE @calculatedDate DATETIME
IF(@copyType = 2) -- Source Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Source_41c8b73e9cb64a999323532be502f234] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Source_41c8b73e9cb64a999323532be502f234] ([EntityId] , [ParentEntityId] , [Status]  ,[CountValue] ) 
 SELECT TOP (@batchSize) [rollupEntity].[knowledgearticleId] , [rollupEntity].[RootArticleId]  ,NULL  ,0
	FROM [KnowledgeArticle] [rollupEntity] 
	WHERE ([rollupEntity].[knowledgearticleId] > @entityId) 
 ORDER BY [rollupEntity].[knowledgearticleId] 

 SELECT @@ROWCOUNT; 

		 END
		 ELSE IF(@copyType = 3) -- Target Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Target_41c8b73e9cb64a999323532be502f234] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Target_41c8b73e9cb64a999323532be502f234] ([EntityId] , [ParentEntityId], [OutputValue]) 
 SELECT TOP (@batchSize) [aggregateEntity].[FeedbackId] , [aggregateEntity].[RegardingObjectId] , [aggregateEntity].[NormalizedRating] 
	FROM [Feedback] [aggregateEntity] 
	WHERE ([aggregateEntity].[FeedbackId] > @entityId)  AND (((([aggregateEntity].NormalizedRating IS NOT NULL) AND ([aggregateEntity].Rating IS NOT NULL)) AND ([aggregateEntity].MinRating IS NOT NULL)) AND ([aggregateEntity].MaxRating IS NOT NULL))
 ORDER BY [aggregateEntity].[FeedbackId] 

 SELECT @@ROWCOUNT; 

		 END
		 
END
