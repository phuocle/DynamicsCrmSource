USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ExternalPartyItemBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExternalPartyItemBase](
	[LastEnabledOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ChannelAccessProfileId] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[ExternalPartyItemId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ExternalPartyId] [uniqueidentifier] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[ModifiedOn] [datetime] NULL,
	[Name] [nvarchar](300) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[LastDisabledOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[RegardingObjectIdYomiName] [nvarchar](4000) NULL,
	[RegardingObjectTypeCode] [int] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_ExternalPartyItem] PRIMARY KEY CLUSTERED 
(
	[ExternalPartyItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ExternalPartyItemBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[ExternalPartyItemBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
