

create procedure [dbo].[p_CascadeRevokeAccess](
    @principal_id uniqueidentifier,
    @principal_type int,
    @root_entity_otc int,
    @root_entity_oid uniqueidentifier,
    @updateVersionNumberOfSyncableEntitiesOnly bit = 0)
as;
begin;
    set nocount on;

    -- Change all the object type codes of activities to that of activity pointer (4200).
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

    -- Update root OTC to 4200, if it is an activity.
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