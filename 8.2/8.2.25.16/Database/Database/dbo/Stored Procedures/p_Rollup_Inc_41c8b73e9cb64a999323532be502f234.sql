CREATE PROCEDURE [dbo].[p_Rollup_Inc_41c8b73e9cb64a999323532be502f234]
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
DECLARE @previousResult decimal(23,10)
SET @previousResult=NULL
DECLARE @leafValue decimal(38,10)
SET @leafValue=NULL
DECLARE @hierarchyValue decimal(38,10)
SET @hierarchyValue=NULL
DECLARE @leafCount int
SET @leafCount=0
DECLARE @hierarchyCount int
SET @hierarchyCount=0
DECLARE @totalSum decimal(38,10)
SET @totalSum=NULL
DECLARE @totalSum_money decimal(38,10)
SET @totalSum_money=NULL
DECLARE @totalCount int
SET @totalCount=0
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
				

				SELECT @leafValue=SUM(ROUND([IQ].[NormalizedRating],10)), @maxLimitAggregate=MAX(__AggLimitExceededFlag__), @leafCount=COUNT([IQ].FeedbackId)
 FROM ( SELECT TOP (@aggregateQueryRecordLimit + 1) [aggregateEntity].NormalizedRating, CASE WHEN ROW_NUMBER() OVER(ORDER BY (SELECT 1)) > @aggregateQueryRecordLimit THEN 1 ELSE 0 END AS __AggLimitExceededFlag__, [aggregateEntity].[FeedbackId]
				FROM [Feedback] [aggregateEntity] 
				JOIN [RollupHierarchy] [hierarchy] ON [aggregateEntity].[RegardingObjectId]=[hierarchy].[knowledgearticleId]

				WHERE (((([aggregateEntity].NormalizedRating IS NOT NULL) AND ([aggregateEntity].Rating IS NOT NULL)) AND ([aggregateEntity].MinRating IS NOT NULL)) AND ([aggregateEntity].MaxRating IS NOT NULL))
) AS [IQ] OPTION(MAXRECURSION 10)
				
			IF (@maxLimitAggregate =1)
			BEGIN
			RAISERROR('-2147164125',11,0)
			END

		 END
		 ELSE
		 BEGIN
-- Leaf Value calculation
				IF (@state = 1) BEGIN 
						 SELECT @leafValue=SUM(ROUND([aggregateEntity].[NormalizedRating],10)), @leafCount=COUNT([aggregateEntity].[FeedbackId])
						 FROM [Feedback] [aggregateEntity] 

						 WHERE ([aggregateEntity].[RegardingObjectId] = @id) 	 AND ( (((([aggregateEntity].NormalizedRating IS NOT NULL) AND ([aggregateEntity].Rating IS NOT NULL)) AND ([aggregateEntity].MinRating IS NOT NULL)) AND ([aggregateEntity].MaxRating IS NOT NULL)) ) 
				END
		END

-- Hierarchy Value calculation
		 IF(@calculateNow=0) BEGIN
				IF (@state = 1) BEGIN 
						 IF EXISTS (SELECT [knowledgearticleId] FROM [KnowledgeArticle] 
						 WHERE [Rating_State] != 1 AND [RootArticleId] = @id )
						 BEGIN
								 SET @state=3 --Atleast one child is in error state
						 END
						 ELSE
						 BEGIN
								 SELECT @hierarchyValue=SUM([Rating_Sum]), @hierarchyCount=SUM([Rating_Count]) 
								 FROM [KnowledgeArticle] 
								 WHERE ([RootArticleId] = @id) AND [Rating_State]=1 
						 END
				END
		END
-- Sum of Hierarchy and Leaf Values

		IF( @state != 1 ) -- In any error state
		BEGIN
			SET @result = NULL
			SET @result_money = NULL
		END
		ELSE
		BEGIN
				SET @totalSum = ISNULL(@hierarchyValue,0) + ISNULL(@leafValue,0)
				SET @totalCount = ISNULL(@hierarchyCount,0) + ISNULL(@leafCount,0)
				IF(@totalCount > 0)
				BEGIN
					SET @result = @totalSum/@totalCount
				END
				ELSE
				BEGIN
					IF (@totalSum=0)
					BEGIN
						SET @result= 0
						SET @result_money= 0
						SET @totalSum= 0
						SET @totalCount= 0
					END
					ELSE
					BEGIN
						SET @result= NULL
						SET @result_money= NULL
						SET @totalSum= NULL
						SET @totalCount= NULL
						SET @state= 3 -- Divide By Zero
					END
				END
		END

	SET @result = ROUND(@result,10)
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
					SET @totalSum= NULL
					SET @totalCount= NULL
			 END

	 END CATCH


 -- Overflow check
			IF(@totalSum < -100000000000 OR @totalSum > 100000000000 OR @totalSum_money < -100000000000 OR @totalSum_money > 100000000000)
			BEGIN	
				SET @result= NULL
				SET @result_money= NULL
				SET @totalSum= NULL
				SET @totalCount= NULL
				SET @state= 2 -- Overflow
			END
-- Update Statement


		 UPDATE [KnowledgeArticleBase]
		 SET @previousResult=[Rating], [Rating]=@result, [Rating_Date]=@startDate, [Rating_State]=@state, [Rating_Sum]=@totalSum, [Rating_Count]=@totalCount, @id=[RootArticleId]
		 WHERE [knowledgearticleId]=@id

IF( @id IS NOT NULL AND @calculateNow = 0 AND ((@previousResult IS NULL AND @result IS NOT NULL) OR (@result <> @previousResult)))
BEGIN
					SET @nextItemId = @id
					END
END
