SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetAddedRoleCount]
as;
begin;
    set nocount on;

    select count(*)
    from Role
    where RoleTemplateId is null
          or RoleTemplateId not in (
                select RoleTemplateId
                from RoleTemplate);
end;
GO
