

CREATE PROCEDURE [dbo].[p_ReindexAll]  
(  
	@AllIndexTypes   int = 0,       --0:Clustered Index only, 1: Clustered and Non Clustered indexes
	@MaxRunTime      int = NULL,    --Maximum allowed running time (in seconds)  
	@FragRebuildPct  int = 30,      --Percentage of fragmentation at which indexes are rebuilt 
	@MinPages		 int = 25,		--do not touch tables less than 25 pages 
	@Verbose		 int = 0,		--1: Print progress messages and detailed results
	@Online          bit = 1        --1: rebuild indexes online
)  
AS  
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
BEGIN 
	SET NOCOUNT ON  

	DECLARE @TotalIndexesToRebuild int = 0,
			@RebuiltWithOnlineON int = 0,
			@RebuiltWithOnlineOFF int = 0,
			@TotalStatisticsToUpdate int = 0,
			@StatisticsUpdated int = 0

	--Get start time for max run time tracking  
	DECLARE @MaxTime datetime  
	SELECT @MaxTime = dateadd(ss,ISNULL(@MaxRunTime,0), GetUTCDate())  

	--Account for nulls in parameters, set to default values
	SET @FragRebuildPct = ISNULL(@FragRebuildPct, 30)
	SET @AllIndexTypes = ISNULL(@AllIndexTypes, 0)
	SET @Verbose = ISNULL(@Verbose, 0)
	SET @MinPages = ISNULL(@MinPages, 25)
	SET @Online = ISNULL(@Online, 1)
  
	--Validate parameters
	IF ((@MaxRunTime <= 0) OR 
		(@AllIndexTypes not in (0,1)) OR  
		(@Verbose not in (0,1)) OR  
		(@Online not in (0,1)) OR  
		(@MinPages < 1) OR  
		(@FragRebuildPct > 100) OR (@FragRebuildPct < 0))  
	BEGIN  
		PRINT 'Invalid Parameter value. Valid values are:'  
		PRINT 'MaxRunTime > 0,' 
		PRINT 'MinPages > 0'
		PRINT 'FragRebuildPct in {NULL,0..100}'  
		PRINT 'AllIndexTypes in {0,1}'  
		PRINT 'Verbose in {0,1}'  
		PRINT 'Online in {0,1}'  
		SELECT 5 as ResultCode, @TotalIndexesToRebuild as TotalIndexesToRebuild, @RebuiltWithOnlineON as RebuiltWithOnlineON, @RebuiltWithOnlineOFF as RebuiltWithOnlineOFF 
		RETURN 5
	END  

	DECLARE @indexes table
	(
		SchemaName sysname,
		TableName sysname,
		IndexName sysname,
		OldFrag int,
		NewFrag int null,
		processed bit
	)

	DECLARE @updateStatistics table
	(
		SchemaName sysname,
		TableName sysname,
		IndexName sysname,
		Processed bit
	)

	DECLARE @errors table
	(
		Number  int,
		Severity int,
		State int,
		--Message nvarchar(4000),  -- can be found by select * from sys.messages m where message_id = Number and m.language_id = 1033
		OnlineOn bit,
		Statement NVarchar(2048)
	)

	INSERT INTO @indexes 
	SELECT schema_name(o.schema_id), object_name(s.object_id), i.name, s.avg_fragmentation_in_percent, null, 0
	FROM sys.dm_db_index_physical_stats (db_id(),NULL,NULL,NULL,NULL)  s
	JOIN sys.objects o on (s.object_id = o.object_id)
	JOIN sys.indexes i on (s.object_id = i.object_id and s.index_id = i.index_id)
	WHERE
	s.avg_fragmentation_in_percent > @FragRebuildPct -- defrag only if more than x% fragmented
	and i.type in (1, @AllIndexTypes + 1) -- (1,2) -- cannot defrag non-indexes(0-heap, 1- clustered, 2-nonclustered, 3-xml)
	and s.page_count >= @MinPages -- select only if the index spans multiple pages
	ORDER BY s.avg_fragmentation_in_percent desc

	select @TotalIndexesToRebuild = @@rowcount

	-- Get all indexes that have a datetime column which are not set to be rebuild
	INSERT INTO @updateStatistics
	SELECT schema_name(t.schema_id), t.name, i.name, 0
	FROM sys.indexes AS i WITH (NOLOCK)
	INNER JOIN sys.index_columns AS ic WITH (NOLOCK) ON i.object_id = ic.object_id AND i.index_id = ic.index_id
	INNER JOIN sys.columns AS c WITH (NOLOCK) ON c.object_id = ic.object_id AND c.column_id = ic.column_id
	INNER JOIN sys.tables t WITH (NOLOCK) ON i.object_id=t.object_id
	WHERE ic.key_ordinal = 1 
	AND c.system_type_id = 61 
	AND i.type in (1,@AllIndexTypes + 1)  
	AND NOT EXISTS -- select only if not in the rebuild table
		(SELECT TableName FROM @indexes ind WHERE ind.SchemaName = schema_name(t.schema_id) AND ind.TableName = t.Name and ind.IndexName = i.Name)
	ORDER BY t.name, i.name 
	
	select @TotalStatisticsToUpdate = @@ROWCOUNT
	
	DECLARE @SchemaName sysname,
			@TableName sysname,
			@IndexName sysname,
			@sqlTemplate NVarchar(2048),
			@sql NVarchar(2048)

	DECLARE @retry bit 
			,@onlineON bit

	DECLARE IndexCursor CURSOR LOCAL FOR
	SELECT SchemaName, TableName, IndexName from @indexes order by OldFrag desc
	OPEN IndexCursor  
	   FETCH NEXT FROM IndexCursor INTO @SchemaName, @TableName, @IndexName
	   WHILE ((@@FETCH_STATUS = 0) AND ((GetUTCDate() < @MaxTime) OR (@MaxRunTime IS NULL)) )
	   BEGIN
		  select @sqlTemplate = 'ALTER INDEX ['+ @IndexName +'] '+
				'ON ['+@SchemaName+'].['+@TableName+'] REBUILD WITH '+
				'( PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, SORT_IN_TEMPDB = OFF, ONLINE = '	  
		    IF (@Online=1)
				select @sql = @sqlTemplate + 'ON )'
			ELSE
				select @sql = @sqlTemplate + 'OFF )'
			
		   select @retry = 1, @onlineON = @Online
		   while (@retry = 1)
		   BEGIN
			   BEGIN TRY
				IF (@Verbose=1) PRINT @sql
				EXEC (@sql)
	    		select @retry = 0
    			IF (@onlineON=1)
					SELECT  @RebuiltWithOnlineON = @RebuiltWithOnlineON +1 
				ELSE
					SELECT  @RebuiltWithOnlineOFF = @RebuiltWithOnlineOFF +1 					  
			  END TRY
			  BEGIN CATCH
				insert into @errors
				  select ERROR_NUMBER(), ERROR_SEVERITY(), ERROR_STATE(), @onlineON, @sql
				   
    			IF (@onlineON=1 and ERROR_NUMBER() = 2725)
    			BEGIN
					-- Handle the possible exception below: rebuild index offline. 			Only SQL2012 has THROW 
					--ErrorNumber	ErrorMessage
					--2725	An online operation cannot be performed for index '?' because the index contains column '?' of data type text, ntext, image, varchar(max), nvarchar(max), varbinary(max), xml, or large CLR type. For a non-clustered index, the column could be an include column of the index. For a clustered index, the column could be any column of the table. If DROP_EXISTING is used, the column could be part of a new or old index. The operation must be performed offline.
					select @sql = @sqlTemplate + 'OFF )'
					select @onlineON = 0
				END
				ELSE
		    		select @retry = 0			  
			  END CATCH
		  END
		UPDATE @indexes SET processed=1 WHERE SchemaName=@SchemaName and TableName=@TableName and IndexName=@IndexName
		FETCH NEXT FROM IndexCursor INTO @SchemaName, @TableName, @IndexName
	   END
	CLOSE IndexCursor
	DEALLOCATE IndexCursor

	-- Update the statistics for any index that contains a datetime column that wasn't rebuilt
	DECLARE UpdateCursor CURSOR LOCAL FOR
	SELECT SchemaName, TableName, IndexName FROM @updateStatistics
	OPEN UpdateCursor
		FETCH NEXT FROM UpdateCursor INTO @SchemaName, @TableName, @IndexName
		WHILE((@@FETCH_STATUS = 0) AND ((GETUTCDATE() < @MaxTime) OR (@MaxRunTime IS NULL)))
		BEGIN
			SELECT @sql = 'UPDATE STATISTICS [' + @SchemaName + '].[' + @TableName + '] [' + @IndexName + ']'
			IF (@Verbose=1) PRINT @sql
			BEGIN TRY
				EXEC (@sql)
				SELECT  @StatisticsUpdated = @StatisticsUpdated + 1
			END TRY
			BEGIN CATCH
				INSERT INTO @errors
					SELECT ERROR_NUMBER(), ERROR_SEVERITY(), ERROR_STATE(), @onlineON, @sql
			END CATCH
			UPDATE @updateStatistics SET Processed=1 WHERE SchemaName=@SchemaName AND TableName=@TableName AND IndexName=@IndexName
			FETCH NEXT FROM UpdateCursor INTO @SchemaName, @TableName, @IndexName
		END
	CLOSE UpdateCursor
	DEALLOCATE UpdateCursor

	IF (@Verbose=1)
	BEGIN
		UPDATE @indexes
		SET NewFrag = avg_fragmentation_in_percent
		FROM 
		sys.dm_db_index_physical_stats (db_id(),NULL,NULL,NULL,NULL)  s
		JOIN sys.objects o on (s.object_id = o.object_id)
		JOIN sys.indexes i on (s.object_id = i.object_id and s.index_id = i.index_id)
		WHERE SchemaName=schema_name(o.schema_id)
			  and TableName = object_name(s.object_id)
			  and IndexName = i.name
	END

	DECLARE @ResultCode int
	IF Exists(select * from @indexes where processed = 0)
	BEGIN
		PRINT 'Did not process all indexes due to @MaxRunTime constraint'
		SELECT @ResultCode = 1
	END
	ELSE IF EXISTS(SELECT * from @updateStatistics WHERE Processed = 0)
		BEGIN
			PRINT 'Did not update all statistics due to @MaxRunTime constraint'
			SELECT @ResultCode = 2
		END
	ELSE
	BEGIN
		SELECT @ResultCode = 0
	END

	

	-- Return results
	SELECT @ResultCode as ResultCode, @TotalIndexesToRebuild as TotalIndexesToRebuild, @RebuiltWithOnlineON as RebuiltWithOnlineON, @RebuiltWithOnlineOFF as RebuiltWithOnlineOFF, @TotalStatisticsToUpdate as TotalStatisticsToUpdate, @StatisticsUpdated as StatisticsUpdated
	SELECT * from @errors
	IF (@Verbose=1)		SELECT * FROM @indexes order by OldFrag desc
	IF (@Verbose=1)		SELECT * FROM @updateStatistics
	RETURN @ResultCode
END
