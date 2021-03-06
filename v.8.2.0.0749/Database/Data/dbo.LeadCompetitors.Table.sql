USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[LeadCompetitors]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadCompetitors](
	[LeadId] [uniqueidentifier] NOT NULL,
	[CompetitorId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[LeadCompetitorId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_LeadCompetitors] PRIMARY KEY CLUSTERED 
(
	[LeadCompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_LeadCompetitors]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[LeadCompetitors] ADD  CONSTRAINT [UQ_LeadCompetitors] UNIQUE NONCLUSTERED 
(
	[LeadId] ASC,
	[CompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadCompetitors]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_competitor_leads]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_leads] ON [dbo].[LeadCompetitors]
(
	[CompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadCompetitors] ADD  CONSTRAINT [DF_LeadCompetitors_LeadCompetitorId]  DEFAULT (newid()) FOR [LeadCompetitorId]
GO
ALTER TABLE [dbo].[LeadCompetitors]  WITH CHECK ADD  CONSTRAINT [competitor_leads] FOREIGN KEY([CompetitorId])
REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[LeadCompetitors] CHECK CONSTRAINT [competitor_leads]
GO
ALTER TABLE [dbo].[LeadCompetitors]  WITH CHECK ADD  CONSTRAINT [lead_competitors] FOREIGN KEY([LeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[LeadCompetitors] CHECK CONSTRAINT [lead_competitors]
GO
