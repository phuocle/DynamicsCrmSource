CREATE TABLE [dbo].[RoutingRuleBase] (
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [RoutingRuleIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleBase_RoutingRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_RoutingRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [RoutingRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [WorkflowId]                UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [ComponentState]            INT              CONSTRAINT [DF_RoutingRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_RoutingRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_RoutingRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RoutingRule] PRIMARY KEY CLUSTERED ([RoutingRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RoutingRuleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[RoutingRuleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[RoutingRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);

