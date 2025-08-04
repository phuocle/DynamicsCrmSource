CREATE TABLE [dbo].[ServiceBase] (
    [Name]                 NVARCHAR (160)   NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [ServiceId]            UNIQUEIDENTIFIER NOT NULL,
    [ResourceSpecId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [AnchorOffset]         INT              NULL,
    [ModifiedOn]           DATETIME         NULL,
    [Duration]             INT              NOT NULL,
    [IsSchedulable]        BIT              CONSTRAINT [DF_ServiceBase_IsSchedulable] DEFAULT ((1)) NOT NULL,
    [StrategyId]           UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceBase_StrategyId] DEFAULT ('07F7DC72-1671-452D-812C-7172D3CA881F') NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [InitialStatusCode]    INT              NOT NULL,
    [CalendarId]           UNIQUEIDENTIFIER NULL,
    [ShowResources]        BIT              CONSTRAINT [DF_ServiceBase_ShowResources] DEFAULT ((1)) NULL,
    [Granularity]          NVARCHAR (100)   NOT NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [CreatedOn]            DATETIME         NULL,
    [IsVisible]            BIT              CONSTRAINT [DF_ServiceBase_IsVisible] DEFAULT ((1)) NULL,
    [ImportSequenceNumber] INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Service] PRIMARY KEY CLUSTERED ([ServiceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [calendar_services] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION,
    CONSTRAINT [resource_spec_services] FOREIGN KEY ([ResourceSpecId]) REFERENCES [dbo].[ResourceSpecBase] ([ResourceSpecId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ServiceBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_resource_spec_services]
    ON [dbo].[ServiceBase]([ResourceSpecId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsSchedulableNameDuration]
    ON [dbo].[ServiceBase]([Name] ASC, [IsSchedulable] ASC, [Duration] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_services]
    ON [dbo].[ServiceBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ServiceBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugin_type_service]
    ON [dbo].[ServiceBase]([StrategyId] ASC) WITH (FILLFACTOR = 80);

