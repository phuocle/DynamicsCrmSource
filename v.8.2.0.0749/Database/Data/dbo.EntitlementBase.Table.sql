USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EntitlementBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitlementBase](
	[OverriddenCreatedOn] [datetime] NULL,
	[SLAId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[RemainingTerms] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[KbAccessLevel] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](160) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TotalTerms] [decimal](23, 10) NULL,
	[VersionNumber] [timestamp] NULL,
	[EntitlementId] [uniqueidentifier] NOT NULL,
	[AllocationTypeCode] [int] NULL,
	[DecreaseRemainingOn] [int] NULL,
	[EntitlementTemplateId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[StartDate] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[EndDate] [datetime] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[StateCode] [int] NULL,
	[RestrictCaseCreation] [bit] NULL,
	[StageId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[AccountId] [uniqueidentifier] NULL,
	[ContactId] [uniqueidentifier] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[AccountIdName] [nvarchar](4000) NULL,
	[ContactIdName] [nvarchar](160) NULL,
	[CustomerIdType] [int] NULL,
	[OwnerIdType] [int] NULL,
	[AccountIdYomiName] [nvarchar](4000) NULL,
	[ContactIdYomiName] [nvarchar](450) NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[IsDefault] [bit] NULL,
 CONSTRAINT [cndx_PrimaryKey_Entitlement] PRIMARY KEY CLUSTERED 
(
	[EntitlementId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[EntitlementBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_customerid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_customerid] ON [dbo].[EntitlementBase]
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[EntitlementBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementBase] ADD  CONSTRAINT [DF_EntitlementBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[EntitlementBase]  WITH CHECK ADD  CONSTRAINT [account_entitlement_Account] FOREIGN KEY([AccountId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[EntitlementBase] CHECK CONSTRAINT [account_entitlement_Account]
GO
ALTER TABLE [dbo].[EntitlementBase]  WITH CHECK ADD  CONSTRAINT [business_unit_entitlement] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[EntitlementBase] CHECK CONSTRAINT [business_unit_entitlement]
GO
ALTER TABLE [dbo].[EntitlementBase]  WITH CHECK ADD  CONSTRAINT [contact_entitlement_ContactId] FOREIGN KEY([ContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[EntitlementBase] CHECK CONSTRAINT [contact_entitlement_ContactId]
GO
ALTER TABLE [dbo].[EntitlementBase]  WITH CHECK ADD  CONSTRAINT [entitlementtemplateid_RelationShip] FOREIGN KEY([EntitlementTemplateId])
REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId])
GO
ALTER TABLE [dbo].[EntitlementBase] CHECK CONSTRAINT [entitlementtemplateid_RelationShip]
GO
ALTER TABLE [dbo].[EntitlementBase]  WITH CHECK ADD  CONSTRAINT [owner_entitlement] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[EntitlementBase] CHECK CONSTRAINT [owner_entitlement]
GO
ALTER TABLE [dbo].[EntitlementBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Entitlement] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[EntitlementBase] CHECK CONSTRAINT [TransactionCurrency_Entitlement]
GO
