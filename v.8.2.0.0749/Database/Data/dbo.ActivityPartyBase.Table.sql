USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ActivityPartyBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActivityPartyBase](
	[ActivityId] [uniqueidentifier] NOT NULL,
	[ActivityPartyId] [uniqueidentifier] NOT NULL,
	[PartyId] [uniqueidentifier] NULL,
	[PartyObjectTypeCode] [int] NOT NULL,
	[ParticipationTypeMask] [int] NOT NULL,
	[AddressUsed] [nvarchar](200) NULL,
	[PartyIdName] [nvarchar](4000) NULL,
	[Effort] [float] NULL,
	[ExchangeEntryId] [nvarchar](1024) NULL,
	[ResourceSpecId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[DoNotPhone] [bit] NULL,
	[ScheduledEnd] [datetime] NULL,
	[ScheduledStart] [datetime] NULL,
	[IsPartyDeleted] [bit] NOT NULL,
	[AddressUsedEmailColumnNumber] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_ActivityParty] PRIMARY KEY CLUSTERED 
(
	[ActivityPartyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_ActivityPartyResourceSpec]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ActivityPartyResourceSpec] ON [dbo].[ActivityPartyBase]
(
	[ResourceSpecId] ASC
)
WHERE ([ResourceSpecId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActivityPartyBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_UnresolvedParty]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_UnresolvedParty] ON [dbo].[ActivityPartyBase]
(
	[AddressUsed] ASC,
	[PartyId] ASC,
	[ActivityId] ASC
)
WHERE ([PartyId] IS NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_UpdateAddressUsed]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_UpdateAddressUsed] ON [dbo].[ActivityPartyBase]
(
	[PartyId] ASC,
	[PartyObjectTypeCode] ASC
)
WHERE ([PartyId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ActivityId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ActivityId] ON [dbo].[ActivityPartyBase]
(
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Cover]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[ActivityPartyBase]
(
	[AddressUsed] ASC,
	[PartyObjectTypeCode] ASC,
	[ParticipationTypeMask] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_MyActivities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_MyActivities] ON [dbo].[ActivityPartyBase]
(
	[PartyId] ASC,
	[ActivityId] ASC,
	[ParticipationTypeMask] ASC,
	[ScheduledStart] ASC,
	[ScheduledEnd] ASC
)
INCLUDE ( 	[PartyObjectTypeCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActivityPartyBase] ADD  CONSTRAINT [DF_ActivityPartyBase_IsPartyDeleted]  DEFAULT ((0)) FOR [IsPartyDeleted]
GO
ALTER TABLE [dbo].[ActivityPartyBase]  WITH CHECK ADD  CONSTRAINT [activitypointer_activity_parties] FOREIGN KEY([ActivityId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[ActivityPartyBase] CHECK CONSTRAINT [activitypointer_activity_parties]
GO
