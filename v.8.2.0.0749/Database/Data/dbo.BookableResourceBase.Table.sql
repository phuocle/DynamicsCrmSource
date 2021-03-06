USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceBase](
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[AccountId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[StatusCode] [int] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[CalendarId] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[ResourceType] [int] NULL,
	[StateCode] [int] NOT NULL,
	[UserId] [uniqueidentifier] NULL,
	[ContactId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[BookableResourceId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TimeZone] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourceBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_account_bookableresource_AccountId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_bookableresource_AccountId] ON [dbo].[BookableResourceBase]
(
	[AccountId] ASC
)
WHERE ([AccountId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_calendar_bookableresources]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_bookableresources] ON [dbo].[BookableResourceBase]
(
	[CalendarId] ASC
)
WHERE ([CalendarId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contact_bookableresource_ContactId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_bookableresource_ContactId] ON [dbo].[BookableResourceBase]
(
	[ContactId] ASC
)
WHERE ([ContactId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_systemuser_bookableresource_UserId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_for_cascaderelationship_systemuser_bookableresource_UserId] ON [dbo].[BookableResourceBase]
(
	[UserId] ASC
)
WHERE ([UserId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceBase] ADD  CONSTRAINT [DF_BookableResourceBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [account_bookableresource_AccountId] FOREIGN KEY([AccountId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [account_bookableresource_AccountId]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresource] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [business_unit_bookableresource]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [calendar_bookableresources] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [calendar_bookableresources]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [contact_bookableresource_ContactId] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [contact_bookableresource_ContactId]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresource] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [owner_bookableresource]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [systemuser_bookableresource_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [systemuser_bookableresource_UserId]
GO
ALTER TABLE [dbo].[BookableResourceBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_bookableresource] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BookableResourceBase] CHECK CONSTRAINT [TransactionCurrency_bookableresource]
GO
