CREATE TABLE [dbo].[msdyn_CollabGraphResourceBase] (
    [msdyn_CollabGraphResourceId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [msdyn_GraphResourceName]     NVARCHAR (300)   NULL,
    [msdyn_GraphResourceId]       UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_CollabGraphResourceBase] PRIMARY KEY CLUSTERED ([msdyn_CollabGraphResourceId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_CollabGraphResourceBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_CollabGraphResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_GraphResourceName]
    ON [dbo].[msdyn_CollabGraphResourceBase]([msdyn_GraphResourceName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

