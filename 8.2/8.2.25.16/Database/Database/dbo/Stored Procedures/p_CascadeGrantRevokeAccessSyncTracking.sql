

-- Update VersionNumber for collected entities 
CREATE PROC [dbo].[p_CascadeGrantRevokeAccessSyncTracking] AS
BEGIN
    SET NOCOUNT ON
        
	DECLARE @ObjectTypeCode INT
	DECLARE @BaseTableName sysname
	DECLARE @PrimaryKeyName sysname
	DECLARE @sql nvarchar(2000)

DECLARE MyCursor CURSOR LOCAL FORWARD_ONLY FOR 
			SELECT distinct objecttype, basetablename, tablecolumnname FROM #CascadeCollect
			
	OPEN MyCursor
	FETCH NEXT FROM MyCursor INTO @ObjectTypeCode, @BaseTableName, @PrimaryKeyName
	WHILE @@FETCH_STATUS = 0
	BEGIN

		-- For all entities with current OTC get OwnerIdType from base table and update to same value. 
		-- Update will change VersionNumber which is used for tracking. 
		-- NOTE: Can't parameterize update statement with dynamic table name
		set @sql = 'update ' + @BaseTableName + ' set OwnerIdType = OwnerIdType where '
			+ @PrimaryKeyName + ' in (select objectid from #CascadeCollect where objecttype = '+ cast(@ObjectTypeCode as nvarchar(20)) +')'

		exec sp_executesql @sql
			
    	FETCH NEXT FROM MyCursor INTO @ObjectTypeCode, @BaseTableName, @PrimaryKeyName
	END

	CLOSE MyCursor
	DEALLOCATE MyCursor

END