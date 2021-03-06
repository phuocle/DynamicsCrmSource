USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SharePointDataBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SharePointDataBase](
	[RegardingObjectId] [nvarchar](160) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[NextPageToken] [nvarchar](160) NULL,
	[SharePointDataId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[UserId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Location] [uniqueidentifier] NULL,
	[Data] [nvarchar](max) NULL,
	[PreviousPageToken] [nvarchar](160) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[IsValid] [bit] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [ndx_PrimaryKey_SharePointData] PRIMARY KEY CLUSTERED 
(
	[SharePointDataId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[SharePointDataBase] ADD  CONSTRAINT [DF_SharePointDataBase_IsValid]  DEFAULT ((1)) FOR [IsValid]
GO
ALTER TABLE [dbo].[SharePointDataBase] ADD  CONSTRAINT [DF_SharePointDataBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
