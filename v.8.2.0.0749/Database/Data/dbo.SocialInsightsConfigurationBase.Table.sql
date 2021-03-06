USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SocialInsightsConfigurationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SocialInsightsConfigurationBase](
	[ModifiedBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[SocialDataParameters] [nvarchar](max) NULL,
	[ControlId] [nvarchar](100) NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[FormId] [uniqueidentifier] NOT NULL,
	[SocialDataItemId] [nvarchar](100) NULL,
	[SocialInsightsConfigurationId] [uniqueidentifier] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[SocialDataItemType] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[FormIdName] [nvarchar](4000) NULL,
	[RegardingObjectIdName] [nvarchar](256) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[FormTypeCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](160) NULL,
 CONSTRAINT [PK_SocialInsightsConfigurationBase] PRIMARY KEY CLUSTERED 
(
	[SocialInsightsConfigurationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_RetrieveForControlInDashboard]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInDashboard] ON [dbo].[SocialInsightsConfigurationBase]
(
	[FormId] ASC,
	[ControlId] ASC
)
INCLUDE ( 	[SocialInsightsConfigurationId],
	[SocialDataItemId],
	[SocialDataParameters],
	[FormTypeCode],
	[SocialDataItemType]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_RetrieveForControlInForm]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RetrieveForControlInForm] ON [dbo].[SocialInsightsConfigurationBase]
(
	[FormId] ASC,
	[ControlId] ASC,
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)
INCLUDE ( 	[SocialInsightsConfigurationId],
	[SocialDataItemId],
	[SocialDataParameters],
	[FormTypeCode],
	[SocialDataItemType]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
