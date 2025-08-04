
CREATE function [dbo].[fn_RollupByOpportunityCDS_Generated](
    @OpportunityId  uniqueidentifier,
    @Extended bit,
    @ActivityRollup bit)
returns @tbl table (
    RollupId uniqueidentifier primary key clustered)
as
begin;
    insert into @tbl (RollupId) values (@OpportunityId);

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