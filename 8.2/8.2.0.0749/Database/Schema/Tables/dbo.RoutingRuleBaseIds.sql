CREATE TABLE [dbo].[RoutingRuleBaseIds]
(
[RoutingRuleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoutingRuleBaseIds] ADD CONSTRAINT [PK_RoutingRuleBaseIds] PRIMARY KEY CLUSTERED  ([RoutingRuleId]) ON [PRIMARY]
GO
