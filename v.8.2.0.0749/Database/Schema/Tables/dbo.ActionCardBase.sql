CREATE TABLE [dbo].[ActionCardBase]
(
[StartDate] [datetime] NOT NULL,
[ActionCardId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ExpiryDate] [datetime] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Data] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CardType] [int] NOT NULL,
[ReferenceTokens] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[Visibility] [bit] NULL CONSTRAINT [DF_ActionCardBase_Visibility] DEFAULT ((0)),
[ImportSequenceNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[RecordId] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ActionCardBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ExchangeRate] [decimal] (23, 10) NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[Priority] [int] NOT NULL CONSTRAINT [DF_ActionCardBase_Priority] DEFAULT ((0)),
[State] [int] NOT NULL CONSTRAINT [DF_ActionCardBase_State] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Source] [int] NOT NULL CONSTRAINT [DF_ActionCardBase_Source] DEFAULT ((1)),
[CardTypeId] [uniqueidentifier] NOT NULL,
[Title] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ActionCardBase_OwnerIdType] DEFAULT ((8)),
[RecordIdObjectTypeCode] [int] NULL,
[RecordIdName] [nvarchar] (400) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD CONSTRAINT [ndx_PrimaryKey_ActionCard] PRIMARY KEY NONCLUSTERED  ([ActionCardId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ActionCardBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_cover] ON [dbo].[ActionCardBase] ([Priority], [ExpiryDate], [StartDate], [State], [CardType], [RegardingObjectId], [RegardingObjectTypeCode]) INCLUDE ([ActionCardId], [CardTypeId], [Data], [OwnerId], [ReferenceTokens]) WHERE ([State]=(0)) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObject] ON [dbo].[ActionCardBase] ([RegardingObjectId], [RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_State] ON [dbo].[ActionCardBase] ([State]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD CONSTRAINT [business_unit_actioncards] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActionCardBase] ADD CONSTRAINT [owner_actioncards] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ActionCardBase] ADD CONSTRAINT [transactioncurrency_actioncard] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
