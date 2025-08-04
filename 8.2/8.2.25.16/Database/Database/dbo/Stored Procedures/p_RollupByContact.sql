

create procedure dbo.p_RollupByContact
    @ContactId      uniqueidentifier,
    @Extended       bit,
    @ActivityRollup bit
as;
begin;
    set nocount on;

    -- Create temporary table to store a list of id's.
    -- Create Table #RollupIds (PartyId uniqueidentifier PRIMARY KEY).
    -- Table must be created outside sproc.
    --
    insert into #RollupIds (RollupId) values (@ContactId);

    insert into #RollupIds (RollupId)
    select distinct ContactId
    from ContactBase
    where ParentCustomerId = @ContactId
          and ParentCustomerIdType = 2;

    -- Extended rollup
    -- * ContactInvoices
    -- * ContactQuotes
    -- * ContactOrders
    -- * CustomerOpportunityRole
    --
    if (@Extended <> 0)
    begin;
        insert into #RollupIds (RollupId)
        select distinct q.QuoteId 
        from QuoteBase as q
             inner join ContactQuotes as cq
                 on q.QuoteId = cq.QuoteId
        where exists (
                    select RollupId
                    from #RollupIds
                    where cq.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from #RollupIds
                    where q.QuoteId = RollupId);

        insert into #RollupIds (RollupId)
        select distinct i.InvoiceId 
        from InvoiceBase as i
             inner join ContactInvoices as ci
                 on i.InvoiceId = ci.InvoiceId
        where exists (
                    select RollupId
                    from #RollupIds
                    where ci.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from #RollupIds
                    where i.InvoiceId = RollupId);

        insert into #RollupIds (RollupId)
        select distinct s.SalesOrderId
        from SalesOrderBase as s
             inner join ContactOrders as co
                 on s.SalesOrderId = co.SalesOrderId
        where exists (
                    select RollupId
                    from #RollupIds
                    where co.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from #RollupIds
                    where s.SalesOrderId = RollupId);

        -- Opportunities from CustomerOpportunityRole.
        insert into #RollupIds (RollupId)
        select distinct cor.OpportunityId
        from CustomerOpportunityRoleBase as cor
             inner join #RollupIds ri
                 on cor.CustomerId = ri.RollupId
        where not exists (
                    select RollupId
                    from #RollupIds
                    where cor.OpportunityId = RollupId);

        -- Contracts
        --
        insert into #RollupIds (RollupId)
        select distinct c.ContractId
        from ContractBase as c
             inner join #RollupIds ri
                 on c.BillingCustomerId = ri.RollupId
        where c.BillingCustomerIdType = 2
              and not exists (
                    select RollupId
                    from #RollupIds
                    where c.ContractId = RollupId);

    end; -- end if (@Extended <> 0)

    insert into #RollupIds (RollupId)
    select distinct c.ContractId
    from ContractBase as c
         inner join #RollupIds ri
             on c.CustomerId = ri.RollupId
    where c.CustomerIdType = 2
          and not exists (
                select RollupId
                from #RollupIds
                where c.ContractId = RollupId);

    if (@ActivityRollup <> 0)
    begin;
        insert into #RollupIds (RollupId)
        select distinct i.IncidentId
        from IncidentBase as i
             inner join #RollupIds ri
                 on i.CustomerId = ri.RollupId
        where i.CustomerIdType = 2
              and not exists (
                    select RollupId
                    from #RollupIds
                    where i.IncidentId = RollupId);
    end;

    insert into #RollupIds (RollupId)
    select distinct o.OpportunityId
    from OpportunityBase as o
         inner join #RollupIds ri
             on o.CustomerId = ri.RollupId
    where o.CustomerIdType = 2
          and not exists (
                select RollupId
                from #RollupIds
                where o.OpportunityId = RollupId);

    if (@Extended <> 0)
    begin;
        -- Account/Contact from CustomerOpportunityRole.
        insert into #RollupIds (RollupId)
        select distinct cor.CustomerId
        from CustomerOpportunityRoleBase as cor
             inner join #RollupIds ri
                 on cor.OpportunityId = ri.RollupId
        where not exists (
                    select RollupId
                    from #RollupIds
                    where cor.CustomerId = RollupId);
    end;

    insert into #RollupIds (RollupId)
    select distinct q.QuoteId
    from QuoteBase as q
         inner join #RollupIds ri
             on q.CustomerId = ri.RollupId
    where q.CustomerIdType = 2
          and not exists (
                select RollupId
                from #RollupIds
                where q.QuoteId = RollupId);

    insert into #RollupIds (RollupId)
    select distinct so.SalesOrderId
    from SalesOrderBase as so
         inner join #RollupIds ri
             on so.CustomerId = ri.RollupId
    where so.CustomerIdType = 2
          and not exists (
                select RollupId
                from #RollupIds
                where so.SalesOrderId = RollupId);

    insert into #RollupIds (RollupId)
    select distinct i.InvoiceId
    from InvoiceBase as i
         inner join #RollupIds ri
             on i.CustomerId = ri.RollupId
    where i.CustomerIdType = 2
          and not exists (
                select RollupId
                from #RollupIds
                where i.InvoiceId = RollupId);

    insert into #RollupIds (RollupId)
    select distinct cb.OriginatingLeadId
    from ContactBase as cb
         inner join #RollupIds as ri
             on cb.ContactId = ri.RollupId
    where cb.OriginatingLeadId is not null
          and not exists (
                select RollupId
                from #RollupIds
                where cb.OriginatingLeadId = RollupId);

    if (@ActivityRollup <> 0)
    begin;
        insert into #RollupIds (RollupId)
        select distinct ob.OriginatingLeadId
        from OpportunityBase as ob
             inner join #RollupIds as ri
                 on ob.OpportunityId = ri.RollupId
        where ob.OriginatingLeadId is not null
              and not exists (
                    select RollupId
                    from #RollupIds
                    where RollupId = ob.OriginatingLeadId);

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