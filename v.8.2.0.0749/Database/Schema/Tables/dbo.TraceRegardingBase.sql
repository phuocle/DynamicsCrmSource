CREATE TABLE [dbo].[TraceRegardingBase]
(
[RegardingObjectOwningBusinessUnit] [uniqueidentifier] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[TraceRegardingId] [uniqueidentifier] NOT NULL,
[RegardingObjectOwnerId] [uniqueidentifier] NOT NULL,
[RegardingObjectTypeCodeForSharing] [int] NOT NULL,
[RegardingObjectOwnerIdType] [int] NULL,
[RegardingObjectTypeCode] [int] NOT NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceRegardingBase] ADD CONSTRAINT [cndx_PrimaryKey_TraceRegardingBase] PRIMARY KEY CLUSTERED  ([TraceRegardingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCodeForSharing] ON [dbo].[TraceRegardingBase] ([RegardingObjectId], [RegardingObjectTypeCodeForSharing]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode] ON [dbo].[TraceRegardingBase] ([RegardingObjectTypeCode], [RegardingObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceRegardingBase] ADD CONSTRAINT [business_unit_TraceRegarding] FOREIGN KEY ([RegardingObjectOwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
