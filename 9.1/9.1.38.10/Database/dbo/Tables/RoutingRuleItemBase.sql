CREATE TABLE [dbo].[RoutingRuleItemBase] (
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [AssignObjectIdModifiedOn]  DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [SequenceNumber]            INT              NULL,
    [RoutingRuleItemId]         UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ConditionXml]              NVARCHAR (MAX)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_RoutingRuleItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_RoutingRuleItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [RoutedQueueId]             UNIQUEIDENTIFIER NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]            INT              CONSTRAINT [DF_RoutingRuleItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [AssignObjectId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [RoutingRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [RoutingRuleItemIdUnique]   UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleItemBase_RoutingRuleItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [AssignObjectIdType]        INT              NULL,
    [AssignObjectIdName]        NVARCHAR (4000)  NULL,
    [AssignObjectIdYomiName]    NVARCHAR (4000)  NULL,
    [msdyn_routeto]             INT              NULL,
    [ConditionXml_QF_prefix]    AS               (CONVERT([nvarchar](850),substring([ConditionXml],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_RoutingRuleItem] PRIMARY KEY CLUSTERED ([RoutingRuleItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RoutingRuleItem_RoutingRuleItemIdUnique] UNIQUE NONCLUSTERED ([RoutingRuleItemIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RoutingRuleItemBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RoutingRuleItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_TitleRoutingRuleItemId]
    ON [dbo].[RoutingRuleItemBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_assignobjectid]
    ON [dbo].[RoutingRuleItemBase]([AssignObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_routingrule_entries]
    ON [dbo].[RoutingRuleItemBase]([RoutingRuleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RoutingRuleItemBase]([RoutingRuleItemId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_AssignObjectIdName]
    ON [dbo].[RoutingRuleItemBase]([AssignObjectIdName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RoutedQueueId]
    ON [dbo].[RoutingRuleItemBase]([RoutedQueueId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8C57F3F403C247A79D9C844C5C28E011]
    ON [dbo].[RoutingRuleItemBase]([RoutingRuleItemId] ASC)
    INCLUDE([Name], [RoutedQueueId], [AssignObjectId], [AssignObjectIdYomiName], [AssignObjectIdName], [AssignObjectIdType], [RoutingRuleId], [SequenceNumber], [ConditionXml], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_8C57F3F403C247A79D9C844C5C28E011]
    ON [dbo].[RoutingRuleItemBase]([RoutingRuleItemId] ASC)
    INCLUDE([Name], [AssignObjectIdName], [ConditionXml]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ConditionXml]
    ON [dbo].[RoutingRuleItemBase]([ConditionXml_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

