USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[QueueMembership]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QueueMembership](
	[QueueId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[QueueMembershipId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_QueueMembership_QueueMembershipId]  DEFAULT (newid()),
	[SystemUserId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_QueueMembership] PRIMARY KEY CLUSTERED 
(
	[QueueMembershipId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[QueueMembership] ([QueueId], [QueueMembershipId], [SystemUserId]) VALUES (N'c8acfcbe-f31d-e711-80d3-00155d00662d', N'dff5ecca-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[QueueMembership] ([QueueId], [QueueMembershipId], [SystemUserId]) VALUES (N'dbf5ecca-f31d-e711-80d3-00155d00662d', N'ddf5ecca-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d')
/****** Object:  Index [UQ_QueueMembership]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[QueueMembership] ADD  CONSTRAINT [UQ_QueueMembership] UNIQUE NONCLUSTERED 
(
	[QueueId] ASC,
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[QueueMembership]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_system_user_queue_membership]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_system_user_queue_membership] ON [dbo].[QueueMembership]
(
	[SystemUserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[QueueMembership]  WITH CHECK ADD  CONSTRAINT [queue_queue_membership] FOREIGN KEY([QueueId])
REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[QueueMembership] CHECK CONSTRAINT [queue_queue_membership]
GO
ALTER TABLE [dbo].[QueueMembership]  WITH CHECK ADD  CONSTRAINT [system_user_queue_membership] FOREIGN KEY([SystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[QueueMembership] CHECK CONSTRAINT [system_user_queue_membership]
GO
