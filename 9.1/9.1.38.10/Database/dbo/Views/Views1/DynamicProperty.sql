


--
-- base view for DynamicProperty
--
create view dbo.[DynamicProperty]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [BaseDynamicPropertyIdName],
    [OrganizationIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [RegardingObjectIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [DefaultValueOptionSetName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [DynamicPropertyId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [Description],
    [DataType],
    [DefaultValueInteger],
    [DefaultValueString],
    [DefaultValueDecimal],
    [BaseDynamicPropertyId],
    [OverwrittenDynamicPropertyId],
    [RootDynamicPropertyId],
    [MinValueDecimal],
    [MaxValueDecimal],
    [Precision],
    [statecode],
    [statuscode],
    [RegardingObjectId],
    [DefaultValueDouble],
    [MinValueDouble],
    [MaxValueDouble],
    [MinValueInteger],
    [MaxValueInteger],
    [IsReadOnly],
    [IsHidden],
    [IsRequired],
    [MaxLengthString],
    [DefaultValueOptionSet],
    [RegardingObjectTypeCode],
    [RegardingObjectIdYomiName],
    [DefaultAttributeValue]
) with view_metadata as
select
    -- logical attributes
    [lk_DynamicProperty_modifiedonbehalfby].[FullName],
    [lk_DynamicProperty_modifiedonbehalfby].[YomiFullName],
    [dynamicproperty_base_dynamicproperty].[Name],
    [dynamicproperty_organization].[Name],
    [lk_DynamicProperty_modifiedby].[FullName],
    [lk_DynamicProperty_modifiedby].[YomiFullName],
    [Product_DynamicProperty].[Name],
    [lk_DynamicProperty_createdby].[FullName],
    [lk_DynamicProperty_createdby].[YomiFullName],
    [DefaultValueOptionSet_DynamicProperty].[DynamicPropertyOptionName],
    [lk_DynamicProperty_createdonbehalfby].[FullName],
    [lk_DynamicProperty_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [DynamicPropertyBase].[DynamicPropertyId],
    [DynamicPropertyBase].[CreatedOn],
    [DynamicPropertyBase].[CreatedBy],
    [DynamicPropertyBase].[ModifiedOn],
    [DynamicPropertyBase].[ModifiedBy],
    [DynamicPropertyBase].[CreatedOnBehalfBy],
    [DynamicPropertyBase].[ModifiedOnBehalfBy],
    [DynamicPropertyBase].[OrganizationId],
    [DynamicPropertyBase].[VersionNumber],
    [DynamicPropertyBase].[ImportSequenceNumber],
    [DynamicPropertyBase].[OverriddenCreatedOn],
    [DynamicPropertyBase].[TimeZoneRuleVersionNumber],
    [DynamicPropertyBase].[UTCConversionTimeZoneCode],
    [DynamicPropertyBase].[Name],
    [DynamicPropertyBase].[Description],
    [DynamicPropertyBase].[DataType],
    [DynamicPropertyBase].[DefaultValueInteger],
    [DynamicPropertyBase].[DefaultValueString],
    [DynamicPropertyBase].[DefaultValueDecimal],
    [DynamicPropertyBase].[BaseDynamicPropertyId],
    [DynamicPropertyBase].[OverwrittenDynamicPropertyId],
    [DynamicPropertyBase].[RootDynamicPropertyId],
    [DynamicPropertyBase].[MinValueDecimal],
    [DynamicPropertyBase].[MaxValueDecimal],
    [DynamicPropertyBase].[Precision],
    [DynamicPropertyBase].[statecode],
    [DynamicPropertyBase].[statuscode],
    [DynamicPropertyBase].[RegardingObjectId],
    [DynamicPropertyBase].[DefaultValueDouble],
    [DynamicPropertyBase].[MinValueDouble],
    [DynamicPropertyBase].[MaxValueDouble],
    [DynamicPropertyBase].[MinValueInteger],
    [DynamicPropertyBase].[MaxValueInteger],
    [DynamicPropertyBase].[IsReadOnly],
    [DynamicPropertyBase].[IsHidden],
    [DynamicPropertyBase].[IsRequired],
    [DynamicPropertyBase].[MaxLengthString],
    [DynamicPropertyBase].[DefaultValueOptionSet],
    [DynamicPropertyBase].[RegardingObjectTypeCode],
    [DynamicPropertyBase].[RegardingObjectIdYomiName],
    [DynamicPropertyBase].[DefaultAttributeValue]
from [DynamicPropertyBase] 
    left join [DynamicPropertyOptionSetItemBase] [DefaultValueOptionSet_DynamicProperty] on ([DynamicPropertyBase].[DefaultValueOptionSet] = [DefaultValueOptionSet_DynamicProperty].[DynamicPropertyOptionSetValueId])
    left join [DynamicPropertyBase] [dynamicproperty_base_dynamicproperty] on ([DynamicPropertyBase].[BaseDynamicPropertyId] = [dynamicproperty_base_dynamicproperty].[DynamicPropertyId])
    left join [OrganizationBase] [dynamicproperty_organization] on ([DynamicPropertyBase].[OrganizationId] = [dynamicproperty_organization].[OrganizationId])
    left join [SystemUserBase] [lk_DynamicProperty_createdby] on ([DynamicPropertyBase].[CreatedBy] = [lk_DynamicProperty_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicProperty_createdonbehalfby] on ([DynamicPropertyBase].[CreatedOnBehalfBy] = [lk_DynamicProperty_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicProperty_modifiedby] on ([DynamicPropertyBase].[ModifiedBy] = [lk_DynamicProperty_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicProperty_modifiedonbehalfby] on ([DynamicPropertyBase].[ModifiedOnBehalfBy] = [lk_DynamicProperty_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [Product_DynamicProperty] on ([DynamicPropertyBase].[RegardingObjectId] = [Product_DynamicProperty].[ProductId])
