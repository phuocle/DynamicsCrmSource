CREATE TABLE [dbo].[AdvancedSimilarityRuleBase] (
    [NgramSize]                       INT              NULL,
    [FetchXmlList]                    NVARCHAR (MAX)   NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_AdvancedSimilarityRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [IsAzureMLRequired]               BIT              NULL,
    [name]                            NVARCHAR (100)   NULL,
    [AdvancedSimilarityRuleId]        UNIQUEIDENTIFIER NOT NULL,
    [AzureServiceConnectionId]        UNIQUEIDENTIFIER NULL,
    [FilterResultByStatus]            INT              NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_AdvancedSimilarityRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Entity]                          NVARCHAR (100)   NULL,
    [AdvancedSimilarityRuleIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_AdvancedSimilarityRuleBase_AdvancedSimilarityRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [StateCode]                       INT              NOT NULL,
    [ExactMatchList]                  NVARCHAR (MAX)   NULL,
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_AdvancedSimilarityRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOn]                       DATETIME         NULL,
    [SourceEntity]                    INT              NULL,
    [MaxNumberKeyphrases]             INT              NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [StatusCode]                      INT              NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_AdvancedSimilarityRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [FilterResultByStatusDisplayName] NVARCHAR (50)    NULL,
    [NoiseKeyphraseslist]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_AdvancedSimilarityRuleBase] PRIMARY KEY CLUSTERED ([AdvancedSimilarityRuleId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AdvancedSimilarityRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AdvancedSimilarityRuleBase]([AdvancedSimilarityRuleId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

