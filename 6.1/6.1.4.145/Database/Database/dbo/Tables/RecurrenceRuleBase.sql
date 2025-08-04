CREATE TABLE [dbo].[RecurrenceRuleBase] (
    [Interval]              INT              CONSTRAINT [DF_RecurrenceRuleBase_Interval] DEFAULT ((1)) NULL,
    [StartTime]             DATETIME         NULL,
    [OwningBusinessUnit]    UNIQUEIDENTIFIER NULL,
    [OwnerId]               UNIQUEIDENTIFIER CONSTRAINT [DF_RecurrenceRuleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [MonthOfYear]           INT              NULL,
    [RecurrencePatternType] INT              CONSTRAINT [DF_RecurrenceRuleBase_RecurrencePatternType] DEFAULT ((0)) NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [IsNthYearly]           BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsNthYearly] DEFAULT ((0)) NOT NULL,
    [PatternStartDate]      DATETIME         NULL,
    [PatternEndType]        INT              CONSTRAINT [DF_RecurrenceRuleBase_PatternEndType] DEFAULT ((2)) NOT NULL,
    [IsNthMonthly]          BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsNthMonthly] DEFAULT ((0)) NOT NULL,
    [EffectiveEndDate]      DATETIME         NULL,
    [RuleId]                UNIQUEIDENTIFIER NOT NULL,
    [FirstDayOfWeek]        INT              NULL,
    [PatternEndDate]        DATETIME         NULL,
    [EndTime]               DATETIME         NULL,
    [Duration]              INT              NULL,
    [DaysOfWeekMask]        INT              NULL,
    [ModifiedOn]            DATETIME         NULL,
    [IsRegenerate]          BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsRegenerate] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [IsWeekDayPattern]      BIT              CONSTRAINT [DF_RecurrenceRuleBase_IsWeekDayPattern] DEFAULT ((0)) NOT NULL,
    [EffectiveStartDate]    DATETIME         NULL,
    [ObjectId]              UNIQUEIDENTIFIER NULL,
    [Instance]              INT              NULL,
    [DayOfMonth]            INT              NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [Occurrences]           INT              NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]        INT              NULL,
    [OwnerIdType]           INT              CONSTRAINT [DF_RecurrenceRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RecurrenceRule] PRIMARY KEY CLUSTERED ([RuleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [activity_pointer_recurrencerule] FOREIGN KEY ([ObjectId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_recurrencerules] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_RecurrenceRuleCore]
    ON [dbo].[RecurrenceRuleBase]([ObjectId] ASC, [PatternStartDate] ASC, [RecurrencePatternType] ASC)
    INCLUDE([ObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_recurrencerule]
    ON [dbo].[RecurrenceRuleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_recurrencerule]
    ON [dbo].[RecurrenceRuleBase]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

