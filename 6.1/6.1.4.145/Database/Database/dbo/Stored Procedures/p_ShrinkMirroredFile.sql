

create procedure p_ShrinkMirroredFile(
	@fName sysname,
	@dbName sysname,
	@target_percent int = null
) as
begin
	declare @filename sysname
	declare @filesize int
	declare @sql nvarchar(1024)
         
	-- Shrink the local file
	if @target_percent is null
		dbcc shrinkfile (@fName) 
	else 
		dbcc shrinkfile (@fName, @target_percent)

	-- Propogate the shrinking to the mirrored database
	declare c cursor local for 
	select [name], [size] from sys.master_files where (type=0 or type=1) and database_id = db_id (@dbName)
	open c
	fetch next from c into @filename, @filesize

	while @@fetch_status=0
	begin
		set @filesize=(@filesize+1)*8
		set @sql='alter database ' + QUOTENAME(@dbName) + ' modify file ( name=' 
			+ @filename + ', size=' + cast(@filesize as nvarchar) + 'kb )'
		execute sp_executesql @sql
		fetch next from c into @filename, @filesize
	end
	close c
	deallocate c
end