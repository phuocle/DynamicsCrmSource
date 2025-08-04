

CREATE PROC [dbo].[p_CascadeRevokeAccess](
        @principal_id UNIQUEIDENTIFIER,
        @principal_type INT,
   	    @root_entity_otc int,
		@root_entity_oid UNIQUEIDENTIFIER
        ) AS
BEGIN
        SET NOCOUNT ON
        
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
    UPDATE PrincipalObjectAccess SET AccessRightsMask=0, ChangedOn=GETUTCDATE()
         FROM PrincipalObjectAccess as poa INNER JOIN #CascadeCollect AS coll ON poa.ObjectId=coll.objectid AND poa.ObjectTypeCode=coll.objecttype
         WHERE coll.objecttype=@root_entity_otc AND coll.objectid=@root_entity_oid AND poa.PrincipalId = @principal_id AND poa.PrincipalTypeCode = @principal_type
    
    -- FOR THE OTHER ENTITIES, WE SET InheritedAccessRightsMask
    UPDATE PrincipalObjectAccess SET InheritedAccessRightsMask=0, ChangedOn=GETUTCDATE()
         FROM PrincipalObjectAccess as poa INNER JOIN #CascadeCollect AS coll ON poa.ObjectId=coll.objectid AND poa.ObjectTypeCode=coll.objecttype
         WHERE (coll.objecttype<>@root_entity_otc OR coll.objectid<>@root_entity_oid) AND poa.PrincipalId = @principal_id AND poa.PrincipalTypeCode = @principal_type

END