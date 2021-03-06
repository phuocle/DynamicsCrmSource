USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ExpiredProcessBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExpiredProcessBase](
	[ProcessId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[KnowledgeArticleId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[Name] [nvarchar](200) NULL,
	[StateCode] [int] NOT NULL,
	[ActiveStageId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[CreatedOn] [datetime] NULL,
	[ActiveStageStartedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[CompletedOn] [datetime] NULL,
	[Duration]  AS ([dbo].[fn_UDF_0d6a588cc1354e6dac26a40ea606a2fc]([CreatedOn],[CompletedOn])),
 CONSTRAINT [PK_expiredprocessBase] PRIMARY KEY CLUSTERED 
(
	[BusinessProcessFlowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_expiredprocess_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_expiredprocess_Name] ON [dbo].[ExpiredProcessBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ExpiredProcessBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ExpiredProcessBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
