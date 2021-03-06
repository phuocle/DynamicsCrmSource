USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PartnerApplicationBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PartnerApplicationBase](
	[CreatedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[MetadataUrl] [nvarchar](1024) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[UseAuthorizationServer] [bit] NULL,
	[PrincipalId] [nvarchar](100) NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[Name] [nvarchar](100) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Realm] [nvarchar](256) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[PartnerApplicationId] [uniqueidentifier] NOT NULL,
	[StatusCode] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ApplicationRole] [int] NOT NULL,
	[TenantId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_PartnerApplication] PRIMARY KEY CLUSTERED 
(
	[PartnerApplicationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[PartnerApplicationBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_PartnerApplication_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_PartnerApplication_Name] ON [dbo].[PartnerApplicationBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PartnerApplicationBase]
(
	[OrganizationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PartnerApplicationBase] ADD  CONSTRAINT [DF_PartnerApplicationBase_UseAuthorizationServer]  DEFAULT ((1)) FOR [UseAuthorizationServer]
GO
ALTER TABLE [dbo].[PartnerApplicationBase] ADD  CONSTRAINT [DF_PartnerApplicationBase_ApplicationRole]  DEFAULT ((1)) FOR [ApplicationRole]
GO
