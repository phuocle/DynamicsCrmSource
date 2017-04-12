CREATE TABLE [dbo].[OfficeDocumentBase]
(
[SHA256] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[DocumentType] [int] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ObjectId] [uniqueidentifier] NULL,
[ClientData] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FileLockState] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_OfficeDocumentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[FileSize] [int] NULL,
[Content] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OfficeDocumentId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_OfficeDocumentBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[OfficeDocumentBase] ADD CONSTRAINT [cndx_PrimaryKey_OfficeDocument] PRIMARY KEY CLUSTERED  ([OfficeDocumentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_created_on] ON [dbo].[OfficeDocumentBase] ([CreatedOn]) INCLUDE ([DocumentType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OfficeDocumentBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OfficeDocumentBase] ADD CONSTRAINT [owner_officedocument] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
