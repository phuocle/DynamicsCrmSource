

create procedure [dbo].[p_CreateNextAuditPartition](
	@dtToUseInCreatePartition datetime = null	
)
as
begin;
	if (@dtToUseInCreatePartition is null)
	begin;
		set @dtToUseInCreatePartition = getutcdate();
	end;

	-- First check whether Partition Mgmt enabled for this SQL server
	-- Value of Engine edition for Sql Enterprise edition is 3 and for Sql Azure edition is 5
	declare @edition int = convert(int, (select serverproperty('EngineEdition')));
	if (@edition = 3 or @edition = 5)
	begin;
		-- Validate the Partition function exists		
		if not exists(select 1 from sys.partition_functions where name = 'AuditPFN')
		begin;
			RAISERROR('Partition function AuditPFN Not found. Exiting...', 16, 1);			
			return 1;
		end;

		declare @lastPartitionStartDate  datetime;
		select @lastPartitionStartDate = convert(datetime, max(prv.value))
		from sys.dm_db_partition_stats pst
			left outer join sys.partition_range_values prv on prv.boundary_id = pst.partition_number
		where object_id = object_id('AuditBase') 
			and index_id in (0,1) and prv.value is not null;

		declare @nextQtrEnd datetime;
		select @nextQtrEnd = dateadd(ms, -3, dateadd(qq, datediff(qq, 0, @dtToUseInCreatePartition) + 2, 0));

		-- Check if the partition already exists for @nextQtrEnd, then exit
		declare @errMessage varchar(500);
		if exists(select 1 from sys.partition_range_values where value = @nextQtrEnd)
		begin;
			set @errMessage = 'Partition already exists for ' + CAST(@nextQtrEnd as varchar(30)) + '. Exiting...';
			print @errMessage;						
			return 2;
		end;

		-- Create a new partition only if there is no partition bounday within 2 months of the new date
		-- this is basically to check if someone has already created the corresponding partition
		-- We are checking with 2, so that change of timezone will not result in false positives
		if abs(datediff(mm, @lastPartitionStartDate, @nextQtrEnd )) >= 2
		begin; 
			alter partition scheme AuditPScheme next used [PRIMARY];
			alter partition function AuditPFN() split range (@nextQtrEnd);

			return 0;
		end;
		else
		begin;
			set @errMessage = 'Partition already exists within 2 months of ' + CAST(@nextQtrEnd as varchar(30)) + '. Exiting...';
			print @errMessage;						
			return 3;
		end;
	end;
	else
	begin;
		print 'Not SQL Azure or SQL Enterprise Edition. Exiting...';
		return 5;
	end;
end;