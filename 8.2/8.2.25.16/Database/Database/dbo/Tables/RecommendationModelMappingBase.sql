CREATE TABLE [dbo].[RecommendationModelMappingBase] (
    [ProductLineItemRelationship]            NVARCHAR (100)   NULL,
    [ProductField]                           NVARCHAR (100)   NULL,
    [DataFilter]                             NVARCHAR (MAX)   NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_RecommendationModelMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SynchronizedCount]                      INT              NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_RecommendationModelMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Entity]                                 NVARCHAR (100)   NULL,
    [RecommendationModelMappingIdUnique]     UNIQUEIDENTIFIER CONSTRAINT [DF_RecommendationModelMappingBase_RecommendationModelMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportedMapId]                         UNIQUEIDENTIFIER NULL,
    [RecommendationModelVersionId]           UNIQUEIDENTIFIER NULL,
    [MappingType]                            INT              NULL,
    [ErrorCount]                             INT              NULL,
    [TransactionField]                       NVARCHAR (100)   NULL,
    [FilterXml]                              NVARCHAR (MAX)   NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_RecommendationModelMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_RecommendationModelMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RecommendationModelId]                  UNIQUEIDENTIFIER NULL,
    [OrganizationId]                         UNIQUEIDENTIFIER NOT NULL,
    [AccountField]                           NVARCHAR (100)   NULL,
    [TimeRangeFilter]                        NVARCHAR (MAX)   NULL,
    [RecommendationModelMappingId]           UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [AccountFieldPickList]                   INT              NULL,
    [AccountFieldDisplayName]                NVARCHAR (50)    NULL,
    [ProductLineItemRelationshipDisplayName] NVARCHAR (120)   NULL,
    [EntityDisplayName]                      NVARCHAR (50)    NULL,
    [ProductFieldDisplayName]                NVARCHAR (50)    NULL,
    [ProductLineItemRelationshipPickList]    INT              NULL,
    [ProductFieldPickList]                   INT              NULL,
    [EntityPickList]                         INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_RecommendationModelMapping] PRIMARY KEY CLUSTERED ([RecommendationModelMappingId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_RecommendationModelMapping]
    ON [dbo].[RecommendationModelMappingBase]([Entity] ASC, [MappingType] ASC, [RecommendationModelVersionId] ASC) WITH (FILLFACTOR = 80);

