

create procedure p_Reindex as
begin
set nocount on

declare @indexid uniqueidentifier
declare @indexname sysname
declare @entityid uniqueidentifier
declare @baseTableName sysname
declare @extensionTableName sysname
declare @fillfactor int
declare @isClustered bit
declare @isPrimary bit

declare @sqlstr nvarchar(2048)
select @sqlstr = N'DBCC DBREINDEX(@table_name_value, @index_name_value, @fill_factor_value)'
declare @parameters nvarchar(max)
select @parameters = N'@table_name_value sysname, @index_name_value sysname, @fill_factor_value int'

declare indexCursor cursor local FORWARD_ONLY READ_ONLY for
	select IndexId, Name, EntityId, IsClustered, IsPrimaryKey, SqlFillFactor
	from EntityIndex
	order by EntityId, IsClustered desc

open indexCursor
fetch next from indexCursor into @indexid, @indexname, @entityid, @isClustered, @isPrimary, @fillfactor

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
		print 'DBCC DBREINDEX(' + @baseTableName + ', ' + @indexname + ', 80)'	
		fetch next from indexCursor into @indexid, @indexname, @entityid, @isClustered, @isPrimary, @fillfactor
		continue
	end

	if (@hasBaseIndex <> 0)
	begin
		print 'DBCC DBREINDEX(' + @baseTableName + ', ' + @indexname + ', ' + convert(nvarchar(128), @fillfactor) + ')'
		exec sp_executesql @sqlstr, @parameters, @table_name_value = @baseTableName, @index_name_value = @indexname, @fill_factor_value = @fillfactor
	end
	
	if (@hasExtensionIndex <> 0)
	begin
		print 'DBCC DBREINDEX(' + @extensionTableName + ', ' + @indexname + ', ' + convert(nvarchar(128), @fillfactor) + ')'
		exec sp_executesql @sqlstr, @parameters, @table_name_value = @extensionTableName, @index_name_value = @indexname, @fill_factor_value = @fillfactor
	end
	
	--
	-- remove empty indexes
	--
	if (@hasExtensionIndex = 0 and @hasBaseIndex = 0)
	begin
		delete from EntityIndex where IndexId = @indexid
	end

	fetch next from indexCursor into @indexid, @indexname, @entityid, @isClustered, @isPrimary, @fillfactor

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
	select @fillfactor = 80
		print 'DBCC DBREINDEX(' + @extensionTableName + ', ' + @indexname + ', ' + convert(nvarchar(128), @fillfactor) + ')'
	exec sp_executesql @sqlstr, @parameters, @table_name_value = @extensionTableName, @index_name_value = @indexname, @fill_factor_value = @fillfactor
	fetch next from entityCursor into @extensionTableName
end
close entityCursor
deallocate entityCursor

end -- p_Reindex