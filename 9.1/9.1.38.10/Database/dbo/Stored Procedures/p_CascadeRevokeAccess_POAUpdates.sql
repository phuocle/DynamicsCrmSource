

create procedure [dbo].[p_CascadeRevokeAccess_POAUpdates](
    @principal_id uniqueidentifier,
    @principal_type int,
    @root_entity_otc int,
    @root_entity_oid uniqueidentifier)
as;
begin;
    set nocount on;

    -- Update root OTC to 4200, if it is an activity.
    if exists (
        select 1
        from EntityView e
        where e.ObjectTypeCode = @root_entity_otc
              and e.IsActivity = 1)
    begin;
        select @root_entity_otc = 4200;
    end;

    -- For root entity, we set AccessRightsMask if its not 0 or null
    update PrincipalObjectAccess
		set AccessRightsMask = 0, ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
         inner join #CascadeCollect as coll
             on poa.ObjectId = coll.objectid
                and poa.ObjectTypeCode = coll.objecttype
    where coll.objecttype = @root_entity_otc and coll.objectid = @root_entity_oid
          and poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type
		  and (poa.AccessRightsMask <> 0 or poa.AccessRightsMask is null);		-- AccessRightsMask is nullable 

    -- For other entities, we set InheritedAccessRightsMask if its not 0.
	--  ROWLOCK hint added to avoid lock escalation on POA table, which is very frequently used.
    update PrincipalObjectAccess WITH (ROWLOCK)
		set InheritedAccessRightsMask = 0, ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
         inner join #CascadeCollect as coll
             on poa.ObjectId = coll.objectid
                and poa.ObjectTypeCode = coll.objecttype
    where NOT (coll.objecttype = @root_entity_otc and coll.objectid = @root_entity_oid)
          and poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type
		  and poa.InheritedAccessRightsMask <> 0;								-- InheritedAccessRightsMask is not nullable
end;