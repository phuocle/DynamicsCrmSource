USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AuthorizationServerBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuthorizationServerBase](
	[StateCode] [int] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Realm] [nvarchar](100) NULL,
	[PrincipalId] [nvarchar](100) NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[TenantId] [uniqueidentifier] NULL,
	[MetadataUrl] [nvarchar](1024) NULL,
	[StatusCode] [int] NULL,
	[Name] [nvarchar](100) NOT NULL,
	[AuthorizationServerId] [uniqueidentifier] NOT NULL,
	[MetadataRefreshedOn] [datetime] NULL,
	[Metadata] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[AuthorizationServerType] [int] NULL,
 CONSTRAINT [PK_authorizationserver] PRIMARY KEY CLUSTERED 
(
	[AuthorizationServerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[AuthorizationServerBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[AuthorizationServerBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AuthorizationServerBase] ADD  CONSTRAINT [DF_AuthorizationServerBase_AuthorizationServerType]  DEFAULT ((0)) FOR [AuthorizationServerType]
GO
