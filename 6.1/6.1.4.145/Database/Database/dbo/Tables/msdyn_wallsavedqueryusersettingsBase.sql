CREATE TABLE [dbo].[msdyn_wallsavedqueryusersettingsBase] (
    [msdyn_wallsavedqueryusersettingsId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                          DATETIME         NULL,
    [CreatedBy]                          UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                         DATETIME         NULL,
    [ModifiedBy]                         UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerId]                            UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                        INT              CONSTRAINT [DF_msdyn_wallsavedqueryusersettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                 UNIQUEIDENTIFIER NULL,
    [statecode]                          INT              NOT NULL,
    [statuscode]                         INT              NULL,
    [VersionNumber]                      ROWVERSION       NULL,
    [ImportSequenceNumber]               INT              NULL,
    [OverriddenCreatedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber]          INT              NULL,
    [UTCConversionTimeZoneCode]          INT              NULL,
    [msdyn_entityname]                   NVARCHAR (100)   NULL,
    [msdyn_data]                         NVARCHAR (MAX)   NULL,
    [msdyn_default]                      INT              NULL,
    [msdyn_entitydisplayname]            NVARCHAR (100)   NULL,
    [msdyn_includewallinresponse]        BIT              NULL,
    [msdyn_isfollowing]                  BIT              NULL,
    [msdyn_IsVirtual]                    BIT              NULL,
    [msdyn_isvisible]                    BIT              NULL,
    [msdyn_isvisiblebit]                 INT              NULL,
    [msdyn_otc]                          INT              NULL,
    [msdyn_savedqueryname]               NVARCHAR (100)   NULL,
    [msdyn_sortorder]                    INT              NULL,
    [msdyn_type]                         INT              NULL,
    [msdyn_userid]                       UNIQUEIDENTIFIER NULL,
    [msdyn_wallsavedqueryid]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_wallsavedqueryusersettingsBase] PRIMARY KEY CLUSTERED ([msdyn_wallsavedqueryusersettingsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_msdyn_wallsavedqueryusersettings] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [msdyn_systemuser_wallsavedqueryusersettings_userid] FOREIGN KEY ([msdyn_userid]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [msdyn_wallsavedquery_wallsavedqueryusersettings] FOREIGN KEY ([msdyn_wallsavedqueryid]) REFERENCES [dbo].[msdyn_wallsavedqueryBase] ([msdyn_wallsavedqueryId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_msdyn_wallsavedqueryusersettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_wallsavedqueryusersettingsBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_wallsavedqueryusersettingsBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_wallsavedqueryusersettingsBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_entityname]
    ON [dbo].[msdyn_wallsavedqueryusersettingsBase]([msdyn_entityname] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_wallsavedquery_wallsavedqueryusersettings]
    ON [dbo].[msdyn_wallsavedqueryusersettingsBase]([msdyn_wallsavedqueryid] ASC) WHERE ([msdyn_wallsavedqueryid] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_savedqueryname]
    ON [dbo].[msdyn_wallsavedqueryusersettingsBase]([msdyn_savedqueryname] ASC) WITH (FILLFACTOR = 80);

