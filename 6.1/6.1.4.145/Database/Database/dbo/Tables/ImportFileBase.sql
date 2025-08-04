CREATE TABLE [dbo].[ImportFileBase] (
    [Name]                      NVARCHAR (256)   NULL,
    [IsFirstRowHeader]          BIT              CONSTRAINT [DF_ImportFileBase_IsFirstRowHeader] DEFAULT ((1)) NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [SuccessCount]              INT              CONSTRAINT [DF_ImportFileBase_SuccessCount] DEFAULT ((0)) NULL,
    [StatusCode]                INT              CONSTRAINT [DF_ImportFileBase_StatusCode] DEFAULT ((1)) NULL,
    [AdditionalHeaderRow]       NVARCHAR (MAX)   NULL,
    [ProcessCode]               INT              CONSTRAINT [DF_ImportFileBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [ParsedTableColumnsNumber]  INT              CONSTRAINT [DF_ImportFileBase_ParsedTableColumnsNumber] DEFAULT ((0)) NULL,
    [Content]                   NVARCHAR (MAX)   NOT NULL,
    [RecordsOwnerId]            UNIQUEIDENTIFIER NULL,
    [Source]                    NVARCHAR (256)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [SourceEntityName]          NVARCHAR (160)   NULL,
    [StateCode]                 INT              CONSTRAINT [DF_ImportFileBase_StateCode] DEFAULT ((0)) NOT NULL,
    [ParsedTableColumnPrefix]   NVARCHAR (160)   NULL,
    [ParsedTableName]           NVARCHAR (160)   NULL,
    [ProgressCounter]           INT              CONSTRAINT [DF_ImportFileBase_ProgressCounter] DEFAULT ((0)) NULL,
    [EnableDuplicateDetection]  BIT              CONSTRAINT [DF_ImportFileBase_EnableDuplicateDetection] DEFAULT ((0)) NULL,
    [ImportId]                  UNIQUEIDENTIFIER NOT NULL,
    [FailureCount]              INT              CONSTRAINT [DF_ImportFileBase_FailureCount] DEFAULT ((0)) NULL,
    [FieldDelimiterCode]        INT              CONSTRAINT [DF_ImportFileBase_FieldDelimiterCode] DEFAULT ((2)) NULL,
    [TargetEntityName]          NVARCHAR (160)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [HeaderRow]                 NVARCHAR (MAX)   NULL,
    [CompletedOn]               DATETIME         NULL,
    [DataDelimiterCode]         INT              CONSTRAINT [DF_ImportFileBase_DataDelimiterCode] DEFAULT ((1)) NULL,
    [TotalCount]                INT              CONSTRAINT [DF_ImportFileBase_TotalCount] DEFAULT ((0)) NULL,
    [ProcessingStatus]          INT              CONSTRAINT [DF_ImportFileBase_ProcessingStatus] DEFAULT ((1)) NOT NULL,
    [ImportFileId]              UNIQUEIDENTIFIER NOT NULL,
    [Size]                      NVARCHAR (160)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ImportMapId]               UNIQUEIDENTIFIER NULL,
    [UseSystemMap]              BIT              CONSTRAINT [DF_ImportFileBase_UseSystemMap] DEFAULT ((0)) NULL,
    [ModifiedOn]                DATETIME         NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ImportFileBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [FileTypeCode]              INT              CONSTRAINT [DF_ImportFileBase_FileTypeCode] DEFAULT ((0)) NOT NULL,
    [RelatedEntityColumns]      NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [PartialFailureCount]       INT              CONSTRAINT [DF_ImportFileBase_PartialFailureCount] DEFAULT ((0)) NULL,
    [RecordsOwnerIdName]        NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ImportFileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RecordsOwnerIdType]        INT              CONSTRAINT [DF_ImportFileBase_RecordsOwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportFile] PRIMARY KEY CLUSTERED ([ImportFileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_ImportFiles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [Import_ImportFile] FOREIGN KEY ([ImportId]) REFERENCES [dbo].[ImportBase] ([ImportId]) NOT FOR REPLICATION,
    CONSTRAINT [ImportMap_ImportFile] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_importfiles] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportFileBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportFiles]
    ON [dbo].[ImportFileBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportFileBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ImportFileBase]([Name] ASC) WITH (FILLFACTOR = 80);

