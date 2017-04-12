CREATE TABLE [dbo].[CalendarRuleBase]
(
[IsVaried] [bit] NULL,
[Rank] [int] NOT NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CalendarRuleId] [uniqueidentifier] NOT NULL,
[Effort] [float] NULL,
[EndTime] [datetime] NULL,
[TimeCode] [int] NULL,
[StartTime] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[Offset] [int] NULL,
[IsSimple] [bit] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneCode] [int] NULL,
[IsSelected] [bit] NULL,
[ExtentCode] [int] NULL,
[EffectiveIntervalEnd] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CalendarId] [uniqueidentifier] NOT NULL,
[InnerCalendarId] [uniqueidentifier] NULL,
[Pattern] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[GroupDesignator] [nvarchar] (36) COLLATE Latin1_General_CI_AI NULL,
[IsModified] [bit] NULL,
[SubCode] [int] NULL,
[Duration] [int] NULL,
[EffectiveIntervalStart] [datetime] NULL,
[ServiceId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CalendarRuleBase] ADD CONSTRAINT [cndx_PrimaryKey_CalendarRule] PRIMARY KEY CLUSTERED  ([CalendarRuleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_calendar_rules] ON [dbo].[CalendarRuleBase] ([CalendarId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_inner_calendar_calendar_rules] ON [dbo].[CalendarRuleBase] ([InnerCalendarId]) WHERE ([InnerCalendarId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[CalendarRuleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_calendar_rules] ON [dbo].[CalendarRuleBase] ([ServiceId]) WHERE ([ServiceId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CalendarRuleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CalendarRuleBase] ADD CONSTRAINT [calendar_calendar_rules] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[CalendarRuleBase] ADD CONSTRAINT [inner_calendar_calendar_rules] FOREIGN KEY ([InnerCalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[CalendarRuleBase] ADD CONSTRAINT [service_calendar_rules] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
