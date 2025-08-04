CREATE TABLE [dbo].[msdyn_autocapturesettingsBase] (
    [msdyn_autocapturesettingsId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_msdyn_autocapturesettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [statecode]                       INT              NOT NULL,
    [statuscode]                      INT              NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [msdyn_name]                      NVARCHAR (100)   NULL,
    [msdyn_autocapture]               BIT              NULL,
    [msdyn_autocaptureV1]             BIT              NULL,
    [msdyn_automaticactivityupdate]   BIT              NULL,
    [msdyn_calendar]                  BIT              NULL,
    [msdyn_defaultassociation]        NVARCHAR (200)   NULL,
    [msdyn_emails]                    BIT              NULL,
    [msdyn_contacts]                  BIT              NULL,
    [msdyn_meetings]                  BIT              NULL,
    [msdyn_organizationid]            NVARCHAR (200)   NULL,
    [msdyn_UserId]                    NVARCHAR (200)   NULL,
    [msdyn_V1TermsandConditionsCount] NVARCHAR (200)   NULL,
    [msdyn_V2TermsandConditionsCount] NVARCHAR (200)   NULL,
    [msdyn_DontShowSettingStatus]     NVARCHAR (200)   NULL,
    [msdyn_settingsuiaction]          NVARCHAR (200)   NULL,
    CONSTRAINT [PK_msdyn_autocapturesettingsBase] PRIMARY KEY CLUSTERED ([msdyn_autocapturesettingsId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_autocapturesettings] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_autocapturesettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_autocapturesettingsBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_autocapturesettingss]
    ON [dbo].[msdyn_autocapturesettingsBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_autocapturesettingsBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_autocapturesettingsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_autocapturesettingsBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_765E4DBE844B4FC79394E8C3D793B4FF]
    ON [dbo].[msdyn_autocapturesettingsBase]([msdyn_autocapturesettingsId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_765E4DBE844B4FC79394E8C3D793B4FF]
    ON [dbo].[msdyn_autocapturesettingsBase]([msdyn_name] ASC, [msdyn_autocapturesettingsId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_765E4DBE844B4FC79394E8C3D793B4FF]
    ON [dbo].[msdyn_autocapturesettingsBase]([msdyn_autocapturesettingsId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

