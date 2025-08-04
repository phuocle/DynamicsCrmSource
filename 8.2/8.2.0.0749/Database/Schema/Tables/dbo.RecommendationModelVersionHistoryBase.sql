CREATE TABLE [dbo].[RecommendationModelVersionHistoryBase]
(
[ErrorDetails] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[NumberRecordsSynchronized] [int] NULL,
[ErrorCount] [int] NULL,
[RecommendationModelVersionHistoryId] [uniqueidentifier] NOT NULL,
[WorkflowStepStatus] [int] NULL,
[StartTime] [datetime] NULL,
[WorkflowStep] [int] NULL,
[EndTime] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[RecommendationModelVersionId] [uniqueidentifier] NOT NULL,
[Duration] AS ([dbo].[fn_UDF_41e1bd5f30a240e0a1fbec4fde5757f0]([StartTime],[EndTime]))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelVersionHistoryBase] ADD CONSTRAINT [PK_recommendationmodelversionhistoryBase] PRIMARY KEY CLUSTERED  ([RecommendationModelVersionHistoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecommendationModelVersionHistoryBase] ADD CONSTRAINT [recommendationmodelversion_recommendationmodelversionhistory] FOREIGN KEY ([RecommendationModelVersionId]) REFERENCES [dbo].[RecommendationModelVersionBase] ([RecommendationModelVersionId])
GO
