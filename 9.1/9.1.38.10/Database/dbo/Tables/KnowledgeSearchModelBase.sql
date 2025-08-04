CREATE TABLE [dbo].[KnowledgeSearchModelBase] (
    [Entity]                       NVARCHAR (100)   NULL,
    [ComponentState]               INT              CONSTRAINT [DF_KnowledgeSearchModelBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [NgramSize]                    INT              NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_KnowledgeSearchModelBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_KnowledgeSearchModelBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [AzureServiceConnectionId]     UNIQUEIDENTIFIER NULL,
    [SourceEntity]                 INT              NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [KnowledgeSearchModelId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeSearchModelBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [StatusCode]                   INT              NULL,
    [MaxKeyWords]                  INT              NULL,
    [StateCode]                    INT              NOT NULL,
    [KnowledgeSearchModelIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_KnowledgeSearchModelBase_KnowledgeSearchModelIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [FetchXmlList]                 NVARCHAR (MAX)   NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_knowledgesearchmodelBase] PRIMARY KEY CLUSTERED ([KnowledgeSearchModelId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[KnowledgeSearchModelBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_KnowledgeSearchModel_Name]
    ON [dbo].[KnowledgeSearchModelBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[KnowledgeSearchModelBase]([KnowledgeSearchModelId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_B6FA7392B6B2435BB426AE6E4DB40325]
    ON [dbo].[KnowledgeSearchModelBase]([Name] ASC, [KnowledgeSearchModelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B6FA7392B6B2435BB426AE6E4DB40325]
    ON [dbo].[KnowledgeSearchModelBase]([KnowledgeSearchModelId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

