CREATE TABLE [dbo].[ConvertRuleItemBase] (
    [ConvertRuleItemIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleItemBase_ConvertRuleItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_ConvertRuleItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SequenceNumber]          INT              NULL,
    [PropertiesXml]           NVARCHAR (MAX)   NULL,
    [TransactionCurrencyId]   UNIQUEIDENTIFIER NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                    NVARCHAR (100)   NULL,
    [ConditionXml]            NVARCHAR (MAX)   NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_ConvertRuleItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ConditionId]             UNIQUEIDENTIFIER NULL,
    [ExchangeRate]            DECIMAL (23, 10) NULL,
    [CreatedOn]               DATETIME         NULL,
    [ConvertRuleItemId]       UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_ConvertRuleItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [ConvertRuleId]           UNIQUEIDENTIFIER NOT NULL,
    [QueueId]                 UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ConvertRuleItemId] PRIMARY KEY CLUSTERED ([ConvertRuleItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ConvertRuleItemBase]([Name] ASC) WITH (FILLFACTOR = 80);

