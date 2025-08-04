CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_IndexCopy_e10cdd445c7f4ac8a5d1b2118926f2bd]

@batchSize INT = 5000
,@copyType INT = 2

AS
BEGIN
SET NOCOUNT ON;
DECLARE @v0 int
SET @v0 = 0


 DECLARE @entityId UNIQUEIDENTIFIER
 DECLARE @calculatedDate DATETIME
IF(@copyType = 2) -- Source Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Source_e10cdd445c7f4ac8a5d1b2118926f2bd] ([EntityId] , [ParentEntityId] , [Status]   ) 
 SELECT TOP (@batchSize) [rollupEntity].[AccountId] , [rollupEntity].[ParentAccountId]  ,NULL  
	FROM [Account] [rollupEntity] 
	WHERE ([rollupEntity].[AccountId] > @entityId) 
 ORDER BY [rollupEntity].[AccountId] 

 SELECT @@ROWCOUNT; 

		 END
		 ELSE IF(@copyType = 3) -- Target Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Target_e10cdd445c7f4ac8a5d1b2118926f2bd] ([EntityId] , [ParentEntityId], [OutputValue]) 
 SELECT TOP (@batchSize) [aggregateEntity].[OpportunityId] , [aggregateEntity].[ParentAccountId] ,1 
	FROM [Opportunity] [aggregateEntity] 
	WHERE ([aggregateEntity].[OpportunityId] > @entityId)  AND ([aggregateEntity].StateCode = @v0)
 ORDER BY [aggregateEntity].[OpportunityId] 

 SELECT @@ROWCOUNT; 

		 END
		 
END
