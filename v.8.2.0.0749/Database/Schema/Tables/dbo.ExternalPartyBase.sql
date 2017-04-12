CREATE TABLE [dbo].[ExternalPartyBase]
(
[ExchangeRate] [decimal] (23, 10) NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[StatusCode] [int] NULL,
[CreatedOn] [datetime] NULL,
[LastEnabledOn] [datetime] NULL,
[Type] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[FirstName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[LastName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[LastDisabledOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[CorrelationKey] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[MiddleName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[FullName] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[ExternalPartyIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ExternalPartyBase_ExternalPartyIdUnique] DEFAULT (newid()),
[EmailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ExternalPartyId] [uniqueidentifier] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ExternalPartyBase_OwnerIdType] DEFAULT ((8)),
[YomiLastName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[YomiFullName] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[YomiMiddleName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[YomiFirstName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExternalPartyBase] ADD CONSTRAINT [cndx_PrimaryKey_ExternalParty] PRIMARY KEY CLUSTERED  ([ExternalPartyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_FirstName] ON [dbo].[ExternalPartyBase] ([FirstName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_FullName] ON [dbo].[ExternalPartyBase] ([FullName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_LastName] ON [dbo].[ExternalPartyBase] ([LastName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_middlename] ON [dbo].[ExternalPartyBase] ([MiddleName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ExternalPartyBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ExternalPartyBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ExternalPartyBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExternalPartyBase] ADD CONSTRAINT [business_unit_externalparty] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ExternalPartyBase] ADD CONSTRAINT [owner_externalparty] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ExternalPartyBase] ADD CONSTRAINT [TransactionCurrency_ExternalParty] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
