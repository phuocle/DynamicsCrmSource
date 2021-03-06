USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PostBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostBase](
	[PostId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[PostRegardingId] [uniqueidentifier] NOT NULL,
	[YammerRetryCount] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Text] [nvarchar](2000) NULL,
	[CreatedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[Source] [int] NULL,
	[Type] [int] NULL,
	[PostToYammer] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[YammerPostState] [int] NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_ModifiedOn]    Script Date: 4/10/2017 9:59:19 PM ******/
CREATE CLUSTERED INDEX [ndx_ModifiedOn] ON [dbo].[PostBase]
(
	[ModifiedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [PK_PostBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PostBase] ADD  CONSTRAINT [PK_PostBase] PRIMARY KEY NONCLUSTERED 
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_CreatedBy]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CreatedBy] ON [dbo].[PostBase]
(
	[CreatedBy] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PostRegarding]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_PostRegarding] ON [dbo].[PostBase]
(
	[PostRegardingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostBase]  WITH CHECK ADD  CONSTRAINT [post_PostRegardings] FOREIGN KEY([PostRegardingId])
REFERENCES [dbo].[PostRegardingBase] ([PostRegardingId])
GO
ALTER TABLE [dbo].[PostBase] CHECK CONSTRAINT [post_PostRegardings]
GO
