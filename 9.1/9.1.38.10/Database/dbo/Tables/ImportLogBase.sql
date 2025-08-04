CREATE TABLE [dbo].[ImportLogBase] (
    [ColumnValue]        NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [LogPhaseCode]       INT              NULL,
    [HeaderColumn]       NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NOT NULL,
    [StatusCode]         INT              CONSTRAINT [DF_ImportLogBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [StateCode]          INT              CONSTRAINT [DF_ImportLogBase_StateCode] DEFAULT ((0)) NOT NULL,
    [AdditionalInfo]     NVARCHAR (MAX)   NULL,
    [ImportDataId]       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [LineNumber]         INT              NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [ImportFileId]       UNIQUEIDENTIFIER NULL,
    [ErrorDescription]   NVARCHAR (512)   NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NOT NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportLogBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ImportLogId]        UNIQUEIDENTIFIER NOT NULL,
    [ErrorNumber]        INT              NULL,
    [SequenceNumber]     INT              NOT NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_ImportLogBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportLog] PRIMARY KEY CLUSTERED ([ImportLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_ImportLogs] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [ImportLog_ImportData] FOREIGN KEY ([ImportDataId]) REFERENCES [dbo].[ImportDataBase] ([ImportDataId]),
    CONSTRAINT [ImportLog_ImportFile] FOREIGN KEY ([ImportFileId]) REFERENCES [dbo].[ImportFileBase] ([ImportFileId]),
    CONSTRAINT [owner_importlogs] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImportLogBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ImportLogBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportLogBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportLogBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportLogs]
    ON [dbo].[ImportLogBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_importfile]
    ON [dbo].[ImportLogBase]([ImportFileId] ASC)
    INCLUDE([SequenceNumber]) WHERE ([ImportFileId] IS NOT NULL) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_importdata]
    ON [dbo].[ImportLogBase]([ImportDataId] ASC) WHERE ([ImportDataId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2D779B937CA24A658AEE2410F19267F5]
    ON [dbo].[ImportLogBase]([ImportLogId] ASC)
    INCLUDE([SequenceNumber], [LogPhaseCode], [ErrorNumber], [ErrorDescription], [HeaderColumn], [ColumnValue], [LineNumber], [ImportDataId], [AdditionalInfo]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ImportDataId]
    ON [dbo].[ImportLogBase]([ImportDataId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

