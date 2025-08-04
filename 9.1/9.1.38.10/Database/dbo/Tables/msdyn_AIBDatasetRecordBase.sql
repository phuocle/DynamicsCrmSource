CREATE TABLE [dbo].[msdyn_AIBDatasetRecordBase] (
    [msdyn_AIBDatasetRecordId]  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_AIBDatasetRecordBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_Name]                NVARCHAR (100)   NULL,
    [msdyn_AIBDatasetsId]       UNIQUEIDENTIFIER NULL,
    [msdyn_Data]                NVARCHAR (MAX)   NULL,
    [msdyn_RecordType]          INT              NULL,
    CONSTRAINT [PK_msdyn_AIBDatasetRecordBase] PRIMARY KEY CLUSTERED ([msdyn_AIBDatasetRecordId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aibdatasetrecord] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_AIBDatasetRecord_msdyn_AIBDataset] FOREIGN KEY ([msdyn_AIBDatasetsId]) REFERENCES [dbo].[msdyn_AIBDatasetBase] ([msdyn_AIBDatasetId]),
    CONSTRAINT [owner_msdyn_aibdatasetrecord] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIBDatasetRecords]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Name]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_AIBDatasetRecord_msdyn_AIBDataset]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([msdyn_AIBDatasetsId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_357F3116515D431FBCA418EF1C374F24]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([msdyn_AIBDatasetRecordId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_357F3116515D431FBCA418EF1C374F24]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([msdyn_Name] ASC, [msdyn_AIBDatasetRecordId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_357F3116515D431FBCA418EF1C374F24]
    ON [dbo].[msdyn_AIBDatasetRecordBase]([msdyn_AIBDatasetRecordId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

