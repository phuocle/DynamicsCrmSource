CREATE PROCEDURE [dbo].[p_Rollup_Bootstrap_IndexCopy_306845ef446a42e58df811c31bafaded]

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
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Source_306845ef446a42e58df811c31bafaded] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Source_306845ef446a42e58df811c31bafaded] ([EntityId] , [ParentEntityId] , [ExchangeRate], [Status]   ) 
 SELECT TOP (@batchSize) [rollupEntity].[AccountId] , [rollupEntity].[ParentAccountId] , [rollupEntity].[ExchangeRate] ,NULL  
	FROM [Account] [rollupEntity] 
	WHERE ([rollupEntity].[AccountId] > @entityId) 
 ORDER BY [rollupEntity].[AccountId] 

 SELECT @@ROWCOUNT; 

		 END
		 ELSE IF(@copyType = 3) -- Target Copy
		 BEGIN
			SELECT @entityId = (SELECT TOP 1 [EntityId] FROM [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded] ORDER BY [Id] DESC) 
			IF (@entityId IS NULL)
			BEGIN
				SET @entityId = '00000000-0000-0000-0000-000000000000'
			END
			 INSERT INTO [dbo].[Rollup_Bootstrap_Target_306845ef446a42e58df811c31bafaded] ([EntityId] , [ParentEntityId], [OutputValue]) 
 SELECT TOP (@batchSize) [aggregateEntity].[OpportunityId] , [aggregateEntity].[ParentAccountId] , [aggregateEntity].[EstimatedValue_Base] 
	FROM [Opportunity] [aggregateEntity] 
	WHERE ([aggregateEntity].[OpportunityId] > @entityId)  AND ([aggregateEntity].StateCode = @v0)
 ORDER BY [aggregateEntity].[OpportunityId] 

 SELECT @@ROWCOUNT; 

		 END
		 
END
