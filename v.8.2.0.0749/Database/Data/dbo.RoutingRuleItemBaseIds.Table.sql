USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RoutingRuleItemBaseIds]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoutingRuleItemBaseIds](
	[RoutingRuleItemId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_RoutingRuleItemBaseIds] PRIMARY KEY CLUSTERED 
(
	[RoutingRuleItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
