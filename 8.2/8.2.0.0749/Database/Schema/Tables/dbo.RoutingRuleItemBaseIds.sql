CREATE TABLE [dbo].[RoutingRuleItemBaseIds]
(
[RoutingRuleItemId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleItemBaseIds] ADD CONSTRAINT [PK_RoutingRuleItemBaseIds] PRIMARY KEY CLUSTERED  ([RoutingRuleItemId]) ON [PRIMARY]
GO
