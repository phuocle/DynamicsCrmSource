SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_RollupByOpportunity]
    @OpportunityId uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit
as;
begin;
    set nocount on;

    -- Create temporary table to store a list of id's.
    -- Create Table #RollupIds (RollupId uniqueidentifier PRIMARY KEY).
    -- The above temp table must be created outside sproc.
    --
    insert Into #RollupIds (RollupId) values (@OpportunityId);

    insert into #RollupIds (RollupId)
    select lb.LeadId
    from LeadBase as lb
         inner join OpportunityBase as ob
             on lb.LeadId = ob.OriginatingLeadId
    where ob.OpportunityId = @OpportunityId;

    -- Add Related Quotes of Opportunity.
    insert into #RollupIds (RollupId)
    select distinct q.QuoteId
    from QuoteBase as q
         inner join #RollupIds ri
             on q.OpportunityId = ri.RollupId
    where not exists (
                select RollupId
                from #RollupIds
                where q.QuoteId = RollupId);

    -- Add Related Orders of opportunity and above quotes.
    insert into #RollupIds (RollupId)
    select distinct ord.SalesOrderId
    from SalesOrderBase as ord
         inner join #RollupIds ri
             on ord.OpportunityId = ri.RollupId
    where not exists (
                select RollupId
                from #RollupIds
                where ord.SalesOrderId = RollupId);

    insert into #RollupIds (RollupId)
    select distinct ord.SalesOrderId
    from SalesOrderBase as ord
         inner join #RollupIds ri
             on ord.QuoteId = ri.RollupId
    where not exists (
                select RollupId
                from #RollupIds
                where ord.SalesOrderId = RollupId);

    -- Add Related Invoices of opportunity and above Orders.
    insert into #RollupIds (RollupId)
    select distinct inv.InvoiceId
    from InvoiceBase as inv
         inner join #RollupIds ri
             on inv.OpportunityId = ri.RollupId
    where not exists (
                select RollupId
                from #RollupIds
                where inv.InvoiceId = RollupId);

    insert Into #RollupIds (RollupId)
    select distinct inv.InvoiceId
    from InvoiceBase as inv
         inner join #RollupIds ri
             on inv.SalesOrderId = ri.RollupId
    where not exists (
                select RollupId
                from #RollupIds
                where inv.InvoiceId = RollupId);

    if (@ActivityRollup <> 0)
    begin;
        insert into #RollupIds (RollupId)
        select distinct apb.ActivityId
        from ActivityPartyBase as apb
             inner join #RollupIds as ri
                 on apb.PartyId = ri.RollupId
        where not exists (
                    select RollupId
                    from #RollupIds
                    where apb.ActivityId = RollupId);
    end; -- end if (@ActivityRollup <> 0)
end;
GO
