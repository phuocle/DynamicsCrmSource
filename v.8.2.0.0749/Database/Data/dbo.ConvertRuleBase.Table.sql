USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ConvertRuleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConvertRuleBase](
	[SolutionId] [uniqueidentifier] NOT NULL,
	[AllowUnknownSender] [bit] NULL,
	[SendAutomaticResponse] [bit] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CheckBlockedSocialProfile] [bit] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CheckDirectMessages] [bit] NULL,
	[StatusCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[ComponentState] [int] NOT NULL,
	[CheckActiveEntitlement] [bit] NULL,
	[ResponseTemplateId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[CheckIfResolved] [bit] NULL,
	[Description] [nvarchar](max) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[QueueId] [uniqueidentifier] NULL,
	[ConvertRuleId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[StateCode] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ConvertRuleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[SourceTypeCode] [int] NULL,
	[IsManaged] [bit] NOT NULL,
	[WorkflowId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ResolvedSince] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[SourceChannelTypeCode] [int] NULL,
	[RecordVersion] [nvarchar](25) NOT NULL,
	[ChannelPropertyGroupId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_ConvertRule] PRIMARY KEY CLUSTERED 
(
	[ConvertRuleId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_ConvertRuleBase_ConvertRuleIdUnique]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [UQ_ConvertRuleBase_ConvertRuleIdUnique] UNIQUE NONCLUSTERED 
(
	[ConvertRuleIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ConvertRuleBase]
(
	[QueueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ConvertRuleBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_AllowUnknownSender]  DEFAULT ((0)) FOR [AllowUnknownSender]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_SendAutomaticResponse]  DEFAULT ((0)) FOR [SendAutomaticResponse]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_CheckBlockedSocialProfile]  DEFAULT ((0)) FOR [CheckBlockedSocialProfile]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_CheckDirectMessages]  DEFAULT ((0)) FOR [CheckDirectMessages]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_CheckActiveEntitlement]  DEFAULT ((0)) FOR [CheckActiveEntitlement]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_CheckIfResolved]  DEFAULT ((0)) FOR [CheckIfResolved]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_ConvertRuleIdUnique]  DEFAULT (newid()) FOR [ConvertRuleIdUnique]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ConvertRuleBase] ADD  CONSTRAINT [DF_ConvertRuleBase_RecordVersion]  DEFAULT ('7.0.0.0') FOR [RecordVersion]
GO
