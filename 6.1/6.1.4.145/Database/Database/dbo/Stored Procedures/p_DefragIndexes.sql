

create procedure p_DefragIndexes as
begin
set nocount on

declare @indexid uniqueidentifier
declare @entityid uniqueidentifier
declare @indexname sysname
declare @baseTableName sysname
declare @extensionTableName sysname
declare @isClustered bit
declare @isPrimary bit

declare @sqlstr nvarchar(2048)
select @sqlstr = N'DBCC DBREINDEX(@table_name_value, @index_name_value)'
declare @parameters nvarchar(max)
select @parameters = N'@table_name_value sysname, @index_name_value sysname'

declare indexCursor cursor local FORWARD_ONLY READ_ONLY for
	select IndexId, EntityId, Name, IsClustered, IsPrimaryKey from EntityIndex

open indexCursor
fetch next from indexCursor into @indexid, @entityid, @indexname, @isClustered, @isPrimary

while (@@fetch_status = 0)
begin

	declare @hasBaseIndex int
	declare @hasExtensionIndex int

	select @hasBaseIndex =  count(*) 
	from AttributeView 
	where IsStoredOnPrimaryTable = 1 and 
	AttributeId in (select AttributeId from IndexAttributes where IndexId = @indexid)

	select @hasExtensionIndex =  count(*) 
	from AttributeView 
	where IsStoredOnPrimaryTable = 0 and 
	AttributeId in (select AttributeId from IndexAttributes where IndexId = @indexid)

	select @baseTableName = BaseTableName, @extensionTableName = ExtensionTableName from EntityView where EntityId = @entityid
	
	if (@isClustered <> 0 and @isPrimary <> 0)
	begin
		fetch next from indexCursor into @indexid, @entityid, @indexname, @isClustered, @isPrimary
		continue
	end

	if (@hasBaseIndex <> 0)
	begin
		exec sp_executesql @sqlstr, @parameters, @table_name_value = @baseTableName, @index_name_value = @indexname
	end
	
	if (@hasExtensionIndex <> 0)
	begin
		exec sp_executesql @sqlstr, @parameters, @table_name_value = @extensionTableName, @index_name_value = @indexname
	end
	
	--
	-- remove empty indexes
	--
	if (@hasExtensionIndex = 0 and @hasBaseIndex = 0)
	begin
		delete from EntityIndex where IndexId = @indexid
	end

	fetch next from indexCursor into @indexid, @entityid, @indexname, @isClustered, @isPrimary

end -- indexCursor
close indexCursor
deallocate indexCursor


--
-- special case extension table PKs
-- Only update those indexes if the extension table exists
-- We are checking to see if the ExtensionTableName is not null here instead of checking whether
-- the entity CanCreateAttributes since CanCreateAttributes can be false, but an extension table
-- could exist if the entity was customizable on a previous system and new attributes were added
-- then the extension table would exist, and then the CanCreateAttributes value could be changed
-- to false
--
declare entityCursor cursor local FORWARD_ONLY READ_ONLY for
	select ExtensionTableName from EntityView where IsCustomizable <> 0 and ExtensionTableName is not null
open entityCursor
fetch next from entityCursor into @extensionTableName
while (@@fetch_status = 0)
begin
	select @indexname = 'PK_' + @extensionTableName
	exec sp_executesql @sqlstr, @parameters, @table_name_value = @extensionTableName, @index_name_value = @indexname
	fetch next from entityCursor into @extensionTableName
end
close entityCursor
deallocate entityCursor

end -- p_DefragIndexes