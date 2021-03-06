USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[LeadToOpportunitySalesProcessBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadToOpportunitySalesProcessBase](
	[LeadId] [uniqueidentifier] NULL,
	[Name] [nvarchar](200) NULL,
	[VersionNumber] [timestamp] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[ActiveStageId] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ActiveStageStartedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[StateCode] [int] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[OpportunityId] [uniqueidentifier] NULL,
	[CompletedOn] [datetime] NULL,
	[Duration]  AS ([dbo].[fn_UDF_e7d20e6b46c541d7b8b5ad5f9af1635d]([CreatedOn],[CompletedOn])),
 CONSTRAINT [PK_leadtoopportunitysalesprocessBase] PRIMARY KEY CLUSTERED 
(
	[BusinessProcessFlowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_leadtoopportunitysalesprocess_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_leadtoopportunitysalesprocess_Name] ON [dbo].[LeadToOpportunitySalesProcessBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadToOpportunitySalesProcessBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[LeadToOpportunitySalesProcessBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
