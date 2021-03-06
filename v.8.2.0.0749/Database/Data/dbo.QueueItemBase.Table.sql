USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[QueueItemBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QueueItemBase](
	[QueueItemId] [uniqueidentifier] NOT NULL,
	[QueueId] [uniqueidentifier] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[ObjectTypeCode] [int] NULL,
	[Title] [nvarchar](300) NULL,
	[EnteredOn] [datetime] NULL,
	[Priority] [int] NULL,
	[State] [int] NULL,
	[Status] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ToRecipients] [nvarchar](500) NULL,
	[Sender] [nvarchar](250) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[StatusCode] [int] NOT NULL,
	[WorkerId] [uniqueidentifier] NULL,
	[WorkerIdModifiedOn] [datetime] NULL,
	[WorkerIdName] [nvarchar](4000) NULL,
	[WorkerIdType] [int] NULL,
	[WorkerIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_QueueItem] PRIMARY KEY CLUSTERED 
(
	[QueueItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_queue_entries]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_queue_entries] ON [dbo].[QueueItemBase]
(
	[QueueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_QueueItem_statecode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Sync_QueueItem_statecode] ON [dbo].[QueueItemBase]
(
	[StateCode] ASC,
	[QueueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QueueItemBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_TitleQueueItemId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_TitleQueueItemId] ON [dbo].[QueueItemBase]
(
	[Title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_Letter_QueueItem]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Letter_QueueItem] ON [dbo].[QueueItemBase]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC,
	[StateCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_StateCodeWorkerIdEnteredOn]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_StateCodeWorkerIdEnteredOn] ON [dbo].[QueueItemBase]
(
	[StateCode] ASC,
	[WorkerId] ASC,
	[EnteredOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_workerid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_workerid] ON [dbo].[QueueItemBase]
(
	[WorkerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueItemBase] ADD  CONSTRAINT [DF_QueueItemBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[QueueItemBase] ADD  CONSTRAINT [DF_QueueItemBase_StatusCode]  DEFAULT ((1)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[QueueItemBase]  WITH CHECK ADD  CONSTRAINT [queue_entries] FOREIGN KEY([QueueId])
REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[QueueItemBase] CHECK CONSTRAINT [queue_entries]
GO
ALTER TABLE [dbo].[QueueItemBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_QueueItem] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[QueueItemBase] CHECK CONSTRAINT [TransactionCurrency_QueueItem]
GO
