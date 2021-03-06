USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContractTemplateBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractTemplateBase](
	[ContractTemplateId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[Abbreviation] [nvarchar](20) NOT NULL,
	[ContractServiceLevelCode] [int] NULL,
	[BillingFrequencyCode] [int] NULL,
	[AllotmentTypeCode] [int] NULL,
	[UseDiscountAsPercentage] [bit] NULL,
	[EffectivityCalendar] [nvarchar](168) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ContractTemplateBase_IsManaged]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_ContractTemplateBase_ComponentState]  DEFAULT ((0)),
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContractTemplateBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ContractTemplateBase_OverwriteTime]  DEFAULT ((0)),
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ContractTemplateIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_ContractTemplateBase_ContractTemplateIdUnique]  DEFAULT (newid()),
	[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ContractTemplateBase_IsCustomizable]  DEFAULT ((1)),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
 CONSTRAINT [cndx_PrimaryKey_ContractTemplate] PRIMARY KEY CLUSTERED 
(
	[ContractTemplateId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[ContractTemplateBase] ([ContractTemplateId], [Name], [OrganizationId], [Description], [Abbreviation], [ContractServiceLevelCode], [BillingFrequencyCode], [AllotmentTypeCode], [UseDiscountAsPercentage], [EffectivityCalendar], [CreatedOn], [CreatedBy], [ModifiedBy], [ModifiedOn], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [ModifiedOnBehalfBy], [ComponentState], [SolutionId], [OverwriteTime], [SupportingSolutionId], [ContractTemplateIdUnique], [IsCustomizable], [CreatedOnBehalfBy], [IntroducedVersion]) VALUES (N'77ecdfda-3e70-429d-b174-1352b981c5f2', N'Service', N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'SER', 1, 1, 1, 0, N'--------+++++++++---------------+++++++++---------------+++++++++---------------+++++++++---------------+++++++++-------------------------------------------------------', CAST(N'2017-04-10 13:51:44.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:51:44.000' AS DateTime), NULL, NULL, 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, N'7475584e-2092-4410-9a98-df09a523c537', 1, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'5.0')
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_ContractTemplateBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ContractTemplateBase] ADD  CONSTRAINT [AK1_ContractTemplateBase] UNIQUE NONCLUSTERED 
(
	[Abbreviation] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [UQ_ContractTemplateBase_ContractTemplateIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ContractTemplateBase] ADD  CONSTRAINT [UQ_ContractTemplateBase_ContractTemplateIdUnique] UNIQUE NONCLUSTERED 
(
	[ContractTemplateIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContractTemplateBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
