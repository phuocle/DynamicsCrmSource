USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ThemeBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ThemeBase](
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[DefaultCustomEntityColor] [nvarchar](7) NULL,
	[ImportSequenceNumber] [int] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[LogoToolTip] [nvarchar](80) NULL,
	[VersionNumber] [timestamp] NULL,
	[Type] [bit] NOT NULL CONSTRAINT [DF_ThemeBase_Type]  DEFAULT ((1)),
	[ProcessControlColor] [nvarchar](7) NULL,
	[HeaderColor] [nvarchar](7) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[statuscode] [int] NULL,
	[DefaultEntityColor] [nvarchar](7) NULL,
	[statecode] [int] NOT NULL,
	[NavBarShelfColor] [nvarchar](7) NULL,
	[ControlShade] [nvarchar](7) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[LogoId] [uniqueidentifier] NULL,
	[HoverLinkEffect] [nvarchar](7) NULL,
	[SelectedLinkEffect] [nvarchar](7) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[NavBarBackgroundColor] [nvarchar](7) NULL,
	[ThemeId] [uniqueidentifier] NOT NULL,
	[IsDefaultTheme] [bit] NOT NULL CONSTRAINT [DF_ThemeBase_IsDefaultTheme]  DEFAULT ((0)),
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ControlBorder] [nvarchar](7) NULL,
	[GlobalLinkColor] [nvarchar](7) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[BackgroundColor] [nvarchar](7) NULL,
 CONSTRAINT [PK_ThemeBase] PRIMARY KEY CLUSTERED 
(
	[ThemeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ThemeBase] ([ModifiedOnBehalfBy], [ModifiedBy], [Name], [DefaultCustomEntityColor], [ImportSequenceNumber], [OrganizationId], [LogoToolTip], [Type], [ProcessControlColor], [HeaderColor], [CreatedBy], [statuscode], [DefaultEntityColor], [statecode], [NavBarShelfColor], [ControlShade], [TransactionCurrencyId], [LogoId], [HoverLinkEffect], [SelectedLinkEffect], [UTCConversionTimeZoneCode], [CreatedOnBehalfBy], [NavBarBackgroundColor], [ThemeId], [IsDefaultTheme], [ModifiedOn], [CreatedOn], [OverriddenCreatedOn], [ControlBorder], [GlobalLinkColor], [ExchangeRate], [TimeZoneRuleVersionNumber], [BackgroundColor]) VALUES (NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'CRM Default Theme', N'#006551', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', N'Microsoft Dynamics 365', 0, N'#D24726', N'#1160B7', N'd9f5ecca-f31d-e711-80d3-00155d00662d', 2, N'#001CA5', 1, N'#DFE2E8', N'#F3F1F1', NULL, NULL, N'#D7EBF9', N'#B1D6F0', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'#000000', N'f499443d-2082-4938-8842-e7ee62de9a23', 1, CAST(N'2017-04-10 14:29:51.000' AS DateTime), CAST(N'2017-04-10 13:52:06.000' AS DateTime), NULL, N'#CCCCCC', N'#1160B7', NULL, NULL, N'#FFFFFF')
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ThemeBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ThemeBase]
(
	[statecode] ASC,
	[statuscode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ThemeBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ThemeBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ThemeBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Theme] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ThemeBase] CHECK CONSTRAINT [TransactionCurrency_Theme]
GO
