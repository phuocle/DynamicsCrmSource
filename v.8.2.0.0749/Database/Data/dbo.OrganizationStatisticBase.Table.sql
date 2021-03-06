USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OrganizationStatisticBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrganizationStatisticBase](
	[Hour] [int] NULL,
	[StatisticType] [int] NULL,
	[OrganizationStatisticId] [uniqueidentifier] NOT NULL,
	[ServerName] [nvarchar](256) NULL,
	[StatisticValue] [int] NULL,
 CONSTRAINT [PK_OrganizationStatisticBase] PRIMARY KEY CLUSTERED 
(
	[OrganizationStatisticId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
