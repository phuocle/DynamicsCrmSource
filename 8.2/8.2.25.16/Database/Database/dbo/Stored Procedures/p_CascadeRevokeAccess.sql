

create procedure [dbo].[p_CascadeRevokeAccess](
    @principal_id uniqueidentifier,
    @principal_type int,
    @root_entity_otc int,
    @root_entity_oid uniqueidentifier)
as;
begin;
    set nocount on;

    -- CHANGE ALL THE OBJECT TYPE CODES OF ACTIVITIES TO THAT OF ACTIVITY POINTER (4200).
    update #CascadeCollect
    set objecttype = 4200 
    from #CascadeCollect tmp
         inner join EntityView e
             on tmp.objecttype = e.ObjectTypeCode
    where e.IsActivity = 1;

    -- UPDATE ROOT OTC to 4200 if it is an activity.
    if exists (
        select 1
        from EntityView e
        where e.ObjectTypeCode = @root_entity_otc
              and e.IsActivity = 1)
    begin;
        select @root_entity_otc = 4200
    end;

    -- Track sync changes for all entities

    EXEC p_CascadeGrantRevokeAccessSyncTracking

    -- FOR THE ROOT ENTITY, WE SET AccessRightsMask.
    update PrincipalObjectAccess
    set AccessRightsMask = 0,
        ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
         inner join #CascadeCollect as coll
             on poa.ObjectId = coll.objectid
                and poa.ObjectTypeCode = coll.objecttype
    where coll.objecttype = @root_entity_otc
          and coll.objectid = @root_entity_oid
          and poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type;

    -- FOR THE OTHER ENTITIES, WE SET InheritedAccessRightsMask.
    update PrincipalObjectAccess
    set InheritedAccessRightsMask = 0,
        ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
         inner join #CascadeCollect as coll
             on poa.ObjectId = coll.objectid
                and poa.ObjectTypeCode = coll.objecttype
    where (coll.objecttype <> @root_entity_otc
                or coll.objectid <> @root_entity_oid)
          and poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type;
end;