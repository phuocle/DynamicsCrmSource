USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[FieldSecurityProfileBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FieldSecurityProfileBase](
	[Description] [nvarchar](max) NULL,
	[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
	[ComponentState] [int] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_ComponentState]  DEFAULT ((0)),
	[ModifiedOn] [datetime] NULL,
	[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_OverwriteTime]  DEFAULT ((0)),
	[CreatedOn] [datetime] NULL,
	[IsManaged] [bit] NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_IsManaged]  DEFAULT ((0)),
	[ModifiedBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
	[FieldSecurityProfileIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL CONSTRAINT [DF_FieldSecurityProfileBase_FieldSecurityProfileIdUnique]  DEFAULT (newid()),
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_FieldSecurityProfile] PRIMARY KEY CLUSTERED 
(
	[FieldSecurityProfileId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[FieldSecurityProfileBase] ([Description], [SolutionId], [ComponentState], [ModifiedOn], [OverwriteTime], [CreatedOn], [IsManaged], [ModifiedBy], [OrganizationId], [CreatedBy], [Name], [ModifiedOnBehalfBy], [FieldSecurityProfileId], [FieldSecurityProfileIdUnique], [CreatedOnBehalfBy], [SupportingSolutionId]) VALUES (N'System Administrator', N'fd140aad-4df4-11dd-bd17-0019b9312238', 0, CAST(N'2017-04-10 13:44:33.000' AS DateTime), CAST(N'1900-01-01 00:00:00.000' AS DateTime), CAST(N'2017-04-10 13:44:33.000' AS DateTime), 1, NULL, N'94f9b696-f31d-e711-80d3-00155d00662d', NULL, N'System Administrator', NULL, N'572329c1-a042-4e22-be47-367c6374ea45', N'6f4df781-a2fa-4d01-999b-441119357b47', NULL, NULL)
/****** Object:  Index [UQ_FieldSecurityProfileBase_FieldSecurityProfileIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[FieldSecurityProfileBase] ADD  CONSTRAINT [UQ_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] UNIQUE NONCLUSTERED 
(
	[FieldSecurityProfileIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[FieldSecurityProfileBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
