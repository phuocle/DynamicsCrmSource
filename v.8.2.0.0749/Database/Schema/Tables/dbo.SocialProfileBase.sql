CREATE TABLE [dbo].[SocialProfileBase]
(
[Blocked] [bit] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Community] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[StatusCode] [int] NULL,
[CustomerId] [uniqueidentifier] NULL,
[ProfileLink] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SocialProfileId] [uniqueidentifier] NOT NULL,
[ProfileFullName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ProfileName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[InfluenceScore] [float] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OverriddenCreatedOn] [datetime] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SocialProfileBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[UniqueProfileID] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SocialProfileBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdType] [int] NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SocialProfileBase] ADD CONSTRAINT [ndx_PrimaryKey_SocialProfile] PRIMARY KEY CLUSTERED  ([SocialProfileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_socialprofile_customer_accounts] ON [dbo].[SocialProfileBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SocialProfileBase] ([OwnerId], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_socialprofiles] ON [dbo].[SocialProfileBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_ProfileFullName] ON [dbo].[SocialProfileBase] ([ProfileFullName]) INCLUDE ([TransactionCurrencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_ProfileName] ON [dbo].[SocialProfileBase] ([ProfileName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SocialProfileBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_SocialProfile_Search] ON [dbo].[SocialProfileBase] ([UniqueProfileID], [Community]) WHERE ([UniqueProfileID] IS NOT NULL AND [Community] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SocialProfileBase] ADD CONSTRAINT [business_unit_socialprofiles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SocialProfileBase] ADD CONSTRAINT [owner_SocialProfile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SocialProfileBase] ADD CONSTRAINT [transactioncurrency_SocialProfile] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
