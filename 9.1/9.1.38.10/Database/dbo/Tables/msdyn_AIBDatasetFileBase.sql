CREATE TABLE [dbo].[msdyn_AIBDatasetFileBase] (
    [msdyn_AIBDatasetFileId]    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_msdyn_AIBDatasetFileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_Name]                NVARCHAR (100)   NULL,
    [msdyn_AIBDatasetId]        UNIQUEIDENTIFIER NULL,
    [msdyn_AIBFileId]           UNIQUEIDENTIFIER NULL,
    [msdyn_LastModifiedDate]    DATETIME         NULL,
    CONSTRAINT [PK_msdyn_AIBDatasetFileBase] PRIMARY KEY CLUSTERED ([msdyn_AIBDatasetFileId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aibdatasetfile] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_AIBDatasetFile_msdyn_AIBDatas] FOREIGN KEY ([msdyn_AIBDatasetId]) REFERENCES [dbo].[msdyn_AIBDatasetBase] ([msdyn_AIBDatasetId]),
    CONSTRAINT [msdyn_AIBDatasetFile_msdyn_AIBuilde] FOREIGN KEY ([msdyn_AIBFileId]) REFERENCES [dbo].[msdyn_AIBFileBase] ([msdyn_AIBFileId]),
    CONSTRAINT [owner_msdyn_aibdatasetfile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIBDatasetFileBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIBDatasetFiles]
    ON [dbo].[msdyn_AIBDatasetFileBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIBDatasetFileBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIBDatasetFileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Name]
    ON [dbo].[msdyn_AIBDatasetFileBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_AIBDatasetFile_msdyn_AIBDatas]
    ON [dbo].[msdyn_AIBDatasetFileBase]([msdyn_AIBDatasetId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_msdyn_UniqueDatasetFile]
    ON [dbo].[msdyn_AIBDatasetFileBase]([msdyn_AIBDatasetId] ASC, [msdyn_AIBFileId] ASC)
    INCLUDE([msdyn_AIBDatasetFileId]) WHERE ([msdyn_AIBDatasetId] IS NOT NULL AND [msdyn_AIBFileId] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9E101EA4E48E4C9B82E6968828286174]
    ON [dbo].[msdyn_AIBDatasetFileBase]([msdyn_Name] ASC, [msdyn_AIBDatasetFileId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9E101EA4E48E4C9B82E6968828286174]
    ON [dbo].[msdyn_AIBDatasetFileBase]([msdyn_AIBDatasetFileId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9E101EA4E48E4C9B82E6968828286174]
    ON [dbo].[msdyn_AIBDatasetFileBase]([msdyn_AIBDatasetFileId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

