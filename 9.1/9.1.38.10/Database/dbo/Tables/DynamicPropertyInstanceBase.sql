CREATE TABLE [dbo].[DynamicPropertyInstanceBase] (
    [DynamicPropertyInstanceid]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                         DATETIME         NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                           UNIQUEIDENTIFIER CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]                       INT              CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [ImportSequenceNumber]              INT              NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [TimeZoneRuleVersionNumber]         INT              NULL,
    [UTCConversionTimeZoneCode]         INT              NULL,
    [Name]                              NVARCHAR (100)   NULL,
    [ValueInteger]                      INT              NULL,
    [ValueDecimal]                      DECIMAL (23, 10) NULL,
    [ValueDouble]                       FLOAT (53)       NULL,
    [ValueString]                       NVARCHAR (1024)  NULL,
    [DynamicPropertyId]                 UNIQUEIDENTIFIER NOT NULL,
    [validationstatus]                  BIT              CONSTRAINT [DF_DynamicPropertyInstanceBase_validationstatus] DEFAULT ((0)) NULL,
    [TransactionCurrencyId]             UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                      DECIMAL (23, 10) NULL,
    [DynamicPropertyInstanceIdType]     INT              NULL,
    [DynamicPropertyInstanceIdName]     NVARCHAR (4000)  NULL,
    [DynamicPropertyInstanceIdYomiName] NVARCHAR (4000)  NULL,
    [RegardingObjectId]                 UNIQUEIDENTIFIER NULL,
    [RegardingObjectIdType]             INT              NULL,
    [RegardingObjectIdName]             NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName]         NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicPropertyInstance] PRIMARY KEY CLUSTERED ([DynamicPropertyInstanceid] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_dynamicproperyinstance] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [Owner_dynamicproperyinstance] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyInstanceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_RegargingObjectId]
    ON [dbo].[DynamicPropertyInstanceBase]([RegardingObjectId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId]
    ON [dbo].[DynamicPropertyInstanceBase]([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

