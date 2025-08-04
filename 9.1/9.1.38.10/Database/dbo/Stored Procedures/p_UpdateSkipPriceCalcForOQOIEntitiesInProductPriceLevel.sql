

CREATE PROCEDURE [dbo].[p_UpdateSkipPriceCalcForOQOIEntitiesInProductPriceLevel]
(
	 @productPriceLevelId as uniqueidentifier
)
AS
BEGIN 
	SET NOCOUNT ON
	DECLARE @SQLQueryForQuote NVARCHAR(MAX)
	DECLARE @SQLQueryForOpportunity NVARCHAR(MAX)
	DECLARE @SQLQueryForOrder NVARCHAR(MAX)
	DECLARE @SQLQueryForInvoice NVARCHAR(MAX)
	DECLARE @paramList NVARCHAR(500)
	SET @paramList = N'@productPriceLevelId uniqueidentifier'
IF EXISTS (SELECT * FROM sys.columns WHERE object_id =OBJECT_ID(N'[dbo].[quote]') AND name = 'skippricecalculation')
BEGIN
  SET @SQLQueryForOpportunity = 'update Opportunity SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND OpportunityId in (select distinct OpportunityId FROM OpportunityProduct op , ProductPriceLevel ppl WHERE ppl.ProductPriceLevelId = ''' + convert(nvarchar(36), @productPriceLevelId) +''' AND ppl.ProductId = op.ProductId);';
   EXECUTE sp_executesql @SQLQueryForOpportunity,@paramList, @productPriceLevelId=@productPriceLevelId;
	SET @SQLQueryForQuote = 'update quote SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND QuoteId in (select distinct QuoteId FROM QuoteDetail qd,ProductPriceLevel ppl WHERE ppl.ProductPriceLevelId = ''' + convert(nvarchar(36), @productPriceLevelId) +'''  AND ppl.ProductId = qd.ProductId)';
	EXECUTE sp_executesql @SQLQueryForQuote,@paramList, @productPriceLevelId=@productPriceLevelId;
	SET @SQLQueryForOrder = 'update SalesOrder SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND SalesOrderId in (select distinct SalesOrderId FROM SalesOrderDetail sd , ProductPriceLevel ppl WHERE ppl.ProductPriceLevelId = ''' + convert(nvarchar(36), @productPriceLevelId) +'''  AND ppl.ProductId = sd.ProductId)';
	EXECUTE sp_executesql @SQLQueryForOrder,@paramList, @productPriceLevelId=@productPriceLevelId;
	 SET @SQLQueryForInvoice = 'update Invoice SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND InvoiceId in (select distinct InvoiceId FROM InvoiceDetail id , ProductPriceLevel ppl WHERE ppl.ProductPriceLevelId = ''' + convert(nvarchar(36), @productPriceLevelId) +'''  AND ppl.ProductId = id.ProductId)';
	EXECUTE sp_executesql @SQLQueryForInvoice,@paramList, @productPriceLevelId=@productPriceLevelId;
	END;
END;