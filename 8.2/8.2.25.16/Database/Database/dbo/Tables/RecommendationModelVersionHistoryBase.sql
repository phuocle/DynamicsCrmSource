CREATE TABLE [dbo].[RecommendationModelVersionHistoryBase] (
    [ErrorDetails]                        NVARCHAR (MAX)   NULL,
    [NumberRecordsSynchronized]           INT              NULL,
    [ErrorCount]                          INT              NULL,
    [RecommendationModelVersionHistoryId] UNIQUEIDENTIFIER NOT NULL,
    [WorkflowStepStatus]                  INT              NULL,
    [StartTime]                           DATETIME         NULL,
    [WorkflowStep]                        INT              NULL,
    [EndTime]                             DATETIME         NULL,
    [OrganizationId]                      UNIQUEIDENTIFIER NOT NULL,
    [RecommendationModelVersionId]        UNIQUEIDENTIFIER NOT NULL,
    [Duration]                            AS               ([dbo].[fn_UDF_41e1bd5f30a240e0a1fbec4fde5757f0]([StartTime],[EndTime])),
    CONSTRAINT [PK_recommendationmodelversionhistoryBase] PRIMARY KEY CLUSTERED ([RecommendationModelVersionHistoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [recommendationmodelversion_recommendationmodelversionhistory] FOREIGN KEY ([RecommendationModelVersionId]) REFERENCES [dbo].[RecommendationModelVersionBase] ([RecommendationModelVersionId])
);

