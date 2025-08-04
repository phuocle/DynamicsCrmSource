CREATE TABLE [dbo].[DynamicPropertyBase]
(
[MinValueInteger] [int] NULL,
[RootDynamicPropertyId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[DefaultValueString] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[MaxLengthString] [int] NULL,
[MaxValueDecimal] [decimal] (23, 10) NULL,
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
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsRequired] [bit] NOT NULL CONSTRAINT [DF_DynamicPropertyBase_IsRequired] DEFAULT ((0)),
[OverwrittenDynamicPropertyId] [uniqueidentifier] NULL,
[DefaultValueOptionSet] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[MinValueDecimal] [decimal] (23, 10) NULL,
[statecode] [int] NULL,
[IsHidden] [bit] NOT NULL CONSTRAINT [DF_DynamicPropertyBase_IsHidden] DEFAULT ((0)),
[IsReadOnly] [bit] NOT NULL CONSTRAINT [DF_DynamicPropertyBase_IsReadOnly] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[statuscode] [int] NULL,
[DefaultValueDouble] [float] NULL,
[MinValueDouble] [float] NULL,
[MaxValueDouble] [float] NULL,
[DynamicPropertyId] [uniqueidentifier] NOT NULL,
[DefaultValueDecimal] [decimal] (23, 10) NULL,
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyBase] ADD CONSTRAINT [cndx_PrimaryKey_DynamicProperty] PRIMARY KEY CLUSTERED  ([DynamicPropertyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TitleDynamicPropertyId] ON [dbo].[DynamicPropertyBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicProperty] ON [dbo].[DynamicPropertyBase] ([RegardingObjectId]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyBase] ADD CONSTRAINT [dynamicproperty_base_dynamicproperty] FOREIGN KEY ([BaseDynamicPropertyId]) REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId])
GO
