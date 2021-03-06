USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DuplicateRuleConditionBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DuplicateRuleConditionBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[OperatorParam] [int] NULL,
	[OperatorCode] [int] NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[BaseAttributeName] [nvarchar](50) NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[DuplicateRuleConditionId] [uniqueidentifier] NOT NULL,
	[MatchingAttributeName] [nvarchar](50) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[IgnoreBlankValues] [bit] NULL CONSTRAINT [DF_DuplicateRuleConditionBase_IgnoreBlankValues]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_DuplicateRuleCondition] PRIMARY KEY CLUSTERED 
(
	[DuplicateRuleConditionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'name', N'd8d2e6cc-3a9b-48f8-a0c6-b9a1f10b9fb4', N'abe65c6c-f51d-e711-80d3-00155d00662d', N'name', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'websiteurl', N'e68d2246-d8b0-4e85-967d-07d82a3d61eb', N'ace65c6c-f51d-e711-80d3-00155d00662d', N'websiteurl', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'telephone1', N'e4e8866a-97c2-4938-8b71-8743731e59c8', N'ade65c6c-f51d-e711-80d3-00155d00662d', N'telephone1', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'telephone1', N'7fc828b5-5703-4320-95ae-38b835f9091b', N'aee65c6c-f51d-e711-80d3-00155d00662d', N'telephone1', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'firstname', N'0c16fb72-201d-4581-9ed9-1d4ac969af81', N'afe65c6c-f51d-e711-80d3-00155d00662d', N'firstname', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'lastname', N'0c16fb72-201d-4581-9ed9-1d4ac969af81', N'b0e65c6c-f51d-e711-80d3-00155d00662d', N'lastname', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'profilefullname', N'b99f9d91-6bcd-4ae7-8585-d1ae2046622d', N'b1e65c6c-f51d-e711-80d3-00155d00662d', N'profilefullname', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', 0, 0, CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'community', N'b99f9d91-6bcd-4ae7-8585-d1ae2046622d', N'b2e65c6c-f51d-e711-80d3-00155d00662d', N'community', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 0)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (NULL, 0, 0, CAST(N'2017-04-10 13:56:02.000' AS DateTime), N'emailaddress1', N'9c552bd0-52f0-41ea-a9fd-a3df4a399f4a', N'06bef87a-dcb9-424b-b716-2d698275c6a4', N'emailaddress1', CAST(N'2007-12-07 03:14:58.653' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (NULL, 0, 0, CAST(N'2017-04-10 13:56:00.000' AS DateTime), N'emailaddress1', N'eb211e6a-e9b9-46f5-8db0-b1932db0fd9a', N'da07657c-8bc5-4013-a31a-5c18a65ea41d', N'emailaddress1', CAST(N'2007-12-07 03:14:58.653' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL)
INSERT [dbo].[DuplicateRuleConditionBase] ([CreatedBy], [OperatorParam], [OperatorCode], [ModifiedOn], [BaseAttributeName], [RegardingObjectId], [DuplicateRuleConditionId], [MatchingAttributeName], [CreatedOn], [ModifiedBy], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [IgnoreBlankValues]) VALUES (NULL, 0, 0, CAST(N'2017-04-10 13:56:02.000' AS DateTime), N'emailaddress1', N'0c56882e-35a2-4898-b094-8575f1368160', N'3a8c3fd9-fe15-4f0a-8184-c34dd29cf6ed', N'emailaddress1', CAST(N'2007-12-07 03:14:58.653' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL)
/****** Object:  Index [fndx_DuplicateRule]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_DuplicateRule] ON [dbo].[DuplicateRuleConditionBase]
(
	[RegardingObjectId] ASC
)
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
