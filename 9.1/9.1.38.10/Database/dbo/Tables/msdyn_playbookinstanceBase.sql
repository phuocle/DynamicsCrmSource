CREATE TABLE [dbo].[msdyn_playbookinstanceBase] (
    [msdyn_playbookinstanceId]      UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OwnerId]                       UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                   INT              CONSTRAINT [DF_msdyn_playbookinstanceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]            UNIQUEIDENTIFIER NULL,
    [statecode]                     INT              NOT NULL,
    [statuscode]                    INT              NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ImportSequenceNumber]          INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TimeZoneRuleVersionNumber]     INT              NULL,
    [UTCConversionTimeZoneCode]     INT              NULL,
    [msdyn_name]                    NVARCHAR (128)   NULL,
    [msdyn_estimatedclose]          DATETIME         NULL,
    [msdyn_evaluateactivityclosure] BIT              NULL,
    [msdyn_activitiesassociated]    INT              NULL,
    [msdyn_activitiesclosed]        INT              NULL,
    [Regarding]                     UNIQUEIDENTIFIER NULL,
    [msdyn_categoryid]              UNIQUEIDENTIFIER NULL,
    [msdyn_playbooktemplateid]      UNIQUEIDENTIFIER NULL,
    [msdyn_trackprogress]           BIT              NULL,
    [RegardingObjectTypeCode]       INT              NULL,
    [RegardingIdName]               NVARCHAR (4000)  NULL,
    [RegardingYomiName]             NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_msdyn_playbookinstanceBase] PRIMARY KEY CLUSTERED ([msdyn_playbookinstanceId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_playbookinstance] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_playbookcategory_msdyn_playbookinstance] FOREIGN KEY ([msdyn_categoryid]) REFERENCES [dbo].[msdyn_playbookcategoryBase] ([msdyn_playbookcategoryId]),
    CONSTRAINT [msdyn_playbooktemplate_msdyn_playbookinstance] FOREIGN KEY ([msdyn_playbooktemplateid]) REFERENCES [dbo].[msdyn_playbooktemplateBase] ([msdyn_playbooktemplateId]),
    CONSTRAINT [owner_msdyn_playbookinstance] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_playbookinstanceBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_playbookinstances]
    ON [dbo].[msdyn_playbookinstanceBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_playbookinstanceBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_playbookinstanceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_playbookinstanceBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E4B7E00A7B7A4EC797F69882B78611A5]
    ON [dbo].[msdyn_playbookinstanceBase]([msdyn_playbookinstanceId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E4B7E00A7B7A4EC797F69882B78611A5]
    ON [dbo].[msdyn_playbookinstanceBase]([msdyn_playbookinstanceId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_E4B7E00A7B7A4EC797F69882B78611A5]
    ON [dbo].[msdyn_playbookinstanceBase]([msdyn_name] ASC, [msdyn_playbookinstanceId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

