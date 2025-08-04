


-- This is a TVF version of fn_RollupByAccount_Generated and should be used going forward as it provides perf advantages over
-- the stored procedure version which relies on a temp table.
create function [dbo].[fn_RollupByAccount_Generated](
    @AccountId  uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit)
returns @tbl table (
    RollupId uniqueidentifier primary key clustered)
as
begin;

    insert into @tbl (RollupId) values (@AccountId);

    declare @level int = 1;
    while (@@rowcount != 0 and @level <= 5)
    begin;
        set @level = @level + 1;

        insert into @tbl (RollupId)
        select distinct top 20000 AccountId
        from AccountBase ab
             inner join @tbl ri
                 on ab.ParentAccountId = ri.RollupId
        where ab.AccountId not in (
                select RollupId
                from @tbl)
        Option (RECOMPILE);

    end; -- end while (@@rowcount != 0 and @level <= 5)

    insert into @tbl (RollupId)
    select distinct top 20000 ContactId
    from ContactBase
    where ParentCustomerId = @AccountId
          and ParentCustomerIdType = 1;

    -- Extended rollup
    -- * ContactInvoices
    -- * ContactQuotes
    -- * ContactOrders
    -- * CustomerOpportunityRole

    if (@Extended <> 0)
    begin;
        insert into @tbl (RollupId)
        select distinct top 20000 q.QuoteId
        from QuoteBase as q
             inner join ContactQuotes as cq
                 on q.QuoteId = cq.QuoteId
        where exists (
                select RollupId
                from @tbl
                where cq.ContactId = RollupId)
            and not exists (
                select RollupId
                from @tbl
                where q.QuoteId = RollupId)
        Option (RECOMPILE);

        insert into @tbl (RollupId)
        select distinct top 20000 i.InvoiceId
        from InvoiceBase as i
             inner join ContactInvoices as ci
                 on i.InvoiceId = ci.InvoiceId
        where exists (
                    select RollupId
                    from @tbl
                    where ci.ContactId = RollupId)
              and not exists (
                    select RollupId
                    from @tbl
                    where i.InvoiceId = RollupId)
        Option (RECOMPILE);

        insert into @tbl (RollupId)
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
        insert into @tbl (RollupId)
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
        insert into @tbl (RollupId)
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

        insert into @tbl (RollupId)
        select distinct top 20000 c.ContractId
        from ContractBase as c
        where c.BillingCustomerId = @AccountId
              and c.BillingCustomerIdType = 1
              and not exists (
                    select RollupId
                    from @tbl
                    where c.ContractId = RollupId)
        Option (RECOMPILE);

    end; -- end if (@Extended <> 0)

    insert into @tbl (RollupId)
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

    insert into @tbl (RollupId)
    select distinct top 20000 c.ContractId
    from ContractBase as c
    where c.CustomerId = @AccountId
          and c.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where c.ContractId = RollupId)
    Option (RECOMPILE);

    insert into @tbl (RollupId)
    select distinct top 20000 i.IncidentId
    from IncidentBase as i
    where i.CustomerId = @AccountId
          and i.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where i.IncidentId = RollupId)
    Option (RECOMPILE);

    insert into @tbl (RollupId)
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

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl (RollupId)
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

    end; -- end if (@ActivityRollup <> 0)

    insert into @tbl (RollupId)
    select distinct top 20000 o.OpportunityId
    from OpportunityBase as o
    where o.CustomerId = @AccountId
          and o.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where o.OpportunityId = RollupId)
    Option (RECOMPILE);

    if (@Extended <> 0)
    begin;
        -- Account/Contact from CustomerOpportunityRole.
        insert into @tbl (RollupId)
        select distinct top 20000 cor.CustomerId
        from CustomerOpportunityRoleBase as cor
             inner join @tbl ri
                 on cor.OpportunityId = ri.RollupId
        where not exists (
                select RollupId
                from @tbl
                where cor.CustomerId = RollupId)
        Option (RECOMPILE);
    end;

    insert into @tbl (RollupId)
    select distinct top 20000 q.QuoteId
    from QuoteBase as q
    where q.CustomerId = @AccountId
          and q.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where q.QuoteId = RollupId)
    Option (RECOMPILE);

    insert into @tbl (RollupId)
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

    insert into @tbl (RollupId)
    select distinct top 20000 so.SalesOrderId
    from SalesOrderBase as so
    where so.CustomerId = @AccountId
          and so.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where so.SalesOrderId = RollupId)
    Option (RECOMPILE);

    insert into @tbl (RollupId)
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

    insert into @tbl (RollupId)
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

    insert into @tbl (RollupId)
    select distinct top 20000 i.InvoiceId
    from InvoiceBase as i
    where i.CustomerId = @AccountId
          and i.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where i.InvoiceId = RollupId)
    Option (RECOMPILE);

    insert into @tbl (RollupId)
    select distinct top 20000 ab.OriginatingLeadId
    from AccountBase as ab
    where ab.AccountId = @AccountId
          and ab.OriginatingLeadId is not null
          and not exists (
                select RollupId
                from @tbl
                where ab.OriginatingLeadId = RollupId)
    Option (RECOMPILE);

    insert into @tbl (RollupId)
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
        insert into @tbl (RollupId)
        select distinct top 20000 ob.OriginatingLeadId
        from OpportunityBase as ob
             inner join @tbl as ri
                 on ob.OpportunityId = ri.RollupId
        where ob.OriginatingLeadId is not null
              and not exists (
                    select RollupId
                    from @tbl
                    where ob.OriginatingLeadId = RollupId)
        Option (RECOMPILE);

        insert into @tbl (RollupId)
        select distinct top 20000 apb.ActivityId
        from ActivityPartyBase as apb
             inner join @tbl as ri
                 on apb.PartyId = ri.RollupId
                 where not exists(select RollupId from @tbl where apb.ActivityId = RollupId) 
        Option (RECOMPILE);

    end; -- end if (@ActivityRollup <> 0)

    return;
end;
