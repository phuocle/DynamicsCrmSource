USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PublisherBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PublisherBase](
	[PinpointPublisherId] [bigint] NULL,
	[CustomizationPrefix] [nvarchar](8) NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[PublisherId] [uniqueidentifier] NOT NULL,
	[PinpointPublisherDefaultLocale] [nvarchar](16) NULL,
	[Description] [nvarchar](2000) NULL,
	[CustomizationOptionValuePrefix] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[SupportingWebsiteUrl] [nvarchar](200) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[UniqueName] [nvarchar](256) NOT NULL CONSTRAINT [DF_PublisherBase_UniqueName]  DEFAULT (''),
	[CreatedBy] [uniqueidentifier] NULL,
	[IsReadonly] [bit] NOT NULL CONSTRAINT [DF_PublisherBase_IsReadonly]  DEFAULT ((0)),
	[FriendlyName] [nvarchar](256) NOT NULL CONSTRAINT [DF_PublisherBase_FriendlyName]  DEFAULT (''),
	[EntityImageId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Publisher] PRIMARY KEY CLUSTERED 
(
	[PublisherId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[PublisherBase] ([PinpointPublisherId], [CustomizationPrefix], [ModifiedOn], [EMailAddress], [ModifiedOnBehalfBy], [PublisherId], [PinpointPublisherDefaultLocale], [Description], [CustomizationOptionValuePrefix], [CreatedOnBehalfBy], [OrganizationId], [SupportingWebsiteUrl], [ModifiedBy], [CreatedOn], [UniqueName], [CreatedBy], [IsReadonly], [FriendlyName], [EntityImageId]) VALUES (NULL, N'none', CAST(N'2017-04-10 13:44:27.000' AS DateTime), NULL, NULL, N'd21aab70-79e7-11dd-8874-00188b01e34f', NULL, N'Publisher for Microsoft Solutions', 0, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 13:44:27.000' AS DateTime), N'MicrosoftCorporation', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'Microsoft Publisher', NULL)
INSERT [dbo].[PublisherBase] ([PinpointPublisherId], [CustomizationPrefix], [ModifiedOn], [EMailAddress], [ModifiedOnBehalfBy], [PublisherId], [PinpointPublisherDefaultLocale], [Description], [CustomizationOptionValuePrefix], [CreatedOnBehalfBy], [OrganizationId], [SupportingWebsiteUrl], [ModifiedBy], [CreatedOn], [UniqueName], [CreatedBy], [IsReadonly], [FriendlyName], [EntityImageId]) VALUES (NULL, N'new', CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, N'd21aab71-79e7-11dd-8874-00188b01e34f', NULL, N'Default publisher for this organization', 10000, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 13:44:28.000' AS DateTime), N'DefaultPublisherD365', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0, N'Default Publisher for D365', NULL)
INSERT [dbo].[PublisherBase] ([PinpointPublisherId], [CustomizationPrefix], [ModifiedOn], [EMailAddress], [ModifiedOnBehalfBy], [PublisherId], [PinpointPublisherDefaultLocale], [Description], [CustomizationOptionValuePrefix], [CreatedOnBehalfBy], [OrganizationId], [SupportingWebsiteUrl], [ModifiedBy], [CreatedOn], [UniqueName], [CreatedBy], [IsReadonly], [FriendlyName], [EntityImageId]) VALUES (NULL, N'msdyn', CAST(N'2017-04-10 14:29:12.000' AS DateTime), NULL, NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', NULL, NULL, 19235, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', N'http://crm.dynamics.com', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 14:06:07.000' AS DateTime), N'microsoftdynamics', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1, N'Dynamics 365', NULL)
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PublisherBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_UniqueName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName] ON [dbo].[PublisherBase]
(
	[UniqueName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
