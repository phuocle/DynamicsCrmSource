CREATE TABLE [dbo].[UserQueryBase] (
    [CreatedOn]             DATETIME         NOT NULL,
    [OfflineSqlQuery]       NVARCHAR (MAX)   NULL,
    [ColumnSetXml]          NVARCHAR (MAX)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [ConditionalFormatting] NVARCHAR (MAX)   NULL,
    [StateCode]             INT              CONSTRAINT [DF_UserQueryBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ParentQueryId]         UNIQUEIDENTIFIER NULL,
    [StatusCode]            INT              NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]            DATETIME         NOT NULL,
    [OwningBusinessUnit]    UNIQUEIDENTIFIER NULL,
    [QueryType]             INT              NOT NULL,
    [AdvancedGroupBy]       NVARCHAR (160)   NULL,
    [FetchXml]              NVARCHAR (MAX)   NOT NULL,
    [OwnerId]               UNIQUEIDENTIFIER CONSTRAINT [DF_UserQueryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [LayoutJson]            NVARCHAR (MAX)   NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [LayoutXml]             NVARCHAR (MAX)   NULL,
    [Name]                  NVARCHAR (200)   NOT NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [UserQueryId]           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ReturnedTypeCode]      INT              NOT NULL,
    [OwnerIdType]           INT              CONSTRAINT [DF_UserQueryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Description_QF_prefix] AS               (CONVERT([nvarchar](850),substring([Description],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_UserQuery] PRIMARY KEY CLUSTERED ([UserQueryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userquery] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_userquerys] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserQueryBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UserQueryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[UserQueryBase]([OwnerId] ASC)
    INCLUDE([StateCode], [QueryType]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserQueryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[UserQueryBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_DefaultLoading]
    ON [dbo].[UserQueryBase]([QueryType] ASC, [StateCode] ASC, [ReturnedTypeCode] ASC, [OwnerId] ASC, [OwnerIdType] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Default]
    ON [dbo].[UserQueryBase]([StateCode] ASC, [ReturnedTypeCode] ASC, [QueryType] ASC)
    INCLUDE([VersionNumber], [Name], [OwnerId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_maxversionnumber]
    ON [dbo].[UserQueryBase]([OwnerId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ModifiedOn]
    ON [dbo].[UserQueryBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[UserQueryBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_F026E7F69E1944FC9F08577178C2AE3D]
    ON [dbo].[UserQueryBase]([Name] ASC, [UserQueryId] ASC)
    INCLUDE([OwnerId], [OwnerIdType], [ModifiedOn], [QueryType], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_F026E7F69E1944FC9F08577178C2AE3D]
    ON [dbo].[UserQueryBase]([UserQueryId] ASC)
    INCLUDE([Name], [Description]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_F026E7F69E1944FC9F08577178C2AE3D]
    ON [dbo].[UserQueryBase]([UserQueryId] ASC)
    INCLUDE([Name], [OwnerId], [OwnerIdType], [ModifiedOn], [QueryType], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description]
    ON [dbo].[UserQueryBase]([Description_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

