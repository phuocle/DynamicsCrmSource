USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ActionCardBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionCardBase](
	[StartDate] [datetime] NOT NULL,
	[ActionCardId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ExpiryDate] [datetime] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[Data] [nvarchar](max) NULL,
	[CardType] [int] NOT NULL,
	[ReferenceTokens] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[Visibility] [bit] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[RecordId] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[Priority] [int] NOT NULL,
	[State] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[Source] [int] NOT NULL,
	[CardTypeId] [uniqueidentifier] NOT NULL,
	[Title] [nvarchar](200) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[OwnerIdType] [int] NOT NULL,
	[RecordIdObjectTypeCode] [int] NULL,
	[RecordIdName] [nvarchar](400) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_PrimaryKey_ActionCard]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [ndx_PrimaryKey_ActionCard] PRIMARY KEY NONCLUSTERED 
(
	[ActionCardId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_cover]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_cover] ON [dbo].[ActionCardBase]
(
	[Priority] ASC,
	[ExpiryDate] ASC,
	[StartDate] ASC,
	[State] ASC,
	[CardType] ASC,
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)
INCLUDE ( 	[OwnerId],
	[ReferenceTokens],
	[Data],
	[CardTypeId],
	[ActionCardId]) 
WHERE ([State]=(0))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RegardingObject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RegardingObject] ON [dbo].[ActionCardBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ActionCardBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_State]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_State] ON [dbo].[ActionCardBase]
(
	[State] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [DF_ActionCardBase_Visibility]  DEFAULT ((0)) FOR [Visibility]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [DF_ActionCardBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [DF_ActionCardBase_Priority]  DEFAULT ((0)) FOR [Priority]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [DF_ActionCardBase_State]  DEFAULT ((0)) FOR [State]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [DF_ActionCardBase_Source]  DEFAULT ((1)) FOR [Source]
GO
ALTER TABLE [dbo].[ActionCardBase] ADD  CONSTRAINT [DF_ActionCardBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ActionCardBase]  WITH CHECK ADD  CONSTRAINT [business_unit_actioncards] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActionCardBase] CHECK CONSTRAINT [business_unit_actioncards]
GO
ALTER TABLE [dbo].[ActionCardBase]  WITH CHECK ADD  CONSTRAINT [owner_actioncards] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ActionCardBase] CHECK CONSTRAINT [owner_actioncards]
GO
ALTER TABLE [dbo].[ActionCardBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_actioncard] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ActionCardBase] CHECK CONSTRAINT [transactioncurrency_actioncard]
GO
