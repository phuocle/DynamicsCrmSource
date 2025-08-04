

create procedure dbo.p_GetEntityPrivileges
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