CREATE TABLE [dbo].[KnowledgeSearchModelBase]
(
[SourceEntity] [int] NULL,
[NgramSize] [int] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[KnowledgeSearchModelIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_KnowledgeSearchModelBase_KnowledgeSearchModelIdUnique] DEFAULT (newid()),
[KnowledgeSearchModelId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_KnowledgeSearchModelBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_KnowledgeSearchModelBase_OverwriteTime] DEFAULT ((0)),
[AzureServiceConnectionId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[FetchXmlList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[Entity] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_KnowledgeSearchModelBase_IsManaged] DEFAULT ((0)),
[MaxKeyWords] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_KnowledgeSearchModelBase_ComponentState] DEFAULT ((0)),
[StateCode] [int] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] ADD CONSTRAINT [PK_knowledgesearchmodelBase] PRIMARY KEY CLUSTERED  ([KnowledgeSearchModelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
