

CREATE PROCEDURE p_CleanSyncTables AS
begin
 
	declare @name nvarchar(128)
	declare @sql nvarchar(2000)
	
	declare SyncEntryCursor cursor local for
	select SyncEntryTableName from Subscription where SubscriptionType = 0
	
	open SyncEntryCursor
	fetch SyncEntryCursor into @name
	
	while @@fetch_status = 0
	begin
		set @sql = 'delete from ' + @name + ' where ObjectTypeCode not in (select ObjectTypeCode from EntityView)' 
		--print @sql
		execute (@sql)
	    fetch SyncEntryCursor into @name
	end
	
	close SyncEntryCursor
	deallocate SyncEntryCursor
	
end



