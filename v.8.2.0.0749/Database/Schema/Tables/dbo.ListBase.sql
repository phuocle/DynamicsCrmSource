CREATE TABLE [dbo].[ListBase]
(
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[MemberCount] [int] NULL CONSTRAINT [DF_ListBase_MemberCount] DEFAULT ((0)),
[ListName] [nvarchar] (128) COLLATE Latin1_General_CI_AI NOT NULL,
[LastUsedOn] [datetime] NULL,
[ListId] [uniqueidentifier] NOT NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ListBase_StateCode] DEFAULT ((0)),
[StatusCode] [int] NULL CONSTRAINT [DF_ListBase_StatusCode] DEFAULT ((0)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[DoNotSendOnOptOut] [bit] NULL CONSTRAINT [DF_ListBase_DoNotSendOnOptOut] DEFAULT ((1)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Purpose] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL,
[Cost] [money] NULL,
[IgnoreInactiveListMembers] [bit] NULL CONSTRAINT [DF_ListBase_IgnoreInactiveListMembers] DEFAULT ((1)),
[MemberType] [int] NULL,
[Source] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL,
[CreatedFromCode] [int] NOT NULL,
[VersionNumber] [timestamp] NULL,
[LockStatus] [bit] NULL CONSTRAINT [DF_ListBase_LockStatus] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OverriddenCreatedOn] [datetime] NULL,
[Cost_Base] [money] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Type] [bit] NOT NULL CONSTRAINT [DF_ListBase_Type] DEFAULT ((0)),
[Query] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ListBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ListBase_OwnerIdType] DEFAULT ((8)),
[StageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ListBase] ADD CONSTRAINT [cndx_PrimaryKey_List] PRIMARY KEY CLUSTERED  ([ListId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ListName] ON [dbo].[ListBase] ([ListName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ListBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_list] ON [dbo].[ListBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ListBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ListBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ListBase] ADD CONSTRAINT [business_unit_list] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ListBase] ADD CONSTRAINT [owner_lists] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ListBase] ADD CONSTRAINT [transactioncurrency_list] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
