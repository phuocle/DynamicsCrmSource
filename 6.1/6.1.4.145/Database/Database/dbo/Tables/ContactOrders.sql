CREATE TABLE [dbo].[ContactOrders] (
    [SalesOrderId]   UNIQUEIDENTIFIER NOT NULL,
    [ContactId]      UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]  ROWVERSION       NULL,
    [ContactOrderId] UNIQUEIDENTIFIER CONSTRAINT [DF_ContactOrders_ContactOrderId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ContactOrders] PRIMARY KEY CLUSTERED ([ContactOrderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contact_orders] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [order_contacts] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_ContactOrders] UNIQUE NONCLUSTERED ([ContactId] ASC, [SalesOrderId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContactOrders]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_contacts]
    ON [dbo].[ContactOrders]([SalesOrderId] ASC) WITH (FILLFACTOR = 80);

