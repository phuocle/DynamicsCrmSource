


--
-- base view for ContractDetail
--
create view dbo.[ContractDetail]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningBusinessUnit],
    [OwningUser],
    [ContractIdName],
    [ContractStateCode],
    [ServiceAddressName],
    [UoMScheduleIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [UoMIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ProductIdName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwningTeam,


	[AccountId],
	[AccountIdName],
	[AccountIdYomiName],
	[ContactId],
	[ContactIdName],
	[ContactIdYomiName],
    -- physical attributes
    [ContractDetailId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Title],
    [ActiveOn],
    [AllotmentsOverage],
    [AllotmentsRemaining],
    [AllotmentsUsed],
    [ContractId],
    [CustomerId],
    [Discount],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Discount_Base],
    [DiscountPercentage],
    [EffectivityCalendar],
    [ExpiresOn],
    [InitialQuantity],
    [LineItemOrder],
    [Net],
    [Net_Base],
    [Price],
    [Price_Base],
    [ProductId],
    [ProductSerialNumber],
    [Rate],
    [Rate_Base],
    [ServiceAddress],
    [ServiceContractUnitsCode],
    [StateCode],
    [StatusCode],
    [TotalAllotments],
    [UoMId],
    [UoMScheduleId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [contract_line_items].[OwnerId],
    [contract_line_items].[OwnerIdType],
    [contract_line_items].[OwningBusinessUnit],
    case when [contract_line_items].OwnerIdType = 8
    then [contract_line_items].OwnerId
    else null
    end,
    [contract_line_items].[Title],
    [contract_line_items].[StateCode],
    [customer_address_contract_line_items].[Name],
    [contract_detail_unit_of_measure_schedule].[Name],
    [lk_contractdetailbase_modifiedonbehalfby].[FullName],
    [lk_contractdetailbase_modifiedonbehalfby].[YomiFullName],
    [lk_contractdetailbase_modifiedby].[FullName],
    [lk_contractdetailbase_modifiedby].[YomiFullName],
    [lk_contractdetailbase_createdby].[FullName],
    [lk_contractdetailbase_createdby].[YomiFullName],
    [unit_of_measurement_contract_line_items].[Name],
    [lk_contractdetailbase_createdonbehalfby].[FullName],
    [lk_contractdetailbase_createdonbehalfby].[YomiFullName],
    [product_contract_line_items].[Name],
    [transactioncurrency_contractdetail].[CurrencyName],

    -- ownership entries
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,


	[AccountId] = case 
		when [ContractDetailBase].[CustomerIdType] = 1 AND [ContractDetailBase].[CustomerId] IS NOT NULL then [ContractDetailBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [ContractDetailBase].[CustomerIdType] = 1 AND [ContractDetailBase].[CustomerId] IS NOT NULL then [ContractDetailBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [ContractDetailBase].[CustomerIdType] = 1 AND [ContractDetailBase].[CustomerId] IS NOT NULL then [ContractDetailBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [ContractDetailBase].[CustomerIdType] = 2 AND [ContractDetailBase].[CustomerId] IS NOT NULL then [ContractDetailBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [ContractDetailBase].[CustomerIdType] = 2 AND [ContractDetailBase].[CustomerId] IS NOT NULL then [ContractDetailBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [ContractDetailBase].[CustomerIdType] = 2 AND [ContractDetailBase].[CustomerId] IS NOT NULL then [ContractDetailBase].[CustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [ContractDetailBase].[ContractDetailId],
    [ContractDetailBase].[CreatedOn],
    [ContractDetailBase].[CreatedBy],
    [ContractDetailBase].[ModifiedOn],
    [ContractDetailBase].[ModifiedBy],
    [ContractDetailBase].[CreatedOnBehalfBy],
    [ContractDetailBase].[ModifiedOnBehalfBy],
    [ContractDetailBase].[VersionNumber],
    [ContractDetailBase].[ImportSequenceNumber],
    [ContractDetailBase].[OverriddenCreatedOn],
    [ContractDetailBase].[TimeZoneRuleVersionNumber],
    [ContractDetailBase].[UTCConversionTimeZoneCode],
    [ContractDetailBase].[Title],
    [ContractDetailBase].[ActiveOn],
    [ContractDetailBase].[AllotmentsOverage],
    [ContractDetailBase].[AllotmentsRemaining],
    [ContractDetailBase].[AllotmentsUsed],
    [ContractDetailBase].[ContractId],
    [ContractDetailBase].[CustomerId],
    [ContractDetailBase].[Discount],
    [ContractDetailBase].[TransactionCurrencyId],
    [ContractDetailBase].[ExchangeRate],
    [ContractDetailBase].[Discount_Base],
    [ContractDetailBase].[DiscountPercentage],
    [ContractDetailBase].[EffectivityCalendar],
    [ContractDetailBase].[ExpiresOn],
    [ContractDetailBase].[InitialQuantity],
    [ContractDetailBase].[LineItemOrder],
    [ContractDetailBase].[Net],
    [ContractDetailBase].[Net_Base],
    [ContractDetailBase].[Price],
    [ContractDetailBase].[Price_Base],
    [ContractDetailBase].[ProductId],
    [ContractDetailBase].[ProductSerialNumber],
    [ContractDetailBase].[Rate],
    [ContractDetailBase].[Rate_Base],
    [ContractDetailBase].[ServiceAddress],
    [ContractDetailBase].[ServiceContractUnitsCode],
    [ContractDetailBase].[StateCode],
    [ContractDetailBase].[StatusCode],
    [ContractDetailBase].[TotalAllotments],
    [ContractDetailBase].[UoMId],
    [ContractDetailBase].[UoMScheduleId],
    [ContractDetailBase].[CustomerIdName],
    [ContractDetailBase].[CustomerIdType],
    [ContractDetailBase].[CustomerIdYomiName]
from [ContractDetailBase] 
    left join [UoMScheduleBase] [contract_detail_unit_of_measure_schedule] on ([ContractDetailBase].[UoMScheduleId] = [contract_detail_unit_of_measure_schedule].[UoMScheduleId])
    left join [ContractBase] [contract_line_items] on ([ContractDetailBase].[ContractId] = [contract_line_items].[ContractId])
    left join [CustomerAddressBase] [customer_address_contract_line_items] on ([ContractDetailBase].[ServiceAddress] = [customer_address_contract_line_items].[CustomerAddressId])
    left join [SystemUserBase] [lk_contractdetailbase_createdby] on ([ContractDetailBase].[CreatedBy] = [lk_contractdetailbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_contractdetailbase_createdonbehalfby] on ([ContractDetailBase].[CreatedOnBehalfBy] = [lk_contractdetailbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_contractdetailbase_modifiedby] on ([ContractDetailBase].[ModifiedBy] = [lk_contractdetailbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_contractdetailbase_modifiedonbehalfby] on ([ContractDetailBase].[ModifiedOnBehalfBy] = [lk_contractdetailbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [product_contract_line_items] on ([ContractDetailBase].[ProductId] = [product_contract_line_items].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_contractdetail] on ([ContractDetailBase].[TransactionCurrencyId] = [transactioncurrency_contractdetail].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_contract_line_items] on ([ContractDetailBase].[UoMId] = [unit_of_measurement_contract_line_items].[UoMId])
    left join OwnerBase XXowner on ([contract_line_items].OwnerId = XXowner.OwnerId)
