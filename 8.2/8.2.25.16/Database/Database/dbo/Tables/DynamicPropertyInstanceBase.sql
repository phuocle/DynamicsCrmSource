CREATE TABLE [dbo].[DynamicPropertyInstanceBase] (
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ValueInteger]              INT              NULL,
    [ValueString]               NVARCHAR (1024)  NULL,
    [ValueDecimal]              DECIMAL (23, 10) NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [validationstatus]          BIT              CONSTRAINT [DF_DynamicPropertyInstanceBase_validationstatus] DEFAULT ((0)) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ValueDouble]               FLOAT (53)       NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [DynamicPropertyInstanceid] UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [DynamicPropertyId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectIdType]     INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicPropertyInstance] PRIMARY KEY CLUSTERED ([DynamicPropertyInstanceid] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_dynamicproperyinstance] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [Owner_dynamicproperyinstance] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyInstanceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegargingObjectId]
    ON [dbo].[DynamicPropertyInstanceBase]([RegardingObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId]
    ON [dbo].[DynamicPropertyInstanceBase]([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80);

