CREATE TABLE [dbo].[RoutingRuleBaseIds] (
    [RoutingRuleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_RoutingRuleBaseIds] PRIMARY KEY CLUSTERED ([RoutingRuleId] ASC)
);


GO
ALTER TABLE [dbo].[RoutingRuleBaseIds] SET (LOCK_ESCALATION = DISABLE);

