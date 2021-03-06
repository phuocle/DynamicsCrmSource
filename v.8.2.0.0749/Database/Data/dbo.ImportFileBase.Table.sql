USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ImportFileBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImportFileBase](
	[Name] [nvarchar](256) NULL,
	[IsFirstRowHeader] [bit] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[SuccessCount] [int] NULL,
	[StatusCode] [int] NULL,
	[AdditionalHeaderRow] [nvarchar](max) NULL,
	[ProcessCode] [int] NOT NULL,
	[ParsedTableColumnsNumber] [int] NULL,
	[Content] [nvarchar](max) NOT NULL,
	[RecordsOwnerId] [uniqueidentifier] NULL,
	[Source] [nvarchar](256) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[SourceEntityName] [nvarchar](160) NULL,
	[StateCode] [int] NOT NULL,
	[ParsedTableColumnPrefix] [nvarchar](160) NULL,
	[ParsedTableName] [nvarchar](160) NULL,
	[ProgressCounter] [int] NULL,
	[EnableDuplicateDetection] [bit] NULL,
	[ImportId] [uniqueidentifier] NOT NULL,
	[FailureCount] [int] NULL,
	[FieldDelimiterCode] [int] NULL,
	[TargetEntityName] [nvarchar](160) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[HeaderRow] [nvarchar](max) NULL,
	[CompletedOn] [datetime] NULL,
	[DataDelimiterCode] [int] NULL,
	[TotalCount] [int] NULL,
	[ProcessingStatus] [int] NOT NULL,
	[ImportFileId] [uniqueidentifier] NOT NULL,
	[Size] [nvarchar](160) NULL,
	[CreatedOn] [datetime] NULL,
	[ImportMapId] [uniqueidentifier] NULL,
	[UseSystemMap] [bit] NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[FileTypeCode] [int] NOT NULL,
	[RelatedEntityColumns] [nvarchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[PartialFailureCount] [int] NULL,
	[RecordsOwnerIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[RecordsOwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ImportFile] PRIMARY KEY CLUSTERED 
(
	[ImportFileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_ImportFiles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_ImportFiles] ON [dbo].[ImportFileBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportFileBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_importmapid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_importmapid] ON [dbo].[ImportFileBase]
(
	[ImportMapId] ASC
)
WHERE ([ImportMapId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_recordsownerid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_recordsownerid] ON [dbo].[ImportFileBase]
(
	[RecordsOwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportFileBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_IsFirstRowHeader]  DEFAULT ((1)) FOR [IsFirstRowHeader]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_SuccessCount]  DEFAULT ((0)) FOR [SuccessCount]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_StatusCode]  DEFAULT ((1)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_ProcessCode]  DEFAULT ((1)) FOR [ProcessCode]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_ParsedTableColumnsNumber]  DEFAULT ((0)) FOR [ParsedTableColumnsNumber]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_ProgressCounter]  DEFAULT ((0)) FOR [ProgressCounter]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_EnableDuplicateDetection]  DEFAULT ((0)) FOR [EnableDuplicateDetection]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_FailureCount]  DEFAULT ((0)) FOR [FailureCount]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_FieldDelimiterCode]  DEFAULT ((2)) FOR [FieldDelimiterCode]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_DataDelimiterCode]  DEFAULT ((1)) FOR [DataDelimiterCode]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_TotalCount]  DEFAULT ((0)) FOR [TotalCount]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_ProcessingStatus]  DEFAULT ((1)) FOR [ProcessingStatus]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_UseSystemMap]  DEFAULT ((0)) FOR [UseSystemMap]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_FileTypeCode]  DEFAULT ((0)) FOR [FileTypeCode]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_PartialFailureCount]  DEFAULT ((0)) FOR [PartialFailureCount]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ImportFileBase] ADD  CONSTRAINT [DF_ImportFileBase_RecordsOwnerIdType]  DEFAULT ((8)) FOR [RecordsOwnerIdType]
GO
ALTER TABLE [dbo].[ImportFileBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_ImportFiles] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportFileBase] CHECK CONSTRAINT [BusinessUnit_ImportFiles]
GO
ALTER TABLE [dbo].[ImportFileBase]  WITH CHECK ADD  CONSTRAINT [Import_ImportFile] FOREIGN KEY([ImportId])
REFERENCES [dbo].[ImportBase] ([ImportId])
GO
ALTER TABLE [dbo].[ImportFileBase] CHECK CONSTRAINT [Import_ImportFile]
GO
ALTER TABLE [dbo].[ImportFileBase]  WITH CHECK ADD  CONSTRAINT [ImportMap_ImportFile] FOREIGN KEY([ImportMapId])
REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
ALTER TABLE [dbo].[ImportFileBase] CHECK CONSTRAINT [ImportMap_ImportFile]
GO
ALTER TABLE [dbo].[ImportFileBase]  WITH CHECK ADD  CONSTRAINT [owner_importfiles] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ImportFileBase] CHECK CONSTRAINT [owner_importfiles]
GO
