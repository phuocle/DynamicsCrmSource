USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[WorkflowWaitSubscriptionBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkflowWaitSubscriptionBase](
	[EntityId] [uniqueidentifier] NOT NULL,
	[WorkflowWaitSubscriptionId] [uniqueidentifier] NOT NULL,
	[AsyncOperationId] [uniqueidentifier] NOT NULL,
	[Data] [nvarchar](max) NULL,
	[ModifiedOn] [datetime] NULL,
	[EntityName] [nvarchar](64) NOT NULL,
	[IsModified] [bit] NOT NULL,
	[IsDeleted] [bit] NULL,
	[WaitOnAttributeList] [nvarchar](max) NULL,
 CONSTRAINT [cndx_PrimaryKey_WorkflowWaitSubscription] PRIMARY KEY CLUSTERED 
(
	[WorkflowWaitSubscriptionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_CascadeRelationship_AsyncOperation_WorkflowWaitSubscription]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CascadeRelationship_AsyncOperation_WorkflowWaitSubscription] ON [dbo].[WorkflowWaitSubscriptionBase]
(
	[AsyncOperationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_IsModified]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_IsModified] ON [dbo].[WorkflowWaitSubscriptionBase]
(
	[IsModified] ASC
)
INCLUDE ( 	[AsyncOperationId],
	[IsDeleted]) 
WHERE ([IsModified]=(1))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Modified]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Modified] ON [dbo].[WorkflowWaitSubscriptionBase]
(
	[EntityId] ASC,
	[EntityName] ASC,
	[AsyncOperationId] ASC
)
INCLUDE ( 	[IsDeleted],
	[WaitOnAttributeList]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
