CREATE TABLE [dbo].[ImportDataBase] (
    [CreatedOn]          DATETIME         NOT NULL,
    [ImportFileId]       UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportDataBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [HasError]           BIT              CONSTRAINT [DF_ImportDataBase_HasError] DEFAULT ((0)) NULL,
    [StateCode]          INT              CONSTRAINT [DF_ImportDataBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]         INT              CONSTRAINT [DF_ImportDataBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [LineNumber]         INT              NULL,
    [Data]               NVARCHAR (MAX)   NULL,
    [ErrorType]          INT              NULL,
    [RecordId]           UNIQUEIDENTIFIER NULL,
    [ImportDataId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NOT NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_ImportDataBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Data_QF_prefix]     AS               (CONVERT([nvarchar](850),substring([Data],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_ImportData] PRIMARY KEY CLUSTERED ([ImportDataId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW),
    CONSTRAINT [BusinessUnit_ImportData] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [ImportFile_ImportData] FOREIGN KEY ([ImportFileId]) REFERENCES [dbo].[ImportFileBase] ([ImportFileId]),
    CONSTRAINT [owner_importdatas] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImportDataBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ImportDataBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportDataBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportDataBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_idAndLinenumber]
    ON [dbo].[ImportDataBase]([ImportDataId] ASC, [LineNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_idAndHasError]
    ON [dbo].[ImportDataBase]([ImportDataId] ASC, [HasError] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportData]
    ON [dbo].[ImportDataBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_fileId]
    ON [dbo].[ImportDataBase]([ImportFileId] ASC) WHERE ([ImportFileId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5644A94546974B51A48FA32A2DCF79DE]
    ON [dbo].[ImportDataBase]([ImportDataId] ASC)
    INCLUDE([Data]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5644A94546974B51A48FA32A2DCF79DE]
    ON [dbo].[ImportDataBase]([ImportDataId] ASC)
    INCLUDE([Data]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Data]
    ON [dbo].[ImportDataBase]([Data_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

