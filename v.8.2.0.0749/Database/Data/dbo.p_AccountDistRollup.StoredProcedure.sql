USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_AccountDistRollup]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_AccountDistRollup]
    @subAccount    bit,
    @acctDepth     int,
    @subContact    bit,
    @contactDepth  int
as;
begin;
    set nocount on;

    -- Rollup the sub-account and sub-contact with specific depth.
    if (@subAccount <> 0)
    begin;
        while (@acctDepth > 0)
        begin;
            insert into #CustomerIds (ParentId, ChildId) (
            select ri.ParentId,
                   a.AccountId
            from AccountBase a
                 inner join #CustomerIds ri
                     on a.ParentAccountId = ri.ChildId
            where not exists (
                select 1
                from #CustomerIds ci
                where ri.ParentId = ci.ParentId
                      and a.AccountId = ci.ChildId));

            if (@@rowcount = 0)
            begin;
                break;
            end;

            set @acctDepth = @acctDepth - 1;
        end;
    end;

    if (@subContact <> 0)
    begin;
        -- Insert contact ids.
        insert into #CustomerIds (ParentId, ChildId) (
        select ri.ParentId,
               c.ContactId
        from ContactBase c
             inner join #CustomerIds ri
                 on c.ParentCustomerId = ri.ChildId
        where c.ParentCustomerIdType = 1
              and not exists (
                  select 1
                  from #CustomerIds ci
                  where c.ContactId = ci.ChildId
                        and ri.ParentId = ci.ParentId));

        if (@@rowcount <> 0)
        begin;
            set @contactDepth = @contactDepth - 1;

            while (@contactDepth > 0)
            begin;
                -- Insert contact ids.
                insert into #CustomerIds (ParentId, ChildId) (
                select ri.ParentId,
                       c.ContactId
                from ContactBase c
                     inner join #CustomerIds ri
                         on c.ParentCustomerId = ri.ChildId
                where c.ParentCustomerIdType = 2
                      and not exists (
                          select 1
                          from #CustomerIds ci
                          where c.ContactId = ci.ChildId
                                and ri.ParentId = ci.ParentId));

                if (@@rowcount = 0)
                begin;
                    break;
                end;

                set @contactDepth = @contactDepth - 1;
            end;
        end;    -- end if (@@rowcount <> 0)
    end;        -- end if (@subContact <> 0)
end;
GO
