CREATE TABLE [dbo].[SubscriptionClients] (
    [ClientId]             UNIQUEIDENTIFIER NOT NULL,
    [MachineName]          NVARCHAR (200)   NULL,
    [SubscriptionClientId] UNIQUEIDENTIFIER NOT NULL,
    [SubscriptionId]       UNIQUEIDENTIFIER NOT NULL,
    [IsPrimaryClient]      BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SubscriptionClients] PRIMARY KEY CLUSTERED ([SubscriptionClientId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [subscriptionclients_subscription] FOREIGN KEY ([SubscriptionId]) REFERENCES [dbo].[Subscription] ([SubscriptionId]),
    CONSTRAINT [UQ_SubscriptionClients] UNIQUE NONCLUSTERED ([SubscriptionId] ASC, [MachineName] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SubscriptionClients] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[SubscriptionClients]([SubscriptionId] ASC, [ClientId] ASC, [IsPrimaryClient] ASC, [MachineName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ClientId]
    ON [dbo].[SubscriptionClients]([ClientId] ASC) WITH (FILLFACTOR = 80);

