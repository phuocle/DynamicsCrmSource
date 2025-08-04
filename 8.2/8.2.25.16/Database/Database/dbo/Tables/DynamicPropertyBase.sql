CREATE TABLE [dbo].[DynamicPropertyBase] (
    [MinValueInteger]              INT              NULL,
    [RootDynamicPropertyId]        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [DefaultValueString]           NVARCHAR (1024)  NULL,
    [MaxLengthString]              INT              NULL,
    [MaxValueDecimal]              DECIMAL (23, 10) NULL,
    [BaseDynamicPropertyId]        UNIQUEIDENTIFIER NULL,
    [Precision]                    INT              NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]            UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [DataType]                     INT              NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [DefaultValueInteger]          INT              NULL,
    [MaxValueInteger]              INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [CreatedOn]                    DATETIME         NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [IsRequired]                   BIT              CONSTRAINT [DF_DynamicPropertyBase_IsRequired] DEFAULT ((0)) NOT NULL,
    [OverwrittenDynamicPropertyId] UNIQUEIDENTIFIER NULL,
    [DefaultValueOptionSet]        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]         INT              NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [MinValueDecimal]              DECIMAL (23, 10) NULL,
    [statecode]                    INT              NULL,
    [IsHidden]                     BIT              CONSTRAINT [DF_DynamicPropertyBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [IsReadOnly]                   BIT              CONSTRAINT [DF_DynamicPropertyBase_IsReadOnly] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [statuscode]                   INT              NULL,
    [DefaultValueDouble]           FLOAT (53)       NULL,
    [MinValueDouble]               FLOAT (53)       NULL,
    [MaxValueDouble]               FLOAT (53)       NULL,
    [DynamicPropertyId]            UNIQUEIDENTIFIER NOT NULL,
    [DefaultValueDecimal]          DECIMAL (23, 10) NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicProperty] PRIMARY KEY CLUSTERED ([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [dynamicproperty_base_dynamicproperty] FOREIGN KEY ([BaseDynamicPropertyId]) REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicProperty]
    ON [dbo].[DynamicPropertyBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TitleDynamicPropertyId]
    ON [dbo].[DynamicPropertyBase]([Name] ASC) WITH (FILLFACTOR = 80);

