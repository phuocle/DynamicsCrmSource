USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RollupFieldBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RollupFieldBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[MetricId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOn] [datetime] NULL,
	[SourceAttribute] [nvarchar](100) NULL,
	[SourceState] [int] NULL,
	[GoalAttribute] [nvarchar](100) NULL,
	[SourceEntity] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[SourceStatus] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[DateAttribute] [nvarchar](100) NULL,
	[IsStateParentEntityAttribute] [bit] NULL CONSTRAINT [DF_RollupFieldBase_IsStateParentEntityAttribute]  DEFAULT ((0)),
	[ModifiedBy] [uniqueidentifier] NULL,
	[EntityForDateAttribute] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[RollupFieldId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_MetricLineItemBase] PRIMARY KEY CLUSTERED 
(
	[RollupFieldId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[RollupFieldBase] ([CreatedBy], [MetricId], [CreatedOn], [SourceAttribute], [SourceState], [GoalAttribute], [SourceEntity], [ModifiedOnBehalfBy], [SourceStatus], [CreatedOnBehalfBy], [ImportSequenceNumber], [TimeZoneRuleVersionNumber], [ModifiedOn], [DateAttribute], [IsStateParentEntityAttribute], [ModifiedBy], [EntityForDateAttribute], [UTCConversionTimeZoneCode], [RollupFieldId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'ae39f330-41c1-4543-aab1-05002b02c09b', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'quantity', 0, N'inprogressdecimal', 1083, NULL, NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'estimatedclosedate', 1, N'd9f5ecca-f31d-e711-80d3-00155d00662d', 3, NULL, N'c64f7953-34e8-46ab-b23d-57e9a3f265c3')
INSERT [dbo].[RollupFieldBase] ([CreatedBy], [MetricId], [CreatedOn], [SourceAttribute], [SourceState], [GoalAttribute], [SourceEntity], [ModifiedOnBehalfBy], [SourceStatus], [CreatedOnBehalfBy], [ImportSequenceNumber], [TimeZoneRuleVersionNumber], [ModifiedOn], [DateAttribute], [IsStateParentEntityAttribute], [ModifiedBy], [EntityForDateAttribute], [UTCConversionTimeZoneCode], [RollupFieldId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'8f11e745-9860-475a-a613-d360d1f3af87', CAST(N'2017-04-10 13:56:04.000' AS DateTime), NULL, 1, N'actualinteger', 112, NULL, NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'modifiedon', 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', 112, NULL, N'7aed7c24-97d8-421c-8c41-9d95dea774c9')
INSERT [dbo].[RollupFieldBase] ([CreatedBy], [MetricId], [CreatedOn], [SourceAttribute], [SourceState], [GoalAttribute], [SourceEntity], [ModifiedOnBehalfBy], [SourceStatus], [CreatedOnBehalfBy], [ImportSequenceNumber], [TimeZoneRuleVersionNumber], [ModifiedOn], [DateAttribute], [IsStateParentEntityAttribute], [ModifiedBy], [EntityForDateAttribute], [UTCConversionTimeZoneCode], [RollupFieldId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'9241f883-ceb1-4600-9c32-7cb1d9ecf6a3', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'actualvalue', 1, N'actualmoney', 3, NULL, NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'actualclosedate', 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', 3, NULL, N'282dfbf3-dbc0-4e84-9148-c8382c20d47d')
INSERT [dbo].[RollupFieldBase] ([CreatedBy], [MetricId], [CreatedOn], [SourceAttribute], [SourceState], [GoalAttribute], [SourceEntity], [ModifiedOnBehalfBy], [SourceStatus], [CreatedOnBehalfBy], [ImportSequenceNumber], [TimeZoneRuleVersionNumber], [ModifiedOn], [DateAttribute], [IsStateParentEntityAttribute], [ModifiedBy], [EntityForDateAttribute], [UTCConversionTimeZoneCode], [RollupFieldId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'ae39f330-41c1-4543-aab1-05002b02c09b', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'quantity', 1, N'actualdecimal', 1083, NULL, NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'actualclosedate', 1, N'd9f5ecca-f31d-e711-80d3-00155d00662d', 3, NULL, N'23943e69-4ec4-41eb-910a-cfd8b5f794e6')
INSERT [dbo].[RollupFieldBase] ([CreatedBy], [MetricId], [CreatedOn], [SourceAttribute], [SourceState], [GoalAttribute], [SourceEntity], [ModifiedOnBehalfBy], [SourceStatus], [CreatedOnBehalfBy], [ImportSequenceNumber], [TimeZoneRuleVersionNumber], [ModifiedOn], [DateAttribute], [IsStateParentEntityAttribute], [ModifiedBy], [EntityForDateAttribute], [UTCConversionTimeZoneCode], [RollupFieldId]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'9241f883-ceb1-4600-9c32-7cb1d9ecf6a3', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'estimatedvalue', 0, N'inprogressmoney', 3, NULL, NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'estimatedclosedate', 0, N'd9f5ecca-f31d-e711-80d3-00155d00662d', 3, NULL, N'fb6211b0-dc8e-4059-ba83-e95337707f0a')
/****** Object:  Index [ndx_for_cascaderelationship_metric_rollupfield]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_metric_rollupfield] ON [dbo].[RollupFieldBase]
(
	[MetricId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Sync]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[RollupFieldBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RollupFieldBase]  WITH CHECK ADD  CONSTRAINT [metric_rollupfield] FOREIGN KEY([MetricId])
REFERENCES [dbo].[MetricBase] ([MetricId])
GO
ALTER TABLE [dbo].[RollupFieldBase] CHECK CONSTRAINT [metric_rollupfield]
GO
