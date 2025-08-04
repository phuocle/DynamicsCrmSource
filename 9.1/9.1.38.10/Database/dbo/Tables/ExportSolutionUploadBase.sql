CREATE TABLE [dbo].[ExportSolutionUploadBase] (
    [ExportSolutionUploadId]    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ExportSolutionUploadBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [name]                      NVARCHAR (100)   NULL,
    [SolutionFile]              UNIQUEIDENTIFIER NULL,
    [SolutionFileName]          NVARCHAR (100)   NULL,
    [SolutionUniqueName]        NVARCHAR (100)   NULL,
    [AsyncOperationId]          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_ExportSolutionUploadBase] PRIMARY KEY CLUSTERED ([ExportSolutionUploadId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_exportsolutionupload] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_ExportSolutionUpload_SolutionFile] FOREIGN KEY ([SolutionFile]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [owner_exportsolutionupload] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ExportSolutionUploadBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_ExportSolutionUploads]
    ON [dbo].[ExportSolutionUploadBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ExportSolutionUploadBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[ExportSolutionUploadBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ExportSolutionUploadBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A9DA437E33CA45129F1C510A105F5A23]
    ON [dbo].[ExportSolutionUploadBase]([ExportSolutionUploadId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A9DA437E33CA45129F1C510A105F5A23]
    ON [dbo].[ExportSolutionUploadBase]([ExportSolutionUploadId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A9DA437E33CA45129F1C510A105F5A23]
    ON [dbo].[ExportSolutionUploadBase]([name] ASC, [ExportSolutionUploadId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

