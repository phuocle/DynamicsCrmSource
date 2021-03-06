USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ResourceGroupExpansionBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ResourceGroupExpansionBase](
	[ObjectId] [uniqueidentifier] NOT NULL,
	[ResourceGroupExpansionId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[ItemId] [uniqueidentifier] NOT NULL,
	[MethodCode] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_ResourceGroupExpansion] PRIMARY KEY CLUSTERED 
(
	[ResourceGroupExpansionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_ItemIdMethodCode_ResourceGroupExpansion]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ItemIdMethodCode_ResourceGroupExpansion] ON [dbo].[ResourceGroupExpansionBase]
(
	[ItemId] ASC,
	[MethodCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ObjectIdMethodCode_ResourceGroupExpansion]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ObjectIdMethodCode_ResourceGroupExpansion] ON [dbo].[ResourceGroupExpansionBase]
(
	[ObjectId] ASC,
	[MethodCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
