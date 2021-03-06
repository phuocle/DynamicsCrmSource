USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MetricBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MetricBase](
	[UTCConversionTimeZoneCode] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[IsAmount] [bit] NULL CONSTRAINT [DF_MetricBase_IsAmount]  DEFAULT ((1)),
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[Name] [nvarchar](100) NULL,
	[Description] [nvarchar](max) NULL,
	[MetricId] [uniqueidentifier] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[AmountDataType] [int] NULL,
	[IsStretchTracked] [bit] NULL CONSTRAINT [DF_MetricBase_IsStretchTracked]  DEFAULT ((0)),
	[StateCode] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [PK_MetricBase] PRIMARY KEY CLUSTERED 
(
	[MetricId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[MetricBase] ([UTCConversionTimeZoneCode], [ImportSequenceNumber], [CreatedOn], [IsAmount], [ModifiedBy], [Name], [Description], [MetricId], [OverriddenCreatedOn], [AmountDataType], [IsStretchTracked], [StateCode], [ModifiedOn], [TimeZoneRuleVersionNumber], [OrganizationId], [CreatedOnBehalfBy], [StatusCode], [CreatedBy], [ModifiedOnBehalfBy]) VALUES (NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), 1, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'No. of Product Units', N'Tracks the number of product units that are sold or are in progress against the goal.', N'ae39f330-41c1-4543-aab1-05002b02c09b', NULL, 1, 0, 0, CAST(N'2017-04-10 13:56:04.000' AS DateTime), NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL)
INSERT [dbo].[MetricBase] ([UTCConversionTimeZoneCode], [ImportSequenceNumber], [CreatedOn], [IsAmount], [ModifiedBy], [Name], [Description], [MetricId], [OverriddenCreatedOn], [AmountDataType], [IsStretchTracked], [StateCode], [ModifiedOn], [TimeZoneRuleVersionNumber], [OrganizationId], [CreatedOnBehalfBy], [StatusCode], [CreatedBy], [ModifiedOnBehalfBy]) VALUES (NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), 1, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'Revenue', N'This metric tracks revenue goals for users and defines the actual and estimated revenue generated from opportunities.', N'9241f883-ceb1-4600-9c32-7cb1d9ecf6a3', NULL, 0, 0, 0, CAST(N'2017-04-10 13:56:04.000' AS DateTime), NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL)
INSERT [dbo].[MetricBase] ([UTCConversionTimeZoneCode], [ImportSequenceNumber], [CreatedOn], [IsAmount], [ModifiedBy], [Name], [Description], [MetricId], [OverriddenCreatedOn], [AmountDataType], [IsStretchTracked], [StateCode], [ModifiedOn], [TimeZoneRuleVersionNumber], [OrganizationId], [CreatedOnBehalfBy], [StatusCode], [CreatedBy], [ModifiedOnBehalfBy]) VALUES (NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'No. of Cases', N'Tracks the number of cases resolved against the goal.', N'8f11e745-9860-475a-a613-d360d1f3af87', NULL, NULL, 0, 0, CAST(N'2017-04-10 13:56:04.000' AS DateTime), NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL)
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[MetricBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Sync]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[MetricBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
