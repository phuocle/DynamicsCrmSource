
CREATE PROCEDURE [dbo].[p_UpdateSkipPriceCalcForOQOIEntitiesInDiscount]
(
     @discountId as uniqueidentifier
)
AS
BEGIN 
    SET nocount on
IF EXISTS (SELECT * FROM sys.columns WHERE object_id =OBJECT_ID(N'[dbo].[quote]') AND name = 'skippricecalculation')
BEGIN
    update quote SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND QuoteId in (SELECT distinct QuoteId FROM QuoteDetail qd,ProductPriceLevel ppl,Discount d WHERE ppl.ProductId = qd.ProductId AND ppl.DiscountTypeId = d.DiscountTypeId AND d.DiscountId = @discountId);
	update Invoice SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND InvoiceId in (SELECT distinct InvoiceId FROM InvoiceDetail id,ProductPriceLevel ppl,Discount d WHERE ppl.ProductId = id.ProductId AND ppl.DiscountTypeId = d.DiscountTypeId AND d.DiscountId = @discountId);
	update Opportunity SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND OpportunityId in (SELECT distinct OpportunityId FROM OpportunityProduct op,ProductPriceLevel ppl,Discount d WHERE ppl.ProductId = op.ProductId AND ppl.DiscountTypeId = d.DiscountTypeId AND d.DiscountId = @discountId);
	update SalesOrder SET skippricecalculation = 0 WHERE StateCode = 0 AND skippricecalculation != 0 AND SalesOrderId in (SELECT distinct SalesOrderId FROM SalesOrderDetail sod,ProductPriceLevel ppl,Discount d WHERE ppl.ProductId = sod.ProductId AND ppl.DiscountTypeId = d.DiscountTypeId AND d.DiscountId = @discountId);
	END;
END;