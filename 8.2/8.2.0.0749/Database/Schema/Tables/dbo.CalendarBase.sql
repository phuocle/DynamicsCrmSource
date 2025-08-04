CREATE TABLE [dbo].[CalendarBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[CalendarId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[BusinessUnitId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[PrimaryUserId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsShared] [bit] NOT NULL CONSTRAINT [DF_CalendarBase_IsShared] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Type] [int] NOT NULL CONSTRAINT [DF_CalendarBase_Type] DEFAULT ((0)),
[HolidayScheduleCalendarId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CalendarBase] ADD CONSTRAINT [cndx_PrimaryKey_Calendar] PRIMARY KEY CLUSTERED  ([CalendarId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Security] ON [dbo].[CalendarBase] ([BusinessUnitId]) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[CalendarBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CalendarBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CalendarBase] ADD CONSTRAINT [business_unit_calendars] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CalendarBase] ADD CONSTRAINT [calendar_customercalendar_holidaycalendar] FOREIGN KEY ([HolidayScheduleCalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
GO
