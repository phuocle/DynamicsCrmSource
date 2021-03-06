USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PostFollowBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostFollowBase](
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[YammerRetryCount] [int] NULL,
	[PostToYammer] [bit] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[PostFollowId] [uniqueidentifier] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NOT NULL,
	[YammerPostState] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[VersionNumber] [timestamp] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_PostFollower]    Script Date: 4/10/2017 9:59:21 PM ******/
CREATE UNIQUE CLUSTERED INDEX [ndx_PostFollower] ON [dbo].[PostFollowBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC,
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [PK_PostFollowBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PostFollowBase] ADD  CONSTRAINT [PK_PostFollowBase] PRIMARY KEY NONCLUSTERED 
(
	[PostFollowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_CreatedOn]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[PostFollowBase]
(
	[CreatedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_business_unit]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit] ON [dbo].[PostFollowBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PostFollowBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostFollowBase] ADD  CONSTRAINT [DF_PostFollowBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[PostFollowBase]  WITH CHECK ADD  CONSTRAINT [business_unit_postfollows] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[PostFollowBase] CHECK CONSTRAINT [business_unit_postfollows]
GO
ALTER TABLE [dbo].[PostFollowBase]  WITH CHECK ADD  CONSTRAINT [owner_postfollows] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[PostFollowBase] CHECK CONSTRAINT [owner_postfollows]
GO
