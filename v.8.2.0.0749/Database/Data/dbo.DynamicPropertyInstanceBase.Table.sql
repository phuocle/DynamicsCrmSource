USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DynamicPropertyInstanceBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DynamicPropertyInstanceBase](
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[ValueInteger] [int] NULL,
	[ValueString] [nvarchar](1024) NULL,
	[ValueDecimal] [decimal](23, 10) NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[VersionNumber] [timestamp] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[validationstatus] [bit] NULL,
	[CreatedOn] [datetime] NULL,
	[ValueDouble] [float] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[DynamicPropertyInstanceid] [uniqueidentifier] NOT NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[DynamicPropertyId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[RegardingObjectIdName] [nvarchar](4000) NULL,
	[RegardingObjectIdType] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_DynamicPropertyInstance] PRIMARY KEY CLUSTERED 
(
	[DynamicPropertyInstanceid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyInstanceBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_DynamicPropertyId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_DynamicPropertyId] ON [dbo].[DynamicPropertyInstanceBase]
(
	[DynamicPropertyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_RegargingObjectId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_RegargingObjectId] ON [dbo].[DynamicPropertyInstanceBase]
(
	[RegardingObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] ADD  CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] ADD  CONSTRAINT [DF_DynamicPropertyInstanceBase_validationstatus]  DEFAULT ((0)) FOR [validationstatus]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] ADD  CONSTRAINT [DF_DynamicPropertyInstanceBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase]  WITH CHECK ADD  CONSTRAINT [business_unit_dynamicproperyinstance] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] CHECK CONSTRAINT [business_unit_dynamicproperyinstance]
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase]  WITH CHECK ADD  CONSTRAINT [Owner_dynamicproperyinstance] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[DynamicPropertyInstanceBase] CHECK CONSTRAINT [Owner_dynamicproperyinstance]
GO
