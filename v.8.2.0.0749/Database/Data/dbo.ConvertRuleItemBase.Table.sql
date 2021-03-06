USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ConvertRuleItemBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConvertRuleItemBase](
	[ModifiedOn] [datetime] NULL,
	[ConditionId] [uniqueidentifier] NULL,
	[ConvertRuleItemIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[ConvertRuleId] [uniqueidentifier] NOT NULL,
	[QueueId] [uniqueidentifier] NULL,
	[IsManaged] [bit] NOT NULL,
	[SequenceNumber] [int] NULL,
	[PropertiesXml] [nvarchar](max) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ConditionXml] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[ConvertRuleItemId] [uniqueidentifier] NOT NULL,
	[ComponentState] [int] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[Description] [nvarchar](max) NULL,
	[WorkflowId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_ConvertRuleItemId] PRIMARY KEY CLUSTERED 
(
	[ConvertRuleItemId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_ConvertRuleItem_ConvertRuleItemIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD  CONSTRAINT [UQ_ConvertRuleItem_ConvertRuleItemIdUnique] UNIQUE NONCLUSTERED 
(
	[ConvertRuleItemIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ConvertRuleItemBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD  CONSTRAINT [DF_ConvertRuleItemBase_ConvertRuleItemIdUnique]  DEFAULT (newid()) FOR [ConvertRuleItemIdUnique]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD  CONSTRAINT [DF_ConvertRuleItemBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD  CONSTRAINT [DF_ConvertRuleItemBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD  CONSTRAINT [DF_ConvertRuleItemBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ConvertRuleItemBase] ADD  CONSTRAINT [DF_ConvertRuleItemBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
