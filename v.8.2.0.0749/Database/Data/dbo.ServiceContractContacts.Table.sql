USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ServiceContractContacts]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServiceContractContacts](
	[ContractId] [uniqueidentifier] NOT NULL,
	[ContactId] [uniqueidentifier] NOT NULL,
	[ServiceLevel] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[ServiceContractContactId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ServiceContractContacts] PRIMARY KEY CLUSTERED 
(
	[ServiceContractContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [UQ_ServiceContractContacts]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[ServiceContractContacts] ADD  CONSTRAINT [UQ_ServiceContractContacts] UNIQUE NONCLUSTERED 
(
	[ContractId] ASC,
	[ContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ServiceContractContacts]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contact_serviced_by_contract]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_serviced_by_contract] ON [dbo].[ServiceContractContacts]
(
	[ContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceContractContacts] ADD  CONSTRAINT [DF_ServiceContractContacts_ServiceContractContactId]  DEFAULT (newid()) FOR [ServiceContractContactId]
GO
ALTER TABLE [dbo].[ServiceContractContacts]  WITH CHECK ADD  CONSTRAINT [contact_serviced_by_contract] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ServiceContractContacts] CHECK CONSTRAINT [contact_serviced_by_contract]
GO
ALTER TABLE [dbo].[ServiceContractContacts]  WITH CHECK ADD  CONSTRAINT [has_service_contacts] FOREIGN KEY([ContractId])
REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[ServiceContractContacts] CHECK CONSTRAINT [has_service_contacts]
GO
