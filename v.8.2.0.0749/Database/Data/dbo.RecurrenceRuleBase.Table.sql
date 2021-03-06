USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RecurrenceRuleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RecurrenceRuleBase](
	[Interval] [int] NULL,
	[StartTime] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[MonthOfYear] [int] NULL,
	[RecurrencePatternType] [int] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[IsNthYearly] [bit] NOT NULL,
	[PatternStartDate] [datetime] NULL,
	[PatternEndType] [int] NOT NULL,
	[IsNthMonthly] [bit] NOT NULL,
	[EffectiveEndDate] [datetime] NULL,
	[RuleId] [uniqueidentifier] NOT NULL,
	[FirstDayOfWeek] [int] NULL,
	[PatternEndDate] [datetime] NULL,
	[EndTime] [datetime] NULL,
	[Duration] [int] NULL,
	[DaysOfWeekMask] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[IsRegenerate] [bit] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[IsWeekDayPattern] [bit] NOT NULL,
	[EffectiveStartDate] [datetime] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[Instance] [int] NULL,
	[DayOfMonth] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[Occurrences] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_RecurrenceRule] PRIMARY KEY CLUSTERED 
(
	[RuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_recurrencerule]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_recurrencerule] ON [dbo].[RecurrenceRuleBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RecurrenceRuleBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_activity_pointer_recurrencerule]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_activity_pointer_recurrencerule] ON [dbo].[RecurrenceRuleBase]
(
	[ObjectId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RecurrenceRuleCore]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RecurrenceRuleCore] ON [dbo].[RecurrenceRuleBase]
(
	[ObjectId] ASC,
	[PatternStartDate] ASC,
	[RecurrencePatternType] ASC
)
INCLUDE ( 	[ObjectTypeCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_Interval]  DEFAULT ((1)) FOR [Interval]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_RecurrencePatternType]  DEFAULT ((0)) FOR [RecurrencePatternType]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_IsNthYearly]  DEFAULT ((0)) FOR [IsNthYearly]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_PatternEndType]  DEFAULT ((2)) FOR [PatternEndType]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_IsNthMonthly]  DEFAULT ((0)) FOR [IsNthMonthly]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_IsRegenerate]  DEFAULT ((0)) FOR [IsRegenerate]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_IsWeekDayPattern]  DEFAULT ((0)) FOR [IsWeekDayPattern]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] ADD  CONSTRAINT [DF_RecurrenceRuleBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase]  WITH CHECK ADD  CONSTRAINT [activity_pointer_recurrencerule] FOREIGN KEY([ObjectId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] CHECK CONSTRAINT [activity_pointer_recurrencerule]
GO
ALTER TABLE [dbo].[RecurrenceRuleBase]  WITH CHECK ADD  CONSTRAINT [owner_recurrencerules] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[RecurrenceRuleBase] CHECK CONSTRAINT [owner_recurrencerules]
GO
