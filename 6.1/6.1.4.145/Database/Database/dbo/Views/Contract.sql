


--
-- base view for Contract
--
create view dbo.[Contract]
 (
    -- logical attributes
    [CreatedByName],
    [EntityImage_Timestamp],
    [TransactionCurrencyIdName],
    [ContractTemplateIdName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ContractTemplateAbbreviation],
    [ModifiedByYomiName],
    [BillToAddressName],
    [EntityImage],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [ServiceAddressName],
    [CreatedByYomiName],
    [OriginatingContractName],
    [EntityImage_URL],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,


	[AccountId],
	[AccountIdName],
	[AccountIdYomiName],
	[ContactId],
	[ContactIdName],
	[ContactIdYomiName],

	[BillingAccountId],
	[BillingAccountIdName],
	[BillingAccountIdYomiName],
	[BillingContactId],
	[BillingContactIdName],
	[BillingContactIdYomiName],
    -- physical attributes
    [ContractId],
    [OwningBusinessUnit],
    [ContractTemplateId],
    [ContractServiceLevelCode],
    [ServiceAddress],
    [BillToAddress],
    [ContractNumber],
    [ActiveOn],
    [ExpiresOn],
    [CancelOn],
    [Title],
    [ContractLanguage],
    [BillingStartOn],
    [EffectivityCalendar],
    [BillingEndOn],
    [BillingFrequencyCode],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [AllotmentTypeCode],
    [UseDiscountAsPercentage],
    [ModifiedOn],
    [TotalPrice],
    [VersionNumber],
    [TotalDiscount],
    [StateCode],
    [NetPrice],
    [StatusCode],
    [OriginatingContract],
    [Duration],
    [CustomerId],
    [CustomerIdName],
    [CustomerIdType],
    [BillingCustomerId],
    [BillingCustomerIdName],
    [BillingCustomerIdType],
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [TransactionCurrencyId],
    [ExchangeRate],
    [TotalDiscount_Base],
    [NetPrice_Base],
    [TotalPrice_Base],
    [BillingCustomerIdYomiName],
    [CustomerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_contractbase_createdby].[FullName],
    [lk_contract_entityimage].[ImageTimestamp],
    [transactioncurrency_contract].[CurrencyName],
    [contract_template_contracts].[Name],
    [lk_contractbase_createdonbehalfby].[YomiFullName],
    [lk_contractbase_modifiedonbehalfby].[YomiFullName],
    [lk_contractbase_createdonbehalfby].[FullName],
    [contract_template_contracts].[Abbreviation],
    [lk_contractbase_modifiedby].[YomiFullName],
    [customer_address_contracts_as_billing_address].[Name],
    [lk_contract_entityimage].[ImageData],
    [lk_contractbase_modifiedby].[FullName],
    [lk_contractbase_modifiedonbehalfby].[FullName],
    [customer_address_contracts_as_service_address].[Name],
    [lk_contractbase_createdby].[YomiFullName],
    [contract_originating_contract].[Title],
    [lk_contract_entityimage].[ImageURL],

    -- ownership entries
    OwnerId = [ContractBase].OwnerId,
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


	[AccountId] = case 
		when [ContractBase].[CustomerIdType] = 1 AND [ContractBase].[CustomerId] IS NOT NULL then [ContractBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [ContractBase].[CustomerIdType] = 1 AND [ContractBase].[CustomerId] IS NOT NULL then [ContractBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [ContractBase].[CustomerIdType] = 1 AND [ContractBase].[CustomerId] IS NOT NULL then [ContractBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [ContractBase].[CustomerIdType] = 2 AND [ContractBase].[CustomerId] IS NOT NULL then [ContractBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [ContractBase].[CustomerIdType] = 2 AND [ContractBase].[CustomerId] IS NOT NULL then [ContractBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [ContractBase].[CustomerIdType] = 2 AND [ContractBase].[CustomerId] IS NOT NULL then [ContractBase].[CustomerIdYomiName]
		else NULL
		end,

	[BillingAccountId] = case 
		when [ContractBase].[BillingCustomerIdType] = 1 AND [ContractBase].[BillingCustomerId] IS NOT NULL then [ContractBase].[BillingCustomerId]
		else NULL
		end,
	[BillingAccountIdName] = case 
		when [ContractBase].[BillingCustomerIdType] = 1 AND [ContractBase].[BillingCustomerId] IS NOT NULL then [ContractBase].[BillingCustomerIdName]
		else NULL
		end,
	[BillingAccountIdYomiName] = case 
		when [ContractBase].[BillingCustomerIdType] = 1 AND [ContractBase].[BillingCustomerId] IS NOT NULL then [ContractBase].[BillingCustomerIdYomiName]
		else NULL
		end,
	[BillingContactId] = case 
		when [ContractBase].[BillingCustomerIdType] = 2 AND [ContractBase].[BillingCustomerId] IS NOT NULL then [ContractBase].[BillingCustomerId]
		else NULL
		end,
	[BillingContactIdName] = case 
		when [ContractBase].[BillingCustomerIdType] = 2 AND [ContractBase].[BillingCustomerId] IS NOT NULL then [ContractBase].[BillingCustomerIdName]
		else NULL
		end,
	[BillingContactIdYomiName] = case 
		when [ContractBase].[BillingCustomerIdType] = 2 AND [ContractBase].[BillingCustomerId] IS NOT NULL then [ContractBase].[BillingCustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [ContractBase].[ContractId],
    [ContractBase].[OwningBusinessUnit],
    [ContractBase].[ContractTemplateId],
    [ContractBase].[ContractServiceLevelCode],
    [ContractBase].[ServiceAddress],
    [ContractBase].[BillToAddress],
    [ContractBase].[ContractNumber],
    [ContractBase].[ActiveOn],
    [ContractBase].[ExpiresOn],
    [ContractBase].[CancelOn],
    [ContractBase].[Title],
    [ContractBase].[ContractLanguage],
    [ContractBase].[BillingStartOn],
    [ContractBase].[EffectivityCalendar],
    [ContractBase].[BillingEndOn],
    [ContractBase].[BillingFrequencyCode],
    [ContractBase].[CreatedBy],
    [ContractBase].[CreatedOn],
    [ContractBase].[ModifiedBy],
    [ContractBase].[AllotmentTypeCode],
    [ContractBase].[UseDiscountAsPercentage],
    [ContractBase].[ModifiedOn],
    [ContractBase].[TotalPrice],
    [ContractBase].[VersionNumber],
    [ContractBase].[TotalDiscount],
    [ContractBase].[StateCode],
    [ContractBase].[NetPrice],
    [ContractBase].[StatusCode],
    [ContractBase].[OriginatingContract],
    [ContractBase].[Duration],
    [ContractBase].[CustomerId],
    [ContractBase].[CustomerIdName],
    [ContractBase].[CustomerIdType],
    [ContractBase].[BillingCustomerId],
    [ContractBase].[BillingCustomerIdName],
    [ContractBase].[BillingCustomerIdType],
    [ContractBase].[TimeZoneRuleVersionNumber],
    [ContractBase].[OverriddenCreatedOn],
    [ContractBase].[ImportSequenceNumber],
    [ContractBase].[UTCConversionTimeZoneCode],
    [ContractBase].[TransactionCurrencyId],
    [ContractBase].[ExchangeRate],
    [ContractBase].[TotalDiscount_Base],
    [ContractBase].[NetPrice_Base],
    [ContractBase].[TotalPrice_Base],
    [ContractBase].[BillingCustomerIdYomiName],
    [ContractBase].[CustomerIdYomiName],
    [ContractBase].[CreatedOnBehalfBy],
    [ContractBase].[ModifiedOnBehalfBy],
    [ContractBase].[EntityImageId]
from [ContractBase] 
    left join [ContractBase] [contract_originating_contract] on ([ContractBase].[OriginatingContract] = [contract_originating_contract].[ContractId])
    left join [ContractTemplateBase] [contract_template_contracts] on ([ContractBase].[ContractTemplateId] = [contract_template_contracts].[ContractTemplateId] and [contract_template_contracts].OverwriteTime = 0 and [contract_template_contracts].ComponentState = 0)
    left join [CustomerAddressBase] [customer_address_contracts_as_billing_address] on ([ContractBase].[BillToAddress] = [customer_address_contracts_as_billing_address].[CustomerAddressId])
    left join [CustomerAddressBase] [customer_address_contracts_as_service_address] on ([ContractBase].[ServiceAddress] = [customer_address_contracts_as_service_address].[CustomerAddressId])
    left join [ImageDescriptor] [lk_contract_entityimage] on ([ContractBase].[EntityImageId] = [lk_contract_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_contractbase_createdby] with(nolock) on ([ContractBase].[CreatedBy] = [lk_contractbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_contractbase_createdonbehalfby] with(nolock) on ([ContractBase].[CreatedOnBehalfBy] = [lk_contractbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_contractbase_modifiedby] with(nolock) on ([ContractBase].[ModifiedBy] = [lk_contractbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_contractbase_modifiedonbehalfby] with(nolock) on ([ContractBase].[ModifiedOnBehalfBy] = [lk_contractbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_contract] on ([ContractBase].[TransactionCurrencyId] = [transactioncurrency_contract].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ContractBase].OwnerId = XXowner.OwnerId)
