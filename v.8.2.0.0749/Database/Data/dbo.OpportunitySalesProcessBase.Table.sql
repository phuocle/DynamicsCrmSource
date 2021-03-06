USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OpportunitySalesProcessBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OpportunitySalesProcessBase](
	[ModifiedBy] [uniqueidentifier] NULL,
	[QuoteId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[StatusCode] [int] NULL,
	[OpportunityId] [uniqueidentifier] NULL,
	[ActiveStageId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CompletedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[Name] [nvarchar](200) NULL,
	[SalesOrderId] [uniqueidentifier] NULL,
	[ActiveStageStartedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[Duration]  AS ([dbo].[fn_UDF_e213853d6a2f4927af426890a1161dcf]([CreatedOn],[CompletedOn])),
 CONSTRAINT [PK_opportunitysalesprocessBase] PRIMARY KEY CLUSTERED 
(
	[BusinessProcessFlowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_opportunitysalesprocess_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_opportunitysalesprocess_Name] ON [dbo].[OpportunitySalesProcessBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunitySalesProcessBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[OpportunitySalesProcessBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
