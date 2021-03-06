USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PositionBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PositionBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[ParentPositionId] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[ImportSequenceNumber] [int] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[statecode] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[StatusCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[Description] [nvarchar](100) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[PositionId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [PK_PositionBase] PRIMARY KEY CLUSTERED 
(
	[PositionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[PositionBase]
(
	[statecode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[PositionBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_ParentPositionId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ParentPositionId] ON [dbo].[PositionBase]
(
	[ParentPositionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Sync]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[PositionBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PositionBase]  WITH CHECK ADD  CONSTRAINT [position_parent_position] FOREIGN KEY([ParentPositionId])
REFERENCES [dbo].[PositionBase] ([PositionId])
GO
ALTER TABLE [dbo].[PositionBase] CHECK CONSTRAINT [position_parent_position]
GO
ALTER TABLE [dbo].[PositionBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_position] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[PositionBase] CHECK CONSTRAINT [transactioncurrency_position]
GO
