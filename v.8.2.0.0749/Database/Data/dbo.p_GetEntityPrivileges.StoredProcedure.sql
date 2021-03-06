USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetEntityPrivileges]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_GetEntityPrivileges]
as;
begin;
    set nocount on;

    select p.PrivilegeId as PrivilegeId,
           p.CanBeLocal as CanBeLocal,
           p.CanBeDeep as CanBeDeep,
           p.CanBeGlobal as CanBeGlobal,
           p.CanBeBasic as CanBeBasic,
           p.AccessRight as AccessRight,
           potc.ObjectTypeCode as ObjectTypeCode
    from PrivilegeBase p
         inner join PrivilegeObjectTypeCodes potc
             on p.PrivilegeId = potc.PrivilegeId
    where potc.ObjectTypeCode <> 0
    order by potc.ObjectTypeCode,
             p.AccessRight;
end;
GO
