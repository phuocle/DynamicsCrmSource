

create procedure dbo.p_AccountOVRollup
    @AccountId    uniqueidentifier,
    @subAccount   bit,
    @acctDepth    int,
    @subContact   bit,
    @contactDepth int
as;
begin;

    set nocount on;

    -- Create temporary table to store a list of id's.
    -- Create Table #CustomerIds (CustomerId uniqueidentifier PRIMARY KEY).
    -- This table must be created outside the sproc.

    -- Rollup the sub-account and sub-contact with specific depth.
    insert into #CustomerIds (CustomerId) values (@AccountId);

    if (@subAccount <> 0)
    begin;
        while (@acctDepth > 0)
        begin;
            insert into #CustomerIds (CustomerId) (
            select a.AccountId
            from AccountBase a
                 inner join #CustomerIds ri
                 on a.ParentAccountId = ri.CustomerId
            where not exists (
                select CustomerId
                from #CustomerIds
                where a.AccountId = CustomerId));

            if (@@rowcount = 0)
            begin;
                break;
            end;

            set @acctDepth = @acctDepth - 1;
        end;
    end;

    if (@subContact <> 0)
    begin;
        -- Inserting contact ids.
        insert into #CustomerIds (CustomerId) (
        select c.ContactId
        from ContactBase c
             inner join #CustomerIds ri
             on c.ParentCustomerId = ri.CustomerId
        where c.ParentCustomerIdType = 1
              and not exists (
                  select CustomerId
                  from #CustomerIds
                  where c.ContactId = CustomerId));

        if (@@rowcount <> 0)
        begin;
            set @contactDepth = @contactDepth - 1;

            while (@contactDepth > 0)
            begin;
                -- Inserting contact ids
                insert into #CustomerIds (CustomerId) (
                select c.ContactId
                from ContactBase c
                     inner join #CustomerIds ri
                         on c.ParentCustomerId = ri.CustomerId
                where c.ParentCustomerIdType = 2
                      and not exists (
                          select CustomerId
                          from #CustomerIds
                          where c.ContactId = CustomerId));

                set @contactDepth = @contactDepth - 1;

            end; -- end while (@contactDepth > 0)
        end;     -- end if (@@rowcount <> 0)
    end;         -- end if (@subContact <> 0)
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_AccountOVRollup] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_AccountOVRollup] TO [CRMReaderRole]
    AS [dbo];

