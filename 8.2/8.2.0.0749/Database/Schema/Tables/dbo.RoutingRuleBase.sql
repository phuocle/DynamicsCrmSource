CREATE TABLE [dbo].[RoutingRuleBase]
(
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoutingRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[RoutingRuleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RoutingRuleBase_RoutingRuleIdUnique] DEFAULT (newid()),
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RoutingRuleBase_IsManaged] DEFAULT ((0)),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[RoutingRuleId] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[WorkflowId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ModifiedOn] [datetime] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RoutingRuleBase_ComponentState] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RoutingRuleBase_OverwriteTime] DEFAULT ((0)),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_RoutingRuleBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_RoutingRule] PRIMARY KEY CLUSTERED  ([RoutingRuleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[RoutingRuleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RoutingRuleBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleBase] ADD CONSTRAINT [UQ_RoutingRuleBase_RoutingRuleIdUnique] UNIQUE NONCLUSTERED  ([RoutingRuleIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[RoutingRuleBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
