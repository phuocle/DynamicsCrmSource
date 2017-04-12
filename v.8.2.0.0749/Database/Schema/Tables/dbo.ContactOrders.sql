CREATE TABLE [dbo].[ContactOrders]
(
[SalesOrderId] [uniqueidentifier] NOT NULL,
[ContactId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ContactOrderId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContactOrders_ContactOrderId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactOrders] ADD CONSTRAINT [cndx_PrimaryKey_ContactOrders] PRIMARY KEY CLUSTERED  ([ContactOrderId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactOrders] ADD CONSTRAINT [UQ_ContactOrders] UNIQUE NONCLUSTERED  ([ContactId], [SalesOrderId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_order_contacts] ON [dbo].[ContactOrders] ([SalesOrderId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactOrders] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactOrders] ADD CONSTRAINT [contact_orders] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactOrders] ADD CONSTRAINT [order_contacts] FOREIGN KEY ([SalesOrderId]) REFERENCES [dbo].[SalesOrderBase] ([SalesOrderId])
GO
