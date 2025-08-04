

create procedure dbo.p_DetectAccountLoop(
    @ParentId uniqueidentifier,
    @ChildId uniqueidentifier)
as
begin;

/*
 * This proc is to be used to determine if parenting one account to another would create a loop inside the account hierarchy.
 * It also detects if a loop already exists somewhere at or above the parent account.
 *
 * Return Values: 
 *     ErrorCode ErrorMessage
 *     '4' - 'The ParentId passed in is not valid' as ErrorMessage.'
 *     '3' - 'The ChildId passed in is not valid' as ErrorMessage.'
 *     '2' - 'This association would create a loop in the database.'
 *     '1' - 'There is already a loop existing in the database.'
 */

    set nocount on;
    declare @TempParentId uniqueidentifier;

    -- Make sure that the @ParentId is a valid account id.
    if not exists (select AccountId from AccountBase where AccountId = @ParentId)
    begin;
        select N'4' as ErrorCode,
               N'The ParentId passed in is not valid.' as ErrorMessage;
        return; 
    end;

    -- Make sure that the @ChildId is a valid account id.
    if not exists (select AccountId from AccountBase where AccountId = @ChildId)
    begin;
        select N'3' as ErrorCode,
               N'The ChildId passed in is not valid.' as ErrorMessage;
        return;
    end;

    set @TempParentId = @ParentId;

    create table #Ids (
        IdVisited uniqueidentifier primary key);

    while (1 = 1)
    begin;
        if (@TempParentId = @ChildId)
        begin;
            -- While chasing the parent of the parent (of the parent...) bumped into the child, this would create a loop.
            select N'2' as ErrorCode,
                   N'This association would create a loop in the database.' as ErrorMessage;
            break;
        end;

        select @TempParentId = ParentAccountId
        from AccountBase
        where AccountId = @TempParentId;

        if (@TempParentId is null)
        begin;
            -- This implies that there is a dead end to the parent->grand parent-> chain and hence no fear of looping.
            select N'0' as ErrorCode,
                   N'This association is valid and would create no loop in the database.' as ErrorMessage;
            break;
        end;
        else
        begin;
            if exists (select 1 from #Ids where @TempParentId = IdVisited)
            begin;
                -- This should never happen. If it does, that means someone has been mucking with the DB from the backend.
                select N'1' as ErrorCode,
                       N'There is already a loop existing in the database.' as ErrorMessage;
                break;
            end;
            else
            begin;
                insert into #Ids(IdVisited) values (@TempParentId);
                continue;
            end;
        end;
        break;  -- unreachable?
    end; -- end while (1 = 1)
end;
