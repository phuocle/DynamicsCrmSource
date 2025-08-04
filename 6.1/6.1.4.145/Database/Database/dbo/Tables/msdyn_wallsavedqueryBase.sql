CREATE TABLE [dbo].[msdyn_wallsavedqueryBase] (
    [msdyn_wallsavedqueryId]    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_entityname]          NVARCHAR (100)   NULL,
    [msdyn_entitydisplayname]   NVARCHAR (100)   NULL,
    [msdyn_IsVirtual]           BIT              NULL,
    [msdyn_IsVisible]           BIT              NULL,
    [msdyn_isvisiblebit]        INT              NULL,
    [msdyn_otc]                 INT              NULL,
    [msdyn_SavedQueryId]        NVARCHAR (50)    NULL,
    [msdyn_savedqueryname]      NVARCHAR (100)   NULL,
    [msdyn_postconfigurationid] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_wallsavedqueryBase] PRIMARY KEY CLUSTERED ([msdyn_wallsavedqueryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [msdyn_postconfig_wallsavedquery] FOREIGN KEY ([msdyn_postconfigurationid]) REFERENCES [dbo].[msdyn_PostConfigBase] ([msdyn_PostConfigId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_wallsavedqueryBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_wallsavedqueryBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_wallsavedqueryBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_entityname]
    ON [dbo].[msdyn_wallsavedqueryBase]([msdyn_entityname] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_postconfig_wallsavedquery]
    ON [dbo].[msdyn_wallsavedqueryBase]([msdyn_postconfigurationid] ASC) WHERE ([msdyn_postconfigurationid] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_savedqueryname]
    ON [dbo].[msdyn_wallsavedqueryBase]([msdyn_savedqueryname] ASC) WITH (FILLFACTOR = 80);

