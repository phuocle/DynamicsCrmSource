USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OpportunityCompetitors]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OpportunityCompetitors](
	[OpportunityId] [uniqueidentifier] NOT NULL,
	[CompetitorId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OpportunityCompetitorId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_OpportunityCompetitors] PRIMARY KEY CLUSTERED 
(
	[OpportunityCompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_OpportunityCompetitors]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[OpportunityCompetitors] ADD  CONSTRAINT [UQ_OpportunityCompetitors] UNIQUE NONCLUSTERED 
(
	[OpportunityId] ASC,
	[CompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunityCompetitors]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_competitor_opportunities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_opportunities] ON [dbo].[OpportunityCompetitors]
(
	[CompetitorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityCompetitors] ADD  CONSTRAINT [DF_OpportunityCompetitors_OpportunityCompetitorId]  DEFAULT (newid()) FOR [OpportunityCompetitorId]
GO
ALTER TABLE [dbo].[OpportunityCompetitors]  WITH CHECK ADD  CONSTRAINT [competitor_opportunities] FOREIGN KEY([CompetitorId])
REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[OpportunityCompetitors] CHECK CONSTRAINT [competitor_opportunities]
GO
ALTER TABLE [dbo].[OpportunityCompetitors]  WITH CHECK ADD  CONSTRAINT [opportunity_competitors] FOREIGN KEY([OpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[OpportunityCompetitors] CHECK CONSTRAINT [opportunity_competitors]
GO
