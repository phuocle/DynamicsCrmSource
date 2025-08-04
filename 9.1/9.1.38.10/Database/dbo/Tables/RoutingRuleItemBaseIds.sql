CREATE TABLE [dbo].[RoutingRuleItemBaseIds] (
    [RoutingRuleItemId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_RoutingRuleItemBaseIds] PRIMARY KEY CLUSTERED ([RoutingRuleItemId] ASC)
);


GO
ALTER TABLE [dbo].[RoutingRuleItemBaseIds] SET (LOCK_ESCALATION = DISABLE);

