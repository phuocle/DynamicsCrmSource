USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ReplicationBacklogBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReplicationBacklogBase](
	[TargetObjectId] [uniqueidentifier] NULL,
	[Data] [nvarchar](max) NULL,
	[ReplicationBacklogType] [int] NULL,
	[TargetDatacenterId] [uniqueidentifier] NULL,
	[ReplicationBacklogId] [uniqueidentifier] NOT NULL,
	[TargetObjectTypeCode] [int] NULL,
 CONSTRAINT [PK_ReplicationBacklogBase] PRIMARY KEY CLUSTERED 
(
	[ReplicationBacklogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[ReplicationBacklogBase] ADD  CONSTRAINT [DF_ReplicationBacklogBase_ReplicationBacklogId]  DEFAULT (newid()) FOR [ReplicationBacklogId]
GO
