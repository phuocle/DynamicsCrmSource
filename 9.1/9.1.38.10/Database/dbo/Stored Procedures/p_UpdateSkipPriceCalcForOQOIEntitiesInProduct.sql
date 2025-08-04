
CREATE PROCEDURE [dbo].[p_UpdateSkipPriceCalcForOQOIEntitiesInProduct]
(
	 @productId as uniqueidentifier
)
AS
BEGIN 
	SET NOCOUNT ON
	DECLARE @SQLQueryForQuote NVARCHAR(MAX)
	DECLARE @SQLQueryForOpportunity NVARCHAR(MAX)
	DECLARE @SQLQueryForOrder NVARCHAR(MAX)
	DECLARE @SQLQueryForInvoice NVARCHAR(MAX)
	DECLARE @paramList NVARCHAR(500)
	SET @paramList = N'@productId uniqueidentifier'
IF EXISTS (SELECT * FROM sys.columns WHERE object_id =OBJECT_ID(N'[dbo].[quote]') AND name = 'skippricecalculation')
BEGIN
 SET @SQLQueryForOpportunity = 'update Opportunity SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND OpportunityId in (SELECT distinct OpportunityId FROM OpportunityProduct WHERE productId =  ''' + convert(nvarchar(36), @productId) +''' );';
   EXECUTE sp_executesql @SQLQueryForOpportunity,@paramList, @productId=@productId;
	SET @SQLQueryForQuote = 'update quote SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND QuoteId in (SELECT distinct QuoteId FROM QuoteDetail WHERE productId = ''' + convert(nvarchar(36), @productId) +'''); ';
	EXECUTE sp_executesql @SQLQueryForQuote,@paramList, @productId=@productId;
	SET @SQLQueryForOrder = 'update SalesOrder SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND SalesOrderId in (SELECT distinct SalesOrderId FROM SalesOrderDetail WHERE productId = ''' + convert(nvarchar(36), @productId) +''')';
	EXECUTE sp_executesql @SQLQueryForOrder,@paramList, @productId=@productId;
	 SET @SQLQueryForInvoice = 'update Invoice SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND InvoiceId in (select distinct InvoiceId FROM InvoiceDetail WHERE productId = ''' + convert(nvarchar(36), @productId) +'''); ';
	EXECUTE sp_executesql @SQLQueryForInvoice,@paramList, @productId=@productId;
	END;
END;