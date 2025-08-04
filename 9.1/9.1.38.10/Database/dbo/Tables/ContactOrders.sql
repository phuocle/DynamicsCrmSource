CREATE TABLE [dbo].[ContactOrders] (
    [ContactOrderId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ContactOrders_ContactOrderId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ContactId]                 UNIQUEIDENTIFIER NOT NULL,
    [SalesOrderId]              UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactOrders] PRIMARY KEY CLUSTERED ([ContactOrderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_orders] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [order_contacts] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId]),
    CONSTRAINT [UQ_ContactOrders] UNIQUE NONCLUSTERED ([ContactId] ASC, [SalesOrderId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[ContactOrders] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactOrders]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_contacts]
    ON [dbo].[ContactOrders]([SalesOrderId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

