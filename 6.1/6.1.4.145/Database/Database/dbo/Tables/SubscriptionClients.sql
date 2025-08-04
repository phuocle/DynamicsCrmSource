CREATE TABLE [dbo].[SubscriptionClients] (
    [ClientId]             UNIQUEIDENTIFIER NOT NULL,
    [MachineName]          NVARCHAR (200)   NULL,
    [SubscriptionId]       UNIQUEIDENTIFIER NOT NULL,
    [IsPrimaryClient]      BIT              NULL,
    [SubscriptionClientId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SubscriptionClients] PRIMARY KEY CLUSTERED ([SubscriptionClientId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subscriptionclients_subscription] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SubscriptionClients] UNIQUE NONCLUSTERED ([SubscriptionId] ASC, [MachineName] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[SubscriptionClients]([SubscriptionId] ASC, [ClientId] ASC, [IsPrimaryClient] ASC, [MachineName] ASC);

