CREATE TABLE [dbo].[GoalBase]
(
[CreatedOn] [datetime] NULL,
[ComputedTargetAsOfTodayMoney] [money] NULL,
[LastRolledupDate] [datetime] NULL,
[RollUpQueryInprogressDecimalId] [uniqueidentifier] NULL,
[RollupErrorCode] [int] NULL,
[GoalStartDate] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ComputedTargetAsOfTodayInteger] [int] NULL,
[RollUpQueryCustomDecimalId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[TargetInteger] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[InProgressInteger] [int] NULL,
[GoalEndDate] [datetime] NULL,
[StatusCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[FiscalPeriod] [int] NULL,
[ConsiderOnlyGoalOwnersRecords] [bit] NOT NULL CONSTRAINT [DF_GoalBase_ConsiderOnlyGoalOwnersRecords] DEFAULT ((1)),
[Depth] [int] NULL,
[InProgressDecimal] [decimal] (23, 10) NULL,
[Percentage] [decimal] (23, 10) NULL,
[StretchTargetString] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[RollUpQueryInprogressMoneyId] [uniqueidentifier] NULL,
[RollupQueryActualIntegerId] [uniqueidentifier] NULL,
[Title] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[RollupOnlyFromChildGoals] [bit] NOT NULL CONSTRAINT [DF_GoalBase_RollupOnlyFromChildGoals] DEFAULT ((0)),
[TreeId] [uniqueidentifier] NULL,
[StretchTargetDecimal] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[GoalWithErrorId] [uniqueidentifier] NULL,
[ActualMoney] [money] NULL,
[FiscalYear] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[RollUpQueryCustomMoneyId] [uniqueidentifier] NULL,
[CustomRollupFieldInteger] [int] NULL,
[RollUpQueryInprogressIntegerId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[RollUpQueryCustomIntegerId] [uniqueidentifier] NULL,
[ActualDecimal] [decimal] (23, 10) NULL,
[IsOverridden] [bit] NULL,
[ActualString] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[TargetString] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsOverride] [bit] NULL,
[CustomRollupFieldDecimal] [decimal] (23, 10) NULL,
[RollUpQueryActualMoneyId] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[IsFiscalPeriodGoal] [bit] NULL,
[RollUpQueryActualDecimalId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ComputedTargetAsOfTodayDecimal] [decimal] (23, 10) NULL,
[TargetDecimal] [decimal] (23, 10) NULL,
[StretchTargetMoney] [money] NULL,
[InProgressString] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TargetMoney] [money] NULL,
[MetricId] [uniqueidentifier] NULL,
[InProgressMoney] [money] NULL,
[GoalOwnerId] [uniqueidentifier] NULL,
[CustomRollupFieldString] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[GoalId] [uniqueidentifier] NOT NULL,
[ComputedTargetAsOfTodayPercentageAchieved] [decimal] (23, 10) NULL,
[CustomRollupFieldMoney] [money] NULL,
[ParentGoalId] [uniqueidentifier] NULL,
[ActualInteger] [int] NULL,
[StretchTargetInteger] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_GoalBase_OwnerIdType] DEFAULT ((8)),
[GoalOwnerIdType] [int] NULL,
[GoalOwnerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomRollupFieldMoney_Base] [money] NULL,
[ActualMoney_Base] [money] NULL,
[TargetMoney_Base] [money] NULL,
[StretchTargetMoney_Base] [money] NULL,
[InProgressMoney_Base] [money] NULL,
[ComputedTargetAsOfTodayMoney_Base] [money] NULL,
[GoalOwnerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [PK_GoalBase] PRIMARY KEY CLUSTERED  ([GoalId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_systemuser_goal_goalowner] ON [dbo].[GoalBase] ([GoalOwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_goal_rolluperror_goal] ON [dbo].[GoalBase] ([GoalWithErrorId]) WHERE ([GoalWithErrorId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_metric_goal] ON [dbo].[GoalBase] ([MetricId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[GoalBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_goal] ON [dbo].[GoalBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_goal_parent_goal] ON [dbo].[GoalBase] ([ParentGoalId]) WHERE ([ParentGoalId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[GoalBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title] ON [dbo].[GoalBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[GoalBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [business_unit_goal] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_parent_goal] FOREIGN KEY ([ParentGoalId]) REFERENCES [dbo].[GoalBase] ([GoalId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rolluperror_goal] FOREIGN KEY ([GoalWithErrorId]) REFERENCES [dbo].[GoalBase] ([GoalId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_actualdecimal] FOREIGN KEY ([RollUpQueryActualDecimalId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_actualmoney] FOREIGN KEY ([RollUpQueryActualMoneyId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_customdecimal] FOREIGN KEY ([RollUpQueryCustomDecimalId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_customint] FOREIGN KEY ([RollUpQueryCustomIntegerId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_custommoney] FOREIGN KEY ([RollUpQueryCustomMoneyId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_inprogressdecimal] FOREIGN KEY ([RollUpQueryInprogressDecimalId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_inprogressint] FOREIGN KEY ([RollUpQueryInprogressIntegerId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goal_rollupquery_inprogressmoney] FOREIGN KEY ([RollUpQueryInprogressMoneyId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [goalrollupquery_actualint] FOREIGN KEY ([RollupQueryActualIntegerId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [metric_goal] FOREIGN KEY ([MetricId]) REFERENCES [dbo].[MetricBase] ([MetricId])
GO
ALTER TABLE [dbo].[GoalBase] ADD CONSTRAINT [owner_goal] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
