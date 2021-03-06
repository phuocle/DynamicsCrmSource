USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[FeedbackBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FeedbackBase](
	[ClosedOn] [datetime] NULL,
	[MinRating] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[NormalizedRating] [decimal](23, 10) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[MaxRating] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedByContact] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ClosedBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[Source] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Rating] [int] NULL,
	[StatusCode] [int] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[Comments] [nvarchar](max) NULL,
	[Title] [nvarchar](4000) NULL,
	[FeedbackId] [uniqueidentifier] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedOnBehalfByContact] [uniqueidentifier] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [PK_FeedbackBase] PRIMARY KEY CLUSTERED 
(
	[FeedbackId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_feedback]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_feedback] ON [dbo].[FeedbackBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_RegardingObjectId_feedback]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_feedback] ON [dbo].[FeedbackBase]
(
	[RegardingObjectId] ASC
)
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[FeedbackBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Rating]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Rating] ON [dbo].[FeedbackBase]
(
	[Rating] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FeedbackBase] ADD  CONSTRAINT [DF_FeedbackBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[FeedbackBase]  WITH CHECK ADD  CONSTRAINT [lk_contact_feedback_createdby] FOREIGN KEY([CreatedByContact])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[FeedbackBase] CHECK CONSTRAINT [lk_contact_feedback_createdby]
GO
ALTER TABLE [dbo].[FeedbackBase]  WITH CHECK ADD  CONSTRAINT [lk_contact_feedback_createdonbehalfby] FOREIGN KEY([CreatedOnBehalfByContact])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[FeedbackBase] CHECK CONSTRAINT [lk_contact_feedback_createdonbehalfby]
GO
ALTER TABLE [dbo].[FeedbackBase]  WITH CHECK ADD  CONSTRAINT [owner_feedback] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[FeedbackBase] CHECK CONSTRAINT [owner_feedback]
GO
ALTER TABLE [dbo].[FeedbackBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_feedback] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[FeedbackBase] CHECK CONSTRAINT [transactioncurrency_feedback]
GO
