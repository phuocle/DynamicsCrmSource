

CREATE PROCEDURE [dbo].[p_DeleteSingleAuditPartition](@RangeToDrop DATETIME)
AS
BEGIN	
	-- First check whether Partition Mgmt enabled for this SQL server
	declare @edition int
	set @edition = CONVERT(int, (select SERVERPROPERTY('EngineEdition')))
	IF @edition = 3
	BEGIN
		IF EXISTS (SELECT * FROM sys.tables WHERE Name = 'NonPartitionAuditTable')
		BEGIN
			DROP Table [NonPartitionAuditTable]
		END

		-- Create a temporary table with exactly same schema as AuditBase table
		SELECT TOP 0 * INTO [dbo].[NonPartitionAuditTable] FROM AuditBase
		
		-- Need similar clustered index for fast swictching of partitions
		CREATE UNIQUE CLUSTERED INDEX [cndx_NonPartitionAuditTable_Audit] ON [dbo].[NonPartitionAuditTable]
		(
			[CreatedOn] DESC,
			[AuditId] DESC
		) ON [AuditPScheme] ([CreatedOn])

		CREATE NONCLUSTERED INDEX [ndx_PrimaryKey_NonPartitionAuditTable] ON [dbo].[NonPartitionAuditTable] 
		(
			[AuditId] ASC
		) ON [AuditPScheme] ([CreatedOn])

		CREATE NONCLUSTERED INDEX [ndx_ObjectId] ON [dbo].[NonPartitionAuditTable] 
		(
			[ObjectId] ASC
		) ON [AuditPScheme] ([CreatedOn])
		
		CREATE NONCLUSTERED INDEX [ndx_UserId] ON [dbo].[NonPartitionAuditTable] 
		(
			[UserId] ASC
		) ON [AuditPScheme] ([CreatedOn])
		
		CREATE NONCLUSTERED INDEX [fndx_ObjectTypeCode] ON [dbo].[NonPartitionAuditTable] 
		(
			[ObjectTypeCode] ASC,
			[Action] ASC		
		) 
		WHERE ([ObjectTypeCode] IS NOT NULL)
		ON [AuditPScheme] ([CreatedOn])
		
		-- Delete the index on file group so that partitition can be swicthed
		IF EXISTS (SELECT * FROM sys.indexes WHERE name = 'ndx_PrimaryKey_Audit_Primary' AND OBJECT_NAME(object_id) = 'AuditBase')
		BEGIN
			DROP INDEX [dbo].[AuditBase].[ndx_PrimaryKey_Audit_Primary]
		END


		-- Switch the first partition into the temporary table
		ALTER TABLE AuditBase SWITCH PARTITION 1 TO [dbo].[NonPartitionAuditTable] PARTITION 1
		
		-- Drop the temporary table, the partition is now empty
		DROP TABLE [dbo].[NonPartitionAuditTable]

		-- Merge the range so that empty Partition does not show up in the Retrieve call anywhere
		ALTER PARTITION FUNCTION AuditPFN()	MERGE RANGE (@RangeToDrop)

		-- Recreate an index on the primary so that select top N query works faster
		CREATE UNIQUE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit_Primary] ON [dbo].[AuditBase] 
		(
			[CreatedOn] DESC,
			[AuditId] DESC
		) ON [PRIMARY]
	END
END