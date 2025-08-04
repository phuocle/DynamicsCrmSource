CREATE TABLE [dbo].[CalendarRuleBase] (
    [IsVaried]               BIT              NULL,
    [Rank]                   INT              NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [CalendarRuleId]         UNIQUEIDENTIFIER NOT NULL,
    [Effort]                 FLOAT (53)       NULL,
    [EndTime]                DATETIME         NULL,
    [TimeCode]               INT              NULL,
    [StartTime]              DATETIME         NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [Offset]                 INT              NULL,
    [IsSimple]               BIT              NULL,
    [Name]                   NVARCHAR (160)   NULL,
    [TimeZoneCode]           INT              NULL,
    [IsSelected]             BIT              NULL,
    [ExtentCode]             INT              NULL,
    [EffectiveIntervalEnd]   DATETIME         NULL,
    [ModifiedOn]             DATETIME         NULL,
    [CalendarId]             UNIQUEIDENTIFIER NOT NULL,
    [InnerCalendarId]        UNIQUEIDENTIFIER NULL,
    [Pattern]                NVARCHAR (256)   NULL,
    [GroupDesignator]        NVARCHAR (36)    NULL,
    [IsModified]             BIT              NULL,
    [SubCode]                INT              NULL,
    [Duration]               INT              NULL,
    [EffectiveIntervalStart] DATETIME         NULL,
    [ServiceId]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_CalendarRule] PRIMARY KEY CLUSTERED ([CalendarRuleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [calendar_calendar_rules] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION,
    CONSTRAINT [inner_calendar_calendar_rules] FOREIGN KEY ([InnerCalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION,
    CONSTRAINT [service_calendar_rules] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CalendarRuleBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_calendar_rules]
    ON [dbo].[CalendarRuleBase]([ServiceId] ASC) WHERE ([ServiceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_inner_calendar_calendar_rules]
    ON [dbo].[CalendarRuleBase]([InnerCalendarId] ASC) WHERE ([InnerCalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_calendar_calendar_rules]
    ON [dbo].[CalendarRuleBase]([CalendarId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CalendarRuleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[CalendarRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);

