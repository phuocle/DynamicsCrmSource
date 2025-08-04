CREATE TABLE [dbo].[ImportLogBase] (
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [SequenceNumber]     INT              NOT NULL,
    [LineNumber]         INT              NULL,
    [AdditionalInfo]     NVARCHAR (MAX)   NULL,
    [LogPhaseCode]       INT              NULL,
    [StateCode]          INT              CONSTRAINT [DF_ImportLogBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ErrorNumber]        INT              NULL,
    [StatusCode]         INT              CONSTRAINT [DF_ImportLogBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [CreatedOn]          DATETIME         NOT NULL,
    [ImportLogId]        UNIQUEIDENTIFIER NOT NULL,
    [ErrorDescription]   NVARCHAR (512)   NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NOT NULL,
    [HeaderColumn]       NVARCHAR (MAX)   NULL,
    [ColumnValue]        NVARCHAR (MAX)   NULL,
    [ImportDataId]       UNIQUEIDENTIFIER NULL,
    [ImportFileId]       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportLogBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_ImportLogBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportLog] PRIMARY KEY CLUSTERED ([ImportLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_ImportLogs] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [ImportLog_ImportData] FOREIGN KEY ([ImportDataId]) REFERENCES [dbo].[ImportDataBase] ([ImportDataId]) NOT FOR REPLICATION,
    CONSTRAINT [ImportLog_ImportFile] FOREIGN KEY ([ImportFileId]) REFERENCES [dbo].[ImportFileBase] ([ImportFileId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_importlogs] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_importdata]
    ON [dbo].[ImportLogBase]([ImportDataId] ASC) WHERE ([ImportDataId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_importfile]
    ON [dbo].[ImportLogBase]([ImportFileId] ASC) WHERE ([ImportFileId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportLogBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportLogs]
    ON [dbo].[ImportLogBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportLogBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);

