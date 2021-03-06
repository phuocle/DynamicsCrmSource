USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TopicBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TopicBase](
	[IncidentId] [uniqueidentifier] NOT NULL,
	[KeyPhrase] [nvarchar](512) NULL,
	[TopicId] [uniqueidentifier] NOT NULL,
	[Score] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_Topic] PRIMARY KEY CLUSTERED 
(
	[TopicId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
