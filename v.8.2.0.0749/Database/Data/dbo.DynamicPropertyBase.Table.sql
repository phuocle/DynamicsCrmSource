USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[DynamicPropertyBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DynamicPropertyBase](
	[MinValueInteger] [int] NULL,
	[RootDynamicPropertyId] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[DefaultValueString] [nvarchar](1024) NULL,
	[MaxLengthString] [int] NULL,
	[MaxValueDecimal] [decimal](23, 10) NULL,
	[BaseDynamicPropertyId] [uniqueidentifier] NULL,
	[Precision] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[RegardingObjectId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[DataType] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[DefaultValueInteger] [int] NULL,
	[MaxValueInteger] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[CreatedOn] [datetime] NULL,
	[Description] [nvarchar](max) NULL,
	[IsRequired] [bit] NOT NULL,
	[OverwrittenDynamicPropertyId] [uniqueidentifier] NULL,
	[DefaultValueOptionSet] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[MinValueDecimal] [decimal](23, 10) NULL,
	[statecode] [int] NULL,
	[IsHidden] [bit] NOT NULL,
	[IsReadOnly] [bit] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[statuscode] [int] NULL,
	[DefaultValueDouble] [float] NULL,
	[MinValueDouble] [float] NULL,
	[MaxValueDouble] [float] NULL,
	[DynamicPropertyId] [uniqueidentifier] NOT NULL,
	[DefaultValueDecimal] [decimal](23, 10) NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_DynamicProperty] PRIMARY KEY CLUSTERED 
(
	[DynamicPropertyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_Product_DynamicProperty]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicProperty] ON [dbo].[DynamicPropertyBase]
(
	[RegardingObjectId] ASC
)
WHERE ([RegardingObjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_TitleDynamicPropertyId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_TitleDynamicPropertyId] ON [dbo].[DynamicPropertyBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyBase] ADD  CONSTRAINT [DF_DynamicPropertyBase_IsRequired]  DEFAULT ((0)) FOR [IsRequired]
GO
ALTER TABLE [dbo].[DynamicPropertyBase] ADD  CONSTRAINT [DF_DynamicPropertyBase_IsHidden]  DEFAULT ((0)) FOR [IsHidden]
GO
ALTER TABLE [dbo].[DynamicPropertyBase] ADD  CONSTRAINT [DF_DynamicPropertyBase_IsReadOnly]  DEFAULT ((0)) FOR [IsReadOnly]
GO
ALTER TABLE [dbo].[DynamicPropertyBase]  WITH CHECK ADD  CONSTRAINT [dynamicproperty_base_dynamicproperty] FOREIGN KEY([BaseDynamicPropertyId])
REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId])
GO
ALTER TABLE [dbo].[DynamicPropertyBase] CHECK CONSTRAINT [dynamicproperty_base_dynamicproperty]
GO
