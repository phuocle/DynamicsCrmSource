CREATE TABLE [dbo].[BookableResourceGroupBase] (
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ParentResource]            UNIQUEIDENTIFIER NULL,
    [ToDate]                    DATETIME         NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [BookableResourceGroupId]   UNIQUEIDENTIFIER NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [StateCode]                 INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [StatusCode]                INT              NULL,
    [ChildResource]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [FromDate]                  DATETIME         NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookableResourceGroupBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcegroupBase] PRIMARY KEY CLUSTERED ([BookableResourceGroupId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcegroup_ChildResource] FOREIGN KEY ([ChildResource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [bookableresource_bookableresourcegroup_ParentResource] FOREIGN KEY ([ParentResource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [business_unit_bookableresourcegroup] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcegroup] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcegroup] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceGroupBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceGroupBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceGroupBase]([Name] ASC) WITH (FILLFACTOR = 80);

