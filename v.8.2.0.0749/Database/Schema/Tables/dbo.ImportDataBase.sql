CREATE TABLE [dbo].[ImportDataBase]
(
[CreatedOn] [datetime] NOT NULL,
[LineNumber] [int] NULL,
[RecordId] [uniqueidentifier] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NOT NULL,
[ImportFileId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ImportDataId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportDataBase_StateCode] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[HasError] [bit] NULL CONSTRAINT [DF_ImportDataBase_HasError] DEFAULT ((0)),
[StatusCode] [int] NOT NULL CONSTRAINT [DF_ImportDataBase_StatusCode] DEFAULT ((1)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportDataBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ErrorType] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportDataBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD CONSTRAINT [cndx_PrimaryKey_ImportData] PRIMARY KEY CLUSTERED  ([ImportDataId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_idAndHasError] ON [dbo].[ImportDataBase] ([ImportDataId], [HasError]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_idAndLinenumber] ON [dbo].[ImportDataBase] ([ImportDataId], [LineNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_fileId] ON [dbo].[ImportDataBase] ([ImportFileId]) WHERE ([ImportFileId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportDataBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportData] ON [dbo].[ImportDataBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportDataBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportDataBase] ADD CONSTRAINT [BusinessUnit_ImportData] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportDataBase] ADD CONSTRAINT [ImportFile_ImportData] FOREIGN KEY ([ImportFileId]) REFERENCES [dbo].[ImportFileBase] ([ImportFileId])
GO
ALTER TABLE [dbo].[ImportDataBase] ADD CONSTRAINT [owner_importdatas] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
