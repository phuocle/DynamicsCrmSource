CREATE TABLE [dbo].[RoutingRuleBase] (
    [Name]                      NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [RoutingRuleIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_RoutingRuleBase_RoutingRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_RoutingRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [RoutingRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
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
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[RoutingRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[RoutingRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RoutingRuleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[RoutingRuleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[RoutingRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RoutingRuleBase]([RoutingRuleId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1CD57BF3959A4CE48578754251E96257]
    ON [dbo].[RoutingRuleBase]([RoutingRuleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1CD57BF3959A4CE48578754251E96257]
    ON [dbo].[RoutingRuleBase]([RoutingRuleId] ASC)
    INCLUDE([Name], [StateCode], [OwnerId], [OwnerIdType], [CreatedOn], [ModifiedBy], [ModifiedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_1CD57BF3959A4CE48578754251E96257]
    ON [dbo].[RoutingRuleBase]([Name] ASC, [RoutingRuleId] ASC)
    INCLUDE([StateCode], [OwnerId], [OwnerIdType], [CreatedOn], [ModifiedBy], [ModifiedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

