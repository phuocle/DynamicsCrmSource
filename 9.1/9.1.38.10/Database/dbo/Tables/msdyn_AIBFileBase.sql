CREATE TABLE [dbo].[msdyn_AIBFileBase] (
    [msdyn_AIBFileId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OwnerId]                      UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_msdyn_AIBFileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [statecode]                    INT              NOT NULL,
    [statuscode]                   INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [msdyn_Name]                   NVARCHAR (100)   NULL,
    [msdyn_AIBDatasetsContainerId] UNIQUEIDENTIFIER NULL,
    [msdyn_Checksum]               NVARCHAR (200)   NULL,
    [msdyn_File]                   UNIQUEIDENTIFIER NULL,
    [msdyn_ImageId]                UNIQUEIDENTIFIER NULL,
    [msdyn_ImportMetadata]         NVARCHAR (MAX)   NULL,
    [msdyn_MimeType]               NVARCHAR (100)   NULL,
    [msdyn_Size]                   INT              NULL,
    CONSTRAINT [PK_msdyn_AIBFileBase] PRIMARY KEY CLUSTERED ([msdyn_AIBFileId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aibfile] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_msdyn_AIBFile_msdyn_File] FOREIGN KEY ([msdyn_File]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [msdyn_AIBFile_msdyn_AIBDatasetsCont] FOREIGN KEY ([msdyn_AIBDatasetsContainerId]) REFERENCES [dbo].[msdyn_AIBDatasetsContainerBase] ([msdyn_AIBDatasetsContainerId]),
    CONSTRAINT [owner_msdyn_aibfile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_AIBFileBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_AIBFiles]
    ON [dbo].[msdyn_AIBFileBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_AIBFileBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_AIBFileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Name]
    ON [dbo].[msdyn_AIBFileBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_AIBFile_msdyn_AIBDatasetsCont]
    ON [dbo].[msdyn_AIBFileBase]([msdyn_AIBDatasetsContainerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_msdyn_ChecksumIndex]
    ON [dbo].[msdyn_AIBFileBase]([msdyn_AIBDatasetsContainerId] ASC, [msdyn_Checksum] ASC)
    INCLUDE([msdyn_AIBFileId]) WHERE ([msdyn_AIBDatasetsContainerId] IS NOT NULL AND [msdyn_Checksum] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_6DDC1F93C7CF46A6B488828DE76D1338]
    ON [dbo].[msdyn_AIBFileBase]([msdyn_Name] ASC, [msdyn_AIBFileId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6DDC1F93C7CF46A6B488828DE76D1338]
    ON [dbo].[msdyn_AIBFileBase]([msdyn_AIBFileId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_6DDC1F93C7CF46A6B488828DE76D1338]
    ON [dbo].[msdyn_AIBFileBase]([msdyn_AIBFileId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

