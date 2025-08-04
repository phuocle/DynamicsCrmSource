CREATE TABLE [dbo].[SubscriptionClients]
(
[ClientId] [uniqueidentifier] NOT NULL,
[MachineName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[SubscriptionId] [uniqueidentifier] NOT NULL,
[IsPrimaryClient] [bit] NULL,
[SubscriptionClientId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionClients] ADD CONSTRAINT [cndx_PrimaryKey_SubscriptionClients] PRIMARY KEY CLUSTERED  ([SubscriptionClientId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ClientId] ON [dbo].[SubscriptionClients] ([ClientId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[SubscriptionClients] ([SubscriptionId], [ClientId], [IsPrimaryClient], [MachineName]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionClients] ADD CONSTRAINT [UQ_SubscriptionClients] UNIQUE NONCLUSTERED  ([SubscriptionId], [MachineName]) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SubscriptionClients] ADD CONSTRAINT [subscriptionclients_subscription] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId])
GO
