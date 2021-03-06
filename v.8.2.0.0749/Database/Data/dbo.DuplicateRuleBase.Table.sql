USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DuplicateRuleBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DuplicateRuleBase](
	[Description] [nvarchar](max) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[IsCaseSensitive] [bit] NULL CONSTRAINT [DF_DuplicateRuleBase_IsCaseSensitive]  DEFAULT ((0)),
	[StateCode] [int] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_StateCode]  DEFAULT ((0)),
	[StatusCode] [int] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_StatusCode]  DEFAULT ((0)),
	[Name] [nvarchar](160) NOT NULL,
	[MatchingEntityMatchCodeTable] [nvarchar](50) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[BaseEntityTypeCode] [int] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[DuplicateRuleId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[MatchingEntityTypeCode] [int] NOT NULL,
	[BaseEntityMatchCodeTable] [nvarchar](50) NULL,
	[BaseEntityName] [nvarchar](160) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[MatchingEntityName] [nvarchar](160) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
	[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_DuplicateRuleBase_OwnerIdType]  DEFAULT ((8)),
	[ExcludeInactiveRecords] [bit] NULL CONSTRAINT [DF_DuplicateRuleBase_ExcludeInactiveRecords]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_DuplicateRule] PRIMARY KEY CLUSTERED 
(
	[DuplicateRuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects account records that have the same value in the Website field.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Accounts with the same website', N'dbo.MatchCodea2e03fa26bb04120938c8456879111b2', NULL, 1, NULL, N'e68d2246-d8b0-4e85-967d-07d82a3d61eb', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1, N'dbo.MatchCodea2e03fa26bb04120938c8456879111b2', N'account', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:02.000' AS DateTime), N'account', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8, 0)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects contact records that have the same values in the First Name and Last Name fields.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Contacts with the same first name and last name', N'dbo.MatchCodef944744f00c54d4cb42641eda5dbaa7f', NULL, 2, NULL, N'0c16fb72-201d-4581-9ed9-1d4ac969af81', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 2, N'dbo.MatchCodef944744f00c54d4cb42641eda5dbaa7f', N'contact', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'contact', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8, 0)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects contact records that have the same value in the Business Phone field.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Contacts with the same business phone number', N'dbo.MatchCodea38c930945b64455957204bc60cf9080', NULL, 2, NULL, N'7fc828b5-5703-4320-95ae-38b835f9091b', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 2, N'dbo.MatchCodea38c930945b64455957204bc60cf9080', N'contact', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'contact', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8, 0)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects contact records that have the same value in the E-mail attribute.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Contacts with the same e-mail address', N'dbo.MatchCodeeca04af8ab214f0da4dad6f0db3e0723', NULL, 2, NULL, N'0c56882e-35a2-4898-b094-8575f1368160', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 2, N'dbo.MatchCodeeca04af8ab214f0da4dad6f0db3e0723', N'contact', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'contact', CAST(N'2007-12-07 03:14:58.653' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'd9f5ecca-f31d-e711-80d3-00155d00662d', 8, NULL)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects account records that have the same value in the Phone field.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Accounts with the same phone number', N'dbo.MatchCode399375b4ee87415a89b379959fe23555', NULL, 1, NULL, N'e4e8866a-97c2-4938-8b71-8743731e59c8', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1, N'dbo.MatchCode399375b4ee87415a89b379959fe23555', N'account', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'account', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8, 0)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects lead records that have the same value in the E-mail attribute.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Leads with the same e-mail address', N'dbo.MatchCode93fb325de869460f84510948829bc895', NULL, 4, NULL, N'9c552bd0-52f0-41ea-a9fd-a3df4a399f4a', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 4, N'dbo.MatchCode93fb325de869460f84510948829bc895', N'lead', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'lead', CAST(N'2007-12-07 03:14:58.653' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'd9f5ecca-f31d-e711-80d3-00155d00662d', 8, NULL)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects account records that have the same value in the E-mail attribute.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Accounts with the same e-mail address', N'dbo.MatchCode651bf928dc7a4e60aef192cd8987dc07', NULL, 1, NULL, N'eb211e6a-e9b9-46f5-8db0-b1932db0fd9a', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1, N'dbo.MatchCode651bf928dc7a4e60aef192cd8987dc07', N'account', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'account', CAST(N'2007-12-07 03:14:58.640' AS DateTime), NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'd9f5ecca-f31d-e711-80d3-00155d00662d', 8, NULL)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects account records that have the same value in the Account Name attribute.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Accounts with the same Account Name', N'dbo.MatchCode390a05425afb4f3fb41a27620c0207c9', NULL, 1, NULL, N'd8d2e6cc-3a9b-48f8-a0c6-b9a1f10b9fb4', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1, N'dbo.MatchCode390a05425afb4f3fb41a27620c0207c9', N'account', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:03.000' AS DateTime), N'account', CAST(N'2017-04-10 13:55:58.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'd9f5ecca-f31d-e711-80d3-00155d00662d', 8, 0)
INSERT [dbo].[DuplicateRuleBase] ([Description], [OwningBusinessUnit], [IsCaseSensitive], [StateCode], [StatusCode], [Name], [MatchingEntityMatchCodeTable], [TimeZoneRuleVersionNumber], [BaseEntityTypeCode], [UTCConversionTimeZoneCode], [DuplicateRuleId], [ModifiedBy], [MatchingEntityTypeCode], [BaseEntityMatchCodeTable], [BaseEntityName], [CreatedBy], [ModifiedOn], [MatchingEntityName], [CreatedOn], [CreatedOnBehalfBy], [ModifiedOnBehalfBy], [OwnerId], [OwnerIdType], [ExcludeInactiveRecords]) VALUES (N'Detects social profile records that have the same value in the full name and social channel fields.', N'c6acfcbe-f31d-e711-80d3-00155d00662d', 0, 1, 2, N'Social profiles with same full name and social channel', N'dbo.MatchCodea2ccc673be3547498e436ad86ffd1656', NULL, 99, NULL, N'b99f9d91-6bcd-4ae7-8585-d1ae2046622d', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 99, N'dbo.MatchCodea2ccc673be3547498e436ad86ffd1656', N'socialprofile', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'socialprofile', CAST(N'2017-04-10 13:55:59.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 8, 0)
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_BaseEntityName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_BaseEntityName] ON [dbo].[DuplicateRuleBase]
(
	[BaseEntityName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_DuplicateRules]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_DuplicateRules] ON [dbo].[DuplicateRuleBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_MatchingEntityName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_MatchingEntityName] ON [dbo].[DuplicateRuleBase]
(
	[MatchingEntityName] ASC
)
WHERE ([MatchingEntityName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[DuplicateRuleBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[DuplicateRuleBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
