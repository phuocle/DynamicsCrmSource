SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


-- This stored procedure copies custom roles from the new parent.
-- NOTE: This sproc assumes the parent business id for BizId has already been changed (in the transaction).
--
create procedure [dbo].[p_CopyCustomRolesFromParent](
    @bizId uniqueidentifier,
    @userid uniqueidentifier)
as;
begin;
    set nocount on;

    declare @parentBizId uniqueidentifier;

    select @parentBizId = ParentBusinessUnitId
    from BusinessUnitBase
    where BusinessUnitId = @bizId;

    declare @parentRoleId uniqueidentifier;
    declare @roleid uniqueidentifier;
    declare @activeSolutionId uniqueidentifier;

    select @roleid = null,
           @parentRoleId = null,
           @activeSolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238';

    declare @rootId uniqueidentifier;
    declare @depth int;

    create table #roles (id uniqueidentifier);
    insert into #roles
    select RoleId
    from Role
    where BusinessUnitId = @parentBizId
          and RoleTemplateId is null;

    declare c cursor local FORWARD_ONLY READ_ONLY for
    select businessunitid,
           depth
    from dbo.GetSubsidiaryBusinesses(@bizId)
    order by depth;

    open c;
    fetch next from c into @rootId, @depth;

    while (@@fetch_status = 0)
    begin;
        select @parentBizId = ParentBusinessUnitId
        from BusinessUnitBase
        where BusinessUnitId = @rootId;

        declare RoleCursor cursor local for
        select RoleId
        from Role
        where BusinessUnitId = @parentBizId
              and RoleTemplateId is null
              and RoleId in (
                        select id
                        from #roles);
        
        open RoleCursor;
        fetch RoleCursor into @roleid;

        while (@@fetch_status = 0)
        begin;

            -- Create the role record.
            -- 
            declare @newRoleId uniqueidentifier;
            select @newRoleId = newid();

            insert into RoleBaseIds (RoleId)
            values (@newRoleId);

            insert into RoleBase (RoleId, RoleTemplateId, OrganizationId, Name, BusinessUnitId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy, ParentRoleId, SolutionId, ParentRootRoleId)
            select @newRoleId, RoleTemplateId, OrganizationId, Name, @rootId, getutcdate(), null, @userid, null, @roleid, @activeSolutionId,
                   ParentRootRoleId -- set ParentRootRoleId, it will be ParentRootRoleId for all inherited roles
            from Role
            where RoleId = @roleid;

            fetch next from RoleCursor into @roleid;
        end; -- RoleCursor

        insert into #roles
        select RoleId
        from Role
        where BusinessUnitId = @rootId
              and RoleTemplateId is null
              and ParentRoleId in (
                        select id
                        from #roles);

        close RoleCursor;
        deallocate RoleCursor;
        fetch next from c into @rootId, @depth;

    end; -- c cursor

    close c;
    deallocate c;
    drop table #roles;
end; -- p_CopyCustomRolesFromParent
GO