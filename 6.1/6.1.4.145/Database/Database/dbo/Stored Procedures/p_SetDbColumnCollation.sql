

create procedure p_SetDbColumnCollation(
	@target_collation sysname
) as
begin
set nocount on

-- a table of 'constraint drop' commands
create table #keydrops 
(
	id int identity primary key,	-- orders the rows
	sql nvarchar(4000)				-- contains the command text
)
	
-- a table of 'constraint add' commands
-- (must be calculated before the constraints are dropped)
create table #keymakes
(
	id int identity primary key,	-- orders the rows
	sql nvarchar(4000),				-- contains the command text
	ord int							-- groups the commands 
)

-- a table of 'alter table alter column' commands
create table #tablechanges
(
	id int identity primary key,	-- orders the rows
	sql nvarchar(4000)				-- contains the command text
)

declare @sql nvarchar(4000)
declare @column nvarchar(131) -- 128+3
declare @i int

-- Step 1 generate drop and create index statements
declare @tablename sysname
declare @indexname sysname
declare @indid int
declare @is_unique_index nvarchar(16)
declare @has_filter bit
declare @filter_definition nvarchar(max)
declare index_cursor cursor local for 
select distinct so.name, so.schema_id, si.name, si.index_id,
	case 
		when si.is_unique = 1 then 'UNIQUE '
		else ''
	end,
	si.has_filter, si.filter_definition
from sys.indexes si
	join sys.index_columns sic on (sic.object_id = si.object_id
		 and sic.index_id = si.index_id)
	join sys.objects so on (so.object_id = si.object_id)
	join sys.columns sc on (sic.column_id = sc.column_id and so.object_id = sc.object_id)
	join sys.types st on (st.system_type_id = sc.system_type_id and st.system_type_id = st.user_type_id)
where
	so.type = 'U' 
	and INDEXPROPERTY(so.object_id, si.name, 'IsStatistics') = 0
	and si.name not in 
		(select name from sys.objects where type = 'PK' or type = 'F ' or type = 'UQ')
	and (st.name = 'nvarchar' or st.name = 'nchar') 
	and sc.collation_name is not null
	and sc.collation_name != @target_collation 

declare @tableschemaid int
declare @metadataSchemaId int
set @metadataSchemaId = CONVERT(int, OBJECTPROPERTYEX(OBJECT_ID(N'MetadataSchema.Attribute'),'SchemaId'))

open index_cursor
fetch next from index_cursor into @tablename, @tableschemaid, @indexname, @indid, @is_unique_index, @has_filter, @filter_definition
while (@@fetch_status = 0)
begin
	if (@tableschemaid = @metadataSchemaId)
		set @tablename = '[' + N'MetadataSchema' + '].[' + @tablename + ']'
	else
		set @tablename = '[' + @tablename + ']'

	insert into #keydrops (sql) values('DROP INDEX ' + @tablename + '.[' + @indexname + ']')
	
	select @sql = N'CREATE ' + @is_unique_index + 'INDEX ' + @indexname + N' ON ' + @tablename + N'('

  	select @column = index_col(@tablename, @indid, 1)
	set @sql = @sql + '[' + @column + ']'

    select @i = 2
  	select @column = index_col(@tablename, @indid, @i)
    while (@column is not null)
    begin
		set @sql = @sql + ',[' + @column +']'
        select @i = @i + 1
    	select @column = index_col(@tablename, @indid, @i)
    end	   
	set @sql = @sql + N')'
	
	-- Add the filter if there is one
	if (@has_filter = 1)
		set @sql = @sql + N' WHERE ' + @filter_definition
	
	insert into #keymakes (sql, ord) values(@sql, 1)

    fetch next from index_cursor into @tablename, @tableschemaid, @indexname, @indid, @is_unique_index, @has_filter, @filter_definition
end
close index_cursor
deallocate index_cursor

-- Step 2 generate pk drop and pk create statement
declare @pkname sysname
declare pk_cursor cursor local for 
select distinct parent.name, so.schema_id, so.name, si.index_id
	from sys.objects so
	join sys.objects as parent on (parent.object_id = so.parent_object_id)
	join sys.indexes si on (so.name = si.name)
	join sys.index_columns sic on (si.object_id = sic.object_id
		 and si.index_id = sic.index_id)
	join sys.columns sc on (sic.column_id = sc.column_id and parent.object_id = sc.object_id)
	join sys.types st on (st.system_type_id = sc.system_type_id and st.system_type_id = st.user_type_id)
where 
	so.type = 'PK'
	and parent.type = 'U'	
	and (st.name = 'nvarchar' or st.name = 'nchar') 
	and sc.collation_name is not null
	and sc.collation_name != @target_collation
open pk_cursor
fetch next from pk_cursor into @tablename, @tableschemaid, @pkname, @indid
while (@@fetch_status = 0)
begin
	if (@tableschemaid = @metadataSchemaId)
		set @tablename = '[' + N'MetadataSchema' + '].[' + @tablename + ']'
	else
		set @tablename = '[' + @tablename + ']'
		
	insert into #keydrops (sql) values('ALTER TABLE ' + @tablename + ' DROP CONSTRAINT ' + @pkname)

	select @sql = N'ALTER TABLE ' + @tablename + N' ADD CONSTRAINT ' + @pkname + ' PRIMARY KEY('
  	select @column = index_col(@tablename, @indid, 1)
	set @sql = @sql + '[' + @column +']'

    select @i = 2
  	select @column = index_col(@tablename, @indid, @i)
    while (@column is not null)
    begin
		set @sql = @sql + ',[' + @column + ']'
        select @i = @i + 1
    	select @column = index_col(@tablename, @indid, @i)
    end	   
	set @sql = @sql + N')'
	insert into #keymakes (sql, ord) values(@sql, 2)

    fetch next from pk_cursor into @tablename, @tableschemaid, @pkname, @indid
end
close pk_cursor
deallocate pk_cursor

-- Step 3 generate UNIQUE CONSTRAINT drop and UNIQUE CONSTRAINT create statement
declare @ucname sysname
declare uc_cursor cursor local for 
select distinct parent.name, so.schema_id, so.name, si.index_id
	from sys.objects so
	join sys.objects as parent on (parent.object_id = so.parent_object_id)
	join sys.indexes si on (so.name = si.name)
	join sys.index_columns sic on (si.object_id = sic.object_id
		 and si.index_id = sic.index_id)
	join sys.columns sc on (sic.column_id = sc.column_id and parent.object_id = sc.object_id)
	join sys.types st on (st.system_type_id = sc.system_type_id and st.system_type_id = st.user_type_id)
where 
	so.type = 'UQ'
	and (st.name = 'nvarchar' or st.name = 'nchar')
	and sc.collation_name is not null
	and sc.collation_name != @target_collation
open uc_cursor
fetch next from uc_cursor into @tablename, @tableschemaid, @ucname, @indid
while (@@fetch_status = 0)
begin
	if (@tableschemaid = @metadataSchemaId)
		set @tablename = '[' + N'MetadataSchema' + '].[' + @tablename + ']'
	else
		set @tablename = '[' + @tablename + ']'

    insert into #keydrops (sql) values('ALTER TABLE ' + @tablename + ' DROP CONSTRAINT ' + @ucname)

    select @sql = N'ALTER TABLE ' + @tablename + ' ADD CONSTRAINT ' + @ucname + N' UNIQUE ('        

  	select @column = index_col(@tablename, @indid, 1)
	set @sql = @sql + '[' + @column + ']'

    select @i = 2
  	select @column = index_col(@tablename, @indid, @i)
    while (@column is not null)
    begin
		set @sql = @sql + ',[' + @column + ']'
        select @i = @i + 1
    	select @column = index_col(@tablename, @indid, @i)
    end	   
	set @sql = @sql + N')'
	insert into #keymakes (sql, ord) values(@sql, 2)

    fetch next from uc_cursor into @tablename, @tableschemaid, @ucname, @indid
end
close uc_cursor
deallocate uc_cursor

-- Step 4: for every column in every table with a mismatched collation
-- issue an alter column command
insert into #tablechanges (sql)
	select 'ALTER TABLE ' +
		case
			when so.schema_id = @metadataSchemaId then '[MetadataSchema].[' + so.name + ']'
			else '[' + so.name +']'
		end
		+   ' ALTER COLUMN [' + sc.name + ']' +
		' ' + st.name + 
		case 
			when st.name = 'ntext' then ' COLLATE '
			else 
				case
					when st.name = 'nvarchar' and sc.max_length = -1 then '(max) COLLATE '
					else '(' + cast(sc.max_length/2 as nvarchar(50)) + ') COLLATE ' 
				end
		end
		 +  @target_collation +  	 
		case 
			when sc.is_nullable = 0 then ' NOT NULL'
			else ' NULL' 
		end	 
	from sys.columns sc
		join sys.objects so on (so.object_id = sc.object_id)
		join sys.types st on (st.system_type_id = sc.system_type_id and st.system_type_id = st.user_type_id)
	where
		sc.collation_name is not null
		and sc.collation_name != @target_collation
		and so.type = 'U'
		and (st.name = 'nvarchar' or st.name = 'nchar' or st.name = 'ntext')
order by so.name, sc.name

-- We have a few varchar(max) attributes but they are intended to hold base64-encoded strings.  We want them to be varchars instead of nvarchars because of the
-- space savings, but on some database collations this poses problems in .NET.  So we force the collation to be Latin1_General_CI_AI for these attributes
insert into #tablechanges (sql)
	select 'ALTER TABLE ' +
		case
			when so.schema_id = @metadataSchemaId then '[MetadataSchema].[' + so.name + ']'
			else '[' + so.name +']'
		end
		+   ' ALTER COLUMN [' + sc.name + ']' +
		' ' + st.name + 
		case
			when sc.max_length = -1 then '(max) COLLATE '
			else '(' + cast(sc.max_length as nvarchar(50)) + ') COLLATE ' 
		end

		 +  'Latin1_General_CI_AI' +  	 
		case 
			when sc.is_nullable = 0 then ' NOT NULL'
			else ' NULL' 
		end	 
	from sys.columns sc
		join sys.objects so on (so.object_id = sc.object_id)
		join sys.types st on (st.system_type_id = sc.system_type_id and st.system_type_id = st.user_type_id)
	where
		sc.collation_name is not null
		and sc.collation_name != 'Latin1_General_CI_AI'
		and so.type = 'U'
		and (st.name = 'varchar')
order by so.name, sc.name

-- STEP 5: execute key drops
declare keydrops_cursor cursor local for select sql from #keydrops order by id
open keydrops_cursor
fetch next from keydrops_cursor into @sql
while (@@fetch_status = 0)
begin
   print @sql
   exec (@sql)
   fetch next from keydrops_cursor into @sql
end
close keydrops_cursor
deallocate keydrops_cursor

-- STEP 6: execute table changes
declare tables_cursor cursor local for select sql from #tablechanges order by id
open tables_cursor
fetch next from tables_cursor into @sql
while (@@fetch_status = 0)
begin
   print @sql
   exec (@sql)
   fetch next from tables_cursor into @sql
end
close tables_cursor
deallocate tables_cursor

-- STEP 7: execute key makes
declare keymakes_cursor cursor local for select sql from #keymakes order by ord desc, id asc
open keymakes_cursor
fetch next from keymakes_cursor into @sql
while (@@fetch_status = 0)
begin
   print @sql
   exec (@sql)
   fetch next from keymakes_cursor into @sql
end
close keymakes_cursor
deallocate keymakes_cursor

drop table #keydrops
drop table #keymakes
drop table #tablechanges

end