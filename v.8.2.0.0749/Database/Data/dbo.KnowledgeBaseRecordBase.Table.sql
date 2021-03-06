USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KnowledgeBaseRecordBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KnowledgeBaseRecordBase](
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[KnowledgeBaseRecordId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[UniqueId] [nvarchar](128) NULL,
	[ModifiedOn] [datetime] NULL,
	[PublicUrl] [nvarchar](256) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[PrivateUrl] [nvarchar](256) NULL,
	[Title] [nvarchar](2000) NULL,
 CONSTRAINT [PK_KnowledgeBaseRecordBase] PRIMARY KEY CLUSTERED 
(
	[KnowledgeBaseRecordId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[KnowledgeBaseRecordBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[KnowledgeBaseRecordBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeBaseRecordBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_KnowledgeBaseRecord] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[KnowledgeBaseRecordBase] CHECK CONSTRAINT [TransactionCurrency_KnowledgeBaseRecord]
GO
