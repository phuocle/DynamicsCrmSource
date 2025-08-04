create   procedure [dbo].[p_RollupByOpportunityTemplate](
    @OpportunityId  uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit)
as
begin;
    create table #rolluptbl (RollupId uniqueidentifier PRIMARY KEY);

	insert into #rolluptbl (RollupId)
    select lb.LeadId
    from LeadBase as lb
         inner join OpportunityBase as ob
             on lb.LeadId = ob.OriginatingLeadId
    where ob.OpportunityId = @OpportunityId;

    -- Add Related Quotes of Opportunity.
    insert into #rolluptbl (RollupId)
    select distinct qb.QuoteId
    from QuoteBase as qb
         inner join #rolluptbl ri
             on qb.OpportunityId = ri.RollupId
    where not exists (
            select RollupId
            from #rolluptbl
            where qb.QuoteId = RollupId)
    		--[PLACEHOLDER_QUERY_HINT]--;

    -- Add Related Orders of opportunity and above quotes.
    insert into #rolluptbl (RollupId)
    select distinct ord.SalesOrderId
    from SalesOrderBase as ord
         inner join #rolluptbl ri
             on ord.OpportunityId = ri.RollupId
    where not exists (
            select RollupId
            from #rolluptbl
            where ord.SalesOrderId = RollupId)
    		--[PLACEHOLDER_QUERY_HINT]--;

    insert into #rolluptbl (RollupId)
    select distinct ord.SalesOrderId
    from SalesOrderBase as ord
         inner join #rolluptbl ri
             on ord.QuoteId = ri.RollupId
    where not exists (
            select RollupId
            from #rolluptbl
            where ord.SalesOrderId = RollupId)
    --[PLACEHOLDER_QUERY_HINT]--;

    -- Add Related Invoices of opportunity and above Orders.
    insert into #rolluptbl (RollupId)
    select distinct inv.InvoiceId
    from InvoiceBase as inv
         inner join #rolluptbl ri
             on inv.OpportunityId = ri.RollupId
    where not exists (
            select RollupId
            from #rolluptbl
            where inv.InvoiceId = RollupId)
    		--[PLACEHOLDER_QUERY_HINT]--;

    insert into #rolluptbl (RollupId)
    select distinct inv.InvoiceId
    from InvoiceBase as inv
         inner join #rolluptbl ri
             on inv.SalesOrderId = ri.RollupId
    where not exists (
            select RollupId
            from #rolluptbl
            where inv.InvoiceId = RollupId)
    		--[PLACEHOLDER_QUERY_HINT]--;

-- Placeholder for the dynamically generated components. Please don't remove or modify.
--[PLACEHOLDER]--
-- End of dynamically generated components.

    if (@ActivityRollup <> 0)
    begin;
        insert into #rolluptbl(RollupId)
        select distinct apb.ActivityId
        from ActivityPartyBase as apb
             inner join #rolluptbl as ri
                 on apb.PartyId = ri.RollupId
                 where not exists(select RollupId from #rolluptbl where apb.ActivityId = RollupId) 
        		--[PLACEHOLDER_QUERY_HINT]--;

    end; -- if (@ActivityRollup <> 0)
	
	select RollupId from #rolluptbl;
	
    return;
end;
