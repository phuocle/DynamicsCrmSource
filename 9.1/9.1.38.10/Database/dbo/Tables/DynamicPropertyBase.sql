CREATE TABLE [dbo].[DynamicPropertyBase] (
    [DynamicPropertyId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [DataType]                     INT              NULL,
    [DefaultValueInteger]          INT              NULL,
    [DefaultValueString]           NVARCHAR (1024)  NULL,
    [DefaultValueDecimal]          DECIMAL (23, 10) NULL,
    [BaseDynamicPropertyId]        UNIQUEIDENTIFIER NULL,
    [OverwrittenDynamicPropertyId] UNIQUEIDENTIFIER NULL,
    [RootDynamicPropertyId]        UNIQUEIDENTIFIER NULL,
    [MinValueDecimal]              DECIMAL (23, 10) NULL,
    [MaxValueDecimal]              DECIMAL (23, 10) NULL,
    [Precision]                    INT              NULL,
    [statecode]                    INT              NULL,
    [statuscode]                   INT              NULL,
    [RegardingObjectId]            UNIQUEIDENTIFIER NULL,
    [DefaultValueDouble]           FLOAT (53)       NULL,
    [MinValueDouble]               FLOAT (53)       NULL,
    [MaxValueDouble]               FLOAT (53)       NULL,
    [MinValueInteger]              INT              NULL,
    [MaxValueInteger]              INT              NULL,
    [IsReadOnly]                   BIT              CONSTRAINT [DF_DynamicPropertyBase_IsReadOnly] DEFAULT ((0)) NOT NULL,
    [IsHidden]                     BIT              CONSTRAINT [DF_DynamicPropertyBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [IsRequired]                   BIT              CONSTRAINT [DF_DynamicPropertyBase_IsRequired] DEFAULT ((0)) NOT NULL,
    [MaxLengthString]              INT              NULL,
    [DefaultValueOptionSet]        UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    [RegardingObjectIdYomiName]    NVARCHAR (4000)  NULL,
    [DefaultAttributeValue]        NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicProperty] PRIMARY KEY CLUSTERED ([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [dynamicproperty_base_dynamicproperty] FOREIGN KEY ([BaseDynamicPropertyId]) REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DynamicPropertyBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DynamicPropertyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_TitleDynamicPropertyId]
    ON [dbo].[DynamicPropertyBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_Product_DynamicProperty]
    ON [dbo].[DynamicPropertyBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_dynamicproperty_base_dynamicproperty]
    ON [dbo].[DynamicPropertyBase]([BaseDynamicPropertyId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

