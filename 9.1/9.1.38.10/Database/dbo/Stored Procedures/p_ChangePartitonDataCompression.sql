

create procedure [dbo].[p_ChangePartitonDataCompression]
	@skipAuditPartitionsToCompress					int = 2,	-- Skip the number of older partitions from Current Partition to Compress
	@maxAuditIndexesToCompressOnOlderPartition		int = 3,	-- Max number of indexes to Compress in each execution, so it doesn't take forever
	@compressAuditClusteredIndexOnOlderPartition	bit = 0		-- 0 : Non clustered indexes will be PAGE compressed while Index stays online
																-- 1 : Non clustered indexes will be PAGE compressed while Index stays online; 
																--		Clustered Index will be PAGE compressed in **OFFLINE** mode due to BLOBs. Table partition goes OFFLINE in this mode.
as;
begin;
	-- First check whether Partition Mgmt enabled for this SQL server.	
	-- Value of Engine edition for Sql Enterprise edition is 3 and for Sql Azure edition is 5
	declare @edition int = convert(int, (select serverproperty('EngineEdition')));
	if (@edition = 3 or @edition = 5)
	begin;
		-- Retreive only Partitioned Indexes of AuditBase table that are on older partitions which are not PAGE compressed
		declare @strSQL nvarchar(4000), @MinIndexIdToCompress int = 2, @AuditBaseCurrentPartitionNumber int = 0;	
		declare @schemaName sysname, @tableName sysname, @indexName sysname, @index_id int, @partitionNumber int

		if exists(select 1 from sys.partition_functions where name = 'AuditPFN')
		begin;
			set @AuditBaseCurrentPartitionNumber = $partition.AuditPFN(getutcdate());
			print 'Current AuditBase Partition # ' + cast(@AuditBaseCurrentPartitionNumber as varchar(30));
		end;
		else
		begin;
			RAISERROR('Partition function AuditPFN Not found. Exiting...', 16, 1);
			return 1;
		end;		

		-- Set filter for Clustered Index to be compressed based on input
		if (@compressAuditClusteredIndexOnOlderPartition = 1)
		begin;
			set @MinIndexIdToCompress = 1;
		end;

		-- Set LOCK ESCALATION to Auto, so lock escalates to Partition level & not table level.
		if exists(select 1 
						from sys.tables t 
							inner join sys.schemas s on s.name = 'dbo' and s.schema_id = t.schema_id 
						where t.object_id = object_id('AuditBase') and t.lock_escalation_desc <> 'AUTO')
		begin;
			ALTER TABLE AuditBase SET (LOCK_ESCALATION = AUTO);
		end;

		-- Perform Index compression for older partitions after skipping @skipAuditPartitionsToCompress partitions
		declare @AuditBasePartitionNumberToSkipCompress int = (@AuditBaseCurrentPartitionNumber - @skipAuditPartitionsToCompress);
		if (@AuditBasePartitionNumberToSkipCompress < 1 )
		begin;
			print 'Skipping compressing AuditBase partitions since there are no older partitions after skipping ' + cast(@skipAuditPartitionsToCompress as varchar(30)) + ' partitions.'
		end;
		else
		begin;
			print 'Compressing AuditBase partitions older than partition # ' + Cast(@AuditBasePartitionNumberToSkipCompress as varchar(30));
		end;

		declare PartitionCursor cursor fast_forward
		for
		select top (@maxAuditIndexesToCompressOnOlderPartition)
			schema_name(t.schema_id) as 'Schema', t.name as 'TableName', i.name as 'IndexName', i.index_id, p.partition_number as 'PartitionNumber' 
			from sys.indexes i
					inner join sys.tables t ON i.object_id = t.object_id
					inner join sys.schemas sc ON t.schema_id = sc.schema_id				
					inner join sys.partitions p ON p.object_id = i.object_id and p.index_id = i.index_id
					inner join sys.partition_schemes ps ON i.data_space_id = ps.data_space_id 
			where i.object_id = object_id('AuditBase') and p.partition_number < @AuditBasePartitionNumberToSkipCompress and p.data_compression <> 2 and i.index_id >= @MinIndexIdToCompress
			order by p.partition_number asc, i.index_id desc	--start with oldest partition; within a partition start with non-clustered indexes first

		open PartitionCursor
		fetch next from PartitionCursor into @schemaName, @tableName, @indexName, @index_id, @partitionNumber

		while(@@FETCH_STATUS = 0)
		begin;
			select @strSQL = N'ALTER INDEX ['+ @indexName + N'] ON [' + @schemaName + N'].[' + @tableName + N'] REBUILD PARTITION = ' + CAST(@partitionNumber as varchar(30)) + 
							 N' WITH ( DATA_COMPRESSION = PAGE ON PARTITIONS (' + CAST(@partitionNumber as varchar(30)) + N'), '
	
				if (@index_id = 1)
				begin;
					select @strSQL = @strSQL + N' ONLINE = OFF );';	--clustered index of AuditBase cannot be online rebuild since it has BLOB
				end;
				else
				begin;
					select @strSQL = @strSQL + N' ONLINE = ON );';
				end;

			print @strSQL;
			exec sp_executeSQL @strSQL;
		
			fetch next from PartitionCursor into @schemaName, @tableName, @indexName, @index_id, @partitionNumber
		end;

		close PartitionCursor
		deallocate PartitionCursor

		return 0;
	end;
	else
	begin;
		print 'Not SQL Azure or SQL Enterprise Edition. Exiting...';
		return 5;
	end;
end;