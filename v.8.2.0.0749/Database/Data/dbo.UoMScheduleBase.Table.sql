USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UoMScheduleBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UoMScheduleBase](
	[UoMScheduleId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[BaseUoMName] [nvarchar](100) NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[StatusCode] [int] NULL,
	[StateCode] [int] NOT NULL CONSTRAINT [DF_UoMScheduleBase_StateCode]  DEFAULT ((0)),
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_UoMSchedule] PRIMARY KEY CLUSTERED 
(
	[UoMScheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[UoMScheduleBase] ([UoMScheduleId], [OrganizationId], [Name], [Description], [CreatedOn], [CreatedBy], [ModifiedOn], [ModifiedBy], [ImportSequenceNumber], [BaseUoMName], [OverriddenCreatedOn], [StatusCode], [StateCode], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [CreatedByExternalParty], [ModifiedByExternalParty]) VALUES (N'7b3de461-a4c6-40f3-ac69-6e5dca249d89', N'94f9b696-f31d-e711-80d3-00155d00662d', N'Default Unit', NULL, CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', NULL, N'Primary Unit', NULL, NULL, 0, NULL, NULL, NULL, NULL)
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_UoMScheduleBase]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[UoMScheduleBase] ADD  CONSTRAINT [AK1_UoMScheduleBase] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UoMScheduleBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
