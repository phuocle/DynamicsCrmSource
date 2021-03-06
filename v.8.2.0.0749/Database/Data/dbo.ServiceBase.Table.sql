USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ServiceBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceBase](
	[Name] [nvarchar](160) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ServiceId] [uniqueidentifier] NOT NULL,
	[ResourceSpecId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[AnchorOffset] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[Duration] [int] NOT NULL,
	[IsSchedulable] [bit] NOT NULL,
	[StrategyId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[InitialStatusCode] [int] NOT NULL,
	[CalendarId] [uniqueidentifier] NULL,
	[ShowResources] [bit] NULL,
	[Granularity] [nvarchar](100) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[IsVisible] [bit] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Service] PRIMARY KEY CLUSTERED 
(
	[ServiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_calendar_services]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_services] ON [dbo].[ServiceBase]
(
	[CalendarId] ASC
)
WHERE ([CalendarId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ServiceBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_plugin_type_service]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugin_type_service] ON [dbo].[ServiceBase]
(
	[StrategyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_resource_spec_services]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_resource_spec_services] ON [dbo].[ServiceBase]
(
	[ResourceSpecId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_IsSchedulableNameDuration]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_IsSchedulableNameDuration] ON [dbo].[ServiceBase]
(
	[Name] ASC,
	[IsSchedulable] ASC,
	[Duration] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceBase] ADD  CONSTRAINT [DF_ServiceBase_IsSchedulable]  DEFAULT ((1)) FOR [IsSchedulable]
GO
ALTER TABLE [dbo].[ServiceBase] ADD  CONSTRAINT [DF_ServiceBase_StrategyId]  DEFAULT ('07F7DC72-1671-452D-812C-7172D3CA881F') FOR [StrategyId]
GO
ALTER TABLE [dbo].[ServiceBase] ADD  CONSTRAINT [DF_ServiceBase_ShowResources]  DEFAULT ((1)) FOR [ShowResources]
GO
ALTER TABLE [dbo].[ServiceBase] ADD  CONSTRAINT [DF_ServiceBase_IsVisible]  DEFAULT ((1)) FOR [IsVisible]
GO
ALTER TABLE [dbo].[ServiceBase]  WITH CHECK ADD  CONSTRAINT [calendar_services] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[ServiceBase] CHECK CONSTRAINT [calendar_services]
GO
ALTER TABLE [dbo].[ServiceBase]  WITH CHECK ADD  CONSTRAINT [resource_spec_services] FOREIGN KEY([ResourceSpecId])
REFERENCES [dbo].[ResourceSpecBase] ([ResourceSpecId])
GO
ALTER TABLE [dbo].[ServiceBase] CHECK CONSTRAINT [resource_spec_services]
GO
