CREATE TABLE [dbo].[GoalBase] (
    [CreatedOn]                                 DATETIME         NULL,
    [ComputedTargetAsOfTodayMoney]              MONEY            NULL,
    [LastRolledupDate]                          DATETIME         NULL,
    [GoalWithErrorId]                           UNIQUEIDENTIFIER NULL,
    [FiscalYear]                                INT              NULL,
    [ActualMoney]                               MONEY            NULL,
    [EntityImageId]                             UNIQUEIDENTIFIER NULL,
    [RollupErrorCode]                           INT              NULL,
    [GoalStartDate]                             DATETIME         NULL,
    [CreatedBy]                                 UNIQUEIDENTIFIER NULL,
    [StateCode]                                 INT              NOT NULL,
    [ModifiedBy]                                UNIQUEIDENTIFIER NULL,
    [ComputedTargetAsOfTodayInteger]            INT              NULL,
    [RollUpQueryCustomDecimalId]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                                INT              NULL,
    [ModifiedOn]                                DATETIME         NULL,
    [TargetInteger]                             INT              NULL,
    [CreatedOnBehalfBy]                         UNIQUEIDENTIFIER NULL,
    [InProgressInteger]                         INT              NULL,
    [ExchangeRate]                              DECIMAL (23, 10) NULL,
    [FiscalPeriod]                              INT              NULL,
    [UTCConversionTimeZoneCode]                 INT              NULL,
    [ConsiderOnlyGoalOwnersRecords]             BIT              CONSTRAINT [DF_GoalBase_ConsiderOnlyGoalOwnersRecords] DEFAULT ((1)) NOT NULL,
    [Depth]                                     INT              NULL,
    [RollUpQueryInprogressDecimalId]            UNIQUEIDENTIFIER NULL,
    [InProgressDecimal]                         DECIMAL (23, 10) NULL,
    [Percentage]                                DECIMAL (23, 10) NULL,
    [OwnerId]                                   UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]                      INT              NULL,
    [RollupQueryActualIntegerId]                UNIQUEIDENTIFIER NULL,
    [Title]                                     NVARCHAR (100)   NULL,
    [IsOverride]                                BIT              NULL,
    [RollupOnlyFromChildGoals]                  BIT              CONSTRAINT [DF_GoalBase_RollupOnlyFromChildGoals] DEFAULT ((0)) NOT NULL,
    [StretchTargetDecimal]                      DECIMAL (23, 10) NULL,
    [ParentGoalId]                              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                        UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]                     UNIQUEIDENTIFIER NULL,
    [ComputedTargetAsOfTodayPercentageAchieved] DECIMAL (23, 10) NULL,
    [RollUpQueryCustomMoneyId]                  UNIQUEIDENTIFIER NULL,
    [ComputedTargetAsOfTodayDecimal]            DECIMAL (23, 10) NULL,
    [CustomRollupFieldInteger]                  INT              NULL,
    [RollUpQueryInprogressIntegerId]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]                             ROWVERSION       NULL,
    [RollUpQueryCustomIntegerId]                UNIQUEIDENTIFIER NULL,
    [RollUpQueryInprogressMoneyId]              UNIQUEIDENTIFIER NULL,
    [GoalEndDate]                               DATETIME         NULL,
    [StretchTargetString]                       NVARCHAR (100)   NULL,
    [IsOverridden]                              BIT              NULL,
    [ActualString]                              NVARCHAR (100)   NULL,
    [TimeZoneRuleVersionNumber]                 INT              NULL,
    [CustomRollupFieldDecimal]                  DECIMAL (23, 10) NULL,
    [RollUpQueryActualMoneyId]                  UNIQUEIDENTIFIER NULL,
    [IsFiscalPeriodGoal]                        BIT              NULL,
    [RollUpQueryActualDecimalId]                UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]                       DATETIME         NULL,
    [TargetDecimal]                             DECIMAL (23, 10) NULL,
    [ActualDecimal]                             DECIMAL (23, 10) NULL,
    [StretchTargetMoney]                        MONEY            NULL,
    [InProgressString]                          NVARCHAR (100)   NULL,
    [TargetMoney]                               MONEY            NULL,
    [MetricId]                                  UNIQUEIDENTIFIER NULL,
    [InProgressMoney]                           MONEY            NULL,
    [TargetString]                              NVARCHAR (100)   NULL,
    [GoalOwnerId]                               UNIQUEIDENTIFIER NULL,
    [CustomRollupFieldString]                   NVARCHAR (100)   NULL,
    [GoalId]                                    UNIQUEIDENTIFIER NOT NULL,
    [TreeId]                                    UNIQUEIDENTIFIER NULL,
    [CustomRollupFieldMoney]                    MONEY            NULL,
    [ActualInteger]                             INT              NULL,
    [StretchTargetInteger]                      INT              NULL,
    [OwningBusinessUnit]                        UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                               INT              CONSTRAINT [DF_GoalBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [GoalOwnerIdType]                           INT              NULL,
    [GoalOwnerIdName]                           NVARCHAR (4000)  NULL,
    [CustomRollupFieldMoney_Base]               MONEY            NULL,
    [InProgressMoney_Base]                      MONEY            NULL,
    [StretchTargetMoney_Base]                   MONEY            NULL,
    [ActualMoney_Base]                          MONEY            NULL,
    [TargetMoney_Base]                          MONEY            NULL,
    [ComputedTargetAsOfTodayMoney_Base]         MONEY            NULL,
    [GoalOwnerIdYomiName]                       NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_GoalBase] PRIMARY KEY CLUSTERED ([GoalId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_goal] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [goal_parent_goal] FOREIGN KEY ([ParentGoalId]) REFERENCES [dbo].[GoalBase] ([GoalId]),
    CONSTRAINT [goal_rolluperror_goal] FOREIGN KEY ([GoalWithErrorId]) REFERENCES [dbo].[GoalBase] ([GoalId]),
    CONSTRAINT [goal_rollupquery_actualdecimal] FOREIGN KEY ([RollUpQueryActualDecimalId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_actualmoney] FOREIGN KEY ([RollUpQueryActualMoneyId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_customdecimal] FOREIGN KEY ([RollUpQueryCustomDecimalId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_customint] FOREIGN KEY ([RollUpQueryCustomIntegerId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_custommoney] FOREIGN KEY ([RollUpQueryCustomMoneyId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_inprogressdecimal] FOREIGN KEY ([RollUpQueryInprogressDecimalId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_inprogressint] FOREIGN KEY ([RollUpQueryInprogressIntegerId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goal_rollupquery_inprogressmoney] FOREIGN KEY ([RollUpQueryInprogressMoneyId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [goalrollupquery_actualint] FOREIGN KEY ([RollupQueryActualIntegerId]) REFERENCES [dbo].[GoalRollupQueryBase] ([GoalRollupQueryId]),
    CONSTRAINT [metric_goal] FOREIGN KEY ([MetricId]) REFERENCES [dbo].[MetricBase] ([MetricId]),
    CONSTRAINT [owner_goal] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[GoalBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[GoalBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[GoalBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[GoalBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_metric_goal]
    ON [dbo].[GoalBase]([MetricId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_systemuser_goal_goalowner]
    ON [dbo].[GoalBase]([GoalOwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_goal_parent_goal]
    ON [dbo].[GoalBase]([ParentGoalId] ASC) WHERE ([ParentGoalId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_goal]
    ON [dbo].[GoalBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_goal_rolluperror_goal]
    ON [dbo].[GoalBase]([GoalWithErrorId] ASC) WHERE ([GoalWithErrorId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_795DD5ACE68C49CF8DE294C419135198]
    ON [dbo].[GoalBase]([GoalId] ASC)
    INCLUDE([Title], [GoalOwnerId], [GoalOwnerIdYomiName], [GoalOwnerIdName], [GoalOwnerIdType], [FiscalPeriod], [FiscalYear], [TargetString], [Percentage], [ActualString], [InProgressString], [MetricId], [ParentGoalId], [GoalStartDate], [GoalEndDate], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[GoalBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_795DD5ACE68C49CF8DE294C419135198]
    ON [dbo].[GoalBase]([GoalId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

