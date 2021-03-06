USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementContacts]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementContacts](
	[ContactId] [uniqueidentifier] NOT NULL,
	[EntitlementId] [uniqueidentifier] NOT NULL,
	[EntitlementContactId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_PrimaryKey_EntitlementContacts] PRIMARY KEY CLUSTERED 
(
	[EntitlementContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_EntitlementContacts]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[EntitlementContacts] ADD  CONSTRAINT [UQ_EntitlementContacts] UNIQUE NONCLUSTERED 
(
	[ContactId] ASC,
	[EntitlementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementContacts]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_entitlement_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entitlement_contacts] ON [dbo].[EntitlementContacts]
(
	[EntitlementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementContacts] ADD  CONSTRAINT [DF_EntitlementContacts_EntitlementContactId]  DEFAULT (newid()) FOR [EntitlementContactId]
GO
ALTER TABLE [dbo].[EntitlementContacts]  WITH CHECK ADD  CONSTRAINT [contact_entitlementcontacts] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[EntitlementContacts] CHECK CONSTRAINT [contact_entitlementcontacts]
GO
ALTER TABLE [dbo].[EntitlementContacts]  WITH CHECK ADD  CONSTRAINT [entitlement_entitlementcontacts] FOREIGN KEY([EntitlementId])
REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[EntitlementContacts] CHECK CONSTRAINT [entitlement_entitlementcontacts]
GO
