

CREATE PROC [dbo].[p_CascadeGrantAccess](
        @principal_id UNIQUEIDENTIFIER,
        @principal_type INT,
	    @root_entity_otc int,
		@root_entity_oid UNIQUEIDENTIFIER,
        @access_rights INT,
        @inherited_access_rights INT
        ) AS
BEGIN
    SET NOCOUNT ON
        
	-- WARNING: any change into the logic for activities should be matched with a change into the 
	-- BusinessProcessObject.DoRetrieveSharedPrincipals method (file: src\ManagedPlatform\Server\BusinessProcessObject.cs).
	-- In both places if the entity instance is an activity then we use the ObjectTypeCode of the base ActivityPointer entity (4200).
        
	declare @thereAreActivities bit = 0
	   
	-- CHANGE ALL THE OBJECT TYPE CODES OF ACTIVITIES TO THAT OF ACTIVITY POINTER (4200)
	UPDATE #CascadeCollect SET objecttype = 4200 
		 FROM #CascadeCollect tmp, EntityView e
		 WHERE tmp.objecttype = e.ObjectTypeCode AND e.IsActivity = 1
 
	IF (@@rowcount > 1)
	  SELECT @thereAreActivities = 1
 
	-- UPDATE ROOT OTC to 4200 if it is an activity
 	IF EXISTS(SELECT * FROM EntityView e with (nolock) where e.ObjectTypeCode = @root_entity_otc AND e.IsActivity = 1)
	BEGIN
		SET @root_entity_otc = 4200
		SELECT @thereAreActivities = 1
	END

 	-- For activities dummy update bit not null column IsRegularActivity to change value of VersionNumber.
	-- That simplifies sync queries for incremental sync 
	IF (@thereAreActivities = 1)
	BEGIN
	  WITH activities AS (SELECT objectid FROM #CascadeCollect WHERE objecttype = 4200)
	  UPDATE ActivityPointerBase SET IsRegularActivity = IsRegularActivity
	  FROM ActivityPointerBase ap
	         join activities a on a.objectid = ap.ActivityId
	END

        -- FOR THE ROOT ENTITY, WE SET AccessRightsMask
        UPDATE PrincipalObjectAccess SET AccessRightsMask=AccessRightsMask|@access_rights, ChangedOn=GETUTCDATE()
        FROM PrincipalObjectAccess as poa
        WHERE poa.ObjectTypeCode=@root_entity_otc AND poa.ObjectId=@root_entity_oid AND poa.PrincipalId = @principal_id AND poa.PrincipalTypeCode = @principal_type
        
		IF(@@ROWCOUNT = 0) 
        INSERT INTO PrincipalObjectAccess (ObjectId,PrincipalId,ObjectTypeCode,PrincipalTypeCode,ChangedOn,AccessRightsMask,InheritedAccessRightsMask)
                SELECT objectid, @principal_id, objecttype, @principal_type
                    , GETUTCDATE(), @access_rights, 0 
                FROM #CascadeCollect as coll WHERE coll.objecttype=@root_entity_otc AND coll.objectid=@root_entity_oid
        
        -- Remove the root record from #CascadeCollect
        DELETE FROM #CascadeCollect WHERE #CascadeCollect.objecttype=@root_entity_otc AND #CascadeCollect.objectid=@root_entity_oid
        
        -- FOR THE OTHER ENTITIES, WE SET InheritedAccessRightsMask
        UPDATE PrincipalObjectAccess SET InheritedAccessRightsMask=InheritedAccessRightsMask|@inherited_access_rights, ChangedOn=GETUTCDATE()
        FROM PrincipalObjectAccess as poa INNER JOIN #CascadeCollect AS coll ON poa.ObjectId=coll.objectid AND poa.ObjectTypeCode=coll.objecttype
        WHERE poa.PrincipalId = @principal_id AND poa.PrincipalTypeCode = @principal_type

  		-- Some records where updated in POA table
		-- Remove them from #CascadeCollect
		IF(@@ROWCOUNT > 0) 
		BEGIN
			DELETE FROM #CascadeCollect WHERE 
			EXISTS(SELECT * FROM PrincipalObjectAccess as poa where poa.ObjectId=#CascadeCollect.objectid 
			AND poa.ObjectTypeCode=#CascadeCollect.objecttype AND poa.PrincipalId = @principal_id AND poa.PrincipalTypeCode = @principal_type )
		END	

            INSERT INTO PrincipalObjectAccess (ObjectId,PrincipalId,ObjectTypeCode,PrincipalTypeCode,ChangedOn,AccessRightsMask,InheritedAccessRightsMask)
                SELECT objectid, @principal_id, objecttype, @principal_type
                    , GETUTCDATE(), 0, @inherited_access_rights FROM #CascadeCollect

END