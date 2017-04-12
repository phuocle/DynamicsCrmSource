CREATE TABLE [dbo].[BusinessUnitBase]
(
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[UserGroupId] [uniqueidentifier] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[DivisionName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[FileAsName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TickerSymbol] [nvarchar] (10) COLLATE Latin1_General_CI_AI NULL,
[StockExchange] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[UTCOffset] [int] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CreditLimit] [float] NULL,
[CostCenter] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[WebSiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[FtpSiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[InheritanceMask] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[WorkflowSuspended] [bit] NULL,
[ParentBusinessUnitId] [uniqueidentifier] NULL,
[IsDisabled] [bit] NULL,
[DisabledReason] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[Picture] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CalendarId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitBase] ADD CONSTRAINT [cndx_PrimaryKey_BusinessUnit] PRIMARY KEY CLUSTERED  ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Calendar] ON [dbo].[BusinessUnitBase] ([CalendarId]) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitBase] ADD CONSTRAINT [AK1_BusinessUnitBase] UNIQUE NONCLUSTERED  ([Name], [ParentBusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_parent_business_unit] ON [dbo].[BusinessUnitBase] ([ParentBusinessUnitId]) WHERE ([ParentBusinessUnitId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessUnitBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitBase] ADD CONSTRAINT [business_unit_parent_business_unit] FOREIGN KEY ([ParentBusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BusinessUnitBase] ADD CONSTRAINT [BusinessUnit_Calendar] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[BusinessUnitBase] ADD CONSTRAINT [TransactionCurrency_BusinessUnit] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
