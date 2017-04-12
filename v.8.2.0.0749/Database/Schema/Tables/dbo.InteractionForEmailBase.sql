CREATE TABLE [dbo].[InteractionForEmailBase]
(
[InteractionUserAgent] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[InteractedComponentText] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EmailActivityId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[statecode] [int] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[statuscode] [int] NULL,
[InteractionType] [int] NOT NULL CONSTRAINT [DF_InteractionForEmailBase_InteractionType] DEFAULT ((0)),
[OverriddenCreatedOn] [datetime] NULL,
[InteractionReplyId] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[InteractionRepliedBy] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[InteractionForEmailId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[EmailInteractionReplyId] [uniqueidentifier] NULL,
[EmailInteractionTime] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[InteractionLocation] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOn] [datetime] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_InteractionForEmailBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InteractionForEmailBase] ADD CONSTRAINT [PK_InteractionForEmailBase] PRIMARY KEY CLUSTERED  ([InteractionForEmailId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[InteractionForEmailBase] ([name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[InteractionForEmailBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[InteractionForEmailBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InteractionForEmailBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InteractionForEmailBase] ADD CONSTRAINT [business_unit_interactionforemail] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[InteractionForEmailBase] ADD CONSTRAINT [owner_interactionforemail] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[InteractionForEmailBase] ADD CONSTRAINT [TransactionCurrency_InteractionForEmail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
