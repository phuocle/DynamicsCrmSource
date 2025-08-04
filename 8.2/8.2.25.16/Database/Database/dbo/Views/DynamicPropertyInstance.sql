


--
-- base view for DynamicPropertyInstance
--
create view dbo.[DynamicPropertyInstance]
 (
    -- logical attributes
    [DynamicPropertyIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [TransactionCurrencyIdName],

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
    [RegardingObjectId],
    [VersionNumber],
    [RegardingObjectIdName],
    [DynamicPropertyId],
    [ValueInteger],
    [ValueDecimal],
    [ValueDouble],
    [ValueString],
    [CreatedOn],
    [ModifiedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [ExchangeRate],
    [TransactionCurrencyId],
    [RegardingObjectIdType],
    [validationstatus]
) with view_metadata as
select
    -- logical attributes
    [DynamicProperty_DynamicPropertyInstance].[Name],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy].[FullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy].[YomiFullName],
    [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby].[YomiFullName],
    [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby].[FullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedBy].[FullName],
    [lk_Dynamicpropertyinsatanceattribute_ModifiedBy].[YomiFullName],
    [Dynamicpropertyinsatance_createdby].[YomiFullName],
    [Dynamicpropertyinsatance_createdby].[FullName],
    [TransactionCurrency_Dynamicpropertyinsatance].[CurrencyName],

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
    [DynamicPropertyInstanceBase].[RegardingObjectId],
    [DynamicPropertyInstanceBase].[VersionNumber],
    [DynamicPropertyInstanceBase].[RegardingObjectIdName],
    [DynamicPropertyInstanceBase].[DynamicPropertyId],
    [DynamicPropertyInstanceBase].[ValueInteger],
    [DynamicPropertyInstanceBase].[ValueDecimal],
    [DynamicPropertyInstanceBase].[ValueDouble],
    [DynamicPropertyInstanceBase].[ValueString],
    [DynamicPropertyInstanceBase].[CreatedOn],
    [DynamicPropertyInstanceBase].[ModifiedOn],
    [DynamicPropertyInstanceBase].[CreatedBy],
    [DynamicPropertyInstanceBase].[CreatedOnBehalfBy],
    [DynamicPropertyInstanceBase].[ModifiedBy],
    [DynamicPropertyInstanceBase].[ModifiedOnBehalfBy],
    [DynamicPropertyInstanceBase].[OwningBusinessUnit],
    [DynamicPropertyInstanceBase].[ExchangeRate],
    [DynamicPropertyInstanceBase].[TransactionCurrencyId],
    [DynamicPropertyInstanceBase].[RegardingObjectIdType],
    [DynamicPropertyInstanceBase].[validationstatus]
from [DynamicPropertyInstanceBase] 
    left join [DynamicPropertyBase] [DynamicProperty_DynamicPropertyInstance] on ([DynamicPropertyInstanceBase].[DynamicPropertyId] = [DynamicProperty_DynamicPropertyInstance].[DynamicPropertyId])
    left join [SystemUserBase] [Dynamicpropertyinsatance_createdby] with(nolock) on ([DynamicPropertyInstanceBase].[CreatedBy] = [Dynamicpropertyinsatance_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby] with(nolock) on ([DynamicPropertyInstanceBase].[CreatedOnBehalfBy] = [lk_Dynamicpropertyinsatanceattribute_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_Dynamicpropertyinsatanceattribute_ModifiedBy] with(nolock) on ([DynamicPropertyInstanceBase].[ModifiedBy] = [lk_Dynamicpropertyinsatanceattribute_ModifiedBy].[SystemUserId])
    left join [SystemUserBase] [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy] with(nolock) on ([DynamicPropertyInstanceBase].[ModifiedOnBehalfBy] = [lk_Dynamicpropertyinsatanceattribute_ModifiedOnBehalfBy].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Dynamicpropertyinsatance] on ([DynamicPropertyInstanceBase].[DynamicPropertyInstanceid] = [TransactionCurrency_Dynamicpropertyinsatance].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([DynamicPropertyInstanceBase].OwnerId = XXowner.OwnerId)
