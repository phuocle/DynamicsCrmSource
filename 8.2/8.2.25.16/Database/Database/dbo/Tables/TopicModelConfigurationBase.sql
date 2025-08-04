CREATE TABLE [dbo].[TopicModelConfigurationBase] (
    [TopicModelConfigurationIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_TopicModelConfigurationBase_TopicModelConfigurationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [MinRelevanceScore]               DECIMAL (23, 10) NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_TopicModelConfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_TopicModelConfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SourceEntity]                    INT              NULL,
    [FetchXmlList]                    NVARCHAR (MAX)   NULL,
    [DataFilter]                      NVARCHAR (MAX)   NULL,
    [TimeFilter]                      INT              NULL,
    [TopicModelConfigurationId]       UNIQUEIDENTIFIER NOT NULL,
    [NgramSize]                       INT              NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [Name]                            NVARCHAR (100)   NULL,
    [TopicModelId]                    UNIQUEIDENTIFIER NOT NULL,
    [TimeFilterDuration]              INT              NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_TopicModelConfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_TopicModelConfigurationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [StopWords]                       NVARCHAR (500)   NULL,
    CONSTRAINT [PK_TopicModelConfigurationBase] PRIMARY KEY CLUSTERED ([TopicModelConfigurationId] ASC) WITH (FILLFACTOR = 80)
);

