SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_CascadeGrantAccess](
    @principal_id uniqueidentifier,
    @principal_type int,
    @root_entity_otc int,
    @root_entity_oid uniqueidentifier,
    @access_rights int,
    @inherited_access_rights int)
as;
begin;
    set nocount on;

    -- WARNING: any change into the logic for activities should be matched with a change into the
    -- BusinessProcessObject.DoRetrieveSharedPrincipals method (file: src\ManagedPlatform\Server\BusinessProcessObject.cs).
    -- In both places if the entity instance is an activity then we use the ObjectTypeCode of the base ActivityPointer entity (4200).
    --
    declare @thereAreActivities bit = 0;

    -- CHANGE ALL THE OBJECT TYPE CODES OF ACTIVITIES TO THAT OF ACTIVITY POINTER (4200).
    update #CascadeCollect
    set objecttype = 4200 
    from #CascadeCollect tmp
         inner join EntityView e
             on tmp.objecttype = e.ObjectTypeCode
    where e.IsActivity = 1;

    if (@@rowcount > 1)
      set @thereAreActivities = 1;

    -- UPDATE ROOT OTC to 4200 if it is an activity.
    if exists (
        select 1
        from EntityView e
        where e.ObjectTypeCode = @root_entity_otc
              and e.IsActivity = 1)
    begin;
        select @root_entity_otc = 4200,
               @thereAreActivities = 1;
    end;

    -- For Activities dummy update bit not null column IsRegularActivity to change value of VersionNumber.
    -- That simplifies sync queries for incremental sync.
    if (@thereAreActivities = 1)
    begin;
        with Activities as (
            select objectid
            from #CascadeCollect
            where objecttype = 4200)
        update ActivityPointerBase
        set IsRegularActivity = IsRegularActivity
        from ActivityPointerBase ap
             inner join Activities a
                 on a.objectid = ap.ActivityId;
    end;

    -- FOR THE ROOT ENTITY, WE SET AccessRightsMask.
    update PrincipalObjectAccess
    set AccessRightsMask = AccessRightsMask | @access_rights,
        ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
    where poa.ObjectTypeCode = @root_entity_otc
          and poa.ObjectId = @root_entity_oid
          and poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type;

    if (@@rowcount = 0)
    begin;    
        insert into PrincipalObjectAccess (ObjectId, PrincipalId, ObjectTypeCode, PrincipalTypeCode, ChangedOn, AccessRightsMask, InheritedAccessRightsMask)
        select objectid,
               @principal_id,
               objecttype,
               @principal_type,
               getutcdate(),
               @access_rights,
               0 
        from #CascadeCollect as coll
        where coll.objecttype = @root_entity_otc
              and coll.objectid = @root_entity_oid;
    end;

    -- Remove the root record from #CascadeCollect.
    delete from #CascadeCollect
    where #CascadeCollect.objecttype = @root_entity_otc
          and #CascadeCollect.objectid = @root_entity_oid;

    -- FOR THE OTHER ENTITIES, WE SET InheritedAccessRightsMask
    update PrincipalObjectAccess
    set InheritedAccessRightsMask = InheritedAccessRightsMask | @inherited_access_rights,
        ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
         inner join #CascadeCollect as coll
             on poa.ObjectId = coll.objectid
                and poa.ObjectTypeCode = coll.objecttype
    where poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type;

    -- Some records where updated in POA table
    -- Remove them from #CascadeCollect
    if (@@rowcount > 0)
    begin;
        delete from #CascadeCollect
        where exists(
                select 1
                from PrincipalObjectAccess as poa
                where poa.ObjectId = #CascadeCollect.objectid 
                      and poa.ObjectTypeCode = #CascadeCollect.objecttype
                      and poa.PrincipalId = @principal_id
                      and poa.PrincipalTypeCode = @principal_type);
    end;

    insert into PrincipalObjectAccess (ObjectId, PrincipalId, ObjectTypeCode, PrincipalTypeCode, ChangedOn, AccessRightsMask, InheritedAccessRightsMask)
    select objectid,
           @principal_id,
           objecttype,
           @principal_type,
           getutcdate(),
           0,
           @inherited_access_rights
    from #CascadeCollect;
end;
GO
