

create procedure [dbo].[p_CascadeGrantRevokeAccess_CascadeCollectUpdates](
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

END