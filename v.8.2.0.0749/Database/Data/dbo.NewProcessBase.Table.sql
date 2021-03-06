USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[NewProcessBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NewProcessBase](
	[CreatedOn] [datetime] NULL,
	[KnowledgeArticleId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[StateCode] [int] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ActiveStageStartedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[ActiveStageId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[Name] [nvarchar](200) NULL,
	[ModifiedOn] [datetime] NULL,
	[CompletedOn] [datetime] NULL,
	[Duration]  AS ([dbo].[fn_UDF_c0cfcb8c11b5485a8d1f3ac17b1ad0cc]([CreatedOn],[CompletedOn])),
 CONSTRAINT [PK_newprocessBase] PRIMARY KEY CLUSTERED 
(
	[BusinessProcessFlowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_newprocess_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_newprocess_Name] ON [dbo].[NewProcessBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[NewProcessBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[NewProcessBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
