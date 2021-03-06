USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DateTimeConversionTracker]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DateTimeConversionTracker](
	[EntityId] [uniqueidentifier] NOT NULL,
	[AttributeId] [uniqueidentifier] NOT NULL,
	[Status] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [DateTimeConversionTracker_PK] PRIMARY KEY CLUSTERED 
(
	[EntityId] ASC,
	[AttributeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
