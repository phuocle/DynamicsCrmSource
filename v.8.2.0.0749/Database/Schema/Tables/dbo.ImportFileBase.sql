CREATE TABLE [dbo].[ImportFileBase]
(
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[IsFirstRowHeader] [bit] NULL CONSTRAINT [DF_ImportFileBase_IsFirstRowHeader] DEFAULT ((1)),
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SuccessCount] [int] NULL CONSTRAINT [DF_ImportFileBase_SuccessCount] DEFAULT ((0)),
[StatusCode] [int] NULL CONSTRAINT [DF_ImportFileBase_StatusCode] DEFAULT ((1)),
[AdditionalHeaderRow] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_ImportFileBase_ProcessCode] DEFAULT ((1)),
[ParsedTableColumnsNumber] [int] NULL CONSTRAINT [DF_ImportFileBase_ParsedTableColumnsNumber] DEFAULT ((0)),
[Content] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[RecordsOwnerId] [uniqueidentifier] NULL,
[Source] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[SourceEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ImportFileBase_StateCode] DEFAULT ((0)),
[ParsedTableColumnPrefix] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ParsedTableName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ProgressCounter] [int] NULL CONSTRAINT [DF_ImportFileBase_ProgressCounter] DEFAULT ((0)),
[EnableDuplicateDetection] [bit] NULL CONSTRAINT [DF_ImportFileBase_EnableDuplicateDetection] DEFAULT ((0)),
[ImportId] [uniqueidentifier] NOT NULL,
[FailureCount] [int] NULL CONSTRAINT [DF_ImportFileBase_FailureCount] DEFAULT ((0)),
[FieldDelimiterCode] [int] NULL CONSTRAINT [DF_ImportFileBase_FieldDelimiterCode] DEFAULT ((2)),
[TargetEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[HeaderRow] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CompletedOn] [datetime] NULL,
[DataDelimiterCode] [int] NULL CONSTRAINT [DF_ImportFileBase_DataDelimiterCode] DEFAULT ((1)),
[TotalCount] [int] NULL CONSTRAINT [DF_ImportFileBase_TotalCount] DEFAULT ((0)),
[ProcessingStatus] [int] NOT NULL CONSTRAINT [DF_ImportFileBase_ProcessingStatus] DEFAULT ((1)),
[ImportFileId] [uniqueidentifier] NOT NULL,
[Size] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ImportMapId] [uniqueidentifier] NULL,
[UseSystemMap] [bit] NULL CONSTRAINT [DF_ImportFileBase_UseSystemMap] DEFAULT ((0)),
[ModifiedOn] [datetime] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ImportFileBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[FileTypeCode] [int] NOT NULL CONSTRAINT [DF_ImportFileBase_FileTypeCode] DEFAULT ((0)),
[RelatedEntityColumns] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PartialFailureCount] [int] NULL CONSTRAINT [DF_ImportFileBase_PartialFailureCount] DEFAULT ((0)),
[RecordsOwnerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportFileBase_OwnerIdType] DEFAULT ((8)),
[RecordsOwnerIdType] [int] NOT NULL CONSTRAINT [DF_ImportFileBase_RecordsOwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD CONSTRAINT [cndx_PrimaryKey_ImportFile] PRIMARY KEY CLUSTERED  ([ImportFileId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_importmapid] ON [dbo].[ImportFileBase] ([ImportMapId]) WHERE ([ImportMapId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ImportFileBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportFileBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportFiles] ON [dbo].[ImportFileBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_recordsownerid] ON [dbo].[ImportFileBase] ([RecordsOwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportFileBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD CONSTRAINT [BusinessUnit_ImportFiles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportFileBase] ADD CONSTRAINT [Import_ImportFile] FOREIGN KEY ([ImportId]) REFERENCES [dbo].[ImportBase] ([ImportId])
GO
ALTER TABLE [dbo].[ImportFileBase] ADD CONSTRAINT [ImportMap_ImportFile] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
ALTER TABLE [dbo].[ImportFileBase] ADD CONSTRAINT [owner_importfiles] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
