USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_CollectPrincipals]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- This stored procedure collect principals (owners): user or team - for a role to be deleted (including inherited roles).
-- NOTE: team members are not collected.
create procedure [dbo].[p_CollectPrincipals](
    @roleid uniqueidentifier)
as;
begin;
    set nocount on;

    -- Define and set constants.
    declare @user int;
    declare @team int;

    select @user = 8,
           @team = 9;

    select SystemUserId as principalid,
           @user as type
    from SystemUserRoles
    where RoleId in (
                select RoleId
                from Role
                where ParentRootRoleId = @roleid)
    union
        select TeamId as principalid,
               @team as type
        from TeamRoles
        where RoleId in (
                select RoleId
                from Role
                where ParentRootRoleId = @roleid);

end; -- dbo.p_CollectPrincipals
GO
