

CREATE PROCEDURE [dbo].[p_CreateNextAuditPartition]
AS
BEGIN
	-- First check whether Partition Mgmt enabled for this SQL server
	declare @edition int
	set @edition = CONVERT(int, (select SERVERPROPERTY('EngineEdition')))
	IF @edition = 3
	BEGIN
		DECLARE @lastPartitionStartDate  DATETIME
		SELECT @lastPartitionStartDate = CONVERT(DATETIME, max(prv.value))
		FROM sys.dm_db_partition_stats pst
		LEFT OUTER JOIN sys.partition_range_values prv
		ON prv.boundary_id = pst.partition_number
		WHERE object_id = object_id('AuditBase')
		AND index_id in (0,1) and prv.value is not null

		DECLARE @nextQtrEnd DATETIME;
		SELECT @nextQtrEnd = DATEADD(ms,-3,DATEADD(qq, DATEDIFF(qq,0,GETDATE())+2,0));

		-- create a new partition only if there is no partition bounday within 2months of the new date
		-- this is basically to check if someone has already created the corresponding partition
		-- We are checking with 2, so that change of timezone will not result in false positives
		IF ABS(DATEDIFF(mm, @lastPartitionStartDate, @nextQtrEnd )) >= 2
		BEGIN 
			ALTER PARTITION SCHEME AuditPScheme NEXT USED [PRIMARY]
			ALTER PARTITION FUNCTION AuditPFN() SPLIT RANGE (@nextQtrEnd)
		END
	END
END