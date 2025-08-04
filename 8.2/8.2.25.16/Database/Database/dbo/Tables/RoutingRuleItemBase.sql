CREATE TABLE [dbo].[RoutingRuleItemBase] (
    [ComponentState]            INT              CONSTRAINT [DF_RoutingRuleItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ConditionXml]              NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [RoutingRuleItemId]         UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [AssignObjectIdModifiedOn]  DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [SequenceNumber]            INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_RoutingRuleItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_RoutingRuleItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [RoutedQueueId]             UNIQUEIDENTIFIER NULL,
    [AssignObjectId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [RoutingRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [RoutingRuleItemIdUnique]   UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleItemBase_RoutingRuleItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [AssignObjectIdType]        INT              NULL,
    [AssignObjectIdName]        NVARCHAR (4000)  NULL,
    [AssignObjectIdYomiName]    NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_RoutingRuleItem] PRIMARY KEY CLUSTERED ([RoutingRuleItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RoutingRuleItem_RoutingRuleItemIdUnique] UNIQUE NONCLUSTERED ([RoutingRuleItemIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_routingrule_entries]
    ON [dbo].[RoutingRuleItemBase]([RoutingRuleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_TitleRoutingRuleItemId]
    ON [dbo].[RoutingRuleItemBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_assignobjectid]
    ON [dbo].[RoutingRuleItemBase]([AssignObjectId] ASC) WITH (FILLFACTOR = 80);

