CREATE TABLE [dbo].[SharePointSiteBase]
(
[IsGridPresent] [bit] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[AbsoluteURL] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FolderStructureEntity] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[CreatedOn] [datetime] NULL,
[ValidationStatus] [int] NULL,
[RelativeUrl] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SharePointSiteId] [uniqueidentifier] NOT NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SharePointSiteBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OverriddenCreatedOn] [datetime] NULL,
[SiteCollectionId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ImportSequenceNumber] [int] NULL,
[IsDefault] [bit] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ValidationStatusErrorCode] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[LastValidated] [datetime] NULL,
[ParentSite] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SharePointSiteBase_OwnerIdType] DEFAULT ((8)),
[ParentSiteObjectTypeCode] [int] NULL,
[ParentSiteName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[IsPowerBISite] [bit] NOT NULL CONSTRAINT [DF_SharePointSiteBase_IsPowerBISite] DEFAULT ((0)),
[ServiceType] [int] NOT NULL CONSTRAINT [DF_SharePointSiteBase_ServiceType] DEFAULT ((0)),
[UserId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD CONSTRAINT [ndx_PrimaryKey_SharePointSite] PRIMARY KEY CLUSTERED  ([SharePointSiteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[SharePointSiteBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SharePointSiteBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointsites] ON [dbo].[SharePointSiteBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointsite_parentsite_sharepointsite] ON [dbo].[SharePointSiteBase] ([ParentSite], [ParentSiteObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_RelativeUrl] ON [dbo].[SharePointSiteBase] ([RelativeUrl]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SharePointSiteBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SharePointSiteBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD CONSTRAINT [business_unit_sharepointsites] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD CONSTRAINT [owner_sharepointsite] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SharePointSiteBase] ADD CONSTRAINT [TransactionCurrency_SharePointSite] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
