USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RoleBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleBase](
	[RoleId] [uniqueidentifier] NOT NULL,
	[RoleTemplateId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[BusinessUnitId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ParentRoleId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RoleBase_IsManaged]  DEFAULT ((0)),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_RoleBase_ComponentState]  DEFAULT ((0)),
	[RoleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_RoleBase_RoleIdUnique]  DEFAULT (newid()),
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RoleBase_OverwriteTime]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_RoleBase_IsCustomizable]  DEFAULT ((1)),
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ParentRootRoleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoleBase_ParentRootRoleId]  DEFAULT ('00000000-0000-0000-0000-000000000000'),
 CONSTRAINT [cndx_PrimaryKey_Role] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'caacfcbe-f31d-e711-80d3-00155d00662d', N'ecfd0b44-5720-45e3-ae68-417ddb0fb654', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Customer Service Representative', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:00.000' AS DateTime), CAST(N'2017-04-10 13:44:00.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'6990207f-54fe-461f-bd4d-66b4584066bb', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'caacfcbe-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'ccaefcbe-f31d-e711-80d3-00155d00662d', N'6caba073-59a8-4d6b-8e7b-4ccb50c5166b', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Vice President of Marketing', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:01.000' AS DateTime), CAST(N'2017-04-10 13:44:01.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'91ff9f47-bb66-4fa7-bdab-4a132615480f', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'ccaefcbe-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'3eb1fcbe-f31d-e711-80d3-00155d00662d', N'627090ff-40a3-4053-8790-584edc5be201', N'94f9b696-f31d-e711-80d3-00155d00662d', N'System Administrator', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:03.000' AS DateTime), CAST(N'2017-04-10 13:44:03.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'df816420-79e6-4f09-a3b9-afe6a357a18f', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'3eb1fcbe-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'e6b4fcbe-f31d-e711-80d3-00155d00662d', N'd892cc0b-28c7-4e88-bd92-72f2c366baed', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Delegate', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:06.000' AS DateTime), CAST(N'2017-04-10 13:44:06.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'4b19f2e1-2ef3-4c06-b7ab-427059b0a14e', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'e6b4fcbe-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'1bb5fcbe-f31d-e711-80d3-00155d00662d', N'c0ed2f4f-6f92-4691-92ba-78f2931e8fba', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Sales Manager', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:06.000' AS DateTime), CAST(N'2017-04-10 13:44:06.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'4c9717c1-622f-4c8a-8bb6-dab2e133ca06', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'1bb5fcbe-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'8eb7fcbe-f31d-e711-80d3-00155d00662d', N'09a25608-d28b-4d47-b57c-79271fe6a525', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Marketing Professional', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:07.000' AS DateTime), CAST(N'2017-04-10 13:44:07.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'73432be6-154e-40fe-bf5f-80767c3e0be0', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'8eb7fcbe-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'8832f4c4-f31d-e711-80d3-00155d00662d', N'debec338-bca7-4882-ae04-84e6ddda2984', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Schedule Manager', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:08.000' AS DateTime), CAST(N'2017-04-10 13:44:08.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'3cc2cf01-baed-4ed6-8f79-18e4304f7339', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'8832f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'5434f4c4-f31d-e711-80d3-00155d00662d', N'85937b6b-91a1-46ed-9778-929fc9f61812', N'94f9b696-f31d-e711-80d3-00155d00662d', N'CEO-Business Manager', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:10.000' AS DateTime), CAST(N'2017-04-10 13:44:10.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'7460bce5-4a12-48cf-b95c-9e0d57422df7', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'5434f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'eb36f4c4-f31d-e711-80d3-00155d00662d', N'2d101bb3-5ced-4122-83f1-94d5efde4e3b', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Support User', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:11.000' AS DateTime), CAST(N'2017-04-10 13:44:11.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'9fd44174-c3ad-4796-8e7d-1b3296204c79', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'eb36f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'a637f4c4-f31d-e711-80d3-00155d00662d', N'd9d602db-2761-4170-877f-983494567c08', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Marketing Manager', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:12.000' AS DateTime), CAST(N'2017-04-10 13:44:12.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'f0f40423-9d71-4124-9656-e9e87257c2d4', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'a637f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'0c3af4c4-f31d-e711-80d3-00155d00662d', N'a4be89ff-7c35-4d69-9900-999c3f603e6f', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Salesperson', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:13.000' AS DateTime), CAST(N'2017-04-10 13:44:13.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'ced8d6a6-14ea-4d43-8f17-6d8e3fb2b603', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'0c3af4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'ff3bf4c4-f31d-e711-80d3-00155d00662d', N'b4b40b17-cf37-4ea8-b2c5-b580f2f48654', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Knowledge Manager', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:15.000' AS DateTime), CAST(N'2017-04-10 13:44:15.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'a4225b64-2000-402d-9bf8-c6804b28de6a', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'ff3bf4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'fb3df4c4-f31d-e711-80d3-00155d00662d', N'119f245c-3cc8-4b62-b31c-d1a046ced15d', N'94f9b696-f31d-e711-80d3-00155d00662d', N'System Customizer', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:16.000' AS DateTime), CAST(N'2017-04-10 13:44:16.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'52dc8606-7b80-46aa-9378-e2db48ce4ecc', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'fb3df4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'd840f4c4-f31d-e711-80d3-00155d00662d', N'dcd60b89-421c-44ae-bff0-dd6323df885c', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Scheduler', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:17.000' AS DateTime), CAST(N'2017-04-10 13:44:17.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'72eecb43-a23e-4f00-a82d-a95e60ed55bf', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'd840f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'7f42f4c4-f31d-e711-80d3-00155d00662d', N'1808b939-dd07-4ca7-aa99-ddd2734378f1', N'94f9b696-f31d-e711-80d3-00155d00662d', N'CSR Manager', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:17.000' AS DateTime), CAST(N'2017-04-10 13:44:17.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'df34eb59-2214-4987-8000-917a9fc23576', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'7f42f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'f744f4c4-f31d-e711-80d3-00155d00662d', N'29123793-6ae5-4955-9f1a-f10ceb9705f1', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Vice President of Sales', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:44:18.000' AS DateTime), CAST(N'2017-04-10 13:44:18.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, 1, NULL, 0, N'23134f8d-932c-4948-aeef-85780be5b16a', N'fd140aad-4df4-11dd-bd17-0019b9312238', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 1, NULL, N'f744f4c4-f31d-e711-80d3-00155d00662d')
INSERT [dbo].[RoleBase] ([RoleId], [RoleTemplateId], [OrganizationId], [Name], [BusinessUnitId], [CreatedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [ParentRoleId], [OverriddenCreatedOn], [ImportSequenceNumber], [IsManaged], [CreatedOnBehalfBy], [ComponentState], [RoleIdUnique], [SolutionId], [OverwriteTime], [ModifiedOnBehalfBy], [IsCustomizable], [SupportingSolutionId], [ParentRootRoleId]) VALUES (N'cb269f84-e19d-e011-b66c-00155db528b6', NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', N'Activity Feeds', N'c6acfcbe-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 14:07:57.000' AS DateTime), CAST(N'2017-04-10 14:28:30.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, 1, NULL, 0, N'0a8a1382-e8ee-4eb5-9ad1-c99df672fefb', N'64a53cec-344d-4db2-a691-4e0323426a9e', CAST(N'1900-01-01 00:00:00.000' AS DateTime), NULL, 0, N'00000000-0000-0000-0000-000000000000', N'cb269f84-e19d-e011-b66c-00155db528b6')
/****** Object:  Index [UQ_RoleBase_RoleIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[RoleBase] ADD  CONSTRAINT [UQ_RoleBase_RoleIdUnique] UNIQUE NONCLUSTERED 
(
	[RoleIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_role_parent_role]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_parent_role] ON [dbo].[RoleBase]
(
	[ParentRoleId] ASC
)
INCLUDE ( 	[ComponentState]) 
WHERE ([ParentRoleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_role_template_roles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_template_roles] ON [dbo].[RoleBase]
(
	[RoleTemplateId] ASC
)
WHERE ([RoleTemplateId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RoleBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_role_parent_root_role]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_parent_root_role] ON [dbo].[RoleBase]
(
	[ParentRootRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RoleBase]
(
	[BusinessUnitId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
