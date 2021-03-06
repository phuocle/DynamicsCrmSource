USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_RollupByAccount]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- This is a TVF version of fn_RollupByAccount and should be used going forward as it provides perf advantages over
-- the stored procedure version which relies on a temp table.
create function [dbo].[fn_RollupByAccount](
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
        select distinct AccountId
        from AccountBase ab
             inner join @tbl ri
                 on ab.ParentAccountId = ri.RollupId
        where ab.AccountId not in (
                select RollupId
                from @tbl)
        option (hash join, merge join);

    end; -- end while (@@rowcount != 0 and @level <= 5)

    insert into @tbl (RollupId)
    select distinct ContactId
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
        select distinct q.QuoteId
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
        option (hash join, merge join);

        insert into @tbl (RollupId)
        select distinct i.InvoiceId
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
        option (hash join, merge join);

        insert into @tbl (RollupId)
        select distinct s.SalesOrderId
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
        option (hash join, merge join);

        -- Opportunities from CustomerOpportunityRole.
        insert into @tbl (RollupId)
        select distinct cor.OpportunityId
        from CustomerOpportunityRoleBase as cor
             inner join @tbl ri
                 on cor.CustomerId = ri.RollupId
        where not exists (
                    select RollupId
                    from @tbl
                    where cor.OpportunityId = RollupId)
        option (hash join, merge join);

        -- Contracts
        insert into @tbl (RollupId)
        select distinct c.ContractId
        from ContractBase as c
             inner join @tbl ri
                 on c.BillingCustomerId = ri.RollupId
        where c.BillingCustomerIdType = 2
              and not exists (
                    select RollupId
                    from @tbl
                    where c.ContractId = RollupId)
        option (hash join, merge join);

        insert into @tbl (RollupId)
        select distinct c.ContractId
        from ContractBase as c
        where c.BillingCustomerId = @AccountId
              and c.BillingCustomerIdType = 1
              and not exists (
                    select RollupId
                    from @tbl
                    where c.ContractId = RollupId)
        option (hash join, merge join);

    end; -- end if (@Extended <> 0)

    insert into @tbl (RollupId)
    select distinct c.ContractId
    from ContractBase as c
         inner join @tbl ri
             on c.CustomerId = ri.RollupId
    where c.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where c.ContractId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct c.ContractId
    from ContractBase as c
    where c.CustomerId = @AccountId
          and c.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where c.ContractId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct i.IncidentId
    from IncidentBase as i
    where i.CustomerId = @AccountId
          and i.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where i.IncidentId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct i.IncidentId
    from IncidentBase as i
         inner join @tbl ri
             on i.CustomerId = ri.RollupId
    where i.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where i.IncidentId = RollupId)
    option (hash join, merge join);

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl (RollupId)
        select distinct o.OpportunityId
        from OpportunityBase as o
             inner join @tbl ri
                 on o.CustomerId = ri.RollupId
        where o.CustomerIdType = 2
              and not exists (
                    select RollupId
                    from @tbl
                    where o.OpportunityId = RollupId)
        option (hash join, merge join);

    end; -- end if (@ActivityRollup <> 0)

    insert into @tbl (RollupId)
    select distinct o.OpportunityId
    from OpportunityBase as o
    where o.CustomerId = @AccountId
          and o.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where o.OpportunityId = RollupId)
    option (hash join, merge join);

    if (@Extended <> 0)
    begin;
        -- Account/Contact from CustomerOpportunityRole.
        insert into @tbl (RollupId)
        select distinct cor.CustomerId
        from CustomerOpportunityRoleBase as cor
             inner join @tbl ri
                 on cor.OpportunityId = ri.RollupId
        where not exists (
                select RollupId
                from @tbl
                where cor.CustomerId = RollupId)
        option (hash join, merge join);
    end;

    insert into @tbl (RollupId)
    select distinct q.QuoteId
    from QuoteBase as q
    where q.CustomerId = @AccountId
          and q.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where q.QuoteId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct q.QuoteId
    from QuoteBase as q
         inner join @tbl ri
             on q.CustomerId = ri.RollupId
    where q.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where q.QuoteId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct so.SalesOrderId
    from SalesOrderBase as so
    where so.CustomerId = @AccountId
          and so.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where so.SalesOrderId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct so.SalesOrderId
    from SalesOrderBase as so
         inner join @tbl ri
             on so.CustomerId = ri.RollupId
    where so.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where so.SalesOrderId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct i.InvoiceId
    from InvoiceBase as i
         inner join @tbl ri
             on i.CustomerId = ri.RollupId
    where i.CustomerIdType = 2
          and not exists (
                select RollupId
                from @tbl
                where i.InvoiceId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct i.InvoiceId
    from InvoiceBase as i
    where i.CustomerId = @AccountId
          and i.CustomerIdType = 1
          and not exists (
                select RollupId
                from @tbl
                where i.InvoiceId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct ab.OriginatingLeadId
    from AccountBase as ab
    where ab.AccountId = @AccountId
          and ab.OriginatingLeadId is not null
          and not exists (
                select RollupId
                from @tbl
                where ab.OriginatingLeadId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct cb.OriginatingLeadId
    from ContactBase as cb
         inner join @tbl as ri
             on cb.ContactId = ri.RollupId
    where cb.OriginatingLeadId is not null
          and not exists (
                    select RollupId
                    from @tbl
                    where cb.OriginatingLeadId = RollupId)
    option (hash join, merge join);

-- Placeholder for the dynamically generated components. Please don't remove or modify.
--[PLACEHOLDER]--
-- End of dynamically generated components.

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl (RollupId)
        select distinct ob.OriginatingLeadId
        from OpportunityBase as ob
             inner join @tbl as ri
                 on ob.OpportunityId = ri.RollupId
        where ob.OriginatingLeadId is not null
              and not exists (
                    select RollupId
                    from @tbl
                    where ob.OriginatingLeadId = RollupId)
        option (hash join, merge join);

        insert into @tbl (RollupId)
        select distinct apb.ActivityId
        from ActivityPartyBase as apb
             inner join @tbl as ri
                 on apb.PartyId = ri.RollupId
        option (hash join, merge join);

    end; -- end if (@ActivityRollup <> 0)

    return;
end;

GO
