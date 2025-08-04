CREATE TABLE [dbo].[RecurrenceRuleBase] (
    [Interval]              INT              CONSTRAINT [DF_RecurrenceRuleBase_Interval] DEFAULT ((1)) NULL,
    [OwningBusinessUnit]    UNIQUEIDENTIFIER NULL,
    [StartTime]             DATETIME         NULL,
    [EffectiveEndDate]      DATETIME         NULL,
    [DaysOfWeekMask]        INT              NULL,
    [IsWeekDayPattern]      BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsWeekDayPattern] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [PatternStartDate]      DATETIME         NULL,
    [IsNthYearly]           BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsNthYearly] DEFAULT ((0)) NOT NULL,
    [IsNthMonthly]          BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsNthMonthly] DEFAULT ((0)) NOT NULL,
    [PatternEndType]        INT              CONSTRAINT [DF_RecurrenceRuleBase_PatternEndType] DEFAULT ((2)) NOT NULL,
    [EndTime]               DATETIME         NULL,
    [RuleId]                UNIQUEIDENTIFIER NOT NULL,
    [FirstDayOfWeek]        INT              NULL,
    [OwnerId]               UNIQUEIDENTIFIER CONSTRAINT [DF_RecurrenceRuleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [PatternEndDate]        DATETIME         NULL,
    [RecurrencePatternType] INT              CONSTRAINT [DF_RecurrenceRuleBase_RecurrencePatternType] DEFAULT ((0)) NOT NULL,
    [Duration]              INT              NULL,
    [EffectiveStartDate]    DATETIME         NULL,
    [Occurrences]           INT              NULL,
    [IsRegenerate]          BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsRegenerate] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [MonthOfYear]           INT              NULL,
    [CreatedOn]             DATETIME         NULL,
    [Instance]              INT              NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ObjectId]              UNIQUEIDENTIFIER NULL,
    [DayOfMonth]            INT              NULL,
    [ObjectTypeCode]        INT              NULL,
    [OwnerIdType]           INT              CONSTRAINT [DF_RecurrenceRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RecurrenceRule] PRIMARY KEY CLUSTERED ([RuleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activity_pointer_recurrencerule] FOREIGN KEY ([ObjectId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]),
    CONSTRAINT [owner_recurrencerules] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[RecurrenceRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RecurrenceRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_recurrencerule]
    ON [dbo].[RecurrenceRuleBase]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RecurrenceRuleCore]
    ON [dbo].[RecurrenceRuleBase]([ObjectId] ASC, [PatternStartDate] ASC, [RecurrencePatternType] ASC)
    INCLUDE([ObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_recurrencerule]
    ON [dbo].[RecurrenceRuleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);

