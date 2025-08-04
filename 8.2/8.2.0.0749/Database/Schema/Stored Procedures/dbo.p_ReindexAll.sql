SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_ReindexAll]  
(  
	@AllIndexTypes		int = 0,        --0:Clustered Index only, 1: Clustered and Non Clustered indexes
	@MaxRunTime			 int = NULL,    --Maximum allowed running time (in seconds)  
	@FragRebuildPctHigh  int = 30,      --Percentage of fragmentation at which indexes are rebuilt 
	@FragRebuildPctLow	int = 5,        --Min. Percentage of fragmentation at which indexes are reorganized 
	@MinPages			 int = 1000,	--do not touch tables less than 1000 pages 
	@Verbose			int = 0,		--1: Print progress messages and detailed results
	@Online				 bit = 1        --1: rebuild indexes online
)  
as  
/***********************************************************************************************/  
/* RETURN CODES:                                                                               */
/*    0 - Success                                                                              */
/*    1 - Partial success - some indexes could not be rebuilt                                  */
/*    2 - Partial success - Indexes were rebuilt, but some statistics were not updated         */
/*    5 - Invalid input parameter(s)                                                           */
/***********************************************************************************************/  
/*
  Returns
  a) Always first recordset -  one row with 4 integer columns:
      ResultCode  - see RETURN CODES
	  TotalIndexesToRebuild  - total count of indexes detected to be rebuild
	  RebuiltWithOnlineON    - count of indexes rebuilt with option ONLINE = ON
	  RebuiltWithOnlineOFF   - count of indexes rebuilt with option ONLINE = OFF  (can't be rebuilt with ONLINE = ON)
	  TotalStatisticsToUpdate - total count of the indexes to update statistics for
	  StatisticsUpdated - count of the number of indexes updated
  b) Always second recordset - see @errors table
  c) Only when @Verbose=1, then the second recordset with detailed info about all indexes 
  d) Only when @Verbose=1, then the third recordset with detailed info about all indexes to update statistics on
*/
begin; 
	set nocount on;  

	declare @TotalIndexesToRebuildAndReorganize int = 0,
			@IndexesReorganized int = 0,
			@RebuiltWithOnlineON int = 0,
			@RebuiltWithOnlineOFF int = 0,
			@TotalStatisticsToUpdate int = 0,
			@StatisticsUpdated int = 0;

	--Get start time for max run time tracking  
	declare @MaxTime datetime;  
	select @MaxTime = dateadd(ss,ISNULL(@MaxRunTime,0), GetUTCDate());  

	declare @indexes table
	(
		SchemaName sysname,
		TableName sysname,
		IndexName sysname,
		OldFrag int,
		NewFrag int null,
		processed bit
	);

	declare @updateStatistics table
	(
		SchemaName sysname,
		TableName sysname,
		IndexName sysname,
		Processed bit
	);

	declare @errors table
	(
		Number  int,
		Severity int,
		State int,
		OnlineOn bit,
		Statement NVarchar(2048)
	);

	declare @schemaname sysname,
				@tablename sysname,
				@indexname sysname,
				@oldfrag int,
				@sqltemplate nvarchar(2048),
				@sql nvarchar(2048);

	declare @retry bit,
			@onlineon bit,
			@reorganize bit;

	--Account for nulls in parameters, set to default values
	set @FragRebuildPctHigh = ISNULL(@FragRebuildPctHigh, 30);
	set @FragRebuildPctLow = ISNULL(@FragRebuildPctLow, 5);
	set @AllIndexTypes = ISNULL(@AllIndexTypes, 0);
	set @Verbose = ISNULL(@Verbose, 0);
	set @MinPages = ISNULL(@MinPages, 1000);
	set @Online = ISNULL(@Online, 1);
  
	--Validate parameters
	if ((@MaxRunTime <= 0) or 
		(@AllIndexTypes not in (0,1)) or  
		(@Verbose not in (0,1)) or  
		(@Online not in (0,1)) or  
		(@MinPages < 1) or  
		(@FragRebuildPctHigh > 100) or (@FragRebuildPctHigh < 0) or
		(@FragRebuildPctLow > 100) or (@FragRebuildPctLow < 0))
	begin;  
		print 'Invalid Parameter value. Valid values are:';
		print 'MaxRunTime > 0,';
		print 'MinPages > 0';
		print 'FragRebuildPctHigh in {null,0..100}';
		print 'FragRebuildPctLow in {null,0..100}'; 
		print 'AllIndexTypes in {0,1}';
		print 'Verbose in {0,1}';
		print 'Online in {0,1}'; 
		select 5 as ResultCode, @TotalIndexesToRebuildAndReorganize as TotalIndexesToRebuild, @RebuiltWithOnlineON as RebuiltWithOnlineON, @RebuiltWithOnlineOFF as RebuiltWithOnlineOFF; 
		return 5;
	end;

	insert into @indexes 
	select schema_name(o.schema_id), object_name(s.object_id), i.name, s.avg_fragmentation_in_percent, null, 0
		from sys.dm_db_index_physical_stats (db_id(),null,null,null,null)  s
		join sys.objects o 
			on (s.object_id = o.object_id)
		join sys.indexes i 
			on (s.object_id = i.object_id and s.index_id = i.index_id)
		where (s.avg_fragmentation_in_percent > @FragRebuildPctLow -- defrag only if more than x% fragmented
			and i.type in (1, @AllIndexTypes + 1) -- (1,2) -- cannot defrag non-indexes(0-heap, 1- clustered, 2-nonclustered, 3-xml)
			and s.page_count >= @MinPages) -- select only if the index spans multiple pages
		order by s.avg_fragmentation_in_percent desc;
	

	select @TotalIndexesToRebuildAndReorganize = @@rowcount;

	-- Get all indexes that have a datetime column which are not set to be rebuild
	insert into @updateStatistics
	select schema_name(t.schema_id), t.name, i.name, 0
		from sys.indexes as i 
		inner join sys.index_columns as ic 
			on i.object_id = ic.object_id 
			AND i.index_id = ic.index_id
		inner join sys.columns as c 
			on c.object_id = ic.object_id 
			AND c.column_id = ic.column_id
		inner join sys.tables t 
			on i.object_id=t.object_id
		where ic.key_ordinal = 1 
			and c.system_type_id = 61 
			and i.type in (1,@AllIndexTypes + 1)  
			and NOT exists -- select only if not in the rebuild table
				(select TableName from @indexes ind 
					where ind.schemaname = schema_name(t.schema_id) collate database_default 
					and ind.tablename = t.name collate database_default 
					and ind.indexname = i.name collate database_default)
		order by t.name, i.name;
	
	select @totalstatisticstoupdate = @@rowcount;
	
	declare indexcursor cursor local for
		select schemaname, tablename, indexname, oldfrag from @indexes order by oldfrag desc;
		open indexcursor
		fetch next from indexcursor into @schemaname, @tablename, @indexname, @oldfrag
			while ((@@fetch_status = 0) and ((getutcdate() < @maxtime) or (@maxruntime is null)) )
				begin;
					if (@oldfrag > @fragrebuildpctlow and @oldfrag <= @fragrebuildpcthigh)
						begin;
							select @reorganize = 1;
							select @sql = 'ALTER INDEX ['+ @IndexName +'] ' + 'ON ['+@SchemaName+'].['+@TableName+'] REORGANIZE WITH ' + '( LOB_COMPACTION = ON )';	-- default is ON
						end;
					if (@OldFrag > @FragRebuildPctHigh)
						begin;
							select @reorganize = 0;
							select @sqlTemplate = 'ALTER INDEX ['+ @IndexName +'] '+'ON ['+@SchemaName+'].['+@TableName+'] REBUILD WITH '+'( PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, SORT_IN_TEMPDB = OFF, ONLINE = '	  
							if (@Online=1)
								select @sql = @sqlTemplate + 'ON )';
							else
								select @sql = @sqlTemplate + 'OFF )';
						end;
					select @retry = 1, @onlineON = @Online;
					while (@retry = 1)
						begin;
							begin try
								exec (@sql);
									select @retry = 0;
									select @sql = '';
									if (@reorganize=1)
										select  @IndexesReorganized = @IndexesReorganized + 1;
									else
    									if (@onlineON=1)
											select  @RebuiltWithOnlineON = @RebuiltWithOnlineON +1; 
										else
											select  @RebuiltWithOnlineOFF = @RebuiltWithOnlineOFF +1;					  
							end try 
							begin catch
								insert into @errors
								select error_number(), error_severity(), error_state(), @onlineON, @sql;
			   
								if (@onlineON=1 and error_number() = 2725)
  									begin;
											-- Handle the possible exception below: rebuild index offline. 			only sql2012 has throw 
											--ErrorNumber	ErrorMessage
											--2725	An online operation cannot be performed for index '?' because the index contains column '?' of data type text, ntext, image, varchar(max), nvarchar(max), varbinary(max), xml, or large CLR type. For a non-clustered index, the column could be an include column of the index. For a clustered index, the column could be any column of the table. If DROP_EXISTING is used, the column could be part of a new or old index. The operation must be performed offline.
										select @sql = @sqlTemplate + 'OFF )';
										select @onlineON = 0;
									end;
								else
		    							select @retry = 0;
							end catch
						end;
					update @indexes 
					set processed=1 
					where SchemaName=@SchemaName 
					and TableName=@TableName 
					and IndexName=@IndexName;
					fetch next from IndexCursor 
					into @SchemaName, @TableName, @IndexName, @OldFrag;
				end;
		close IndexCursor;
	deallocate IndexCursor;

	-- Update the statistics for any index that contains a datetime column that wasn't rebuilt
	declare UpdateCursor cursor local for
		select SchemaName, TableName, IndexName FROM @updateStatistics;
		open UpdateCursor
		fetch next from UpdateCursor into @SchemaName, @TableName, @IndexName
			while((@@FETCH_STATUS = 0) and ((GETUTCDATE() < @MaxTime) or (@maxruntime is null)))
				begin
					select @sql = 'UPDATE STATISTICS [' + @SchemaName + '].[' + @TableName + '] [' + @IndexName + ']';
					begin try
						exec (@sql);
						select  @StatisticsUpdated = @StatisticsUpdated + 1;
					end try
					begin catch
						insert into @errors
						select error_number(), error_severity(), error_state(), @onlineON, @sql;
					end catch
					update @updateStatistics 
					SET Processed=1 
					where SchemaName=@SchemaName 
					and TableName=@TableName 
					and IndexName=@IndexName;
					fetch next from UpdateCursor into @SchemaName, @TableName, @IndexName;
				end;
		close UpdateCursor;
	deallocate UpdateCursor;

	if (@Verbose=1)
		begin;
			update @indexes
			set NewFrag = avg_fragmentation_in_percent
			from 
				sys.dm_db_index_physical_stats (db_id(),null,null,null,null)  s
				join sys.objects o 
					on (s.object_id = o.object_id)
				join sys.indexes i 
					on (s.object_id = i.object_id and s.index_id = i.index_id)
			where SchemaName=schema_name(o.schema_id) collate database_default
			  and TableName = object_name(s.object_id) collate database_default
			  and IndexName = i.name collate database_default;
		end;
		
	declare @ResultCode int;
	if exists(select * from @indexes where processed = 0)
		begin;
			print 'Did not process all indexes due to @MaxRunTime constraint';
			select @ResultCode = 1;
		end;
		else if exists(select * from @updateStatistics where Processed = 0)
			begin;
				print 'Did not update all statistics due to @MaxRunTime constraint';
				select @ResultCode = 2;
			end;
		else
			begin;
				select @ResultCode = 0;
			end;
	
		-- Return results
		select @ResultCode as ResultCode, 
		@TotalIndexesToRebuildAndReorganize as TotalIndexesToRebuild, 
		@IndexesReorganized as IndexesReorganized, 
		@RebuiltWithOnlineON as RebuiltWithOnlineON, 
		@RebuiltWithOnlineOFF as RebuiltWithOnlineOFF, 
		@TotalStatisticsToUpdate as TotalStatisticsToUpdate, 
		@StatisticsUpdated as StatisticsUpdated;
		select * from @errors;
		if (@Verbose=1)	
			select * from @indexes order by OldFrag desc;
		if (@Verbose=1)
			select * from @updateStatistics;
		return @ResultCode;
	end;
GO
