

CREATE PROC p_GrantAccessBulkForCreate(
		@objectId uniqueidentifier,
		@objectTypeCode INT,
        @principal_ids nvarchar(max),
        @principal_type INT,
        @access_rights INT
        ) AS
BEGIN
    SET NOCOUNT ON
    
      -- Passed in principals
      declare @p table (id uniqueidentifier primary key clustered)
      insert into @p select id from fn_GetGuidsFromString(@principal_ids) 
 
      -- Find existing principals
      declare @pe table (id uniqueidentifier primary key clustered)
      insert into @pe 
            select PrincipalId from PrincipalObjectAccess poa
            join @p p on (p.id = poa.PrincipalId)
            where poa.ObjectId = @objectId
                  and ObjectTypeCode=@objectTypeCode 
 
      if (@@rowcount >0)
      begin
            --Update existing principals using @pe
            UPDATE PrincipalObjectAccess 
                  SET AccessRightsMask = AccessRightsMask | @access_rights,
                        ChangedOn =  GETUTCDATE()
            WHERE ObjectId = @objectId and 
				ObjectTypeCode = @objectTypeCode and
                    PrincipalId in (select id from @pe)
 
            -- delete existing principals from passed in principals
             delete @p where id in (select id from @pe)
      end
        
    -- SHARE THE ENTITY for all principals by setting AccessRightsMask
    INSERT INTO PrincipalObjectAccess (ObjectId,PrincipalId,ObjectTypeCode,PrincipalTypeCode,ChangedOn,AccessRightsMask,InheritedAccessRightsMask)
        SELECT @objectId, id, @objectTypeCode, @principal_type
            , GETUTCDATE(), @access_rights, 0 
            FROM @p
   
END


