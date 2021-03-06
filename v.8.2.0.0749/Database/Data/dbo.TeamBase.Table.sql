USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TeamBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamBase](
	[TeamId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](160) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[IsDefault] [bit] NOT NULL CONSTRAINT [DF_TeamBase_IsDefault]  DEFAULT ((0)),
	[AdministratorId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamBase_AdministratorId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
	[QueueId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[YomiName] [nvarchar](160) NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[TeamType] [int] NOT NULL CONSTRAINT [DF_TeamBase_TeamType]  DEFAULT ((0)),
	[ProcessId] [uniqueidentifier] NULL,
	[SystemManaged] [bit] NOT NULL CONSTRAINT [DF_TeamBase_SystemManaged]  DEFAULT ((0)),
	[StageId] [uniqueidentifier] NULL,
	[TeamTemplateId] [uniqueidentifier] NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
 CONSTRAINT [cndx_PrimaryKey_Team] PRIMARY KEY CLUSTERED 
(
	[TeamId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[TeamBase] ([TeamId], [OrganizationId], [BusinessUnitId], [Name], [Description], [EMailAddress], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ImportSequenceNumber], [OverriddenCreatedOn], [IsDefault], [AdministratorId], [QueueId], [ExchangeRate], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [TransactionCurrencyId], [YomiName], [RegardingObjectId], [TeamType], [ProcessId], [SystemManaged], [StageId], [TeamTemplateId], [RegardingObjectTypeCode], [TraversedPath]) VALUES (N'c7acfcbe-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d', N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'D365', N'Default team for the parent business unit. The name and membership for default team are inherited from their parent business unit.', NULL, CAST(N'2017-04-10 13:43:58.000' AS DateTime), CAST(N'2017-04-10 13:44:22.000' AS DateTime), NULL, NULL, NULL, NULL, 1, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c8acfcbe-f31d-e711-80d3-00155d00662d', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0, NULL, NULL, NULL, NULL)
/****** Object:  Index [fndx_RegardingObjectId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId] ON [dbo].[TeamBase]
(
	[RegardingObjectId] ASC
)
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[TeamBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_TeamAdministrator]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_TeamAdministrator] ON [dbo].[TeamBase]
(
	[TeamId] ASC,
	[AdministratorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_TeamName_BusinessUnitId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TeamName_BusinessUnitId] ON [dbo].[TeamBase]
(
	[Name] ASC,
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamBase]  WITH CHECK ADD  CONSTRAINT [business_unit_teams] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[TeamBase] CHECK CONSTRAINT [business_unit_teams]
GO
ALTER TABLE [dbo].[TeamBase]  WITH CHECK ADD  CONSTRAINT [queue_team] FOREIGN KEY([QueueId])
REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[TeamBase] CHECK CONSTRAINT [queue_team]
GO
ALTER TABLE [dbo].[TeamBase]  WITH CHECK ADD  CONSTRAINT [teamtemplate_Teams] FOREIGN KEY([TeamTemplateId])
REFERENCES [dbo].[TeamTemplateBase] ([TeamTemplateId])
GO
ALTER TABLE [dbo].[TeamBase] CHECK CONSTRAINT [teamtemplate_Teams]
GO
ALTER TABLE [dbo].[TeamBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Team] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[TeamBase] CHECK CONSTRAINT [TransactionCurrency_Team]
GO
