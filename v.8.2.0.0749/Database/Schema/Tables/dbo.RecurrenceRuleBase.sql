CREATE TABLE [dbo].[RecurrenceRuleBase]
(
[Interval] [int] NULL CONSTRAINT [DF_RecurrenceRuleBase_Interval] DEFAULT ((1)),
[StartTime] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[MonthOfYear] [int] NULL,
[RecurrencePatternType] [int] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_RecurrencePatternType] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[IsNthYearly] [bit] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_IsNthYearly] DEFAULT ((0)),
[PatternStartDate] [datetime] NULL,
[PatternEndType] [int] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_PatternEndType] DEFAULT ((2)),
[IsNthMonthly] [bit] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_IsNthMonthly] DEFAULT ((0)),
[EffectiveEndDate] [datetime] NULL,
[RuleId] [uniqueidentifier] NOT NULL,
[FirstDayOfWeek] [int] NULL,
[PatternEndDate] [datetime] NULL,
[EndTime] [datetime] NULL,
[Duration] [int] NULL,
[DaysOfWeekMask] [int] NULL,
[ModifiedOn] [datetime] NULL,
[IsRegenerate] [bit] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_IsRegenerate] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[IsWeekDayPattern] [bit] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_IsWeekDayPattern] DEFAULT ((0)),
[EffectiveStartDate] [datetime] NULL,
[ObjectId] [uniqueidentifier] NULL,
[Instance] [int] NULL,
[DayOfMonth] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[Occurrences] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_RecurrenceRuleBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_RecurrenceRule] PRIMARY KEY CLUSTERED  ([RuleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_recurrencerule] ON [dbo].[RecurrenceRuleBase] ([ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RecurrenceRuleCore] ON [dbo].[RecurrenceRuleBase] ([ObjectId], [PatternStartDate], [RecurrencePatternType]) INCLUDE ([ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_recurrencerule] ON [dbo].[RecurrenceRuleBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RecurrenceRuleBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD CONSTRAINT [activity_pointer_recurrencerule] FOREIGN KEY ([ObjectId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD CONSTRAINT [owner_recurrencerules] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
