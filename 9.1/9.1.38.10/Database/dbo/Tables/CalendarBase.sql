CREATE TABLE [dbo].[CalendarBase] (
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [Type]                      INT              CONSTRAINT [DF_CalendarBase_Type] DEFAULT ((0)) NOT NULL,
    [HolidayScheduleCalendarId] UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [PrimaryUserId]             UNIQUEIDENTIFIER NULL,
    [CalendarId]                UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [IsShared]                  BIT              CONSTRAINT [DF_CalendarBase_IsShared] DEFAULT ((0)) NOT NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Calendar] PRIMARY KEY CLUSTERED ([CalendarId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_calendars] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [calendar_customercalendar_holidaycalendar] FOREIGN KEY ([HolidayScheduleCalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CalendarBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CalendarBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Security]
    ON [dbo].[CalendarBase]([BusinessUnitId] ASC) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CalendarBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A3CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CalendarBase]([CalendarId] ASC)
    INCLUDE([Name], [Type], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[CalendarBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A3CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CalendarBase]([Name] ASC, [CalendarId] ASC)
    INCLUDE([Type], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A3CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CalendarBase]([CalendarId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_customercalendar_holidaycalendar]
    ON [dbo].[CalendarBase]([HolidayScheduleCalendarId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

