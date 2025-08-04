

Create Proc p_GrantInheritedAccess
	@ReferencingObjectId		uniqueidentifier,
	@ReferencingObjectTypeCode 	int,
	@ReferencedObjectId		uniqueidentifier,
	@ReferencedObjectTypeCode	int

As
Begin
	SET NOCOUNT ON
	
	MERGE PrincipalObjectAccess AS Target
		USING (SELECT 	p.PrincipalId, p.PrincipalTypeCode, CASE (AccessRightsMask) WHEN 0 THEN 0 ELSE AccessRightsMask |  0x08000000 END | InheritedAccessRightsMask AS AccessRightsMask
			FROM PrincipalObjectAccess p
			WHERE ObjectId = @ReferencedObjectId
			AND ObjectTypeCode = @ReferencedObjectTypeCode
			AND (InheritedAccessRightsMask <> 0 OR AccessRightsMask <>0)
		) AS Source
	ON (Target.ObjectId = @ReferencingObjectId AND Target.ObjectTypeCode =@ReferencingObjectTypeCode AND Target.PrincipalId = Source.PrincipalId 
		AND Target.PrincipalTypeCode=Source.PrincipalTypeCode )
	WHEN MATCHED AND Target.InheritedAccessRightsMask <> Source.AccessRightsMask THEN
		-- Update Existing rows in POA that indicate that the referencing object was already 
		-- shared to the principals that have share access to the referenced object
 	    UPDATE SET Target.InheritedAccessRightsMask =  Source.AccessRightsMask
	WHEN NOT MATCHED BY TARGET THEN
		-- insert new rows for principals who were shared the referenced Object but not
		-- the referencing Object
	    INSERT (ObjectId, ObjectTypeCode, PrincipalId, PrincipalTypeCode, InheritedAccessRightsMask, AccessRightsMask)
	    VALUES (@ReferencingObjectId, @ReferencingObjectTypeCode, Source.PrincipalId, Source.PrincipalTypeCode, Source.AccessRightsMask, 0);

End