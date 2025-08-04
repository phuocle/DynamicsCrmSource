CREATE TABLE [dbo].[msdyn_playbooktemplateBase] (
    [msdyn_playbooktemplateId]  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_playbooktemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_name]                NVARCHAR (128)   NULL,
    [msdyn_categoryid]          UNIQUEIDENTIFIER NULL,
    [msdyn_fullentitylist]      NVARCHAR (128)   NULL,
    [msdyn_relatedentitylist]   NVARCHAR (MAX)   NULL,
    [msdyn_Description]         NVARCHAR (MAX)   NULL,
    [msdyn_EstimatedDuration]   INT              NULL,
    [msdyn_trackprogress]       BIT              NULL,
    CONSTRAINT [PK_msdyn_playbooktemplateBase] PRIMARY KEY CLUSTERED ([msdyn_playbooktemplateId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_playbooktemplate] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [category_playbooktemplate] FOREIGN KEY ([msdyn_categoryid]) REFERENCES [dbo].[msdyn_playbookcategoryBase] ([msdyn_playbookcategoryId]),
    CONSTRAINT [owner_msdyn_playbooktemplate] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_playbooktemplateBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_playbooktemplates]
    ON [dbo].[msdyn_playbooktemplateBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_playbooktemplateBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_playbooktemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_playbooktemplateBase]([msdyn_name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_category_playbooktemplate]
    ON [dbo].[msdyn_playbooktemplateBase]([msdyn_categoryid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7A6AA2373032497B92D1CFCE615DC7A8]
    ON [dbo].[msdyn_playbooktemplateBase]([msdyn_name] ASC, [msdyn_playbooktemplateId] ASC)
    INCLUDE([CreatedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7A6AA2373032497B92D1CFCE615DC7A8]
    ON [dbo].[msdyn_playbooktemplateBase]([msdyn_playbooktemplateId] ASC)
    INCLUDE([msdyn_name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7A6AA2373032497B92D1CFCE615DC7A8]
    ON [dbo].[msdyn_playbooktemplateBase]([msdyn_playbooktemplateId] ASC)
    INCLUDE([msdyn_name], [CreatedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

