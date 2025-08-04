CREATE TABLE [dbo].[PickListMappingBase]
(
[StatusCode] [int] NOT NULL CONSTRAINT [DF_PickListMappingBase_StatusCode] DEFAULT ((0)),
[PickListMappingId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TargetValue] [int] NULL,
[ProcessCode] [int] NOT NULL CONSTRAINT [DF_PickListMappingBase_ProcessCode] DEFAULT ((1)),
[ColumnMappingId] [uniqueidentifier] NULL,
[SourceValue] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_PickListMappingBase_StateCode] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[PickListMappingBase] ADD CONSTRAINT [cndx_PrimaryKey_PickListMapping] PRIMARY KEY CLUSTERED  ([PickListMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_PickListMapping_ColumnMapping] ON [dbo].[PickListMappingBase] ([ColumnMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[PickListMappingBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PickListMappingBase] ADD CONSTRAINT [PickListMapping_ColumnMapping] FOREIGN KEY ([ColumnMappingId]) REFERENCES [dbo].[ColumnMappingBase] ([ColumnMappingId])
GO
