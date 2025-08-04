CREATE TABLE [dbo].[KnowledgeSearchModelBase] (
    [SourceEntity]                 INT              NULL,
    [NgramSize]                    INT              NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [KnowledgeSearchModelIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeSearchModelBase_KnowledgeSearchModelIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [KnowledgeSearchModelId]       UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeSearchModelBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_KnowledgeSearchModelBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [AzureServiceConnectionId]     UNIQUEIDENTIFIER NULL,
    [StatusCode]                   INT              NULL,
    [FetchXmlList]                 NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [Entity]                       NVARCHAR (100)   NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_KnowledgeSearchModelBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [MaxKeyWords]                  INT              NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [ComponentState]               INT              CONSTRAINT [DF_KnowledgeSearchModelBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [StateCode]                    INT              NOT NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOn]                    DATETIME         NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_knowledgesearchmodelBase] PRIMARY KEY CLUSTERED ([KnowledgeSearchModelId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_KnowledgeSearchModel_Name]
    ON [dbo].[KnowledgeSearchModelBase]([Name] ASC) WITH (FILLFACTOR = 80);

