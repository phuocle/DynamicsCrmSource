CREATE TABLE [dbo].[PostRegardingBase]
(
[PostRegardingId] [uniqueidentifier] NOT NULL,
[LatestManualPostModifiedOn] [datetime] NULL,
[LatestAutoPostModifiedOn] [datetime] NULL,
[RegardingObjectOwningBusinessUnit] [uniqueidentifier] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[RegardingObjectOwnerId] [uniqueidentifier] NULL,
[RegardingObjectTypeCodeForSharing] [int] NOT NULL,
[RegardingObjectOwnerIdType] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NOT NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostRegardingBase] ADD CONSTRAINT [cndx_PrimaryKey_PostRegardingBase] PRIMARY KEY CLUSTERED  ([PostRegardingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RegardingObjectForSharing] ON [dbo].[PostRegardingBase] ([RegardingObjectId], [RegardingObjectTypeCodeForSharing]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectTypeCode] ON [dbo].[PostRegardingBase] ([RegardingObjectTypeCode], [RegardingObjectId]) INCLUDE ([LatestAutoPostModifiedOn], [LatestManualPostModifiedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostRegardingBase] ADD CONSTRAINT [business_unit_PostRegarding] FOREIGN KEY ([RegardingObjectOwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
