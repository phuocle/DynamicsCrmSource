

create procedure [dbo].[p_CascadeGrantAccess](
    @principal_id uniqueidentifier,
    @principal_type int,
    @root_entity_otc int,
    @root_entity_oid uniqueidentifier,
    @access_rights int,
    @inherited_access_rights int,
    @updateVersionNumberOfSyncableEntitiesOnly bit = 0)
as;
begin;
    set nocount on;

    -- WARNING: any change into the logic for activities should be matched with a change into the
    -- BusinessProcessObject.DoRetrieveSharedPrincipals method (file: src\ManagedPlatform\Server\BusinessProcessObject.cs).
    -- In both places if the entity instance is an activity then we use the ObjectTypeCode of the base ActivityPointer entity (4200).
    --

    -- Change all the object type codes to activities to that of activity pointer (4200).
	if (@updateVersionNumberOfSyncableEntitiesOnly = 0)
	begin;
		update #CascadeCollect
		set objecttype = 4200 
		from #CascadeCollect tmp
			 inner join EntityView e
				 on tmp.objecttype = e.ObjectTypeCode
		where e.IsActivity = 1;
	end;
	else
	begin;
		update #CascadeCollect
		set originalactivityobjecttype = objecttype, objecttype = 4200 
		from #CascadeCollect tmp
			 inner join EntityView e
				 on tmp.objecttype = e.ObjectTypeCode
		where e.IsActivity = 1;
	end;

    -- Update root OTC to 4200 if it is an activity.
    if exists (
        select 1
        from EntityView e
        where e.ObjectTypeCode = @root_entity_otc
              and e.IsActivity = 1)
    begin;
        select @root_entity_otc = 4200;
    end;

    -- ADD CHECK FOR CDS LITE, p_CascadeGrantRevokeAccessSyncTracking is not in CdsLite, because Subscription Table is not in CDSLite
	if exists (select * from sys.objects where object_id = object_id(N'[dbo].[p_CascadeGrantRevokeAccessSyncTracking]') and OBJECTPROPERTY(object_id, N'IsProcedure') = 1)
        begin
        DECLARE @sql nvarchar(2000)
        
        -- Track sync changes for all entities if updateVersionNumberOfSyncableEntitiesOnly is 0 else sync only SSS entities.
        if (@updateVersionNumberOfSyncableEntitiesOnly = 1 and exists(select 1 from INFORMATION_SCHEMA.PARAMETERS where SPECIFIC_NAME='p_CascadeGrantRevokeAccessSyncTracking' and PARAMETER_NAME='@updateVersionNumberOfSyncableEntitiesOnly'))
        begin;
            set @sql = 'exec p_CascadeGrantRevokeAccessSyncTracking 1;';
        end;
        else
        begin;
            set @sql = 'exec p_CascadeGrantRevokeAccessSyncTracking';
        end;
        EXECUTE(@sql);
    end

    -- For the root entity, we set AccessRightsMask.
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

    -- For the other entities, we set InheritedAccessRightsMask.
    update PrincipalObjectAccess
    set InheritedAccessRightsMask = InheritedAccessRightsMask | @inherited_access_rights,
        ChangedOn = getutcdate()
    from PrincipalObjectAccess as poa
         inner join #CascadeCollect as coll
             on poa.ObjectId = coll.objectid
                and poa.ObjectTypeCode = coll.objecttype
    where poa.PrincipalId = @principal_id
          and poa.PrincipalTypeCode = @principal_type;

    -- Some records where updated in POA table, remove them from #CascadeCollect.
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