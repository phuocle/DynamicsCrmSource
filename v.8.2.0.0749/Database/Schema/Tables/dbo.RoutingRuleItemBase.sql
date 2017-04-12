CREATE TABLE [dbo].[RoutingRuleItemBase]
(
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RoutingRuleItemBase_ComponentState] DEFAULT ((0)),
[ConditionXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[RoutingRuleItemId] [uniqueidentifier] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[AssignObjectIdModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SequenceNumber] [int] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoutingRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RoutingRuleItemBase_IsManaged] DEFAULT ((0)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RoutingRuleItemBase_OverwriteTime] DEFAULT ((0)),
[RoutedQueueId] [uniqueidentifier] NULL,
[AssignObjectId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[RoutingRuleId] [uniqueidentifier] NOT NULL,
[RoutingRuleItemIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RoutingRuleItemBase_RoutingRuleItemIdUnique] DEFAULT (newid()),
[UTCConversionTimeZoneCode] [int] NULL,
[AssignObjectIdType] [int] NULL,
[AssignObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[AssignObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD CONSTRAINT [cndx_PrimaryKey_RoutingRuleItem] PRIMARY KEY CLUSTERED  ([RoutingRuleItemId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_assignobjectid] ON [dbo].[RoutingRuleItemBase] ([AssignObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_TitleRoutingRuleItemId] ON [dbo].[RoutingRuleItemBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_routingrule_entries] ON [dbo].[RoutingRuleItemBase] ([RoutingRuleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleItemBase] ADD CONSTRAINT [UQ_RoutingRuleItem_RoutingRuleItemIdUnique] UNIQUE NONCLUSTERED  ([RoutingRuleItemIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
