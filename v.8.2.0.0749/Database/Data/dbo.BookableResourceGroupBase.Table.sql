USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[BookableResourceGroupBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BookableResourceGroupBase](
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ParentResource] [uniqueidentifier] NULL,
	[ToDate] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[BookableResourceGroupId] [uniqueidentifier] NOT NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[StateCode] [int] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[Name] [nvarchar](100) NULL,
	[StatusCode] [int] NULL,
	[ChildResource] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[FromDate] [datetime] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [PK_bookableresourcegroupBase] PRIMARY KEY CLUSTERED 
(
	[BookableResourceGroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceGroupBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceGroupBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceGroupBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceGroupBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD  CONSTRAINT [DF_BookableResourceGroupBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase]  WITH CHECK ADD  CONSTRAINT [bookableresource_bookableresourcegroup_ChildResource] FOREIGN KEY([ChildResource])
REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] CHECK CONSTRAINT [bookableresource_bookableresourcegroup_ChildResource]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase]  WITH CHECK ADD  CONSTRAINT [bookableresource_bookableresourcegroup_ParentResource] FOREIGN KEY([ParentResource])
REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] CHECK CONSTRAINT [bookableresource_bookableresourcegroup_ParentResource]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase]  WITH CHECK ADD  CONSTRAINT [business_unit_bookableresourcegroup] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] CHECK CONSTRAINT [business_unit_bookableresourcegroup]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase]  WITH CHECK ADD  CONSTRAINT [owner_bookableresourcegroup] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] CHECK CONSTRAINT [owner_bookableresourcegroup]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_bookableresourcegroup] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] CHECK CONSTRAINT [TransactionCurrency_bookableresourcegroup]
GO
