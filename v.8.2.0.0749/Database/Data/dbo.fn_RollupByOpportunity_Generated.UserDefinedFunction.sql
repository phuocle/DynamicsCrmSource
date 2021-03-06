USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_RollupByOpportunity_Generated]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO




-- This is a TVF version of fn_RollupByOpportunity_Generated and should be used going forward as it provides perf advantages over
--  the stored procedure version which relies on a temp table.
create function [dbo].[fn_RollupByOpportunity_Generated](
    @OpportunityId  uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit)
returns @tbl table (
    RollupId uniqueidentifier primary key clustered) 
as
begin;
    insert into @tbl (RollupId) values (@OpportunityId);

    insert into @tbl (RollupId)
    select lb.LeadId
    from LeadBase as lb
         inner join OpportunityBase as ob
             on lb.LeadId = ob.OriginatingLeadId
    where ob.OpportunityId = @OpportunityId;

    -- Add Related Quotes of Opportunity.
    insert into @tbl (RollupId)
    select distinct qb.QuoteId
    from QuoteBase as qb
         inner join @tbl ri
             on qb.OpportunityId = ri.RollupId
    where not exists (
            select RollupId
            from @tbl
            where qb.QuoteId = RollupId)
    option (hash join, merge join);

    -- Add Related Orders of opportunity and above quotes.
    insert into @tbl (RollupId)
    select distinct ord.SalesOrderId
    from SalesOrderBase as ord
         inner join @tbl ri
             on ord.OpportunityId = ri.RollupId
    where not exists (
            select RollupId
            from @tbl
            where ord.SalesOrderId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct ord.SalesOrderId
    from SalesOrderBase as ord
         inner join @tbl ri
             on ord.QuoteId = ri.RollupId
    where not exists (
            select RollupId
            from @tbl
            where ord.SalesOrderId = RollupId)
    option (hash join, merge join);

    -- Add Related Invoices of opportunity and above Orders.
    insert into @tbl (RollupId)
    select distinct inv.InvoiceId
    from InvoiceBase as inv
         inner join @tbl ri
             on inv.OpportunityId = ri.RollupId
    where not exists (
            select RollupId
            from @tbl
            where inv.InvoiceId = RollupId)
    option (hash join, merge join);

    insert into @tbl (RollupId)
    select distinct inv.InvoiceId
    from InvoiceBase as inv
         inner join @tbl ri
             on inv.SalesOrderId = ri.RollupId
    where not exists (
            select RollupId
            from @tbl
            where inv.InvoiceId = RollupId)
    option (hash join, merge join);

-- Placeholder for the dynamically generated components. Please don't remove or modify.

-- End of dynamically generated components.

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl(RollupId)
        select distinct apb.ActivityId
        from ActivityPartyBase as apb
             inner join @tbl as ri
                 on apb.PartyId = ri.RollupId
        option (hash join, merge join);
    end; -- if (@ActivityRollup <> 0)

    return;
end;


GO
