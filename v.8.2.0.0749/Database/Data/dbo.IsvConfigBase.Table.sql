USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[IsvConfigBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IsvConfigBase](
	[ConfigXML] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOn] [datetime] NULL,
	[IsvConfigId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [PK_IsvConfigBase] PRIMARY KEY CLUSTERED 
(
	[IsvConfigId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[IsvConfigBase] ([ConfigXML], [CreatedBy], [OrganizationId], [CreatedOn], [IsvConfigId], [ModifiedBy], [ModifiedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy]) VALUES (N'<configuration version="3.0.0000.0"><Root></Root><ServiceManagement><AppointmentBook><SmoothScrollLimit>2000</SmoothScrollLimit><TimeBlocks><TimeBlock EntityType="4214" StatusCode="1" CssClass="ganttBlockServiceActivityStatus1" /><TimeBlock EntityType="4214" StatusCode="2" CssClass="ganttBlockServiceActivityStatus2" /><TimeBlock EntityType="4214" StatusCode="3" CssClass="ganttBlockServiceActivityStatus3" /><TimeBlock EntityType="4214" StatusCode="4" CssClass="ganttBlockServiceActivityStatus4" /><TimeBlock EntityType="4214" StatusCode="6" CssClass="ganttBlockServiceActivityStatus6" /><TimeBlock EntityType="4214" StatusCode="7" CssClass="ganttBlockServiceActivityStatus7" /><TimeBlock EntityType="4214" StatusCode="8" CssClass="ganttBlockServiceActivityStatus8" /><TimeBlock EntityType="4214" StatusCode="9" CssClass="ganttBlockServiceActivityStatus9" /><TimeBlock EntityType="4214" StatusCode="10" CssClass="ganttBlockServiceActivityStatus10" /><TimeBlock EntityType="4201" StatusCode="1" CssClass="ganttBlockAppointmentStatus1" /><TimeBlock EntityType="4201" StatusCode="2" CssClass="ganttBlockAppointmentStatus2" /><TimeBlock EntityType="4201" StatusCode="3" CssClass="ganttBlockAppointmentStatus3" /><TimeBlock EntityType="4201" StatusCode="4" CssClass="ganttBlockAppointmentStatus4" /><TimeBlock EntityType="4201" StatusCode="5" CssClass="ganttBlockAppointmentStatus5" /><TimeBlock EntityType="4201" StatusCode="6" CssClass="ganttBlockAppointmentStatus6" /></TimeBlocks></AppointmentBook></ServiceManagement></configuration>', N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'94f9b696-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:48:39.000' AS DateTime), N'd1633762-f41d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:48:39.000' AS DateTime), N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5')
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IsvConfigBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
