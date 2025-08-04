
CREATE function [dbo].[fn_RollupByAccountCDS_Generated](
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
        option (recompile);

    end; -- end while (@@rowcount != 0 and @level <= 5)

    insert into @tbl (RollupId)
    select distinct ContactId
    from ContactBase
    where ParentCustomerId = @AccountId
          and ParentCustomerIdType = 1;

-- Placeholder for the dynamically generated components. Please don't remove or modify.
--[PLACEHOLDER]--
-- End of dynamically generated components.

    if (@ActivityRollup <> 0)
    begin;
        insert into @tbl (RollupId)
        select distinct apb.ActivityId
        from ActivityPartyBase as apb
             inner join @tbl as ri
                 on apb.PartyId = ri.RollupId
        option (recompile);

    end; -- end if (@ActivityRollup <> 0)
    return;
end;