USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SLABase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SLABase](
	[StateCode] [int] NOT NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[SLAId] [uniqueidentifier] NOT NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ChangedAttributeList] [nvarchar](500) NULL,
	[ApplicableFrom] [nvarchar](100) NULL,
	[WorkflowId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[Name] [nvarchar](160) NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[AllowPauseResume] [bit] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[IsDefault] [bit] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[BusinessHoursId] [uniqueidentifier] NULL,
	[SLAType] [int] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ApplicableFromPickList] [int] NULL,
	[ObjectTypeCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[SLAIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[IsManaged] [bit] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[PrimaryEntityOTC] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_SLAid] PRIMARY KEY CLUSTERED 
(
	[SLAId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_SLABase_SLAIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [UQ_SLABase_SLAIdUnique] UNIQUE NONCLUSTERED 
(
	[SLAIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SLABase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SLABase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_AllowPauseResume]  DEFAULT ((0)) FOR [AllowPauseResume]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_SLAType]  DEFAULT ((0)) FOR [SLAType]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_SLAIdUnique]  DEFAULT (newid()) FOR [SLAIdUnique]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SLABase] ADD  CONSTRAINT [DF_SLABase_PrimaryEntityOTC]  DEFAULT ((112)) FOR [PrimaryEntityOTC]
GO
