CREATE TABLE [dbo].[ImportFileBase] (
    [DataDelimiterCode]         INT              CONSTRAINT [DF_ImportFileBase_DataDelimiterCode] DEFAULT ((1)) NULL,
    [EntityKeyId]               UNIQUEIDENTIFIER CONSTRAINT [DF_ImportFileBase_EntityKeyId] DEFAULT ('00000000-0000-0000-0000-000000000000') NULL,
    [ProcessingStatus]          INT              CONSTRAINT [DF_ImportFileBase_ProcessingStatus] DEFAULT ((1)) NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ImportFileBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [IsFirstRowHeader]          BIT              CONSTRAINT [DF_ImportFileBase_IsFirstRowHeader] DEFAULT ((1)) NULL,
    [TargetEntityName]          NVARCHAR (160)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              CONSTRAINT [DF_ImportFileBase_StatusCode] DEFAULT ((1)) NULL,
    [ParsedTableColumnsNumber]  INT              CONSTRAINT [DF_ImportFileBase_ParsedTableColumnsNumber] DEFAULT ((0)) NULL,
    [StateCode]                 INT              CONSTRAINT [DF_ImportFileBase_StateCode] DEFAULT ((0)) NOT NULL,
    [SourceEntityName]          NVARCHAR (160)   NULL,
    [ProgressCounter]           INT              CONSTRAINT [DF_ImportFileBase_ProgressCounter] DEFAULT ((0)) NULL,
    [FileTypeCode]              INT              CONSTRAINT [DF_ImportFileBase_FileTypeCode] DEFAULT ((0)) NOT NULL,
    [Content]                   NVARCHAR (MAX)   NOT NULL,
    [SuccessCount]              INT              CONSTRAINT [DF_ImportFileBase_SuccessCount] DEFAULT ((0)) NULL,
    [CompletedOn]               DATETIME         NULL,
    [FieldDelimiterCode]        INT              CONSTRAINT [DF_ImportFileBase_FieldDelimiterCode] DEFAULT ((2)) NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ProcessCode]               INT              CONSTRAINT [DF_ImportFileBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [RecordsOwnerId]            UNIQUEIDENTIFIER NULL,
    [UseSystemMap]              BIT              CONSTRAINT [DF_ImportFileBase_UseSystemMap] DEFAULT ((0)) NULL,
    [Source]                    NVARCHAR (256)   NULL,
    [ParsedTableColumnPrefix]   NVARCHAR (160)   NULL,
    [ImportId]                  UNIQUEIDENTIFIER NOT NULL,
    [TotalCount]                INT              CONSTRAINT [DF_ImportFileBase_TotalCount] DEFAULT ((0)) NULL,
    [Size]                      NVARCHAR (160)   NULL,
    [ModifiedOn]                DATETIME         NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [HeaderRow]                 NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [RelatedEntityColumns]      NVARCHAR (MAX)   NULL,
    [PartialFailureCount]       INT              CONSTRAINT [DF_ImportFileBase_PartialFailureCount] DEFAULT ((0)) NULL,
    [ImportFileId]              UNIQUEIDENTIFIER NOT NULL,
    [ParsedTableName]           NVARCHAR (160)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [FailureCount]              INT              CONSTRAINT [DF_ImportFileBase_FailureCount] DEFAULT ((0)) NULL,
    [EnableDuplicateDetection]  BIT              CONSTRAINT [DF_ImportFileBase_EnableDuplicateDetection] DEFAULT ((0)) NULL,
    [UpsertModeCode]            INT              CONSTRAINT [DF_ImportFileBase_UpsertModeCode] DEFAULT ((0)) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [AdditionalHeaderRow]       NVARCHAR (MAX)   NULL,
    [ImportMapId]               UNIQUEIDENTIFIER NULL,
    [RecordsOwnerIdName]        NVARCHAR (4000)  NULL,
    [RecordsOwnerIdType]        INT              CONSTRAINT [DF_ImportFileBase_RecordsOwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ImportFileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportFile] PRIMARY KEY CLUSTERED ([ImportFileId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW),
    CONSTRAINT [BusinessUnit_ImportFiles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [Import_ImportFile] FOREIGN KEY ([ImportId]) REFERENCES [dbo].[ImportBase] ([ImportId]),
    CONSTRAINT [ImportMap_ImportFile] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBaseIds] ([ImportMapId]),
    CONSTRAINT [owner_importfiles] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImportFileBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ImportFileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportFileBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportFileBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportFiles]
    ON [dbo].[ImportFileBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_recordsownerid]
    ON [dbo].[ImportFileBase]([RecordsOwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_importmapid]
    ON [dbo].[ImportFileBase]([ImportMapId] ASC) WHERE ([ImportMapId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ImportFileBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_47F1DECFD1BA45C1BA39A71100FDD4F4]
    ON [dbo].[ImportFileBase]([ImportFileId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_47F1DECFD1BA45C1BA39A71100FDD4F4]
    ON [dbo].[ImportFileBase]([ImportFileId] ASC)
    INCLUDE([Name], [StatusCode], [CreatedOn], [CreatedBy], [SuccessCount], [PartialFailureCount], [FailureCount], [TotalCount], [FileTypeCode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

