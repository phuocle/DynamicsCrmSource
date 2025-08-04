CREATE TABLE [dbo].[holidaywrapperBase] (
    [holidaywrapperId]          UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [name]                      NVARCHAR (100)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CalendarId]                NVARCHAR (100)   NULL,
    [Duration]                  NVARCHAR (100)   NULL,
    [EndTime]                   DATETIME         NULL,
    [SelectedYear]              INT              NULL,
    [StartTime]                 DATETIME         NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    CONSTRAINT [PK_holidaywrapperBase] PRIMARY KEY CLUSTERED ([holidaywrapperId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[holidaywrapperBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[holidaywrapperBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

