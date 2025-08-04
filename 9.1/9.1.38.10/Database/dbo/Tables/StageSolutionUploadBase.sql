CREATE TABLE [dbo].[StageSolutionUploadBase] (
    [StageSolutionUploadId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_StageSolutionUploadBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
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
    CONSTRAINT [PK_StageSolutionUploadBase] PRIMARY KEY CLUSTERED ([StageSolutionUploadId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_stagesolutionupload] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_StageSolutionUpload_SolutionFile] FOREIGN KEY ([SolutionFile]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [owner_stagesolutionupload] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[StageSolutionUploadBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_StageSolutionUploads]
    ON [dbo].[StageSolutionUploadBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[StageSolutionUploadBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[StageSolutionUploadBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[StageSolutionUploadBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_28D08E354E9D465DADBCE60E742CF38A]
    ON [dbo].[StageSolutionUploadBase]([StageSolutionUploadId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_28D08E354E9D465DADBCE60E742CF38A]
    ON [dbo].[StageSolutionUploadBase]([name] ASC, [StageSolutionUploadId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_28D08E354E9D465DADBCE60E742CF38A]
    ON [dbo].[StageSolutionUploadBase]([StageSolutionUploadId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

