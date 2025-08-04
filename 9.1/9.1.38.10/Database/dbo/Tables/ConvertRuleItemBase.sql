CREATE TABLE [dbo].[ConvertRuleItemBase] (
    [ModifiedOn]                     DATETIME         NULL,
    [ConditionId]                    UNIQUEIDENTIFIER NULL,
    [ConvertRuleItemIdUnique]        UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleItemBase_ConvertRuleItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ConvertRuleId]                  UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                      BIT              CONSTRAINT [DF_ConvertRuleItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SequenceNumber]                 INT              NULL,
    [PropertiesXml]                  NVARCHAR (MAX)   NULL,
    [WorkflowId]                     UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]          UNIQUEIDENTIFIER NULL,
    [QueueId]                        UNIQUEIDENTIFIER NULL,
    [SolutionId]                     UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [Name]                           NVARCHAR (100)   NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ConditionXml]                   NVARCHAR (MAX)   NULL,
    [ConvertRuleItemId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                  DATETIME         CONSTRAINT [DF_ConvertRuleItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                   DECIMAL (23, 10) NULL,
    [CreatedOn]                      DATETIME         NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ComponentState]                 INT              CONSTRAINT [DF_ConvertRuleItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [Description]                    NVARCHAR (MAX)   NULL,
    [PrimaryCreateEntityLogicalName] NVARCHAR (250)   NULL,
    CONSTRAINT [cndx_PrimaryKey_ConvertRuleItemId] PRIMARY KEY CLUSTERED ([ConvertRuleItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ConvertRuleItem_ConvertRuleItemIdUnique] UNIQUE NONCLUSTERED ([ConvertRuleItemIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ConvertRuleItemBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ConvertRuleItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ConvertRuleItemBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ConvertRuleItemBase]([ConvertRuleItemId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

