CREATE TABLE [dbo].[CalendarRuleBase] (
    [IsVaried]               BIT              NULL,
    [SubCode]                INT              NULL,
    [Rank]                   INT              NOT NULL,
    [Name]                   NVARCHAR (160)   NULL,
    [IsSelected]             BIT              NULL,
    [IsModified]             BIT              NULL,
    [CalendarRuleId]         UNIQUEIDENTIFIER NOT NULL,
    [Pattern]                NVARCHAR (256)   NULL,
    [ModifiedOn]             DATETIME         NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [Duration]               INT              NULL,
    [IsSimple]               BIT              NULL,
    [EffectiveIntervalEnd]   DATETIME         NULL,
    [TimeCode]               INT              NULL,
    [TimeZoneCode]           INT              NULL,
    [ExtentCode]             INT              NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [GroupDesignator]        NVARCHAR (36)    NULL,
    [Offset]                 INT              NULL,
    [Effort]                 FLOAT (53)       NULL,
    [EffectiveIntervalStart] DATETIME         NULL,
    [EndTime]                DATETIME         NULL,
    [InnerCalendarId]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CalendarId]             UNIQUEIDENTIFIER NOT NULL,
    [StartTime]              DATETIME         NULL,
    [ServiceId]              UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_CalendarRule] PRIMARY KEY CLUSTERED ([CalendarRuleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [calendar_calendar_rules] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [inner_calendar_calendar_rules] FOREIGN KEY ([InnerCalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [service_calendar_rules] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CalendarRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CalendarRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CalendarRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_inner_calendar_calendar_rules]
    ON [dbo].[CalendarRuleBase]([InnerCalendarId] ASC) WHERE ([InnerCalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_calendar_rules]
    ON [dbo].[CalendarRuleBase]([CalendarId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_calendar_rules]
    ON [dbo].[CalendarRuleBase]([ServiceId] ASC) WHERE ([ServiceId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[CalendarRuleBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9D03FCDD12A24AC698F7B7B354899FEC]
    ON [dbo].[CalendarRuleBase]([CalendarRuleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9D03FCDD12A24AC698F7B7B354899FEC]
    ON [dbo].[CalendarRuleBase]([CalendarRuleId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9D03FCDD12A24AC698F7B7B354899FEC]
    ON [dbo].[CalendarRuleBase]([Name] ASC, [CalendarRuleId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

