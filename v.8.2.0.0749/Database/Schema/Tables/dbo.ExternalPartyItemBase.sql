CREATE TABLE [dbo].[ExternalPartyItemBase]
(
[LastEnabledOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ChannelAccessProfileId] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ExternalPartyItemId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ExternalPartyId] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[LastDisabledOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExternalPartyItemBase] ADD CONSTRAINT [cndx_PrimaryKey_ExternalPartyItem] PRIMARY KEY CLUSTERED  ([ExternalPartyItemId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ExternalPartyItemBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ExternalPartyItemBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
