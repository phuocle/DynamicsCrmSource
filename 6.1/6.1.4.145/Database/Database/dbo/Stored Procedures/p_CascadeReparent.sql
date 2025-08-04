

CREATE Proc [dbo].[p_CascadeReparent]
	@root_id		uniqueidentifier,
	@root_otc	int,
	@root_ownerid uniqueidentifier,
	@root_owneridtype int

As
Begin
	SET NOCOUNT ON

	DECLARE @accessRightsAll int = 0x00D0017; --  all access rights but create/inherited (read|write|delete|append|assign|share|appendto)
	DECLARE @accessRightsInherited int = 0x08000000;

    -- the #CascadeCollectReparent table is assumed to be created and fully populated by the 
    -- cascade collection phase. It is expected to have a single object at the root at level 0.
    -- The object at level 0 should be identical to the arguments passed into this stored procedure. Assert that.
    
   	SELECT COUNT(*) FROM #CascadeCollectReparent
	WHERE objectid = @root_id AND objecttype = @root_otc AND ownerid = @root_ownerid AND owneridtype = @root_owneridtype AND level = 0;
	IF (@@ROWCOUNT <> 1) RAISERROR('Root object specified as argument to p_CascadeReparent not found in #CascadeCollect or not at level 0', 16, 1)

	-- update any activity records, in either parent or object field
	UPDATE #CascadeCollectReparent SET objecttype = 4200 
	 FROM #CascadeCollectReparent tmp, EntityView e
	 WHERE tmp.objecttype = e.ObjectTypeCode AND e.IsActivity = 1

	 UPDATE #CascadeCollectReparent SET parentobjecttype = 4200
	 FROM #CascadeCollectReparent tmp, EntityView e
	 WHERE tmp.parentobjecttype = e.ObjectTypeCode AND e.IsActivity = 1


    -- the algorithm proceeds level by level, using level data stored in the #CascadeCollectReparent table.
    -- For level N+1 we perform 4 steps
    -- Step 1: Populate existing POA records for objects at level N+1 into the temp table #POA, with access rights = 0 (to revoke access)
    -- Step 2: Merge (insert/update) the inherited POA records from that level's parent records (level N) (to grant inherited access)
    -- Step 3: Merge (insert/update) the inherited POA records for the owners of that level's parent (level N).
    -- Step 4: Merge (insert/update) these "new" POA records are merged back into the principalobjectaccess table
    
  	-- create temp table to hold temporary POA records for level N + 1
	
	CREATE table #POA(ObjectId uniqueidentifier, ObjectTypeCode int, PrincipalId uniqueidentifier, PrincipalTypeCode int,  AccessRightsMask int)

	DECLARE @level int = 1;        -- start level is 1, the root object is expected to be at level 0
	
	DECLARE @maxlevel int;
	SELECT @maxlevel =  MAX(level) from #CascadeCollectReparent
	IF (@maxlevel>1000) RAISERROR('Recursion depth greater than 1000 encountered', 16, 1);
	
	DECLARE @recordcount int;
	select @recordcount = count(*) from #CascadeCollectReparent where level = @level; -- the loop terminates when no records are found at current level

	WHILE (@recordcount <>0)
	BEGIN
	
	-- Step 1
	
	INSERT INTO #POA 
	SELECT 
		 p.ObjectId, p.ObjectTypeCode,
		 p.PrincipalId, p.PrincipalTypeCode, 0 -- no access 
		FROM PrincipalObjectAccess p
		INNER JOIN #CascadeCollectReparent c
		ON p.ObjectId = c.objectid AND p.ObjectTypeCode = c.objecttype
		WHERE c.Level = @level
		AND p.InheritedAccessRightsMask <> 0 -- ignore records which already have inherited access rights = 0
	
	-- Step 2
	
	MERGE #POA AS Target
	USING (SELECT c.objectid AS ObjectId, c.objecttype AS ObjectTypeCode,
		p.PrincipalId, p.PrincipalTypeCode, CASE (AccessRightsMask) WHEN 0 THEN 0 ELSE AccessRightsMask | @accessRightsInherited END | InheritedAccessRightsMask AS AccessRightsMask
		FROM PrincipalObjectAccess p
		INNER JOIN  #CascadeCollectReparent  c
		ON p.ObjectId = c.parentobjectid
		AND p.ObjectTypeCode = c.parentobjecttype
		WHERE level = @level
	) AS Source
	ON (Target.ObjectId = Source.ObjectId AND Target.ObjectTypeCode = Source.ObjectTypeCode AND Target.PrincipalId = Source.PrincipalId AND Target.PrincipalTypeCode = Source.PrincipalTypeCode)
	WHEN MATCHED THEN
    UPDATE SET Target.AccessRightsMask = Target.AccessRightsMask | Source.AccessRightsMask
	WHEN NOT MATCHED BY TARGET THEN
    INSERT (ObjectId, ObjectTypeCode, PrincipalId, PrincipalTypeCode, AccessRightsMask)
    VALUES (Source.ObjectId, Source.ObjectTypeCode, Source.PrincipalId, Source.PrincipalTypeCode, Source.AccessRightsMask);

	-- Step 3
	
	MERGE #POA AS Target
	USING (SELECT c2.objectid AS ObjectId, c2.objecttype AS ObjectTypeCode, c.ownerid AS PrincipalId, c.owneridtype AS PrincipalTypeCode, @accessRightsAll |@accessRightsInherited As AccessRightsMask
		FROM #CascadeCollectReparent c
		INNER JOIN  #CascadeCollectReparent c2 
		ON c.parentobjectid = c2.objectid
		AND c.parentobjecttype = c2.objecttype
		WHERE c.Level = @level - 1 AND c2.Level = @level AND c.ownerid <> c2.ownerid) AS Source
	ON (Target.ObjectId = Source.ObjectId AND Target.ObjectTypeCode = Source.ObjectTypeCode AND Target.PrincipalId = Source.PrincipalId AND Target.PrincipalTypeCode = Source.PrincipalTypeCode)
	WHEN MATCHED THEN
    UPDATE SET Target.AccessRightsMask = Target.AccessRightsMask | Source.AccessRightsMask
	WHEN NOT MATCHED BY TARGET THEN
    INSERT (ObjectId, ObjectTypeCode, PrincipalId, PrincipalTypeCode, AccessRightsMask)
    VALUES (Source.ObjectId, Source.ObjectTypeCode, Source.PrincipalId, Source.PrincipalTypeCode, Source.AccessRightsMask);

	-- Step 4
	
	MERGE PrincipalObjectAccess AS Target
	USING (select * From #POA) AS Source
	ON (Target.ObjectId = Source.ObjectId AND Target.ObjectTypeCode = Source.ObjectTypeCode AND Target.PrincipalId = Source.PrincipalId AND Target.PrincipalTypeCode = Source.PrincipalTypeCode)
	WHEN MATCHED AND Target.InheritedAccessRightsMask <> Source.AccessRightsMask THEN
   	 UPDATE SET Target.InheritedAccessRightsMask = Source.AccessRightsMask
	WHEN NOT MATCHED BY TARGET THEN
    INSERT (ObjectId, ObjectTypeCode, PrincipalId, PrincipalTypeCode, AccessRightsMask, InheritedAccessRightsMask)
    VALUES (Source.ObjectId, Source.ObjectTypeCode, Source.PrincipalId, Source.PrincipalTypeCode, 0, Source.AccessRightsMask);

    -- Prepare for next level
	TRUNCATE TABLE #POA

	-- increment level, and compute @recordcount at new level
	SET @level = @level + 1
	SELECT @recordcount = count(*) FROM #CascadeCollectReparent WHERE level = @level
	
	END

	DROP TABLE #POA
end