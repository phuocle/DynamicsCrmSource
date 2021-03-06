USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BusinessUnitBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BusinessUnitBase](
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[UserGroupId] [uniqueidentifier] NULL,
	[Name] [nvarchar](160) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[DivisionName] [nvarchar](100) NULL,
	[FileAsName] [nvarchar](100) NULL,
	[TickerSymbol] [nvarchar](10) NULL,
	[StockExchange] [nvarchar](20) NULL,
	[UTCOffset] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreditLimit] [float] NULL,
	[CostCenter] [nvarchar](100) NULL,
	[WebSiteUrl] [nvarchar](200) NULL,
	[FtpSiteUrl] [nvarchar](200) NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[InheritanceMask] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[WorkflowSuspended] [bit] NULL,
	[ParentBusinessUnitId] [uniqueidentifier] NULL,
	[IsDisabled] [bit] NULL,
	[DisabledReason] [nvarchar](500) NULL,
	[VersionNumber] [timestamp] NULL,
	[Picture] [nvarchar](max) NULL,
	[CalendarId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_BusinessUnit] PRIMARY KEY CLUSTERED 
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[BusinessUnitBase] ([BusinessUnitId], [OrganizationId], [UserGroupId], [Name], [Description], [DivisionName], [FileAsName], [TickerSymbol], [StockExchange], [UTCOffset], [CreatedOn], [ModifiedOn], [CreditLimit], [CostCenter], [WebSiteUrl], [FtpSiteUrl], [EMailAddress], [InheritanceMask], [CreatedBy], [ModifiedBy], [WorkflowSuspended], [ParentBusinessUnitId], [IsDisabled], [DisabledReason], [Picture], [CalendarId], [OverriddenCreatedOn], [ImportSequenceNumber], [ExchangeRate], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [TransactionCurrencyId]) VALUES (N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'D365', NULL, NULL, NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:43:58.000' AS DateTime), CAST(N'2017-04-10 13:43:58.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1023, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_BusinessUnitBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[BusinessUnitBase] ADD  CONSTRAINT [AK1_BusinessUnitBase] UNIQUE NONCLUSTERED 
(
	[Name] ASC,
	[ParentBusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_parent_business_unit]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_parent_business_unit] ON [dbo].[BusinessUnitBase]
(
	[ParentBusinessUnitId] ASC
)
WHERE ([ParentBusinessUnitId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_Calendar]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Calendar] ON [dbo].[BusinessUnitBase]
(
	[CalendarId] ASC
)
WHERE ([CalendarId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessUnitBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessUnitBase]  WITH CHECK ADD  CONSTRAINT [business_unit_parent_business_unit] FOREIGN KEY([ParentBusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BusinessUnitBase] CHECK CONSTRAINT [business_unit_parent_business_unit]
GO
ALTER TABLE [dbo].[BusinessUnitBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_Calendar] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[BusinessUnitBase] CHECK CONSTRAINT [BusinessUnit_Calendar]
GO
ALTER TABLE [dbo].[BusinessUnitBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_BusinessUnit] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BusinessUnitBase] CHECK CONSTRAINT [TransactionCurrency_BusinessUnit]
GO
