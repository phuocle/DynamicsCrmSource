USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContactLeads]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactLeads](
	[ContactId] [uniqueidentifier] NOT NULL,
	[LeadId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ContactLeadId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ContactLeads] PRIMARY KEY CLUSTERED 
(
	[ContactLeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ContactLeads]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ContactLeads] ADD  CONSTRAINT [UQ_ContactLeads] UNIQUE NONCLUSTERED 
(
	[ContactId] ASC,
	[LeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactLeads]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_lead_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_contacts] ON [dbo].[ContactLeads]
(
	[LeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactLeads] ADD  CONSTRAINT [DF_ContactLeads_ContactLeadId]  DEFAULT (newid()) FOR [ContactLeadId]
GO
ALTER TABLE [dbo].[ContactLeads]  WITH CHECK ADD  CONSTRAINT [contact_leads] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactLeads] CHECK CONSTRAINT [contact_leads]
GO
ALTER TABLE [dbo].[ContactLeads]  WITH CHECK ADD  CONSTRAINT [lead_contacts] FOREIGN KEY([LeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[ContactLeads] CHECK CONSTRAINT [lead_contacts]
GO
