CREATE TABLE [dbo].[RoutingRuleBase] (
    [Name]                      NVARCHAR (100)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [RoutingRuleIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleBase_RoutingRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_RoutingRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [RoutingRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [WorkflowId]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ComponentState]            INT              CONSTRAINT [DF_RoutingRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_RoutingRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_RoutingRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RoutingRule] PRIMARY KEY CLUSTERED ([RoutingRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RoutingRuleBase_RoutingRuleIdUnique] UNIQUE NONCLUSTERED ([RoutingRuleIdUnique] ASC) WITH (FILLFACTOR = 80)
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

