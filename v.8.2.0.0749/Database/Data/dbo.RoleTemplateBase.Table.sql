USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RoleTemplateBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RoleTemplateBase](
	[RoleTemplateId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[Upgrading] [bit] NOT NULL CONSTRAINT [DF_RoleTemplateBase_Upgrading]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_RoleTemplate] PRIMARY KEY CLUSTERED 
(
	[RoleTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'ecfd0b44-5720-45e3-ae68-417ddb0fb654', N'Customer Service Representative', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'6caba073-59a8-4d6b-8e7b-4ccb50c5166b', N'Vice President of Marketing', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'627090ff-40a3-4053-8790-584edc5be201', N'System Administrator', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'd892cc0b-28c7-4e88-bd92-72f2c366baed', N'Delegate', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'c0ed2f4f-6f92-4691-92ba-78f2931e8fba', N'Sales Manager', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'09a25608-d28b-4d47-b57c-79271fe6a525', N'Marketing Professional', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'debec338-bca7-4882-ae04-84e6ddda2984', N'Schedule Manager', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'85937b6b-91a1-46ed-9778-929fc9f61812', N'CEO-Business Manager', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'2d101bb3-5ced-4122-83f1-94d5efde4e3b', N'Support User', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'd9d602db-2761-4170-877f-983494567c08', N'Marketing Manager', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'a4be89ff-7c35-4d69-9900-999c3f603e6f', N'Salesperson', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'b4b40b17-cf37-4ea8-b2c5-b580f2f48654', N'Knowledge Manager', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'119f245c-3cc8-4b62-b31c-d1a046ced15d', N'System Customizer', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'dcd60b89-421c-44ae-bff0-dd6323df885c', N'Scheduler', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'1808b939-dd07-4ca7-aa99-ddd2734378f1', N'CSR Manager', 0)
INSERT [dbo].[RoleTemplateBase] ([RoleTemplateId], [Name], [Upgrading]) VALUES (N'29123793-6ae5-4955-9f1a-f10ceb9705f1', N'Vice President of Sales', 0)
