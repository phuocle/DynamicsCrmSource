SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO
CREATE PROCEDURE [dbo].[p_Rollup_Inc_306845ef446a42e58df811c31bafaded]
@id uniqueidentifier
,@calculateNow bit = 0
,@state int = 1
,@nextItemId uniqueidentifier = NULL OUTPUT
,@aggregateQueryRecordLimit int = 50000

AS
BEGIN
SET NOCOUNT ON;
DECLARE @v0 int
SET @v0 = 0

-- Declarations
DECLARE @result_money decimal(38,10)
SET @result_money=NULL
DECLARE @result decimal(38,10)
SET @result=NULL
DECLARE @previousResult money
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
DECLARE @exchRate decimal(23,10)
SET @exchRate=NULL

	 BEGIN TRY

-- Checking for Exchange Rate Is Null or Not
			SELECT @exchRate = [ExchangeRate] FROM [Account] WHERE [AccountId]=@id
			IF (@exchRate IS NULL ) BEGIN 

			IF (@calculateNow = 1)
			BEGIN
			   RAISERROR('-2147164122',11,0)
			END
			 SET @result = NULL
			 SET @state = 7 --CurrencyFieldMissing
			END
		 IF(@calculateNow=1)
		 BEGIN
				;WITH RollupHierarchy([Level], AccountId, ParentAccountId) AS 
				(
				SELECT 0, "account".AccountId, "account".ParentAccountId
				 FROM Account "account" WHERE "account".AccountId=@id
				UNION ALL
				SELECT [Level]+1, "account".AccountId, "account".ParentAccountId
				 FROM Account "account","RollupHierarchy" "RollupHierarchy" WHERE "account".ParentAccountId="RollupHierarchy".AccountId)
				

				SELECT @result=SUM(ROUND([IQ].[EstimatedValue_Base],2)), @maxLimitAggregate=MAX(__AggLimitExceededFlag__)
 FROM ( SELECT TOP (@aggregateQueryRecordLimit + 1) [aggregateEntity].EstimatedValue_Base, CASE WHEN ROW_NUMBER() OVER(ORDER BY (SELECT 1)) > @aggregateQueryRecordLimit THEN 1 ELSE 0 END AS __AggLimitExceededFlag__
				FROM [Opportunity] [aggregateEntity] 
				JOIN [RollupHierarchy] [hierarchy] ON [aggregateEntity].[ParentAccountId]=[hierarchy].[AccountId]

				WHERE ([aggregateEntity].StateCode = @v0)
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
						 SELECT @leafValue=SUM(ROUND([aggregateEntity].[EstimatedValue_Base],2))
						 FROM [Opportunity] [aggregateEntity] 

						 WHERE ([aggregateEntity].[ParentAccountId] = @id) 	 AND ( ([aggregateEntity].StateCode = @v0) ) 

						 SET @leafValue = ISNULL(@leafValue,0)
				END
		END

-- Hierarchy Value calculation
		 IF(@calculateNow=0) BEGIN
				IF (@state = 1) BEGIN 
						 IF EXISTS (SELECT [AccountId] FROM [Account] 
						 WHERE [OpenRevenue_State] != 1 AND [ParentAccountId] = @id )
						 BEGIN
								 SET @state=3 --Atleast one child is in error state
						 END
						 ELSE
						 BEGIN
								 SELECT @hierarchyValue=SUM([OpenRevenue_Base]) 
								 FROM [Account] 
								 WHERE ([ParentAccountId] = @id) AND [OpenRevenue_State]=1 
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

	SET @result = ROUND(@result,2)
		IF (@state = 1) BEGIN 
			 SET @result_money= ROUND( @result * @exchRate , 2)
		END
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
				IF(@ErrorMessage='-2147089081' OR @ErrorMessage='-2147164125' OR @ErrorMessage='-2147164122')
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
			IF(@result < -922337203685477.5808 OR @result > 922337203685477.5807 OR @result_money < -922337203685477.5808 OR @result_money > 922337203685477.5807)
			BEGIN	
				SET @result= NULL
				SET @result_money = NULL
				SET @state= 2 -- Overflow
			END
-- Update Statement


		 UPDATE [AccountBase]
		 SET @previousResult=[OpenRevenue_Base], [OpenRevenue_Base]=@result, [OpenRevenue]=@result_money, [OpenRevenue_Date]=@startDate, [OpenRevenue_State]=@state, @id=[ParentAccountId], [ModifiedOn] = GETUTCDATE()
		 WHERE [AccountId]=@id

IF( @id IS NOT NULL AND @calculateNow = 0 AND ((@previousResult IS NULL AND @result IS NOT NULL) OR (@result <> @previousResult)))
BEGIN
					SET @nextItemId = @id
					END
END
GO
