
create procedure dbo.p_ShrinkMirroredFile(
	@fName sysname,
	@dbName sysname,
	@target_percent int = null
) as
begin;
	if convert(nvarchar, serverproperty('edition')) = 'SQL Azure' -- not applicable for SQL Azure database
		return;

	if db_name() <> @dbName --check if we are on correct DB
		return;

	if (db_id() <= 4) --system DB
		return;

	if ((select databaseproperty(db_name(), 'isReadOnly')) = 1 ) --use current context to get db_name()
		return;

	declare @blnShrinkFile bit = 0;
	declare @roleDesc sysname = 'NA';

	select @roleDesc = hars.role_desc
	from sys.databases as d
		inner join sys.dm_hadr_availability_replica_states as hars 
			on d.replica_id = hars.replica_id and hars.is_local = 1
	where d.database_id = db_id();

	--Shrink if any of the condition is true
	if (@roleDesc = 'NA') --Not in AG
		set @blnShrinkFile = 1;

	if (@roleDesc = 'PRIMARY') --In AG & its role is primary
		set @blnShrinkFile = 1;

	--Perform Shrink operation
	if (@blnShrinkFile = 1)
	begin;
		if (@target_percent is null)
		begin;
			dbcc shrinkfile (@fName);
		end;
		else
		begin;
			dbcc shrinkfile (@fName, @target_percent);
		end;
	end;
end;