CREATE TABLE [dbo].[SharePointDocumentLocationBase]
(
[VersionNumber] [timestamp] NULL,
[StateCode] [int] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[RelativeUrl] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[AbsoluteURL] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[RegardingObjectId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[SiteCollectionId] [uniqueidentifier] NULL,
[SharePointDocumentLocationId] [uniqueidentifier] NOT NULL,
[ParentSiteOrLocation] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ParentSiteOrLocationName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ParentSiteOrLocationTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerIdType] DEFAULT ((8)),
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ServiceType] [int] NOT NULL CONSTRAINT [DF_SharePointDocumentLocationBase_ServiceType] DEFAULT ((0)),
[UserId] [uniqueidentifier] NULL,
[LocationType] [int] NULL CONSTRAINT [DF_SharePointDocumentLocationBase_LocationType] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD CONSTRAINT [ndx_PrimaryKey_SharePointDocumentLocation] PRIMARY KEY CLUSTERED  ([SharePointDocumentLocationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[SharePointDocumentLocationBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SharePointDocumentLocationBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointdocumentlocations] ON [dbo].[SharePointDocumentLocationBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointdocumentlocation_parent_sharepointsite] ON [dbo].[SharePointDocumentLocationBase] ([ParentSiteOrLocation], [ParentSiteOrLocationTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectId_SharePointDocumentLocation] ON [dbo].[SharePointDocumentLocationBase] ([RegardingObjectId], [RegardingObjectTypeCode]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_RelativeUrl] ON [dbo].[SharePointDocumentLocationBase] ([RelativeUrl]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SharePointDocumentLocationBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SharePointDocumentLocationBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD CONSTRAINT [business_unit_sharepointdocumentlocation] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD CONSTRAINT [owner_sharepointdocumentlocation] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] ADD CONSTRAINT [TransactionCurrency_SharePointDocumentLocation] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
