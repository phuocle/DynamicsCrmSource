

-- Change VersionNumber for a replicated entity instance on which AttributeAccess is Granted, Updated or Revoked
CREATE PROC p_GrantUpdateRevokeAttributeAccessSyncTracking(@PrincipalObjectAttributeAccessId uniqueidentifier) AS
BEGIN
    SET NOCOUNT ON
        
	DECLARE @ObjectTypeCode int
	DECLARE @ObjectId uniqueidentifier
    
	DECLARE @BaseTableName sysname
	DECLARE @PrimaryKeyName sysname
	
	declare @sql nvarchar(512)
	declare @parameters nvarchar(512)
	
	SELECT @ObjectTypeCode=ObjectTypeCode, @ObjectId=ObjectId  FROM PrincipalObjectAttributeAccess 
		where PrincipalObjectAttributeAccessId = @PrincipalObjectAttributeAccessId

	SELECT @BaseTableName=e.BaseTableName, @PrimaryKeyName=a.TableColumnName 
	FROM EntityView e
		JOIN AttributeView a ON (a.EntityId = e.EntityId)
	WHERE 
		e.IsReplicated = 1
		AND e.ObjectTypeCode = @ObjectTypeCode
		AND a.IsPKAttribute = 1

	-- if shared entity is not replicated, no update is required
	if (@@ROWCOUNT > 0)
	BEGIN			
		-- Update will change VersionNumber which is used for tracking. 
		-- NOTE: Can't parameterize update statement with dynamic table name
		-- Example: update [AccountBase] WITH (ROWLOCK) set [AccountId]=[AccountId] where [AccountId]=@pk_id_value
		set @sql = 'update ' + QUOTENAME(@BaseTableName) + ' WITH (ROWLOCK) set ' + QUOTENAME(@PrimaryKeyName) + '='  + QUOTENAME(@PrimaryKeyName)
				+ ' where '+ QUOTENAME(@PrimaryKeyName) + '=@pk_id_value'

		select @parameters = N'@pk_id_value uniqueidentifier'
		exec sp_executesql @sql, @parameters, @pk_id_value= @ObjectId

	END
END