CREATE TABLE [dbo].[msdyn_playbookactivityBase] (
    [msdyn_playbookactivityId]    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_msdyn_playbookactivityBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [msdyn_subject]               NVARCHAR (200)   NULL,
    [msdyn_activityLogicalName]   NVARCHAR (128)   NULL,
    [msdyn_playbooktemplateid]    UNIQUEIDENTIFIER NULL,
    [msdyn_activityType]          INT              NULL,
    [msdyn_playbookactivity_json] NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_msdyn_playbookactivityBase] PRIMARY KEY CLUSTERED ([msdyn_playbookactivityId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_playbookactivity] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_playbooktemplate_msdyn_playbookactivity] FOREIGN KEY ([msdyn_playbooktemplateid]) REFERENCES [dbo].[msdyn_playbooktemplateBase] ([msdyn_playbooktemplateId]),
    CONSTRAINT [owner_msdyn_playbookactivity] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_playbookactivityBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_playbookactivitys]
    ON [dbo].[msdyn_playbookactivityBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_playbookactivityBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_playbookactivityBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_subject]
    ON [dbo].[msdyn_playbookactivityBase]([msdyn_subject] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_playbooktemplate_msdyn_playbookactivity]
    ON [dbo].[msdyn_playbookactivityBase]([msdyn_playbooktemplateid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CA57BD067A824E468A6A4D4798909513]
    ON [dbo].[msdyn_playbookactivityBase]([msdyn_playbookactivityId] ASC)
    INCLUDE([msdyn_subject], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CA57BD067A824E468A6A4D4798909513]
    ON [dbo].[msdyn_playbookactivityBase]([msdyn_playbookactivityId] ASC)
    INCLUDE([msdyn_subject]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_CA57BD067A824E468A6A4D4798909513]
    ON [dbo].[msdyn_playbookactivityBase]([msdyn_subject] ASC, [msdyn_playbookactivityId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

