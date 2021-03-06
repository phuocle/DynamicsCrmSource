USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CalendarRuleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CalendarRuleBase](
	[IsVaried] [bit] NULL,
	[Rank] [int] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[CalendarRuleId] [uniqueidentifier] NOT NULL,
	[Effort] [float] NULL,
	[EndTime] [datetime] NULL,
	[TimeCode] [int] NULL,
	[StartTime] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[Offset] [int] NULL,
	[IsSimple] [bit] NULL,
	[Name] [nvarchar](160) NULL,
	[TimeZoneCode] [int] NULL,
	[IsSelected] [bit] NULL,
	[ExtentCode] [int] NULL,
	[EffectiveIntervalEnd] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CalendarId] [uniqueidentifier] NOT NULL,
	[InnerCalendarId] [uniqueidentifier] NULL,
	[Pattern] [nvarchar](256) NULL,
	[GroupDesignator] [nvarchar](36) NULL,
	[IsModified] [bit] NULL,
	[SubCode] [int] NULL,
	[Duration] [int] NULL,
	[EffectiveIntervalStart] [datetime] NULL,
	[ServiceId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_CalendarRule] PRIMARY KEY CLUSTERED 
(
	[CalendarRuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[CalendarRuleBase] ([IsVaried], [Rank], [CreatedOn], [ModifiedBy], [Description], [CalendarRuleId], [Effort], [EndTime], [TimeCode], [StartTime], [CreatedBy], [Offset], [IsSimple], [Name], [TimeZoneCode], [IsSelected], [ExtentCode], [EffectiveIntervalEnd], [ModifiedOn], [CalendarId], [InnerCalendarId], [Pattern], [GroupDesignator], [IsModified], [SubCode], [Duration], [EffectiveIntervalStart], [ServiceId], [ModifiedOnBehalfBy], [CreatedOnBehalfBy]) VALUES (0, 2, CAST(N'2017-04-10 13:44:20.253' AS DateTime), N'00000000-0000-0000-0000-000000000000', NULL, N'13a1b3e1-5773-43c5-a964-171b24cfe215', NULL, NULL, NULL, CAST(N'2000-01-01 00:00:00.000' AS DateTime), N'00000000-0000-0000-0000-000000000000', NULL, NULL, NULL, 205, 1, NULL, NULL, CAST(N'2017-04-10 13:44:20.253' AS DateTime), N'76221ab5-9084-4635-94dc-ceba969a1b3d', N'c1d6e0f2-9abb-4e13-b55f-56da997e43b9', N'FREQ=WEEKLY;INTERVAL=1;BYDAY=SU,MO,TU,WE,TH,FR,SA', N'FC5769FC-4DE9-445d-8F4E-6E9869E60857', NULL, NULL, 1440, NULL, NULL, NULL, NULL)
INSERT [dbo].[CalendarRuleBase] ([IsVaried], [Rank], [CreatedOn], [ModifiedBy], [Description], [CalendarRuleId], [Effort], [EndTime], [TimeCode], [StartTime], [CreatedBy], [Offset], [IsSimple], [Name], [TimeZoneCode], [IsSelected], [ExtentCode], [EffectiveIntervalEnd], [ModifiedOn], [CalendarId], [InnerCalendarId], [Pattern], [GroupDesignator], [IsModified], [SubCode], [Duration], [EffectiveIntervalStart], [ServiceId], [ModifiedOnBehalfBy], [CreatedOnBehalfBy]) VALUES (NULL, 0, CAST(N'2017-04-10 13:44:20.253' AS DateTime), N'00000000-0000-0000-0000-000000000000', NULL, N'8793e13a-5cff-4ef9-872f-49d2fffc15a0', 1, NULL, 0, NULL, N'00000000-0000-0000-0000-000000000000', 0, 1, NULL, -1, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:20.253' AS DateTime), N'c1d6e0f2-9abb-4e13-b55f-56da997e43b9', NULL, NULL, NULL, NULL, 1, 1440, NULL, NULL, NULL, NULL)
/****** Object:  Index [fndx_for_cascaderelationship_inner_calendar_calendar_rules]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_inner_calendar_calendar_rules] ON [dbo].[CalendarRuleBase]
(
	[InnerCalendarId] ASC
)
WHERE ([InnerCalendarId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_service_calendar_rules]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_calendar_rules] ON [dbo].[CalendarRuleBase]
(
	[ServiceId] ASC
)
WHERE ([ServiceId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CalendarRuleBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_calendar_calendar_rules]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_calendar_rules] ON [dbo].[CalendarRuleBase]
(
	[CalendarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CalendarRuleBase]  WITH CHECK ADD  CONSTRAINT [calendar_calendar_rules] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[CalendarRuleBase] CHECK CONSTRAINT [calendar_calendar_rules]
GO
ALTER TABLE [dbo].[CalendarRuleBase]  WITH CHECK ADD  CONSTRAINT [inner_calendar_calendar_rules] FOREIGN KEY([InnerCalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[CalendarRuleBase] CHECK CONSTRAINT [inner_calendar_calendar_rules]
GO
ALTER TABLE [dbo].[CalendarRuleBase]  WITH CHECK ADD  CONSTRAINT [service_calendar_rules] FOREIGN KEY([ServiceId])
REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[CalendarRuleBase] CHECK CONSTRAINT [service_calendar_rules]
GO
