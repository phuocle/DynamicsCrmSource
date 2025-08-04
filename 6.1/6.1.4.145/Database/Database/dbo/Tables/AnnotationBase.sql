CREATE TABLE [dbo].[AnnotationBase] (
    [AnnotationId]         UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]       INT              NULL,
    [ObjectId]             UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]   UNIQUEIDENTIFIER NULL,
    [Subject]              NVARCHAR (500)   NULL,
    [IsDocument]           BIT              CONSTRAINT [Set_To_Zero98] DEFAULT ((0)) NOT NULL,
    [NoteText]             NVARCHAR (MAX)   NULL,
    [MimeType]             NVARCHAR (256)   NULL,
    [LangId]               NVARCHAR (2)     NULL,
    [DocumentBody]         VARCHAR (MAX)    NULL,
    [CreatedOn]            DATETIME         NULL,
    [FileSize]             INT              NULL,
    [FileName]             NVARCHAR (255)   NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [IsPrivate]            BIT              CONSTRAINT [Set_To_Zero99] DEFAULT ((0)) NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [StepId]               NVARCHAR (32)    NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ImportSequenceNumber] INT              NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [OwnerId]              UNIQUEIDENTIFIER CONSTRAINT [DF_AnnotationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [OwnerIdType]          INT              CONSTRAINT [DF_AnnotationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_Annotation] PRIMARY KEY NONCLUSTERED ([AnnotationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_annotations] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_annotations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AnnotationBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE CLUSTERED INDEX [cndx_Annotation]
    ON [dbo].[AnnotationBase]([ObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AnnotationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_annotations]
    ON [dbo].[AnnotationBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AnnotationBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

