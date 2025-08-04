CREATE TABLE [dbo].[CalendarBase] (
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CalendarId]                UNIQUEIDENTIFIER NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [PrimaryUserId]             UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [IsShared]                  BIT              CONSTRAINT [DF_CalendarBase_IsShared] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [HolidayScheduleCalendarId] UNIQUEIDENTIFIER NULL,
    [Type]                      INT              CONSTRAINT [DF_CalendarBase_Type] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Calendar] PRIMARY KEY CLUSTERED ([CalendarId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_calendars] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [calendar_customercalendar_holidaycalendar] FOREIGN KEY ([HolidayScheduleCalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CalendarBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CalendarBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Security]
    ON [dbo].[CalendarBase]([BusinessUnitId] ASC) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[CalendarBase]([Name] ASC) WITH (FILLFACTOR = 80);

