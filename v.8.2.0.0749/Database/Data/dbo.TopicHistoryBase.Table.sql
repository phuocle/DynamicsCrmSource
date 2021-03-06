USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TopicHistoryBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TopicHistoryBase](
	[Weight] [int] NULL,
	[TopicModelExecutionHistoryId] [uniqueidentifier] NULL,
	[TopicHistoryId] [uniqueidentifier] NOT NULL,
	[KeyPhrase] [nvarchar](512) NULL,
 CONSTRAINT [PK_TopicHistoryBase] PRIMARY KEY CLUSTERED 
(
	[TopicHistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[TopicHistoryBase]  WITH CHECK ADD  CONSTRAINT [topicmodelexecutionhistory_topichistory] FOREIGN KEY([TopicModelExecutionHistoryId])
REFERENCES [dbo].[TopicModelExecutionHistoryBase] ([TopicModelExecutionHistoryId])
GO
ALTER TABLE [dbo].[TopicHistoryBase] CHECK CONSTRAINT [topicmodelexecutionhistory_topichistory]
GO
