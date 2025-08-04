CREATE PROCEDURE [dbo].[p_Rollup_Inc_bacebbde18e243a7b3fb4bbdf2b2c0e5]
@id uniqueidentifier
,@calculateNow bit = 0
,@state int = 1
,@nextItemId uniqueidentifier = NULL OUTPUT
,@aggregateQueryRecordLimit int = 50000

AS
BEGIN
SET NOCOUNT ON;

-- Declarations
DECLARE @result_money decimal(38,10)
SET @result_money=NULL
DECLARE @result decimal(38,10)
SET @result=NULL
DECLARE @previousResult int
SET @previousResult=NULL
DECLARE @leafValue decimal(38,10)
SET @leafValue=NULL
DECLARE @hierarchyValue decimal(38,10)
SET @hierarchyValue=NULL
DECLARE @startDate datetime
SET @startDate=[dbo].[fn_GetUtcDateTrunc]()
DECLARE @maxDepth int
SET @maxDepth=0
DECLARE @maxLimitAggregate int
SET @maxLimitAggregate=0

	 BEGIN TRY

		 IF(@calculateNow=1)
		 BEGIN
				;WITH RollupHierarchy([Level], knowledgearticleId, RootArticleId) AS 
				(
				SELECT 0, "knowledgearticle".knowledgearticleId, "knowledgearticle".RootArticleId
				 FROM KnowledgeArticle "knowledgearticle" WHERE "knowledgearticle".knowledgearticleId=@id
				UNION ALL
				SELECT [Level]+1, "knowledgearticle".knowledgearticleId, "knowledgearticle".RootArticleId
				 FROM KnowledgeArticle "knowledgearticle","RollupHierarchy" "RollupHierarchy" WHERE "knowledgearticle".RootArticleId="RollupHierarchy".knowledgearticleId)
				

				SELECT @result=SUM([IQ].[KnowledgeArticleView]), @maxLimitAggregate=MAX(__AggLimitExceededFlag__)
 FROM ( SELECT TOP (@aggregateQueryRecordLimit + 1) [aggregateEntity].[KnowledgeArticleView], CASE WHEN ROW_NUMBER() OVER(ORDER BY (SELECT 1)) > @aggregateQueryRecordLimit THEN 1 ELSE 0 END AS __AggLimitExceededFlag__
				FROM [KnowledgeArticleViews] [aggregateEntity] 
				JOIN [RollupHierarchy] [hierarchy] ON [aggregateEntity].[KnowledgeArticleId]=[hierarchy].[knowledgearticleId]

) AS [IQ] OPTION(MAXRECURSION 10)
				
			IF (@maxLimitAggregate =1)
			BEGIN
			RAISERROR('-2147164125',11,0)
			END
		 SET @result = ISNULL(@result,0)
		 END
		 ELSE
		 BEGIN
-- Leaf Value calculation
				IF (@state = 1) BEGIN 
						 SELECT @leafValue=SUM([aggregateEntity].[KnowledgeArticleView])
						 FROM [KnowledgeArticleViews] [aggregateEntity] 

						 WHERE ([aggregateEntity].[KnowledgeArticleId] = @id) 

						 SET @leafValue = ISNULL(@leafValue,0)
				END
		END

-- Hierarchy Value calculation
		 IF(@calculateNow=0) BEGIN
				IF (@state = 1) BEGIN 
						 IF EXISTS (SELECT [knowledgearticleId] FROM [KnowledgeArticle] 
						 WHERE [KnowledgeArticleViews_State] != 1 AND [RootArticleId] = @id )
						 BEGIN
								 SET @state=3 --Atleast one child is in error state
						 END
						 ELSE
						 BEGIN
								 SELECT @hierarchyValue=SUM([KnowledgeArticleViews]) 
								 FROM [KnowledgeArticle] 
								 WHERE ([RootArticleId] = @id) AND [KnowledgeArticleViews_State]=1 
						 END
				END
		END
-- Sum of Hierarchy and Leaf Values

		 IF(@calculateNow=0) BEGIN
		IF( @state != 1 ) -- In any error state
		BEGIN
			SET @result = NULL
			SET @result_money = NULL
		END
		ELSE
		BEGIN
		 SET @result = ISNULL(@hierarchyValue,0) + ISNULL(@leafValue,0)
		END
		END

	SET @result = @result
	 END TRY
	 BEGIN CATCH
	DECLARE @ErrorSeverity INT
				DECLARE @ErrorState INT
				DECLARE @ErrorMessage nvarchar(100)
				DECLARE @ErrorNumber INT
			
				SELECT @ErrorSeverity = ERROR_SEVERITY(),@ErrorState = ERROR_STATE(),@ErrorMessage = ERROR_MESSAGE(), @ErrorNumber = ERROR_NUMBER()
				
				-- maxrecursion limit reached
				IF(@ErrorNumber = 530)
				BEGIN
					SET @ErrorMessage = '-2147089081'
				END

				-- If the error thrown is due to the max recursion limit
				-- reached or the number of aggregate entities is above
				-- limit of 50000, then throw the error to the async job
				IF(@ErrorMessage='-2147089081' OR @ErrorMessage='-2147164125')
				BEGIN
				RAISERROR (@ErrorMessage, -- Error Message
						@ErrorSeverity, -- Severity.
						@ErrorState -- Error State  		
						)
				END
				ELSE
				BEGIN
					SET @result= NULL
					SET @state= 2 -- Overflow
			 END

	 END CATCH


 -- Overflow check
			IF(@result < -2147483648 OR @result > 2147483647 OR @result_money < -2147483648 OR @result_money > 2147483647)
			BEGIN	
				SET @result= NULL
				SET @result_money = NULL
				SET @state= 2 -- Overflow
			END
-- Update Statement


		 UPDATE [KnowledgeArticleBase]
		 SET @previousResult=[KnowledgeArticleViews], [KnowledgeArticleViews]=@result, [KnowledgeArticleViews_Date]=@startDate, [KnowledgeArticleViews_State]=@state, @id=[RootArticleId]
		 WHERE ([knowledgearticleId]=@id)

IF( @id IS NOT NULL AND @calculateNow = 0 AND ((@previousResult IS NULL AND @result IS NOT NULL) OR (@result <> @previousResult)))
BEGIN
					SET @nextItemId = @id
					END
END
