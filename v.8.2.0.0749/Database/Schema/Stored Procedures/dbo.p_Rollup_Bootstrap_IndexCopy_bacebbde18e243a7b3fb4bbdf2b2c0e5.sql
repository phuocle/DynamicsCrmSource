SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_IndexCopy_bacebbde18e243a7b3fb4bbdf2b2c0e5]

@batchSize INT = 5000
,@copyType INT = 2

AS
BEGIN
SET NOCOUNT ON;


 DECLARE @entityId UNIQUEIDENTIFIER
 DECLARE @calculatedDate DATETIME
IF(@copyType = 2) -- Source Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Source_bacebbde18e243a7b3fb4bbdf2b2c0e5] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Source_bacebbde18e243a7b3fb4bbdf2b2c0e5] ([EntityId] , [ParentEntityId] , [Status]   ) 
 SELECT TOP (@batchSize) [rollupEntity].[knowledgearticleId] , [rollupEntity].[RootArticleId]  ,NULL  
	FROM [KnowledgeArticle] [rollupEntity] 
	WHERE ([rollupEntity].[knowledgearticleId] > @entityId) 
 ORDER BY [rollupEntity].[knowledgearticleId] 

 SELECT @@ROWCOUNT; 

		 END
		 ELSE IF(@copyType = 3) -- Target Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Target_bacebbde18e243a7b3fb4bbdf2b2c0e5] ([EntityId] , [ParentEntityId], [OutputValue]) 
 SELECT TOP (@batchSize) [aggregateEntity].[KnowledgeArticleViewsId] , [aggregateEntity].[KnowledgeArticleId] , [aggregateEntity].[KnowledgeArticleView] 
	FROM [KnowledgeArticleViews] [aggregateEntity] 
	WHERE ([aggregateEntity].[KnowledgeArticleViewsId] > @entityId) 
 ORDER BY [aggregateEntity].[KnowledgeArticleViewsId] 

 SELECT @@ROWCOUNT; 

		 END
		 
END
GO
