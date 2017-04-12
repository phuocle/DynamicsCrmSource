CREATE TABLE [dbo].[ColumnMappingBase]
(
[ColumnMappingId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TargetEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_ColumnMappingBase_StatusCode] DEFAULT ((0)),
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_ColumnMappingBase_ProcessCode] DEFAULT ((1)),
[ModifiedOn] [datetime] NOT NULL,
[TargetAttributeName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[ImportMapId] [uniqueidentifier] NULL,
[SourceAttributeName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SourceEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_ColumnMappingBase_StateCode] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ColumnMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_ColumnMapping] PRIMARY KEY CLUSTERED  ([ColumnMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_ColumnMapping_ImportMap] ON [dbo].[ColumnMappingBase] ([ImportMapId]) WHERE ([ImportMapId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_SourceAttributeName] ON [dbo].[ColumnMappingBase] ([SourceAttributeName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ColumnMappingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ColumnMappingBase] ADD CONSTRAINT [ColumnMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
