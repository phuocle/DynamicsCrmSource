USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[FieldPermissionBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldPermissionBase](
	[FieldPermissionIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_FieldPermissionBase_FieldPermissionIdUnique]  DEFAULT (newid()),
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_ComponentState]  DEFAULT ((0)),
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FieldPermissionBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[CanRead] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_CanRead]  DEFAULT ((0)),
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_FieldPermissionBase_IsManaged]  DEFAULT ((0)),
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[CanCreate] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_CanCreate]  DEFAULT ((0)),
	[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
	[EntityName] [int] NOT NULL,
	[FieldPermissionId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_FieldPermissionBase_OverwriteTime]  DEFAULT ((0)),
	[VersionNumber] [timestamp] NULL,
	[CanUpdate] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_CanUpdate]  DEFAULT ((0)),
	[AttributeLogicalName] [nvarchar](50) NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_FieldPermission] PRIMARY KEY CLUSTERED 
(
	[FieldPermissionId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[FieldPermissionBase] ([FieldPermissionIdUnique], [ComponentState], [SolutionId], [CanRead], [IsManaged], [SupportingSolutionId], [CanCreate], [FieldSecurityProfileId], [EntityName], [FieldPermissionId], [OverwriteTime], [CanUpdate], [AttributeLogicalName]) VALUES (N'0d71f4e0-98e7-4cc0-83cc-3b468d578ccf', 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 0, 1, NULL, 4, N'572329c1-a042-4e22-be47-367c6374ea45', 8, N'fdc2dbd3-f31d-e711-80d3-00155d00662d', CAST(N'1900-01-01 00:00:00.000' AS DateTime), 4, N'sharepointemailaddress')
INSERT [dbo].[FieldPermissionBase] ([FieldPermissionIdUnique], [ComponentState], [SolutionId], [CanRead], [IsManaged], [SupportingSolutionId], [CanCreate], [FieldSecurityProfileId], [EntityName], [FieldPermissionId], [OverwriteTime], [CanUpdate], [AttributeLogicalName]) VALUES (N'057eea2d-b1f1-499f-8aac-1466ff5a92bc', 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 4, 1, NULL, 4, N'572329c1-a042-4e22-be47-367c6374ea45', 1, N'fec2dbd3-f31d-e711-80d3-00155d00662d', CAST(N'1900-01-01 00:00:00.000' AS DateTime), 4, N'openrevenue')
INSERT [dbo].[FieldPermissionBase] ([FieldPermissionIdUnique], [ComponentState], [SolutionId], [CanRead], [IsManaged], [SupportingSolutionId], [CanCreate], [FieldSecurityProfileId], [EntityName], [FieldPermissionId], [OverwriteTime], [CanUpdate], [AttributeLogicalName]) VALUES (N'fa75424c-122a-4a04-b5f9-786475b669de', 0, N'fd140aad-4df4-11dd-bd17-0019b9312238', 4, 1, NULL, 0, N'572329c1-a042-4e22-be47-367c6374ea45', 1, N'ffc2dbd3-f31d-e711-80d3-00155d00662d', CAST(N'1900-01-01 00:00:00.000' AS DateTime), 0, N'opendeals')
/****** Object:  Index [UQ_FieldPermissionBase_FieldPermissionIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[FieldPermissionBase] ADD  CONSTRAINT [UQ_FieldPermissionBase_FieldPermissionIdUnique] UNIQUE NONCLUSTERED 
(
	[FieldPermissionIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[FieldPermissionBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_fieldsecurityprofile_permissions]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_fieldsecurityprofile_permissions] ON [dbo].[FieldPermissionBase]
(
	[FieldSecurityProfileId] ASC
)
INCLUDE ( 	[ComponentState]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
