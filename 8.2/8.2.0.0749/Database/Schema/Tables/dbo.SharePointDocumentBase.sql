CREATE TABLE [dbo].[SharePointDocumentBase]
(
[CopySource] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[AbsoluteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[Author] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[Edit] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[Version] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SharePointDocumentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[SharePointCreatedOn] [datetime] NULL,
[CheckInComment] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[EditUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ContentType] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[AppCreatedBy] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ContentTypeId] [int] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CheckedOutTo] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsCheckedOut] [bit] NULL CONSTRAINT [DF_SharePointDocumentBase_IsCheckedOut] DEFAULT ((0)),
[DocumentId] [int] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ChildFolderCount] [int] NULL,
[LocationId] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[FileType] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[AppModifiedBy] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ReadUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ChildItemCount] [int] NULL,
[SharePointDocumentId] [uniqueidentifier] NOT NULL,
[Modified] [datetime] NULL,
[FullName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SharePointModifiedBy] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[BusinessUnitId] [uniqueidentifier] NULL,
[IsFolder] [bit] NULL CONSTRAINT [DF_SharePointDocumentBase_IsFolder] DEFAULT ((0)),
[Title] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[FileSize] [int] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[RelativeLocation] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SharePointDocumentBase_OwnerIdType] DEFAULT ((8)),
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ServiceType] [int] NULL,
[IconClassName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[DocumentLocationType] [int] NULL,
[IsRecursiveFetch] [bit] NULL CONSTRAINT [DF_SharePointDocumentBase_IsRecursiveFetch] DEFAULT ((1))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD CONSTRAINT [ndx_PrimaryKey_SharePointDocument] PRIMARY KEY CLUSTERED  ([SharePointDocumentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QuickFind_SharePointDocument] ON [dbo].[SharePointDocumentBase] ([LocationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_regardingobjectid] ON [dbo].[SharePointDocumentBase] ([RegardingObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD CONSTRAINT [business_unit_sharepointdocument] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD CONSTRAINT [business_unit_sharepointdocument2] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD CONSTRAINT [owner_sharepointdocument] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SharePointDocumentBase] ADD CONSTRAINT [TransactionCurrency_SharePointDocument] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
