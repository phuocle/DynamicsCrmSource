


--
-- base view for ContractDetail
--
create view dbo.[ContractDetail]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [ServiceAddressName],
    [ModifiedOnBehalfByYomiName],
    [ProductIdName],
    [UoMScheduleIdName],
    [OwningBusinessUnit],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [ModifiedByName],
    [OwningUser],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ContractIdName],
    [ContractStateCode],
    [CreatedOnBehalfByName],
    [UoMIdName],
    [TransactionCurrencyIdName],


	[AccountId],
	[AccountIdName],
	[AccountIdYomiName],
	[ContactId],
	[ContactIdName],
	[ContactIdYomiName],
    -- physical attributes
    [ContractDetailId],
    [ServiceAddress],
    [UoMId],
    [ProductId],
    [ProductSerialNumber],
    [ContractId],
    [LineItemOrder],
    [ServiceContractUnitsCode],
    [InitialQuantity],
    [Title],
    [EffectivityCalendar],
    [ActiveOn],
    [CreatedOn],
    [ExpiresOn],
    [CreatedBy],
    [TotalAllotments],
    [ModifiedBy],
    [Rate],
    [ModifiedOn],
    [VersionNumber],
    [Price],
    [Discount],
    [Net],
    [StateCode],
    [AllotmentsRemaining],
    [StatusCode],
    [AllotmentsUsed],
    [UoMScheduleId],
    [CustomerId],
    [CustomerIdName],
    [CustomerIdType],
    [DiscountPercentage],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TransactionCurrencyId],
    [ExchangeRate],
    [UTCConversionTimeZoneCode],
    [Discount_Base],
    [Rate_Base],
    [Price_Base],
    [Net_Base],
    [CustomerIdYomiName],
    [AllotmentsOverage],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [contract_line_items].[OwnerId],
    [contract_line_items].[OwnerIdType],
    [customer_address_contract_line_items].[Name],
    [lk_contractdetailbase_modifiedonbehalfby].[YomiFullName],
    [product_contract_line_items].[Name],
    [contract_detail_unit_of_measure_schedule].[Name],
    [contract_line_items].[OwningBusinessUnit],
    [lk_contractdetailbase_modifiedby].[YomiFullName],
    [lk_contractdetailbase_createdby].[YomiFullName],
    [lk_contractdetailbase_modifiedby].[FullName],
    case when [contract_line_items].OwnerIdType = 8
    then [contract_line_items].OwnerId
    else null
    end,
    [lk_contractdetailbase_modifiedonbehalfby].[FullName],
    [lk_contractdetailbase_createdby].[FullName],
    [lk_contractdetailbase_createdonbehalfby].[YomiFullName],
    [contract_line_items].[Title],
    [contract_line_items].[StateCode],
    [lk_contractdetailbase_createdonbehalfby].[FullName],
    [unit_of_measurement_contract_line_items].[Name],
    [transactioncurrency_contractdetail].[CurrencyName],


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
    [ContractDetailBase].[ServiceAddress],
    [ContractDetailBase].[UoMId],
    [ContractDetailBase].[ProductId],
    [ContractDetailBase].[ProductSerialNumber],
    [ContractDetailBase].[ContractId],
    [ContractDetailBase].[LineItemOrder],
    [ContractDetailBase].[ServiceContractUnitsCode],
    [ContractDetailBase].[InitialQuantity],
    [ContractDetailBase].[Title],
    [ContractDetailBase].[EffectivityCalendar],
    [ContractDetailBase].[ActiveOn],
    [ContractDetailBase].[CreatedOn],
    [ContractDetailBase].[ExpiresOn],
    [ContractDetailBase].[CreatedBy],
    [ContractDetailBase].[TotalAllotments],
    [ContractDetailBase].[ModifiedBy],
    [ContractDetailBase].[Rate],
    [ContractDetailBase].[ModifiedOn],
    [ContractDetailBase].[VersionNumber],
    [ContractDetailBase].[Price],
    [ContractDetailBase].[Discount],
    [ContractDetailBase].[Net],
    [ContractDetailBase].[StateCode],
    [ContractDetailBase].[AllotmentsRemaining],
    [ContractDetailBase].[StatusCode],
    [ContractDetailBase].[AllotmentsUsed],
    [ContractDetailBase].[UoMScheduleId],
    [ContractDetailBase].[CustomerId],
    [ContractDetailBase].[CustomerIdName],
    [ContractDetailBase].[CustomerIdType],
    [ContractDetailBase].[DiscountPercentage],
    [ContractDetailBase].[TimeZoneRuleVersionNumber],
    [ContractDetailBase].[ImportSequenceNumber],
    [ContractDetailBase].[OverriddenCreatedOn],
    [ContractDetailBase].[TransactionCurrencyId],
    [ContractDetailBase].[ExchangeRate],
    [ContractDetailBase].[UTCConversionTimeZoneCode],
    [ContractDetailBase].[Discount_Base],
    [ContractDetailBase].[Rate_Base],
    [ContractDetailBase].[Price_Base],
    [ContractDetailBase].[Net_Base],
    [ContractDetailBase].[CustomerIdYomiName],
    [ContractDetailBase].[AllotmentsOverage],
    [ContractDetailBase].[CreatedOnBehalfBy],
    [ContractDetailBase].[ModifiedOnBehalfBy]
from [ContractDetailBase] 
    left join [UoMScheduleBase] [contract_detail_unit_of_measure_schedule] on ([ContractDetailBase].[UoMScheduleId] = [contract_detail_unit_of_measure_schedule].[UoMScheduleId])
    left join [ContractBase] [contract_line_items] on ([ContractDetailBase].[ContractId] = [contract_line_items].[ContractId])
    left join [CustomerAddressBase] [customer_address_contract_line_items] on ([ContractDetailBase].[ServiceAddress] = [customer_address_contract_line_items].[CustomerAddressId])
    left join [SystemUserBase] [lk_contractdetailbase_createdby] with(nolock) on ([ContractDetailBase].[CreatedBy] = [lk_contractdetailbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_contractdetailbase_createdonbehalfby] with(nolock) on ([ContractDetailBase].[CreatedOnBehalfBy] = [lk_contractdetailbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_contractdetailbase_modifiedby] with(nolock) on ([ContractDetailBase].[ModifiedBy] = [lk_contractdetailbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_contractdetailbase_modifiedonbehalfby] with(nolock) on ([ContractDetailBase].[ModifiedOnBehalfBy] = [lk_contractdetailbase_modifiedonbehalfby].[SystemUserId])
    left join [ProductBase] [product_contract_line_items] on ([ContractDetailBase].[ProductId] = [product_contract_line_items].[ProductId])
    left join [TransactionCurrencyBase] [transactioncurrency_contractdetail] on ([ContractDetailBase].[TransactionCurrencyId] = [transactioncurrency_contractdetail].[TransactionCurrencyId])
    left join [UoMBase] [unit_of_measurement_contract_line_items] on ([ContractDetailBase].[UoMId] = [unit_of_measurement_contract_line_items].[UoMId])
