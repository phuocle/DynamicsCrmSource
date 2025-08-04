


-- This is a TVF version of p_RollupByContact and should be used going forward as it provides perf advantages over
-- the stored procedure version which relies on a temp table.
create function [dbo].[fn_RollupByContact_Generated](
    @ContactId  uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit)
returns @tbl table (
    RollupId uniqueidentifier primary key clustered)
as
begin;
    insert into @tbl (RollupId) values (@ContactId);

    insert into @tbl (RollupId)
    select distinct top 20000 ContactId
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
        insert into @tbl(RollupId)
        select distinct top 20000 qb.QuoteId
        from QuoteBase as qb
             inner join ContactQuotes as cq
                 on qb.QuoteId = cq.QuoteId
        where exists (
                    select RollupId
                    from @tbl
                    where cq.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from @tbl
                    where qb.QuoteId = RollupId)
        Option (RECOMPILE);

        insert into @tbl(RollupId)
        select distinct top 20000 ib.InvoiceId
        from InvoiceBase as ib
             inner join ContactInvoices as ci
                 on ib.InvoiceId = ci.InvoiceId
        where exists (
                    select RollupId
                    from @tbl
                    where ci.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from @tbl
                    where ib.InvoiceId = RollupId)
        Option (RECOMPILE);

        insert into @tbl(RollupId)
        select distinct top 20000 s.SalesOrderId
        from SalesOrderBase as s
             inner join ContactOrders as co
                 on s.SalesOrderId = co.SalesOrderId
        where exists (
                    select RollupId
                    from @tbl
                    where co.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from @tbl
                    where s.SalesOrderId = RollupId)
        Option (RECOMPILE);

        -- Opportunities from CustomerOpportunityRole.
        insert into @tbl(RollupId)
        select distinct top 20000 cor.OpportunityId
        from CustomerOpportunityRoleBase as cor
             inner join @tbl ri
                 on cor.CustomerId = ri.RollupId
        where not exists (
                select RollupId
                from @tbl
                where cor.OpportunityId = RollupId)
        Option (RECOMPILE);

        -- Contracts
        insert into @tbl(RollupId)
        select distinct top 20000 c.ContractId
        from ContractBase as c
             inner join @tbl ri
                 on c.BillingCustomerId = ri.RollupId
        where c.BillingCustomerIdType = 2
              and not exists (
                    select RollupId
                    from @tbl
                    where c.ContractId = RollupId)
        Option (RECOMPILE);

    end; -- end if (@Extended <> 0)

    insert into @tbl(RollupId)
    select distinct top 20000 c.ContractId
    from ContractBase as c
         inner join @tbl ri
             on c.CustomerId = ri.RollupId
    where c.CustomerIdType = 2
          and not exists (
                    select RollupId
                    from @tbl
                    where c.ContractId = RollupId)
    Option (RECOMPILE);

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl(RollupId)
        select distinct top 20000 i.IncidentId
        from IncidentBase as i
             inner join @tbl ri
                 on i.CustomerId = ri.RollupId
        where i.CustomerIdType = 2
              and not exists (
                    select RollupId
                    from @tbl
                    where i.IncidentId = RollupId)
        Option (RECOMPILE);

    end; -- end if (@ActivityRollup <> 0)

    insert into @tbl(RollupId)
    select distinct top 20000 o.OpportunityId
    from OpportunityBase as o
         inner join @tbl ri
             on o.CustomerId = ri.RollupId
    where o.CustomerIdType = 2
          and not exists (
                    select RollupId
                    from @tbl
                    where o.OpportunityId = RollupId)
    Option (RECOMPILE);

    if (@Extended <> 0)
    begin;
        -- Account/Contact from CustomerOpportunityRole.
        insert into @tbl(RollupId)
        select distinct top 20000 cor.CustomerId
        from CustomerOpportunityRoleBase as cor
             inner join @tbl ri
                 on cor.OpportunityId = ri.RollupId
        where not exists (
                select RollupId
                from @tbl
                where cor.CustomerId = RollupId)
        Option (RECOMPILE);
    end; -- end if (@Extended <> 0)

    insert into @tbl(RollupId)
    select distinct top 20000 q.QuoteId
    from QuoteBase as q
         inner join @tbl ri
             on q.CustomerId = ri.RollupId
    where q.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where q.QuoteId = RollupId)
    Option (RECOMPILE);

    insert into @tbl(RollupId)
    select distinct top 20000 so.SalesOrderId
    from SalesOrderBase as so
         inner join @tbl ri
             on so.CustomerId = ri.RollupId
    where so.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where so.SalesOrderId = RollupId)
    Option (RECOMPILE);

    insert into @tbl(RollupId)
    select distinct top 20000 i.InvoiceId
    from InvoiceBase as i
         inner join @tbl ri
             on i.CustomerId = ri.RollupId
    where i.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where i.InvoiceId = RollupId)
    Option (RECOMPILE);

    insert into @tbl(RollupId)
    select distinct top 20000 cb.OriginatingLeadId
    from ContactBase as cb
         inner join @tbl as ri
             on cb.ContactId = ri.RollupId
    where cb.OriginatingLeadId is not null
          and not exists (
                select RollupId
                from @tbl
                where cb.OriginatingLeadId = RollupId)
    Option (RECOMPILE);

-- Placeholder for the dynamically generated components. Please don't remove or modify.

-- End of dynamically generated components.

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl(RollupId)
        select distinct top 20000 ob.OriginatingLeadId
        from OpportunityBase as ob
             inner join @tbl as ri
                 on ob.OpportunityId = ri.RollupId
        where ob.OriginatingLeadId is not null
        and not exists (
                select RollupId
                from @tbl
                where RollupId = ob.OriginatingLeadId)
        Option (RECOMPILE);

        insert into @tbl(RollupId)
        select distinct top 20000 apb.ActivityId
        from ActivityPartyBase as apb
             inner join @tbl as ri
                 on apb.PartyId = ri.RollupId
                 where not exists(select RollupId from @tbl where apb.ActivityId = RollupId) 
        Option (RECOMPILE);

    end; -- end if (@ActivityRollup <> 0)

    return;
end;
