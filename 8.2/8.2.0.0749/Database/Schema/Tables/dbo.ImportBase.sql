CREATE TABLE [dbo].[ImportBase]
(
[SendNotification] [bit] NOT NULL CONSTRAINT [DF_ImportBase_SendNotification] DEFAULT ((0)),
[IsImport] [bit] NOT NULL CONSTRAINT [DF_ImportBase_IsImport] DEFAULT ((1)),
[ModeCode] [int] NOT NULL CONSTRAINT [DF_ImportBase_ModeCode] DEFAULT ((0)),
[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportBase_StateCode] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ImportId] [uniqueidentifier] NOT NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Sequence] [int] NOT NULL CONSTRAINT [DF_ImportBase_Sequence] DEFAULT ((0)),
[ModifiedOn] [datetime] NOT NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_ImportBase_StatusCode] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportBase] ADD CONSTRAINT [cndx_PrimaryKey_Import] PRIMARY KEY CLUSTERED  ([ImportId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Imports] ON [dbo].[ImportBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportBase] ADD CONSTRAINT [BusinessUnit_Imports] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportBase] ADD CONSTRAINT [owner_imports] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
