USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SyncErrorBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SyncErrorBase](
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[SyncErrorId] [uniqueidentifier] NOT NULL,
	[ActionData] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ErrorDetail] [nvarchar](max) NULL,
	[Name] [nvarchar](100) NULL,
	[Action] [nvarchar](100) NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ErrorMessage] [nvarchar](1000) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[RequestData] [nvarchar](max) NULL,
	[ErrorCode] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[ErrorType] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[StateCode] [int] NOT NULL,
	[ErrorTime] [datetime] NULL,
	[StatusCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_SyncError] PRIMARY KEY CLUSTERED 
(
	[SyncErrorId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[SyncErrorBase] ADD  CONSTRAINT [DF_SyncErrorBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SyncErrorBase] ADD  CONSTRAINT [DF_SyncErrorBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SyncErrorBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_SyncError] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SyncErrorBase] CHECK CONSTRAINT [BusinessUnit_SyncError]
GO
ALTER TABLE [dbo].[SyncErrorBase]  WITH CHECK ADD  CONSTRAINT [owner_SyncError] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SyncErrorBase] CHECK CONSTRAINT [owner_SyncError]
GO
