USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RoutingRuleBaseIds]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoutingRuleBaseIds](
	[RoutingRuleId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_RoutingRuleBaseIds] PRIMARY KEY CLUSTERED 
(
	[RoutingRuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
