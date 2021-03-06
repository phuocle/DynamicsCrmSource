USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CalendarBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CalendarBase](
	[ModifiedBy] [uniqueidentifier] NULL,
	[CalendarId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[Name] [nvarchar](160) NULL,
	[BusinessUnitId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[PrimaryUserId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[IsShared] [bit] NOT NULL CONSTRAINT [DF_CalendarBase_IsShared]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Type] [int] NOT NULL CONSTRAINT [DF_CalendarBase_Type]  DEFAULT ((0)),
	[HolidayScheduleCalendarId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Calendar] PRIMARY KEY CLUSTERED 
(
	[CalendarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[CalendarBase] ([ModifiedBy], [CalendarId], [Description], [CreatedOn], [Name], [BusinessUnitId], [ModifiedOn], [CreatedBy], [PrimaryUserId], [OrganizationId], [IsShared], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Type], [HolidayScheduleCalendarId]) VALUES (N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'e3f5ecca-f31d-e711-80d3-00155d00662d', N'Calendar for Business Closure', NULL, N'Business Closure Calendar', N'c6acfcbe-f31d-e711-80d3-00155d00662d', NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', 1, NULL, NULL, 0, NULL)
INSERT [dbo].[CalendarBase] ([ModifiedBy], [CalendarId], [Description], [CreatedOn], [Name], [BusinessUnitId], [ModifiedOn], [CreatedBy], [PrimaryUserId], [OrganizationId], [IsShared], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Type], [HolidayScheduleCalendarId]) VALUES (N'00000000-0000-0000-0000-000000000000', N'c1d6e0f2-9abb-4e13-b55f-56da997e43b9', NULL, CAST(N'2017-04-10 13:44:20.250' AS DateTime), NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:20.250' AS DateTime), N'00000000-0000-0000-0000-000000000000', N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d', 0, NULL, NULL, -1, NULL)
INSERT [dbo].[CalendarBase] ([ModifiedBy], [CalendarId], [Description], [CreatedOn], [Name], [BusinessUnitId], [ModifiedOn], [CreatedBy], [PrimaryUserId], [OrganizationId], [IsShared], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Type], [HolidayScheduleCalendarId]) VALUES (N'00000000-0000-0000-0000-000000000000', N'76221ab5-9084-4635-94dc-ceba969a1b3d', NULL, CAST(N'2017-04-10 13:44:20.253' AS DateTime), NULL, N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:20.253' AS DateTime), N'00000000-0000-0000-0000-000000000000', N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d', 0, NULL, NULL, 0, NULL)
/****** Object:  Index [fndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Security] ON [dbo].[CalendarBase]
(
	[BusinessUnitId] ASC
)
WHERE ([BusinessUnitId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CalendarBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CalendarBase]  WITH CHECK ADD  CONSTRAINT [business_unit_calendars] FOREIGN KEY([BusinessUnitId])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CalendarBase] CHECK CONSTRAINT [business_unit_calendars]
GO
ALTER TABLE [dbo].[CalendarBase]  WITH CHECK ADD  CONSTRAINT [calendar_customercalendar_holidaycalendar] FOREIGN KEY([HolidayScheduleCalendarId])
REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
ALTER TABLE [dbo].[CalendarBase] CHECK CONSTRAINT [calendar_customercalendar_holidaycalendar]
GO
