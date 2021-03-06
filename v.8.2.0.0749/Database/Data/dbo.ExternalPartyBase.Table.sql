USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ExternalPartyBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ExternalPartyBase](
	[ExchangeRate] [decimal](23, 10) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[StatusCode] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[LastEnabledOn] [datetime] NULL,
	[Type] [nvarchar](300) NULL,
	[StateCode] [int] NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[LastDisabledOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[CorrelationKey] [nvarchar](50) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[MiddleName] [nvarchar](50) NULL,
	[VersionNumber] [timestamp] NULL,
	[FullName] [nvarchar](300) NULL,
	[ExternalPartyIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[EmailAddress] [nvarchar](100) NULL,
	[ModifiedOn] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ExternalPartyId] [uniqueidentifier] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[YomiLastName] [nvarchar](150) NULL,
	[YomiFullName] [nvarchar](450) NULL,
	[YomiMiddleName] [nvarchar](150) NULL,
	[YomiFirstName] [nvarchar](150) NULL,
 CONSTRAINT [cndx_PrimaryKey_ExternalParty] PRIMARY KEY CLUSTERED 
(
	[ExternalPartyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ExternalPartyBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ExternalPartyBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_FirstName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_FirstName] ON [dbo].[ExternalPartyBase]
(
	[FirstName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_FullName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_FullName] ON [dbo].[ExternalPartyBase]
(
	[FullName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_LastName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_LastName] ON [dbo].[ExternalPartyBase]
(
	[LastName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_middlename]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_middlename] ON [dbo].[ExternalPartyBase]
(
	[MiddleName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ExternalPartyBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExternalPartyBase] ADD  CONSTRAINT [DF_ExternalPartyBase_ExternalPartyIdUnique]  DEFAULT (newid()) FOR [ExternalPartyIdUnique]
GO
ALTER TABLE [dbo].[ExternalPartyBase] ADD  CONSTRAINT [DF_ExternalPartyBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ExternalPartyBase]  WITH CHECK ADD  CONSTRAINT [business_unit_externalparty] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ExternalPartyBase] CHECK CONSTRAINT [business_unit_externalparty]
GO
ALTER TABLE [dbo].[ExternalPartyBase]  WITH CHECK ADD  CONSTRAINT [owner_externalparty] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ExternalPartyBase] CHECK CONSTRAINT [owner_externalparty]
GO
ALTER TABLE [dbo].[ExternalPartyBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_ExternalParty] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ExternalPartyBase] CHECK CONSTRAINT [TransactionCurrency_ExternalParty]
GO
