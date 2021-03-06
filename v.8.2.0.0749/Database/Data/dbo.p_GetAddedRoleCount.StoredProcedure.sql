USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetAddedRoleCount]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
