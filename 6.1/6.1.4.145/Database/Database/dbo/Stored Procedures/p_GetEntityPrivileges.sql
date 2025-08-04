

create procedure [dbo].[p_GetEntityPrivileges] as
begin
set nocount on 


select 'PrivilegeId' = p.PrivilegeId, 
       'CanBeLocal' = p.CanBeLocal, 
       'CanBeDeep' = p.CanBeDeep, 
       'CanBeGlobal' = p.CanBeGlobal, 
       'CanBeBasic' = p.CanBeBasic, 
       'AccessRight' = p.AccessRight, 
       'ObjectTypeCode' = potc.ObjectTypeCode
from PrivilegeBase p 
join PrivilegeObjectTypeCodes potc on (p.PrivilegeId = potc.PrivilegeId and potc.ObjectTypeCode <> 0)
order by potc.ObjectTypeCode, p.AccessRight

end