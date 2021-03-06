USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AuditBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AuditBase](
	[AttributeMask] [nvarchar](max) NULL,
	[TransactionId] [uniqueidentifier] NOT NULL,
	[Action] [int] NULL,
	[ObjectId] [uniqueidentifier] NOT NULL,
	[ObjectIdName] [nvarchar](1) NULL,
	[UserId] [uniqueidentifier] NOT NULL,
	[ChangeData] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[Operation] [int] NOT NULL,
	[AuditId] [uniqueidentifier] NOT NULL,
	[CallingUserId] [uniqueidentifier] NULL,
	[ObjectTypeCode] [int] NULL,
	[UserAdditionalInfo] [nvarchar](400) NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL
) ON [AuditPScheme]([CreatedOn])

GO
/****** Object:  Index [cndx_PrimaryKey_Audit]    Script Date: 4/10/2017 9:59:21 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_Audit] ON [dbo].[AuditBase]
(
	[CreatedOn] DESC,
	[AuditId] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [AuditPScheme]([CreatedOn])
GO
/****** Object:  Index [fndx_ObjectTypeCode]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_ObjectTypeCode] ON [dbo].[AuditBase]
(
	[ObjectTypeCode] ASC,
	[Action] ASC
)
WHERE ([ObjectTypeCode] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [AuditPScheme]([CreatedOn])
GO
/****** Object:  Index [ndx_ObjectId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ObjectId] ON [dbo].[AuditBase]
(
	[ObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [AuditPScheme]([CreatedOn])
GO
/****** Object:  Index [ndx_PrimaryKey_Audit]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit] ON [dbo].[AuditBase]
(
	[AuditId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [AuditPScheme]([CreatedOn])
GO
/****** Object:  Index [ndx_PrimaryKey_Audit_Primary]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit_Primary] ON [dbo].[AuditBase]
(
	[CreatedOn] DESC,
	[AuditId] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_UserId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_UserId] ON [dbo].[AuditBase]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [AuditPScheme]([CreatedOn])
GO
ALTER TABLE [dbo].[AuditBase] ADD  DEFAULT (newsequentialid()) FOR [AuditId]
GO
