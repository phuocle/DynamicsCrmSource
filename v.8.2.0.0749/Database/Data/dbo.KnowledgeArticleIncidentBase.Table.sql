USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KnowledgeArticleIncidentBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KnowledgeArticleIncidentBase](
	[KnowledgeArticleIncidentId] [uniqueidentifier] NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[statecode] [int] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[IncidentId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[statuscode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[IsSentToCustomer] [bit] NULL,
	[KnowledgeArticleId] [uniqueidentifier] NULL,
	[KnowledgeUsage] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_for_cascaderelationship_incident_knowledgearticles]    Script Date: 4/10/2017 9:59:20 PM ******/
CREATE CLUSTERED INDEX [cndx_for_cascaderelationship_incident_knowledgearticles] ON [dbo].[KnowledgeArticleIncidentBase]
(
	[KnowledgeArticleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_PrimaryKey_KnowledgeArticleIncident]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] ADD  CONSTRAINT [cndx_PrimaryKey_KnowledgeArticleIncident] PRIMARY KEY NONCLUSTERED 
(
	[KnowledgeArticleIncidentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_knowledgearticle_incidents]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_knowledgearticle_incidents] ON [dbo].[KnowledgeArticleIncidentBase]
(
	[IncidentId] ASC
)
WHERE ([IncidentId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeArticleIncidentBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_KnowledgeArticleIncident]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_KnowledgeArticleIncident] ON [dbo].[KnowledgeArticleIncidentBase]
(
	[KnowledgeArticleIncidentId] ASC
)
INCLUDE ( 	[VersionNumber]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] ADD  CONSTRAINT [DF_KnowledgeArticleIncidentBase_KnowledgeArticleIncidentId]  DEFAULT (newid()) FOR [KnowledgeArticleIncidentId]
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase]  WITH CHECK ADD  CONSTRAINT [incident_knowledgearticles] FOREIGN KEY([KnowledgeArticleId])
REFERENCES [dbo].[KnowledgeArticleBase] ([knowledgearticleId])
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] CHECK CONSTRAINT [incident_knowledgearticles]
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase]  WITH CHECK ADD  CONSTRAINT [knowledgearticle_incidents] FOREIGN KEY([IncidentId])
REFERENCES [dbo].[IncidentBase] ([IncidentId])
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] CHECK CONSTRAINT [knowledgearticle_incidents]
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_knowledgearticleincident] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[KnowledgeArticleIncidentBase] CHECK CONSTRAINT [transactioncurrency_knowledgearticleincident]
GO
