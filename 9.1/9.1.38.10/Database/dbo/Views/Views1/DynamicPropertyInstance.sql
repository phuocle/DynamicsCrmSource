


--
-- base view for DynamicPropertyInstance
--
create view dbo.[DynamicPropertyInstance]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [DynamicPropertyIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [DynamicPropertyInstanceid],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ValueInteger],
    [ValueDecimal],
    [ValueDouble],
    [ValueString],
    [DynamicPropertyId],
    [validationstatus],
    [TransactionCurrencyId],
    [ExchangeRate],
    [RegardingObjectId],
    [RegardingObjectIdType],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [TransactionCurrency_Dynamicpropertyinsatance].[CurrencyName],
    [DynamicProperty_DynamicPropertyInstance].[Name],
    [Dynamicpropertyinsatance_createdby].[FullName],
    [Dynamicpropertyinsatance_createdby].[YomiFullName],
    [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby].[FullName],
    [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby].[YomiFullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedBy].[FullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedBy].[YomiFullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy].[FullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy].[YomiFullName],

    -- ownership entries
    OwnerId = [DynamicPropertyInstanceBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [DynamicPropertyInstanceBase].[DynamicPropertyInstanceid],
    [DynamicPropertyInstanceBase].[CreatedOn],
    [DynamicPropertyInstanceBase].[CreatedBy],
    [DynamicPropertyInstanceBase].[ModifiedOn],
    [DynamicPropertyInstanceBase].[ModifiedBy],
    [DynamicPropertyInstanceBase].[CreatedOnBehalfBy],
    [DynamicPropertyInstanceBase].[ModifiedOnBehalfBy],
    [DynamicPropertyInstanceBase].[OwningBusinessUnit],
    [DynamicPropertyInstanceBase].[VersionNumber],
    [DynamicPropertyInstanceBase].[ImportSequenceNumber],
    [DynamicPropertyInstanceBase].[OverriddenCreatedOn],
    [DynamicPropertyInstanceBase].[TimeZoneRuleVersionNumber],
    [DynamicPropertyInstanceBase].[UTCConversionTimeZoneCode],
    [DynamicPropertyInstanceBase].[Name],
    [DynamicPropertyInstanceBase].[ValueInteger],
    [DynamicPropertyInstanceBase].[ValueDecimal],
    [DynamicPropertyInstanceBase].[ValueDouble],
    [DynamicPropertyInstanceBase].[ValueString],
    [DynamicPropertyInstanceBase].[DynamicPropertyId],
    [DynamicPropertyInstanceBase].[validationstatus],
    [DynamicPropertyInstanceBase].[TransactionCurrencyId],
    [DynamicPropertyInstanceBase].[ExchangeRate],
    [DynamicPropertyInstanceBase].[RegardingObjectId],
    [DynamicPropertyInstanceBase].[RegardingObjectIdType],
    [DynamicPropertyInstanceBase].[RegardingObjectIdName],
    [DynamicPropertyInstanceBase].[RegardingObjectIdYomiName]
from [DynamicPropertyInstanceBase] 
    left join [DynamicPropertyBase] [DynamicProperty_DynamicPropertyInstance] on ([DynamicPropertyInstanceBase].[DynamicPropertyId] = [DynamicProperty_DynamicPropertyInstance].[DynamicPropertyId])
    left join [SystemUserBase] [Dynamicpropertyinsatance_createdby] on ([DynamicPropertyInstanceBase].[CreatedBy] = [Dynamicpropertyinsatance_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby] on ([DynamicPropertyInstanceBase].[CreatedOnBehalfBy] = [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_Dynamicpropertyinsatanceattribute_ModifiedBy] on ([DynamicPropertyInstanceBase].[ModifiedBy] = [lk_Dynamicpropertyinsatanceattribute_ModifiedBy].[SystemUserId])
    left join [SystemUserBase] [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy] on ([DynamicPropertyInstanceBase].[ModifiedOnBehalfBy] = [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Dynamicpropertyinsatance] on ([DynamicPropertyInstanceBase].[DynamicPropertyInstanceid] = [TransactionCurrency_Dynamicpropertyinsatance].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([DynamicPropertyInstanceBase].OwnerId = XXowner.OwnerId)
