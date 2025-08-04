

create procedure p_DropDefaultConstraint(@table_name sysname, @column_name sysname) as
begin
set nocount on

declare @default_constraint_name sysname
select @default_constraint_name = null

declare @sqlstr nvarchar(max)
select @sqlstr = N'
select @default_constraint_name_out = child.name from sys.objects child 
	join sys.objects parent on (child.parent_object_id = parent.object_id)
	join sys.default_constraints constr on (child.object_id = constr.object_id and parent.object_id = constr.parent_object_id)
	join sys.columns col on (col.column_id = constr.parent_column_id and col.object_id = parent.object_id)
where child.type = ''D'' 
	and col.name = @column_name_value
	and parent.name = @table_name_value'

EXEC sp_executesql @sqlstr, N'@default_constraint_name_out sysname OUTPUT, @column_name_value sysname, @table_name_value sysname', @default_constraint_name_out = @default_constraint_name OUTPUT, @column_name_value = @column_name, @table_name_value = @table_name

if (@default_constraint_name is not null)
begin
	declare @sql nvarchar(2000)
	select @sql = N'ALTER TABLE ' + QUOTENAME(@table_name) + ' DROP CONSTRAINT ' + QUOTENAME(@default_constraint_name)
	exec sp_executesql @sql
--	print @sql
end

end --p_DropDefaultConstraint