USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AccountLeads]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountLeads](
	[AccountId] [uniqueidentifier] NOT NULL,
	[LeadId] [uniqueidentifier] NOT NULL,
	[AccountLeadId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_AccountLeads] PRIMARY KEY CLUSTERED 
(
	[AccountLeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_AccountLeads]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[AccountLeads] ADD  CONSTRAINT [UQ_AccountLeads] UNIQUE NONCLUSTERED 
(
	[AccountId] ASC,
	[LeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AccountLeads]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_lead_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_accounts] ON [dbo].[AccountLeads]
(
	[LeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountLeads] ADD  CONSTRAINT [DF_AccountLeads_AccountLeadId]  DEFAULT (newid()) FOR [AccountLeadId]
GO
ALTER TABLE [dbo].[AccountLeads]  WITH CHECK ADD  CONSTRAINT [account_leads] FOREIGN KEY([AccountId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[AccountLeads] CHECK CONSTRAINT [account_leads]
GO
ALTER TABLE [dbo].[AccountLeads]  WITH CHECK ADD  CONSTRAINT [lead_accounts] FOREIGN KEY([LeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[AccountLeads] CHECK CONSTRAINT [lead_accounts]
GO
