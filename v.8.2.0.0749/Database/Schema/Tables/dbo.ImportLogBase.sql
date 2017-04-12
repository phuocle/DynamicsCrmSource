CREATE TABLE [dbo].[ImportLogBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[SequenceNumber] [int] NOT NULL,
[LineNumber] [int] NULL,
[AdditionalInfo] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LogPhaseCode] [int] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportLogBase_StateCode] DEFAULT ((0)),
[ErrorNumber] [int] NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_ImportLogBase_StatusCode] DEFAULT ((1)),
[CreatedOn] [datetime] NOT NULL,
[ImportLogId] [uniqueidentifier] NOT NULL,
[ErrorDescription] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NOT NULL,
[HeaderColumn] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ColumnValue] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ImportDataId] [uniqueidentifier] NULL,
[ImportFileId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportLogBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportLogBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportLogBase] ADD CONSTRAINT [cndx_PrimaryKey_ImportLog] PRIMARY KEY CLUSTERED  ([ImportLogId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_importdata] ON [dbo].[ImportLogBase] ([ImportDataId]) WHERE ([ImportDataId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_importfile] ON [dbo].[ImportLogBase] ([ImportFileId]) WHERE ([ImportFileId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportLogBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportLogs] ON [dbo].[ImportLogBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportLogBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportLogBase] ADD CONSTRAINT [BusinessUnit_ImportLogs] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportLogBase] ADD CONSTRAINT [ImportLog_ImportData] FOREIGN KEY ([ImportDataId]) REFERENCES [dbo].[ImportDataBase] ([ImportDataId])
GO
ALTER TABLE [dbo].[ImportLogBase] ADD CONSTRAINT [ImportLog_ImportFile] FOREIGN KEY ([ImportFileId]) REFERENCES [dbo].[ImportFileBase] ([ImportFileId])
GO
ALTER TABLE [dbo].[ImportLogBase] ADD CONSTRAINT [owner_importlogs] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
