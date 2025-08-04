create   procedure [dbo].[p_RollupByContactTemplate](
    @ContactId  uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit)
as
begin;
	create table #rolluptbl (RollupId uniqueidentifier PRIMARY KEY);

    insert into #rolluptbl (RollupId)
    select distinct ContactId
    from ContactBase
    where ParentCustomerId = @ContactId
          and ParentCustomerIdType = 2;

    -- Extended rollup
    -- * ContactInvoices
    -- * ContactQuotes
    -- * ContactOrders
    -- * CustomerOpportunityRole

    if (@Extended <> 0)
    begin;
        insert into #rolluptbl(RollupId)
        select distinct qb.QuoteId
        from QuoteBase as qb
             inner join ContactQuotes as cq
                 on qb.QuoteId = cq.QuoteId
        where exists (
                    select RollupId
                    from #rolluptbl
                    where cq.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from #rolluptbl
                    where qb.QuoteId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

        insert into #rolluptbl(RollupId)
        select distinct ib.InvoiceId
        from InvoiceBase as ib
             inner join ContactInvoices as ci
                 on ib.InvoiceId = ci.InvoiceId
        where exists (
                    select RollupId
                    from #rolluptbl
                    where ci.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from #rolluptbl
                    where ib.InvoiceId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

        insert into #rolluptbl(RollupId)
        select distinct s.SalesOrderId
        from SalesOrderBase as s
             inner join ContactOrders as co
                 on s.SalesOrderId = co.SalesOrderId
        where exists (
                    select RollupId
                    from #rolluptbl
                    where co.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from #rolluptbl
                    where s.SalesOrderId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

        -- Opportunities from CustomerOpportunityRole.
        insert into #rolluptbl(RollupId)
        select distinct cor.OpportunityId
        from CustomerOpportunityRoleBase as cor
             inner join #rolluptbl ri
                 on cor.CustomerId = ri.RollupId
        where not exists (
                select RollupId
                from #rolluptbl
                where cor.OpportunityId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;

        -- Contracts
        insert into #rolluptbl(RollupId)
        select distinct c.ContractId
        from ContractBase as c
             inner join #rolluptbl ri
                 on c.BillingCustomerId = ri.RollupId
        where c.BillingCustomerIdType = 2
              and not exists (
                    select RollupId
                    from #rolluptbl
                    where c.ContractId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

    end; -- end if (@Extended <> 0)

    insert into #rolluptbl(RollupId)
    select distinct c.ContractId
    from ContractBase as c
         inner join #rolluptbl ri
             on c.CustomerId = ri.RollupId
    where c.CustomerIdType = 2
          and not exists (
                    select RollupId
                    from #rolluptbl
                    where c.ContractId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

    if (@ActivityRollup <> 0)
    begin;
        insert into #rolluptbl(RollupId)
        select distinct i.IncidentId
        from IncidentBase as i
             inner join #rolluptbl ri
                 on i.CustomerId = ri.RollupId
        where i.CustomerIdType = 2
              and not exists (
                    select RollupId
                    from #rolluptbl
                    where i.IncidentId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

    end; -- end if (@ActivityRollup <> 0)

    insert into #rolluptbl(RollupId)
    select distinct o.OpportunityId
    from OpportunityBase as o
         inner join #rolluptbl ri
             on o.CustomerId = ri.RollupId
    where o.CustomerIdType = 2
          and not exists (
                    select RollupId
                    from #rolluptbl
                    where o.OpportunityId = RollupId)
					--[PLACEHOLDER_QUERY_HINT]--;

    if (@Extended <> 0)
    begin;
        -- Account/Contact from CustomerOpportunityRole.
        insert into #rolluptbl(RollupId)
        select distinct cor.CustomerId
        from CustomerOpportunityRoleBase as cor
             inner join #rolluptbl ri
                 on cor.OpportunityId = ri.RollupId
        where not exists (
                select RollupId
                from #rolluptbl
                where cor.CustomerId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;
    end; -- end if (@Extended <> 0)

    insert into #rolluptbl(RollupId)
    select distinct q.QuoteId
    from QuoteBase as q
         inner join #rolluptbl ri
             on q.CustomerId = ri.RollupId
    where q.CustomerIdType = 2
          and not exists (
                select RollupId
                from #rolluptbl
                where q.QuoteId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;

    insert into #rolluptbl(RollupId)
    select distinct so.SalesOrderId
    from SalesOrderBase as so
         inner join #rolluptbl ri
             on so.CustomerId = ri.RollupId
    where so.CustomerIdType = 2
          and not exists (
                select RollupId
                from #rolluptbl
                where so.SalesOrderId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;

    insert into #rolluptbl(RollupId)
    select distinct i.InvoiceId
    from InvoiceBase as i
         inner join #rolluptbl ri
             on i.CustomerId = ri.RollupId
    where i.CustomerIdType = 2
          and not exists (
                select RollupId
                from #rolluptbl
                where i.InvoiceId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;

    insert into #rolluptbl(RollupId)
    select distinct cb.OriginatingLeadId
    from ContactBase as cb
         inner join #rolluptbl as ri
             on cb.ContactId = ri.RollupId
    where cb.OriginatingLeadId is not null
          and not exists (
                select RollupId
                from #rolluptbl
                where cb.OriginatingLeadId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;

-- Placeholder for the dynamically generated components. Please don't remove or modify.
--[PLACEHOLDER]--
-- End of dynamically generated components.

    if (@ActivityRollup <> 0)
    begin;
        insert into #rolluptbl(RollupId)
        select distinct ob.OriginatingLeadId
        from OpportunityBase as ob
             inner join #rolluptbl as ri
                 on ob.OpportunityId = ri.RollupId
        where ob.OriginatingLeadId is not null
        and not exists (
                select RollupId
                from #rolluptbl
                where RollupId = ob.OriginatingLeadId)
				--[PLACEHOLDER_QUERY_HINT]--;

        insert into #rolluptbl(RollupId)
        select distinct apb.ActivityId
        from ActivityPartyBase as apb
             inner join #rolluptbl as ri
                 on apb.PartyId = ri.RollupId
                 where not exists(select RollupId from #rolluptbl where apb.ActivityId = RollupId)
				--[PLACEHOLDER_QUERY_HINT]--;

    end; -- end if (@ActivityRollup <> 0)
	
	select RollupId from #rolluptbl;

    return;
end;
