CREATE TABLE [dbo].[msdyn_AIBFileAttachedDataBase] (
    [msdyn_AIBFileAttachedDataId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_msdyn_AIBFileAttachedDataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [msdyn_Key]                   NVARCHAR (850)   NULL,
    [msdyn_AIBDatasetFileId]      UNIQUEIDENTIFIER NULL,
    [msdyn_Data]                  NVARCHAR (MAX)   NULL,
    [msdyn_Type]                  NVARCHAR (850)   NULL,
    CONSTRAINT [PK_msdyn_AIBFileAttachedDataBase] PRIMARY KEY CLUSTERED ([msdyn_AIBFileAttachedDataId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aibfileattacheddata] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_AIBFileAttachedData_msdyn_AIB] FOREIGN KEY ([msdyn_AIBDatasetFileId]) REFERENCES [dbo].[msdyn_AIBDatasetFileBase] ([msdyn_AIBDatasetFileId]),
    CONSTRAINT [owner_msdyn_aibfileattacheddata] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIBFileAttachedDatas]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Key]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([msdyn_Key] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_AIBFileAttachedData_msdyn_AIB]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([msdyn_AIBDatasetFileId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_92D97884C74442D78504618800E0EF46]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([msdyn_Key] ASC, [msdyn_AIBFileAttachedDataId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_92D97884C74442D78504618800E0EF46]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([msdyn_AIBFileAttachedDataId] ASC)
    INCLUDE([msdyn_Key]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_92D97884C74442D78504618800E0EF46]
    ON [dbo].[msdyn_AIBFileAttachedDataBase]([msdyn_AIBFileAttachedDataId] ASC)
    INCLUDE([msdyn_Key], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

