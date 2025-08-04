CREATE TABLE [dbo].[RecommendationModelVersionBase] (
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [StatusCode]                      INT              NULL,
    [AzureModelBuildStatus]           INT              NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [PercentileRank]                  INT              NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [AzureBuildId]                    NVARCHAR (100)   NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [LogicAppRunId]                   NVARCHAR (100)   NULL,
    [BasketDataSynchronizationStatus] INT              NULL,
    [RecommendationModelId]           UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [BuildStartedOn]                  DATETIME         NULL,
    [RecommendationModelVersionId]    UNIQUEIDENTIFIER NOT NULL,
    [CatalogSynchronizationStatus]    INT              NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [BuildEndedOn]                    DATETIME         NULL,
    [Name]                            NVARCHAR (125)   NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [CatalogCoverage]                 INT              NULL,
    [CreatedOn]                       DATETIME         NULL,
    [Duration]                        AS               ([dbo].[fn_UDF_29130f3d16ac4244ab844a54a2b5243e]([BuildStartedOn],[BuildEndedOn])),
    CONSTRAINT [PK_recommendationmodelversionBase] PRIMARY KEY CLUSTERED ([RecommendationModelVersionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [recommendationmodel_recommendationmodelversion] FOREIGN KEY ([RecommendationModelId]) REFERENCES [dbo].[RecommendationModelBaseIds] ([RecommendationModelId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_RecommendationModelVersion]
    ON [dbo].[RecommendationModelVersionBase]([RecommendationModelId] ASC, [Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RecommendationModelVersion_Name]
    ON [dbo].[RecommendationModelVersionBase]([Name] ASC) WITH (FILLFACTOR = 80);

