USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ServiceEndpointBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ServiceEndpointBase](
	[Contract] [int] NOT NULL,
	[UserClaim] [int] NOT NULL,
	[ConnectionMode] [int] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[ServiceEndpointIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[ComponentState] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[Name] [nvarchar](256) NOT NULL,
	[IsCustomizable] [bit] NOT NULL,
	[ServiceEndpointId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[IsManaged] [bit] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[Path] [nvarchar](160) NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[SolutionNamespace] [nvarchar](160) NOT NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[SASToken] [varbinary](max) NULL,
	[SASKey] [varbinary](max) NULL,
	[NamespaceAddress] [nvarchar](255) NULL,
	[AuthType] [int] NULL,
	[NamespaceFormat] [int] NULL,
	[MessageFormat] [int] NULL,
	[SASKeyName] [nvarchar](256) NULL,
 CONSTRAINT [cndx_PrimaryKey_ServiceEndpoint] PRIMARY KEY CLUSTERED 
(
	[ServiceEndpointId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [UQ_ServiceEndpointBase_ServiceEndpointIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [UQ_ServiceEndpointBase_ServiceEndpointIdUnique] UNIQUE NONCLUSTERED 
(
	[ServiceEndpointIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_Contract]  DEFAULT ((1)) FOR [Contract]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_UserClaim]  DEFAULT ((1)) FOR [UserClaim]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_ConnectionMode]  DEFAULT ((1)) FOR [ConnectionMode]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_ServiceEndpointIdUnique]  DEFAULT (newid()) FOR [ServiceEndpointIdUnique]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_Name]  DEFAULT ('') FOR [Name]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_IsCustomizable]  DEFAULT ((1)) FOR [IsCustomizable]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_AuthType]  DEFAULT ((1)) FOR [AuthType]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_NamespaceFormat]  DEFAULT ((1)) FOR [NamespaceFormat]
GO
ALTER TABLE [dbo].[ServiceEndpointBase] ADD  CONSTRAINT [DF_ServiceEndpointBase_MessageFormat]  DEFAULT ((1)) FOR [MessageFormat]
GO
