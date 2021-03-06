USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_CopyRole]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- This stored procedure handles copying one role with cascading copy role to sub-businesses.
--
create procedure [dbo].[p_CopyRole](
    @parentRoleid uniqueidentifier,
    @userid uniqueidentifier)
as;
begin;
    set nocount on;

    declare @rootId uniqueidentifier;
    declare @activeSolutionId uniqueidentifier;
    declare @defaultSolutionId uniqueidentifier;
    declare @parentBizId uniqueidentifier;
    declare @roleComponentType int;

    select @activeSolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238',
           @defaultSolutionId = 'fd140aaf-4df4-11dd-bd17-0019b9312238',
           @roleComponentType = 20;

    select @parentBizId = BusinessUnitId
    from Role
    where RoleId = @parentRoleid;

    create table #parents (parentroleid uniqueidentifier primary key clustered);
    insert into #parents (parentroleid) values (@parentRoleid);

    declare c cursor local FORWARD_ONLY READ_ONLY for
    select businessunitid
    from dbo.GetSubsidiaryBusinesses(@parentBizId)
    where depth > 0
    order by depth;

    open c;
    fetch next from c into @rootId;

    while (@@fetch_status = 0)
    begin;
        declare @currParentBiz uniqueidentifier;
        declare @currParentRoleId uniqueidentifier;

        select @currParentBiz = null,
               @currParentRoleId = null;

        select @currParentBiz = ParentBusinessUnitId
        from BusinessUnitBase
        where BusinessUnitId = @rootId;

        select @currParentRoleId = RoleId
        from RoleBase
        where BusinessUnitId = @currParentBiz
              and RoleId in (
                    select parentroleid
                    from #parents);

        declare @newRoleId uniqueidentifier;
        select @newRoleId = newid();

        -- Add the Ids table entry first.
        insert into [RoleBaseIds] values (@newRoleId);

        -- Create the role record.
        --
        insert into RoleBase (RoleId, RoleTemplateId, OrganizationId, Name, BusinessUnitId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy, ParentRoleId, SolutionId, ParentRootRoleId)
        select @newRoleId, RoleTemplateId, OrganizationId, Name, @rootId, getutcdate(), null, @userid, null, @currParentRoleId, @activeSolutionId,
               @parentRoleid -- set ParentRootRoleId, it will be @parentRoleid for all inherited roles
        from RoleBase
        where RoleId = @currParentRoleId;

        -- Insert the new role record into the solution components table.
        --
        if (@currParentRoleId is null)
        begin;
            insert into SolutionComponentBase (SolutionComponentId, ComponentType, ObjectId, IsMetadata, SolutionId, CreatedOn, ModifiedOn, CreatedBy, ModifiedBy)
            values (newid(), @roleComponentType, @newRoleId, 0, @defaultSolutionId, getutcdate(), null, @userid, null)
        end;

        insert into #parents (parentroleid) values (@newRoleId);

        fetch next from c into @rootId;
    end; -- c cursor

    close c;
    deallocate c;
    drop table #parents;

end; -- p_CopyRole
GO
