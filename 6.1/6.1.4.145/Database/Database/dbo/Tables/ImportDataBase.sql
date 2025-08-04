CREATE TABLE [dbo].[ImportDataBase] (
    [CreatedOn]          DATETIME         NOT NULL,
    [LineNumber]         INT              NULL,
    [RecordId]           UNIQUEIDENTIFIER NULL,
    [Data]               NVARCHAR (MAX)   NULL,
    [ModifiedOn]         DATETIME         NOT NULL,
    [ImportFileId]       UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ImportDataId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [StateCode]          INT              CONSTRAINT [DF_ImportDataBase_StateCode] DEFAULT ((0)) NOT NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [HasError]           BIT              CONSTRAINT [DF_ImportDataBase_HasError] DEFAULT ((0)) NULL,
    [StatusCode]         INT              CONSTRAINT [DF_ImportDataBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportDataBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ErrorType]          INT              NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_ImportDataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportData] PRIMARY KEY CLUSTERED ([ImportDataId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_ImportData] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [ImportFile_ImportData] FOREIGN KEY ([ImportFileId]) REFERENCES [dbo].[ImportFileBase] ([ImportFileId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_importdatas] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportDataBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_idAndHasError]
    ON [dbo].[ImportDataBase]([ImportDataId] ASC, [HasError] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_fileId]
    ON [dbo].[ImportDataBase]([ImportFileId] ASC) WHERE ([ImportFileId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_idAndLinenumber]
    ON [dbo].[ImportDataBase]([ImportDataId] ASC, [LineNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportData]
    ON [dbo].[ImportDataBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportDataBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

