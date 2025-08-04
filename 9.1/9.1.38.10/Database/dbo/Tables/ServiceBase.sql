CREATE TABLE [dbo].[ServiceBase] (
    [ServiceId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [AnchorOffset]              INT              NULL,
    [CalendarId]                UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [Duration]                  INT              NOT NULL,
    [Granularity]               NVARCHAR (100)   NOT NULL,
    [InitialStatusCode]         INT              NOT NULL,
    [IsSchedulable]             BIT              CONSTRAINT [DF_ServiceBase_IsSchedulable] DEFAULT ((1)) NOT NULL,
    [IsVisible]                 BIT              CONSTRAINT [DF_ServiceBase_IsVisible] DEFAULT ((1)) NULL,
    [ResourceSpecId]            UNIQUEIDENTIFIER NOT NULL,
    [ShowResources]             BIT              CONSTRAINT [DF_ServiceBase_ShowResources] DEFAULT ((1)) NULL,
    [StrategyId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceBase_StrategyId] DEFAULT ('07F7DC72-1671-452D-812C-7172D3CA881F') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Service] PRIMARY KEY CLUSTERED ([ServiceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [calendar_services] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [resource_spec_services] FOREIGN KEY ([ResourceSpecId]) REFERENCES [dbo].[ResourceSpecBase] ([ResourceSpecId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ServiceBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ServiceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ServiceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_IsSchedulableNameDuration]
    ON [dbo].[ServiceBase]([Name] ASC, [IsSchedulable] ASC, [Duration] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_services]
    ON [dbo].[ServiceBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_resource_spec_services]
    ON [dbo].[ServiceBase]([ResourceSpecId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugin_type_service]
    ON [dbo].[ServiceBase]([StrategyId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_NameServiceId]
    ON [dbo].[ServiceBase]([Name] ASC, [ServiceId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_426EFD49594044F58BED27F0272A17D5]
    ON [dbo].[ServiceBase]([ServiceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_426EFD49594044F58BED27F0272A17D5]
    ON [dbo].[ServiceBase]([ServiceId] ASC)
    INCLUDE([Name], [Duration], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_426EFD49594044F58BED27F0272A17D5]
    ON [dbo].[ServiceBase]([Name] ASC, [ServiceId] ASC)
    INCLUDE([Duration], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

