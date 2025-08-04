SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_CreateNextAuditPartition]
as
begin;
	-- First check whether Partition Mgmt enabled for this SQL server
	declare @edition int;
	set @edition = convert(int, (select serverproperty('EngineEdition')));
	if @edition = 3
	begin;
		declare @lastPartitionStartDate  datetime;
		select @lastPartitionStartDate = convert(datetime, max(prv.value))
		from sys.dm_db_partition_stats pst
		left outer join sys.partition_range_values prv
		on prv.boundary_id = pst.partition_number
		where object_id = object_id('AuditBase')
		and index_id in (0,1) and prv.value is not null;

		declare @nextQtrEnd datetime;
		select @nextQtrEnd = dateadd(ms,-3,dateadd(qq, datediff(qq,0,getdate())+2,0));

		-- create a new partition only if there is no partition bounday within 2months of the new date
		-- this is basically to check if someone has already created the corresponding partition
		-- We are checking with 2, so that change of timezone will not result in false positives
		if abs(datediff(mm, @lastPartitionStartDate, @nextQtrEnd )) >= 2
		begin; 
			alter partition scheme AuditPScheme next used [PRIMARY];
			alter partition function AuditPFN() split range (@nextQtrEnd);
		end;
	end;
end;
GO
