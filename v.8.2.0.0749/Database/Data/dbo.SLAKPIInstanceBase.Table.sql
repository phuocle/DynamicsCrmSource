USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SLAKPIInstanceBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SLAKPIInstanceBase](
	[ModifiedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[WarningTime] [datetime] NULL,
	[FailureTime] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ComputedWarningTime] [datetime] NULL,
	[SucceededOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[WarningTimeReached] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[Regarding] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[SLAKPIInstanceId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](160) NOT NULL,
	[ComputedFailureTime] [datetime] NULL,
	[Status] [int] NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[RegardingIdName] [nvarchar](4000) NULL,
	[RegardingYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_SLAKPIInstanceId] PRIMARY KEY CLUSTERED 
(
	[SLAKPIInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [cndx_Regarding]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [cndx_Regarding] ON [dbo].[SLAKPIInstanceBase]
(
	[Regarding] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SLAKPIInstanceBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAKPIInstanceBase] ADD  CONSTRAINT [DF_SLAKPIInstanceBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[SLAKPIInstanceBase] ADD  CONSTRAINT [DF_SLAKPIInstanceBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[SLAKPIInstanceBase]  WITH CHECK ADD  CONSTRAINT [slakpiinstance_owner] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[SLAKPIInstanceBase] CHECK CONSTRAINT [slakpiinstance_owner]
GO
