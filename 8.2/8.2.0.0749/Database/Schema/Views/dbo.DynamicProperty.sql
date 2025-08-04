SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for DynamicProperty
--
create view [dbo].[DynamicProperty]
 (
    -- logical attributes
    [DefaultValueOptionSetName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [BaseDynamicPropertyIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [RegardingObjectIdName],

    -- physical attributes
    [DynamicPropertyId],
    [Name],
    [Description],
    [DataType],
    [DefaultValueInteger],
    [DefaultValueString],
    [DefaultValueDecimal],
    [BaseDynamicPropertyId],
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
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [VersionNumber],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [OverwrittenDynamicPropertyId],
    [RootDynamicPropertyId],
    [ImportSequenceNumber],
    [OrganizationId],
    [MaxLengthString],
    [DefaultValueOptionSet],
    [RegardingObjectTypeCode]
) with view_metadata as
select
    -- logical attributes
    [DefaultValueOptionSet_DynamicProperty].[DynamicPropertyOptionName],
    [lk_DynamicProperty_createdonbehalfby].[FullName],
    [lk_DynamicProperty_createdonbehalfby].[YomiFullName],
    [dynamicproperty_organization].[Name],
    [dynamicproperty_base_dynamicproperty].[Name],
    [lk_DynamicProperty_modifiedby].[FullName],
    [lk_DynamicProperty_modifiedby].[YomiFullName],
    [lk_DynamicProperty_modifiedonbehalfby].[FullName],
    [lk_DynamicProperty_modifiedonbehalfby].[YomiFullName],
    [lk_DynamicProperty_createdby].[YomiFullName],
    [lk_DynamicProperty_createdby].[FullName],
    [Product_DynamicProperty].[Name],

    -- physical attribute
    [DynamicPropertyBase].[DynamicPropertyId],
    [DynamicPropertyBase].[Name],
    [DynamicPropertyBase].[Description],
    [DynamicPropertyBase].[DataType],
    [DynamicPropertyBase].[DefaultValueInteger],
    [DynamicPropertyBase].[DefaultValueString],
    [DynamicPropertyBase].[DefaultValueDecimal],
    [DynamicPropertyBase].[BaseDynamicPropertyId],
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
    [DynamicPropertyBase].[CreatedBy],
    [DynamicPropertyBase].[CreatedOn],
    [DynamicPropertyBase].[CreatedOnBehalfBy],
    [DynamicPropertyBase].[ModifiedBy],
    [DynamicPropertyBase].[VersionNumber],
    [DynamicPropertyBase].[ModifiedOn],
    [DynamicPropertyBase].[ModifiedOnBehalfBy],
    [DynamicPropertyBase].[OverriddenCreatedOn],
    [DynamicPropertyBase].[OverwrittenDynamicPropertyId],
    [DynamicPropertyBase].[RootDynamicPropertyId],
    [DynamicPropertyBase].[ImportSequenceNumber],
    [DynamicPropertyBase].[OrganizationId],
    [DynamicPropertyBase].[MaxLengthString],
    [DynamicPropertyBase].[DefaultValueOptionSet],
    [DynamicPropertyBase].[RegardingObjectTypeCode]
from [DynamicPropertyBase] 
    left join [DynamicPropertyOptionSetItemBase] [DefaultValueOptionSet_DynamicProperty] on ([DynamicPropertyBase].[DefaultValueOptionSet] = [DefaultValueOptionSet_DynamicProperty].[DynamicPropertyOptionSetValueId])
    left join [DynamicPropertyBase] [dynamicproperty_base_dynamicproperty] on ([DynamicPropertyBase].[BaseDynamicPropertyId] = [dynamicproperty_base_dynamicproperty].[DynamicPropertyId])
    left join [OrganizationBase] [dynamicproperty_organization] with(nolock) on ([DynamicPropertyBase].[OrganizationId] = [dynamicproperty_organization].[OrganizationId])
    left join [SystemUserBase] [lk_DynamicProperty_createdby] with(nolock) on ([DynamicPropertyBase].[CreatedBy] = [lk_DynamicProperty_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicProperty_createdonbehalfby] with(nolock) on ([DynamicPropertyBase].[CreatedOnBehalfBy] = [lk_DynamicProperty_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicProperty_modifiedby] with(nolock) on ([DynamicPropertyBase].[ModifiedBy] = [lk_DynamicProperty_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_DynamicProperty_modifiedonbehalfby] with(nolock) on ([DynamicPropertyBase].[ModifiedOnBehalfBy] = [lk_DynamicProperty_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [Product_DynamicProperty] on ([DynamicPropertyBase].[RegardingObjectId] = [Product_DynamicProperty].[ProductId])
GO
