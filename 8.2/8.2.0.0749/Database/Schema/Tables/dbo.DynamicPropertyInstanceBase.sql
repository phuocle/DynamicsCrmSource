CREATE TABLE [dbo].[DynamicPropertyInstanceBase]
(
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ValueInteger] [int] NULL,
[ValueString] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[ValueDecimal] [decimal] (23, 10) NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[VersionNumber] [timestamp] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[validationstatus] [bit] NULL CONSTRAINT [DF_DynamicPropertyInstanceBase_validationstatus] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[ValueDouble] [float] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[DynamicPropertyInstanceid] [uniqueidentifier] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[DynamicPropertyId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdType] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] ADD CONSTRAINT [cndx_PrimaryKey_DynamicPropertyInstance] PRIMARY KEY CLUSTERED  ([DynamicPropertyInstanceid]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId] ON [dbo].[DynamicPropertyInstanceBase] ([DynamicPropertyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_RegargingObjectId] ON [dbo].[DynamicPropertyInstanceBase] ([RegardingObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyInstanceBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] ADD CONSTRAINT [business_unit_dynamicproperyinstance] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] ADD CONSTRAINT [Owner_dynamicproperyinstance] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
