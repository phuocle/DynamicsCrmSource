SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_DeleteSingleAuditPartition](@RangeToDrop datetime)
as;
begin;
    -- First check whether Partition Mgmt enabled for this SQL server.
    declare @edition int;
    set @edition = convert(int, (select serverproperty('EngineEdition')));

    if (@edition = 3)
    begin;
        if exists (select 1
                   from sys.tables
                   where Name = 'NonPartitionAuditTable')
        begin;
            drop table [NonPartitionAuditTable];
        end;

        -- Create a table with exactly same schema as AuditBase table for temporary purpose.
        select top(0) *
        into [dbo].[NonPartitionAuditTable]
        from AuditBase;

        -- Need similar clustered index for fast swictching of partitions.
        create unique clustered index [cndx_NonPartitionAuditTable_Audit]
        on [dbo].[NonPartitionAuditTable]
        (
            [CreatedOn] desc,
            [AuditId] desc
        )
        on [AuditPScheme] ([CreatedOn]);

        create nonclustered index [ndx_PrimaryKey_NonPartitionAuditTable]
        on [dbo].[NonPartitionAuditTable]
        (
            [AuditId] asc
        )
        on [AuditPScheme] ([CreatedOn]);

        create nonclustered index [ndx_ObjectId]
        on [dbo].[NonPartitionAuditTable]
        (
            [ObjectId] asc
        )
        on [AuditPScheme] ([CreatedOn]);

        create nonclustered index [ndx_UserId]
        on [dbo].[NonPartitionAuditTable]
        (
            [UserId] asc
        )
        on [AuditPScheme] ([CreatedOn]);

        create nonclustered index [fndx_ObjectTypeCode]
        on [dbo].[NonPartitionAuditTable]
        (
            [ObjectTypeCode] asc,
            [Action] asc
        )
        where ([ObjectTypeCode] is not null)
        on [AuditPScheme] ([CreatedOn]);

        -- Delete the index on file group so that partitition can be switched.
        if exists (select 1
                   from sys.indexes
                   where name = 'ndx_PrimaryKey_Audit_Primary'
                         and object_name(object_id) = 'AuditBase')
        begin;
            drop index [dbo].[AuditBase].[ndx_PrimaryKey_Audit_Primary];
        end;

        -- Switch the first partition.
        alter table AuditBase
        switch partition 1 to [dbo].[NonPartitionAuditTable] partition 1;

        -- Merge the range so that empty partition does not show up in the Retrieve call anywhere.
        alter partition function AuditPFN() merge range (@RangeToDrop);

        -- Recreate an index on the primary so that select top(n) query works faster.
        -- WITH (ONLINE = ON): Makes application available for Auditing while AuditBase non-clustered index is created for large tables.

        -- [If we dont generate the create Index statement with ONLINE = ON dynamically, SQL Standard Edition reports syntax error while parsing the stored procedure
        --   even when we have IF condition for Enterprise Edition. This breaks CRM initial deployment; Bug #359608]
        declare @strSQL nvarchar(250)
        set @strSQL = 'create unique nonclustered index [ndx_PrimaryKey_Audit_Primary] on [dbo].[AuditBase] ([CreatedOn] desc, [AuditId] desc) with (online = on) on [PRIMARY]'
        EXEC (@strSQL);

        -- Drop the temporary table, the partition is now empty.
        -- Drop is performed at the end as we want to make the PARTITIN SWITCH & Create Index work done at the earliest.
        drop table [dbo].[NonPartitionAuditTable];

    end;
end;
GO
