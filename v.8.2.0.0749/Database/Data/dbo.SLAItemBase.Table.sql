USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SLAItemBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SLAItemBase](
	[ApplicableWhenXml] [nvarchar](max) NULL,
	[RelatedField] [nvarchar](100) NULL,
	[WorkflowId] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[SLAItemId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](160) NOT NULL,
	[FailureAfter] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[SuccessConditionsXml] [nvarchar](max) NULL,
	[SLAItemIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[SequenceNumber] [int] NULL,
	[WarnAfter] [int] NULL,
	[SLAId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[IsManaged] [bit] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ComponentState] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_SLAItemid] PRIMARY KEY CLUSTERED 
(
	[SLAItemId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_SLAItemBase_SLAItemIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SLAItemBase] ADD  CONSTRAINT [UQ_SLAItemBase_SLAItemIdUnique] UNIQUE NONCLUSTERED 
(
	[SLAItemIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_SLAId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [cndx_SLAId] ON [dbo].[SLAItemBase]
(
	[SLAId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD  CONSTRAINT [DF_SLAItemBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD  CONSTRAINT [DF_SLAItemBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD  CONSTRAINT [DF_SLAItemBase_SLAItemIdUnique]  DEFAULT (newid()) FOR [SLAItemIdUnique]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD  CONSTRAINT [DF_SLAItemBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD  CONSTRAINT [DF_SLAItemBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
