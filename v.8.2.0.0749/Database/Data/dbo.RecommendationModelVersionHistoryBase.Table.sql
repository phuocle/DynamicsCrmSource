USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecommendationModelVersionHistoryBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecommendationModelVersionHistoryBase](
	[ErrorDetails] [nvarchar](max) NULL,
	[NumberRecordsSynchronized] [int] NULL,
	[ErrorCount] [int] NULL,
	[RecommendationModelVersionHistoryId] [uniqueidentifier] NOT NULL,
	[WorkflowStepStatus] [int] NULL,
	[StartTime] [datetime] NULL,
	[WorkflowStep] [int] NULL,
	[EndTime] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[RecommendationModelVersionId] [uniqueidentifier] NOT NULL,
	[Duration]  AS ([dbo].[fn_UDF_41e1bd5f30a240e0a1fbec4fde5757f0]([StartTime],[EndTime])),
 CONSTRAINT [PK_recommendationmodelversionhistoryBase] PRIMARY KEY CLUSTERED 
(
	[RecommendationModelVersionHistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[RecommendationModelVersionHistoryBase]  WITH CHECK ADD  CONSTRAINT [recommendationmodelversion_recommendationmodelversionhistory] FOREIGN KEY([RecommendationModelVersionId])
REFERENCES [dbo].[RecommendationModelVersionBase] ([RecommendationModelVersionId])
GO
ALTER TABLE [dbo].[RecommendationModelVersionHistoryBase] CHECK CONSTRAINT [recommendationmodelversion_recommendationmodelversionhistory]
GO
