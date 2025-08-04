CREATE TABLE [dbo].[OfficeDocumentBase] (
    [SHA256]             NVARCHAR (64)    NULL,
    [CreatedOn]          DATETIME         NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [DocumentType]       INT              NOT NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [ObjectId]           UNIQUEIDENTIFIER NULL,
    [ClientData]         VARCHAR (MAX)    NULL,
    [FileLockState]      INT              NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_OfficeDocumentBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [Name]               NVARCHAR (256)   NOT NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [FileSize]           INT              NULL,
    [Content]            VARCHAR (MAX)    NULL,
    [OfficeDocumentId]   UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]         DATETIME         NULL,
    [ObjectTypeCode]     INT              NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_OfficeDocumentBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_OfficeDocument] PRIMARY KEY CLUSTERED ([OfficeDocumentId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_officedocument] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OfficeDocumentBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_created_on]
    ON [dbo].[OfficeDocumentBase]([CreatedOn] ASC)
    INCLUDE([DocumentType]) WITH (FILLFACTOR = 80);

