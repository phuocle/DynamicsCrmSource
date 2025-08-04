

create procedure [dbo].[p_ReindexAll]  
(  
	@AllIndexTypes			int = 1,		--0:Clustered Index only, 1: Clustered and Non Clustered indexes
	@MaxRunTime				int = NULL,		--Maximum allowed running time (in seconds)  
	@FragRebuildPctHigh		int = 30,		--Min. Percentage of fragmentation above which indexes are REBUILD unless @DefragType is set to 1.
	@FragRebuildPctLow		int = 10,		--Min. Percentage of fragmentation at which indexes are REORGANIZED unless @DefragType is set to 2.
	@MaxFragPctToRebuild	int = 100,		--Max. Percentage of fragmentation above which indexes won't be rebuild or reorganized; useful for defrag within a defined range first, refer usage below 
	@DefragType				int = 0,		--0: default (REORGANIZE fragmentation less than @FragRebuildPctHigh%; REBUILD otherwise) 
											--1: ONLY perform ALTER INDEX ... REORGANIZE irrespective of fragmentation
											--2: ONLY perform ALTER INDEX ... REBUILD  irrespective of fragmentation
	@MinPages				int = 1000,		--do not touch tables less than 1000 pages
	@Verbose				int = 0,		--1: Print progress messages and detailed results including additional scan for final fragmentation after reindex completes for reporting old/New ragmentation.
	@Online					bit = 1,		--1: rebuild indexes ONLINE ONLY, if fails due to BLOB, perform REORGANIZE; 
											--0: rebuild indexes ONLINE first, if fails due to BLOB, perform OFFLINE rebuild
	@Maxdop					int = 1,		--1: default
	@SortInTempDB			bit = 0,		--0: default
	@ScanMode				int = 0,		--0: default (SAMPLE: Query optimizer uses sampled data and computes the sample size by default )
											--1 : FULLSCAN
	@StatisticsNoRecompute	bit = 0, 		--0: default ( OFF )
	@StatsMaintenanceinBG	int	= 1			--DEPRECATED 1: Only do the stats maintenance in BG no index operations are performed.
)  
as
/****************************************************************************************************************************************/  
/*Usage																																	*/
/*	1. ONLY REORGANIZE for frag 10% - 40%	:	exec p_reindexAll @FragRebuildPctLow=10, @MaxFragPctToRebuild=40,  @DefragType=1		*/
/*	2. ONLY REBUILD for frag 30% - 100%		:	exec p_reindexAll @FragRebuildPctLow=30, @MaxFragPctToRebuild=100, @DefragType=2		*/
/*	3. Defragment indexes (default beahvior):	exec p_reindexAll	--(REORGANIZE fragmentation less than 30%; REBUILD otherwise)		*/

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
      ResultCode							- see RETURN CODES
	  TotalIndexesToRebuild					- total count of indexes detected to be rebuild
	  RebuiltWithOnlineON					- count of indexes rebuilt with option ONLINE = ON
	  RebuiltWithOnlineOFF					- count of indexes rebuilt with option ONLINE = OFF  (can't be rebuilt with ONLINE = ON)
	  TotalStatisticsToUpdate				- total count of the indexes to update statistics for
	  StatisticsUpdated						- count of the number of indexes updated
	  FragmentationScanDurationInSeconds	- Duration to identify the fragmented indexes that needs rebuild/reOrg
	  MiscStatsUpdateBeforeRebuildInSeconds - Duration for all UPDATE STATISTICS dbo.Subscription* that are done before rebuild starts.
	  ReindexComments						- Reports any comments to be Loggged in Telemetry like # of Online ReBuild that failed due to BLOB.
  b) Always second recordset - see @errors table
  c) Only when @Verbose=1, then the second recordset with detailed info about all indexes 
  d) Only when @Verbose=1, then the third recordset with detailed info about all indexes to update statistics on
*/
begin
	set nocount on 

	declare @TotalIndexesToRebuildAndReorganize int = 0, @IndexesReorganized int = 0, @RebuiltWithOnlineON int = 0, @RebuiltWithOnlineOFF int = 0,
			@TotalStatisticsToUpdate int = 0, @StatisticsUpdated int = 0, @FragmentationScanDurationInSeconds int = 0, @MiscStatsUpdateBeforeRebuildInSeconds int = 0

	--Get start time for max run time tracking  
	declare @MaxTime datetime = dateadd(ss,ISNULL(@MaxRunTime,0), GetUTCDate())  

	--Account for nulls in parameters, set to default values
	set @AllIndexTypes = ISNULL(@AllIndexTypes, 1)
	set @FragRebuildPctHigh = ISNULL(@FragRebuildPctHigh, 30)
	set @FragRebuildPctLow = ISNULL(@FragRebuildPctLow, 10)
	set @MaxFragPctToRebuild = ISNULL(@MaxFragPctToRebuild, 100)	
	set @DefragType = ISNULL(@DefragType, 0)
	set @MinPages = ISNULL(@MinPages, 1000)
	set @Verbose = ISNULL(@Verbose, 0)
	set @Online = ISNULL(@Online, 1)		
  
	--Validate parameters
	if (
		(@AllIndexTypes not in (0,1)) OR  
		(@MaxRunTime <= 0) OR 
		(@FragRebuildPctHigh > 100) OR (@FragRebuildPctHigh < 0) OR
		(@FragRebuildPctLow > 100) OR (@FragRebuildPctLow < 0) OR
		(@MaxFragPctToRebuild > 100) OR (@MaxFragPctToRebuild < 0) OR
		(@DefragType not in (0,1,2)) OR
		(@MinPages < 1) OR  
		(@Verbose not in (0,1)) OR  
		(@Online not in (0,1)) OR	
		(@SortInTempDB not in (0,1)) OR
		(@ScanMode not in (0,1)) OR
		(@StatisticsNoRecompute not in (0,1))		
		)
	begin  
		print 'Invalid Parameter value. Valid values are:'  
		print 'AllIndexTypes in {0,1}'  
		print 'MaxRunTime > 0,' 		
		print 'FragRebuildPctHigh in {NULL,0..100}' 
		print 'FragRebuildPctLow in {NULL,0..100}'   
		print 'MaxFragPctToRebuild in {NULL,0..100}'   
		print 'defragType in {0,1,2}'  		
		print 'MinPages > 0'
		print 'Verbose in {0,1}'  
		print 'Online in {0,1}'  
		print 'SortInTempDB in {0,1}'
		print 'ScanMode in {0,1}'
		print 'StatisticsNoRecompute in {0,1}' 
		select 5 as ResultCode, @TotalIndexesToRebuildAndReorganize as TotalIndexesToRebuild, @RebuiltWithOnlineON as RebuiltWithOnlineON, @RebuiltWithOnlineOFF as RebuiltWithOnlineOFF 
		return 5
	end  

	--Print parameter values in verbose mode
	if(@verbose = 1)
	begin
		print CONVERT(varchar(30), GetUTCDate(), 113) + ': Parameter values are:'
		print '  @AllIndexTypes: ' + CAST(@AllIndexTypes as varchar)
		print '  @MaxRunTime: ' + IIF(@MaxRunTime IS NULL, '<NULL>', CAST(@MaxRunTime as varchar))
		print '  @FragRebuildPctHigh: ' + CAST(@FragRebuildPctHigh as varchar)
		print '  @FragRebuildPctLow: ' + CAST(@FragRebuildPctLow as varchar)
		print '  @MaxFragPctToRebuild: ' + CAST(@MaxFragPctToRebuild as varchar)
		print '  @DefragType: ' + CAST(@DefragType as varchar)
		print '  @MinPages: ' + CAST(@MinPages as varchar)
		print '  @Verbose: ' + CAST(@Verbose as varchar)
		print '  @Online: ' + CAST(@Online as varchar)
		print '  @Maxdop: ' + CAST(@Maxdop as varchar)
		print '  @SortInTempDB: ' + CAST(@SortInTempDB as varchar)
		print '  @ScanMode: ' + CAST(@ScanMode as varchar)
		print '  @StatisticsNoRecompute: ' + CAST(@StatisticsNoRecompute as varchar)
		print '  '
	end

	declare @indexes table
	(
		SchemaName sysname,
		TableName sysname,
		IndexName sysname,
		PartitionNumber int,	
		OldFrag int,
		NewFrag int null,
		processed bit
	)

	declare @updateStatistics table
	(
		SchemaName sysname,
		TableName sysname,
		IndexName sysname,
		Processed bit
	)

	declare @errors table
	(
		Number  int,
		Severity int,
		State int,
		OnlineOn bit,
		Statement NVarchar(2048)
	)

	---Identify the Indexes that are fragmented and needs rebuild/reOrg
	declare @FragmentationScanStart datetime = GETUTCDATE()

	declare @AuditBaseCurrentPartitionNumber int = 0;	-- in case of un-partitioned AuditBase skip the table from Index Maintenance since it will will be too large
	declare @edition int = convert(int, (select serverproperty('EngineEdition')));

	--Value of Engine edition for Sql Enterprise edition is 3 and for Sql Azure edition is 5
	if (@edition = 3 or @edition = 5)
	begin;
		if exists(select 1 from sys.partition_functions where name = 'AuditPFN')
		begin;
			set @AuditBaseCurrentPartitionNumber = $partition.AuditPFN(getutcdate());
			if (@verbose=1)  print 'Current AuditBase Partition # ' + cast(@AuditBaseCurrentPartitionNumber as varchar(30));
		end;
		else
		begin;
			if (@verbose=1)  print 'Partition function AuditPFN Not found. Skipping AuditBase reindexing...';
		end;
	end;

	insert into @indexes 
	select schema_name(o.schema_id), object_name(s.object_id), i.name, p.partition_number, s.avg_fragmentation_in_percent, null, 0
		from sys.dm_db_index_physical_stats (db_id(),NULL,NULL,NULL,NULL)  s
			inner join sys.objects o on (s.object_id = o.object_id)
			inner join sys.indexes i on (s.object_id = i.object_id and s.index_id = i.index_id)
			inner join sys.partitions p on (p.object_id = i.object_id and p.index_id = i.index_id)
	where
		s.avg_fragmentation_in_percent >= @FragRebuildPctLow		-- defrag only if more than or equal to x% fragmented
		and s.avg_fragmentation_in_percent <= @MaxFragPctToRebuild	-- defrag only if less than or equal to x% fragmented
		and i.type in (1, @AllIndexTypes + 1)						-- (1,2) -- cannot defrag non-indexes(0-heap, 1- clustered, 2-nonclustered, 3-xml)
		and s.page_count >= @MinPages								-- select only if the index spans multiple pages
		and ( 
				o.object_id <> object_id('AuditBase')					-- skip AuditBase table since its partitioned
					or 
				( o.object_id = object_id('AuditBase') and p.partition_number = @AuditBaseCurrentPartitionNumber )		-- include Only current partition of Partioned AuditBase table; 
			)
	order by s.avg_fragmentation_in_percent desc

	select @TotalIndexesToRebuildAndReorganize = @@rowcount
	select @FragmentationScanDurationInSeconds = DateDiff(s, @FragmentationScanStart, GETUTCDATE())

	-- Get all indexes that have a datetime column which are not set to be rebuild
	insert into @updateStatistics
	select schema_name(t.schema_id), t.name, i.name, 0
	from sys.indexes as i with (nolock)
	INNER JOIN sys.index_columns as ic with (nolock) on i.object_id = ic.object_id AND i.index_id = ic.index_id
	INNER JOIN sys.columns as c with (nolock) on c.object_id = ic.object_id AND c.column_id = ic.column_id
	INNER JOIN sys.tables t with (nolock) on i.object_id=t.object_id
	where ic.key_ordinal = 1 
	AND c.system_type_id = 61 
	AND i.type in (1,@AllIndexTypes + 1)  
	AND NOT EXISTS -- select only if not in the rebuild table
		(select TableName from @indexes ind where ind.SchemaName = schema_name(t.schema_id) collate database_default 
												AND ind.TableName = t.Name collate database_default and ind.IndexName = i.Name collate database_default)
	order by t.name, i.name 
	
	select @TotalStatisticsToUpdate = @@ROWCOUNT

	-- Emergency fix - Moved to the top so it will run regardless of the rest
	declare @MiscStatsUpdateStart datetime = GETUTCDATE()

	if exists (select * from sys.objects where object_id = object_id(N'[dbo].[SubscriptionTrackingDeletedObject]') and type in (N'U')) 
		update statistics dbo.SubscriptionTrackingDeletedObject

	if exists (select * from sys.objects where object_id = object_id(N'[dbo].[SubscriptionSyncEntryOfflineBase]') and type in (N'U')) 
		update statistics dbo.SubscriptionSyncEntryOfflineBase

	if exists (select * from sys.objects where object_id = object_id(N'[dbo].[SubscriptionSyncEntryOutlookBase]') and type in (N'U')) 
		update statistics dbo.SubscriptionSyncEntryOutlookBase

	select @MiscStatsUpdateBeforeRebuildInSeconds = DateDiff(s, @MiscStatsUpdateStart, GETUTCDATE())

	if (@Verbose=1)
	begin
		print CONVERT(varchar(30), GetUTCDate(), 113) + ': Statistics for [SubscriptionTrackingDeletedObject], [SubscriptionSyncEntryOfflineBase] and [SubscriptionSyncEntryOutlookBase] - Updated in: ' + cast(@MiscStatsUpdateBeforeRebuildInSeconds as varchar(10)) + ' seconds'
	end
	-- end of Emergency fix
	
	declare @SchemaName sysname, @TableName sysname, @IndexName sysname, @PartitionNumber int, @OldFrag int
	declare @sqlReorg NVarchar(2048), @sqlReBuildTemplate NVarchar(2048), @sql NVarchar(2048), @reindexcomments NVarchar(2048) = '', @OnlineRebuildFailedCount int = 0
	declare @retry bit, @TryOnlineON bit, @reorganize bit
	declare @SORT_IN_TEMPDB nvarchar(3)
	declare @SAMPLING_MODE nvarchar(16)
	declare @STATISTICS_NORECOMPUTE nvarchar(3)

	select @SORT_IN_TEMPDB = case when @SortInTempDB = 1 then 'ON' else 'OFF' end
	select @STATISTICS_NORECOMPUTE = case when @StatisticsNoRecompute = 1 then 'ON' else 'OFF' end
	select @SAMPLING_MODE = case when @ScanMode = 1 then N' WITH FULLSCAN' else '' end
	
	--rebuild/reOrg Indexes
	declare IndexCursor cursor forward_only 
	for
	select SchemaName, TableName, IndexName, PartitionNumber, OldFrag from @indexes order by OldFrag desc	
	
	open IndexCursor
	fetch next from IndexCursor into @SchemaName, @TableName, @IndexName, @PartitionNumber, @OldFrag

	while((@@FETCH_STATUS = 0) AND ((GetUTCDate() < @MaxTime) OR (@MaxRunTime IS NULL)) )
	begin
		--init to default 		
		select @sql = ''
		select @sqlReBuildTemplate = ''
		select @sqlReorg = ''
	   	select @reorganize = 1

		select @sqlReorg = N'ALTER INDEX [' + @IndexName + N'] ON [' + @SchemaName + N'].[' + @TableName + N'] REORGANIZE ' + 
											case 
												when @PartitionNumber <> 1 then N' PARTITION = ' + CAST(@PartitionNumber as varchar(30)) else N'' 
											end
											+ ' WITH ( LOB_COMPACTION = ON ); '	-- LOB_COMPACTION default is ON
		select @sqlReorg = @sqlReorg + N' UPDATE STATISTICS [' + @SchemaName + N'].[' + @TableName + N'] [' + @IndexName + N'] '		--REORGANIZE doesn't UPDATE STATISTICS, so adding explicitly
		select @sqlReorg = @sqlReorg + @SAMPLING_MODE  -- Add Sampling Mode ( 0: SAMPLE which is default, 1: FULLSCAN )
		
		select @sql = @sqlReorg
		  
		if ((@OldFrag > @FragRebuildPctHigh OR @DefragType = 2) AND (@DefragType <> 1))
		begin
			select @reorganize = 0
			select @sqlReBuildTemplate = N'ALTER INDEX ['+ @IndexName + N'] ON [' + @SchemaName + N'].[' + @TableName + N'] REBUILD ' + 
											case 
												when @PartitionNumber <> 1 then N' PARTITION = ' + CAST(@PartitionNumber as varchar(30)) + N' WITH (MAXDOP = '+ CAST(@Maxdop as nvarchar(10)) +', SORT_IN_TEMPDB = '+ @SORT_IN_TEMPDB +', ONLINE = ' 
												else N' WITH ( STATISTICS_NORECOMPUTE = '+ @STATISTICS_NORECOMPUTE +', ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, MAXDOP = '+ CAST(@Maxdop as nvarchar(10)) +', SORT_IN_TEMPDB = '+ @SORT_IN_TEMPDB +', ONLINE = '
											end
			select @sql = @sqlReBuildTemplate + N'ON )'					
		end

		select @retry = 1, @TryOnlineON = 1		--Always attempt Online rebuild irrespective of input parameter @Online value
		while (@retry = 1)
		begin
			if (@verbose=1) print CONVERT(varchar(30), GetUTCDate(), 113) + ' [' + CAST(@OldFrag as varchar) + '%]: ' +  @sql
				
			begin try
				exec (@sql)
				select @retry = 0, @sql = ''

				if (@reorganize = 1)
					select  @IndexesReorganized = @IndexesReorganized + 1
				else
				begin
    				if (@TryOnlineON = 1)
						select  @RebuiltWithOnlineON = @RebuiltWithOnlineON + 1 
					else
						select  @RebuiltWithOnlineOFF = @RebuiltWithOnlineOFF + 1 					  
				end
			end try
			begin catch
				insert into @errors
				select ERROR_NUMBER(), ERROR_SEVERITY(), ERROR_STATE(), @TryOnlineON, @sql
				   
    			if (@TryOnlineON = 1 and @reorganize = 0 and ERROR_NUMBER() = 2725)		--ONLINE rebuild with 2725 error code
    			begin
					-- Handle the possible exception below: rebuild index offline. 			Only SQL2012 has THROW 
					--ErrorNumber	ErrorMessage
					--2725	An online operation cannot be performed for index '?' because the index contains column '?' of data type text, ntext, image, varchar(max), nvarchar(max), varbinary(max), xml, 
					--		or large CLR type. For a non-clustered index, the column could be an include column of the index. For a clustered index, the column could be any column of the table. 
					--		if DROP_EXISTING is used, the column could be part of a new or old index. The operation must be performed offline.					
				
					select @OnlineRebuildFailedCount = @OnlineRebuildFailedCount + 1
					select @reindexcomments = N'*** ' + CAST(@OnlineRebuildFailedCount as varchar(10)) + N' ONLINE REBUILD operations failed due to BLOB dataType.'
					if (@Online = 0)
						select @reindexcomments = @reindexcomments + N' Attempting to REBUILD OFFLINE... ***'
					else
						select @reindexcomments = @reindexcomments + N' Attempting to REORGANIZE... ***'						

					if (@verbose=1) print @reindexcomments

					if (@Online = 0)		--Input Parameter 0 : First try ONLINE rebuild, if fails then try OFFLINE rebuild
					begin
						select @sql = @sqlReBuildTemplate + N'OFF )  --retry after initial ONLINE rebuild BLOB error'
						
						select @TryOnlineON = 0, @retry = 1
					end
					else
					begin
						--(@Online is bit type, values can be only 0 or 1 )
						--ONLINE rebuild failed, try REORG since input parameter @Online = 1, which means ONLY ONLINE operations
						select @sql = @sqlReorg + N' --retry after initial ONLINE rebuild BLOB error'
						
						select @TryOnlineON = 1, @reorganize = 1, @retry = 1
					end
				end
				else
		    		select @retry = 0			  
			end catch
		end
	
		update @indexes set processed=1 where SchemaName = @SchemaName and TableName = @TableName and IndexName = @IndexName and PartitionNumber = @PartitionNumber;

		fetch next from IndexCursor into @SchemaName, @TableName, @IndexName, @PartitionNumber, @OldFrag
	end

	close IndexCursor
	deallocate IndexCursor

	-- Update the statistics for any index that contains a datetime column that wasn't rebuilt
	declare UpdateCursor cursor forward_only 
	for
	select SchemaName, TableName, IndexName from @updateStatistics

	open UpdateCursor
	fetch next from UpdateCursor into @SchemaName, @TableName, @IndexName
	
	while((@@FETCH_STATUS = 0) AND ((GETUTCDATE() < @MaxTime) OR (@MaxRunTime IS NULL)))
	begin
		select @sql = N'UPDATE STATISTICS [' + @SchemaName + N'].[' + @TableName + N'] [' + @IndexName + N']'
		if (@verbose=1) print CONVERT(varchar(30), GetUTCDate(), 113) + ': ' + @sql

		begin try
			exec (@sql)
			select  @StatisticsUpdated = @StatisticsUpdated + 1
		end try
		begin catch
			insert into @errors
				select ERROR_NUMBER(), ERROR_SEVERITY(), ERROR_STATE(), 1, @sql
		end catch

		update @updateStatistics set Processed=1 where SchemaName=@SchemaName AND TableName=@TableName AND IndexName=@IndexName
		fetch next from UpdateCursor into @SchemaName, @TableName, @IndexName
	end
	
	close UpdateCursor
	deallocate UpdateCursor

	if (@Verbose=1)
	begin
		print ''
		print CONVERT(varchar(30), GetUTCDate(), 113) + ': Starting rescan to identify current fragmentation state...(this step is for verbose only)' 

		update @indexes
		set NewFrag = avg_fragmentation_in_percent
		from 
		sys.dm_db_index_physical_stats (db_id(),NULL,NULL,NULL,NULL)  s
		JOIN sys.objects o on (s.object_id = o.object_id)
		JOIN sys.indexes i on (s.object_id = i.object_id and s.index_id = i.index_id)
		where SchemaName=schema_name(o.schema_id) collate database_default
			  and TableName = object_name(s.object_id) collate database_default
			  and IndexName = i.name collate database_default

		print CONVERT(varchar(30), GetUTCDate(), 113) + ': rescan completed.' 
	end

	declare @ResultCode int
	if exists(select * from @indexes where processed = 0)
	begin
		print 'Did not process all indexes due to @MaxRunTime constraint'
		select @ResultCode = 1
	end
	else if exists(select * from @updateStatistics where Processed = 0)
		begin
			print 'Did not update all statistics due to @MaxRunTime constraint'
			select @ResultCode = 2
		end
	else
	begin
		select @ResultCode = 0
	end
	
	-- Return results
	select @ResultCode as ResultCode, 
	@TotalIndexesToRebuildAndReorganize as TotalIndexesToRebuild, 
	@IndexesReorganized as IndexesReorganized, 
	@RebuiltWithOnlineON as RebuiltWithOnlineON, 
	@RebuiltWithOnlineOFF as RebuiltWithOnlineOFF, 
	@TotalStatisticsToUpdate as TotalStatisticsToUpdate, 
	@StatisticsUpdated as StatisticsUpdated,
	@FragmentationScanDurationInSeconds as FragmentationScanDurationInSeconds, 
	@MiscStatsUpdateBeforeRebuildInSeconds as MiscStatsUpdateBeforeRebuildInSeconds,
	@reindexcomments as ReindexComments
	
	select * from @errors
	
	if (@Verbose=1)		select * from @indexes order by OldFrag desc
	if (@Verbose=1)		select * from @updateStatistics

	return @ResultCode
end