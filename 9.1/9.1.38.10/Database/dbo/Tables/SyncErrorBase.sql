CREATE TABLE [dbo].[SyncErrorBase] (
    [ModifiedOn]                DATETIME         NOT NULL,
    [ErrorDetail]               NVARCHAR (MAX)   NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ErrorMessage]              NVARCHAR (1000)  NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SyncErrorBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [StateCode]                 INT              NOT NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [ErrorType]                 INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ErrorCode]                 NVARCHAR (MAX)   NULL,
    [ActionData]                NVARCHAR (MAX)   NULL,
    [ErrorTime]                 DATETIME         NULL,
    [SyncErrorId]               UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Action]                    NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [RequestData]               NVARCHAR (MAX)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SyncErrorBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_SyncError] PRIMARY KEY CLUSTERED ([SyncErrorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_SyncError] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_SyncError] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SyncErrorBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SyncErrorBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_statecode]
    ON [dbo].[SyncErrorBase]([StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SyncErrorBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ownerid]
    ON [dbo].[SyncErrorBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5534CB9C2C644F49AB9F02CC4C59E363]
    ON [dbo].[SyncErrorBase]([SyncErrorId] ASC)
    INCLUDE([Name], [Action], [RegardingObjectId], [RegardingObjectIdName], [RegardingObjectIdYomiName], [RegardingObjectTypeCode], [ErrorTime], [ErrorType], [OwnerId], [OwnerIdType], [StateCode], [StatusCode], [ErrorMessage], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5534CB9C2C644F49AB9F02CC4C59E363]
    ON [dbo].[SyncErrorBase]([SyncErrorId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

