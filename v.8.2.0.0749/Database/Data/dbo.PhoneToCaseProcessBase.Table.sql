USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PhoneToCaseProcessBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PhoneToCaseProcessBase](
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[StateCode] [int] NOT NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[StatusCode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](200) NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ActiveStageId] [uniqueidentifier] NULL,
	[IncidentId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CompletedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ActiveStageStartedOn] [datetime] NULL,
	[Duration]  AS ([dbo].[fn_UDF_7ba8a5cdd4c648ac8ed1655a56af9307]()),
 CONSTRAINT [PK_phonetocaseprocessBase] PRIMARY KEY CLUSTERED 
(
	[BusinessProcessFlowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_phonetocaseprocess_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_phonetocaseprocess_Name] ON [dbo].[PhoneToCaseProcessBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PhoneToCaseProcessBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PhoneToCaseProcessBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
