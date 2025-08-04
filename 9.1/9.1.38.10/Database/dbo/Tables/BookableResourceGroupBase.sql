CREATE TABLE [dbo].[BookableResourceGroupBase] (
    [BookableResourceGroupId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookableResourceGroupBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ChildResource]             UNIQUEIDENTIFIER NULL,
    [FromDate]                  DATETIME         NULL,
    [ParentResource]            UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [ToDate]                    DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourcegroupBase] PRIMARY KEY CLUSTERED ([BookableResourceGroupId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcegroup_ChildResource] FOREIGN KEY ([ChildResource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [bookableresource_bookableresourcegroup_ParentResource] FOREIGN KEY ([ParentResource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [business_unit_bookableresourcegroup] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcegroup] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcegroup] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceGroupBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceGroupBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceGroupBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceGroupBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_999B6226AE314DD6A2FA839562F897C1]
    ON [dbo].[BookableResourceGroupBase]([Name] ASC, [BookableResourceGroupId] ASC)
    INCLUDE([CreatedOn], [ToDate], [ParentResource], [FromDate], [ChildResource], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_999B6226AE314DD6A2FA839562F897C1]
    ON [dbo].[BookableResourceGroupBase]([BookableResourceGroupId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_999B6226AE314DD6A2FA839562F897C1]
    ON [dbo].[BookableResourceGroupBase]([BookableResourceGroupId] ASC)
    INCLUDE([Name], [CreatedOn], [ToDate], [ParentResource], [FromDate], [ChildResource], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

