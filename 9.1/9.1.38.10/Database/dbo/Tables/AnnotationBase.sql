CREATE TABLE [dbo].[AnnotationBase] (
    [ObjectTypeCode]       INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [AnnotationId]         UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [NoteText]             NVARCHAR (MAX)   NULL,
    [ImportSequenceNumber] INT              NULL,
    [Subject]              NVARCHAR (500)   NULL,
    [MimeType]             NVARCHAR (256)   NULL,
    [ObjectId]             UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [IsPrivate]            BIT              CONSTRAINT [DF_AnnotationBase_IsPrivate] DEFAULT ((0)) NULL,
    [ModifiedOn]           DATETIME         NULL,
    [LangId]               NVARCHAR (2)     NULL,
    [CreatedOn]            DATETIME         NULL,
    [IsDocument]           BIT              CONSTRAINT [DF_AnnotationBase_IsDocument] DEFAULT ((0)) NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [StepId]               NVARCHAR (32)    NULL,
    [FileSize]             INT              NULL,
    [DocumentBody]         VARCHAR (MAX)    NULL,
    [OwnerId]              UNIQUEIDENTIFIER CONSTRAINT [DF_AnnotationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwningBusinessUnit]   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [FileName]             NVARCHAR (255)   NULL,
    [OwnerIdType]          INT              CONSTRAINT [DF_AnnotationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [StoragePointer]       NVARCHAR (5)     NULL,
    [FilePointer]          NVARCHAR (255)   NULL,
    [Prefix]               NVARCHAR (5)     NULL,
    [NoteText_QF_prefix]   AS               (CONVERT([nvarchar](850),substring([NoteText],(1),(850)))),
    CONSTRAINT [ndx_PrimaryKey_Annotation] PRIMARY KEY NONCLUSTERED ([AnnotationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_annotations] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_annotations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AnnotationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AnnotationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE CLUSTERED INDEX [cndx_Annotation]
    ON [dbo].[AnnotationBase]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AnnotationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AnnotationBase]([VersionNumber] ASC)
    INCLUDE([AnnotationId]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_AnnotationModifiedOn]
    ON [dbo].[AnnotationBase]([ModifiedOn] DESC, [AnnotationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_annotations]
    ON [dbo].[AnnotationBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_AnnotationIdCreatedOn]
    ON [dbo].[AnnotationBase]([AnnotationId] ASC, [CreatedOn] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_IsDocument_AnnotationId_FileSize_Filter_FilePointer]
    ON [dbo].[AnnotationBase]([IsDocument] ASC, [AnnotationId] ASC, [FileSize] ASC) WHERE ([FilePointer] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_IsDocument_AnnotationId_FileSize_Filter_DocumentBody]
    ON [dbo].[AnnotationBase]([IsDocument] ASC, [AnnotationId] ASC, [FileSize] ASC) WHERE ([DocumentBody] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_FilePointer]
    ON [dbo].[AnnotationBase]([FilePointer] ASC)
    INCLUDE([AnnotationId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D55E2282DD0C4AADA0D389C3013F222A]
    ON [dbo].[AnnotationBase]([AnnotationId] ASC)
    INCLUDE([Subject], [NoteText], [FileName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D55E2282DD0C4AADA0D389C3013F222A]
    ON [dbo].[AnnotationBase]([AnnotationId] ASC)
    INCLUDE([Subject], [NoteText], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_FileName]
    ON [dbo].[AnnotationBase]([FileName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Subject]
    ON [dbo].[AnnotationBase]([Subject] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D55E2282DD0C4AADA0D389C3013F222A]
    ON [dbo].[AnnotationBase]([Subject] ASC, [AnnotationId] ASC)
    INCLUDE([NoteText], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_NoteText]
    ON [dbo].[AnnotationBase]([NoteText_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

