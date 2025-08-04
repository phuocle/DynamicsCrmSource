

create procedure dbo.p_NeglectedAccountRollup
    @subAccount    bit,
    @acctDepth     int,
    @subContact    bit,
    @contactDepth  int
as;
begin;
    set nocount on;

    -- Create temporary table to store a list of id's
    -- Create table #NARollupIds (
    --  ParentId uniqueidentifier,
    --  ChildId uniqueidentifier
    --      constraint [PK_NARollupIds] primary key clustered
    --  (   
    --      [ParentId],
    --      [ChildId]
    --  ) 
    --)
    -- This table must be created outside the sproc

    -- rollup the sub-account and sub-contact with specific depth 
    -- rollup related entities 

    if (@subAccount <> 0)
    begin;
        while (@acctDepth > 0)
        begin;
            insert into #NARollupIds (ParentId, ChildId)(
            select ri.ParentId,
                   a.AccountId 
            from AccountBase a
                 inner join #NARollupIds ri
                 on a.ParentAccountId = ri.ChildId
            where not exists (
                      select 1
                      from #NARollupIds 
                      where ri.ParentId = ParentId
                            and a.AccountId = ChildId));

            if (@@rowcount = 0)
            begin;   
                break;
            end;

            set @acctDepth = @acctDepth - 1;
        end;
    end;

    if (@subContact <> 0)
    begin;
        -- inserting contact ids
        insert into #NARollupIds (ParentId, ChildId)(
        select ri.ParentId,
               c.ContactId 
        from ContactBase c
             inner join #NARollupIds ri
                 on c.ParentCustomerId = ri.ChildId
        where c.ParentCustomerIdType = 1
              and not exists (
                select 1 from #NARollupIds 
                where c.ContactId = ChildId
                and ri.ParentId = ParentId));

        if (@@rowcount <> 0)
        begin;
            set @contactDepth = @contactDepth - 1;

            while (@contactDepth > 0)
            begin; 
                -- inserting contact ids
                insert into #NARollupIds (ParentId, ChildId)(
                select ri.ParentId,
                       c.ContactId 
                from ContactBase c
                     inner join #NARollupIds ri
                         on c.ParentCustomerId = ri.ChildId
                where c.ParentCustomerIdType = 2
                      and not exists (
                          select 1
                          from #NARollupIds 
                          where c.ContactId = ChildId
                                and ri.ParentId = ParentId));

                if (@@rowcount = 0)
                begin;   
                    break;
                end;

                set @contactDepth = @contactDepth - 1;
            end;
        end;

    end; -- end if (@subContact <> 0

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           c.ContractId
    from ContractBase as c
         inner join #NARollupIds ri
            on c.CustomerId  = ri.ChildId
    where c.CustomerIdType = 2
          and not exists (
                select 1
                from #NARollupIds 
                where c.ContractId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           c.ContractId
    from ContractBase as c
         inner join #NARollupIds ri
             on c.CustomerId = ri.ChildId
    where c.CustomerIdType = 1
          and not exists (
                  select 1
                  from #NARollupIds 
                  where c.ContractId = ChildId
                        and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           i.IncidentId
    from IncidentBase as i
         inner join #NARollupIds ri
             on i.CustomerId  = ri.ChildId
    where i.CustomerIdType = 1
          and not exists (
                select 1
                from #NARollupIds 
                where i.IncidentId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           i.IncidentId
    from IncidentBase as i
         inner join #NARollupIds ri
             on i.CustomerId  = ri.ChildId
    where i.CustomerIdType = 2
          and not exists(
                select 1
                from #NARollupIds
                where i.IncidentId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           o.OpportunityId
    from OpportunityBase as o
         inner join #NARollupIds ri
             on o.CustomerId = ri.ChildId 
    where o.CustomerIdType = 2
          and not exists(
                select 1
                from #NARollupIds 
                where o.OpportunityId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           o.OpportunityId
    from OpportunityBase as o
         inner join #NARollupIds ri
             on o.CustomerId = ri.ChildId
    where o.CustomerIdType = 1
          and not exists(
                select 1
                from #NARollupIds 
                where o.OpportunityId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           q.QuoteId
    from QuoteBase as q
         inner join #NARollupIds ri
             on q.CustomerId  = ri.ChildId
    where q.CustomerIdType = 1
          and not exists(
                select 1
                from #NARollupIds 
                where q.QuoteId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           q.QuoteId
    from QuoteBase as q
         inner join #NARollupIds ri
             on q.CustomerId = ri.ChildId
    where q.CustomerIdType = 2
          and not exists(
                select 1
                from #NARollupIds 
                where q.QuoteId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           so.SalesOrderId
    from SalesOrderBase as so
         inner join #NARollupIds ri
             on so.CustomerId  = ri.ChildId
    where so.CustomerIdType = 1
          and not exists(
                select 1
                from #NARollupIds 
                where so.SalesOrderId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           so.SalesOrderId
    from SalesOrderBase as so
         inner join #NARollupIds ri
             on so.CustomerId = ri.ChildId
    where so.CustomerIdType = 2
          and not exists(
                select 1
                from #NARollupIds 
                where so.SalesOrderId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           i.InvoiceId
    from InvoiceBase as i
         inner join #NARollupIds ri
             on i.CustomerId = ri.ChildId
    where i.CustomerIdType = 2
          and not exists(
                select 1
                from #NARollupIds 
                where i.InvoiceId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           i.InvoiceId
    from InvoiceBase as i
         inner join #NARollupIds ri
            on i.CustomerId = ri.ChildId
    where i.CustomerIdType = 1
          and not exists(
                select 1
                from #NARollupIds 
                where i.InvoiceId = ChildId
                      and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           account.OriginatingLeadId 
    from AccountBase as account
         inner join #NARollupIds ri
             on account.AccountId = ri.ChildId
    where account.OriginatingLeadId is not null
          and not exists(
                    select 1
                    from #NARollupIds 
                    where account.OriginatingLeadId = ChildId
                          and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select ri.ParentId,
           contact.OriginatingLeadId
    from ContactBase as contact
         inner join #NARollupIds as ri
             on contact.ContactId = ri.ChildId
    where contact.OriginatingLeadId is not null
          and not exists(
                    select 1
                    from #NARollupIds 
                    where contact.OriginatingLeadId = ChildId
                          and ri.ParentId = ParentId));

    insert into #NARollupIds(ParentId, ChildId)(
    select distinct ri.ParentId,
           opportunity.OriginatingLeadId
    from OpportunityBase as opportunity
         inner join #NARollupIds as ri
             on opportunity.OpportunityId = ri.ChildId
    where opportunity.OriginatingLeadId is not null
          and not exists(
                    select 1
                    from #NARollupIds 
                    where opportunity.OriginatingLeadId = ChildId
                          and ri.ParentId = ParentId));

end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_NeglectedAccountRollup] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_NeglectedAccountRollup] TO [CRMReaderRole]
    AS [dbo];

