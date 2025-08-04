


--
-- base view for Contract
--
create view dbo.[Contract]
 (
    -- logical attributes
    [BillToAddressName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [EntityImage_Timestamp],
    [EntityImage],
    [EntityImage_URL],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [ServiceAddressName],
    [ContractTemplateAbbreviation],
    [ContractTemplateIdName],
    [OriginatingContractName],
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
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [EmailAddress],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Title],
    [ActiveOn],
    [AllotmentTypeCode],
    [BillingCustomerId],
    [BillingEndOn],
    [BillingFrequencyCode],
    [BillingStartOn],
    [BillToAddress],
    [CancelOn],
    [ContractLanguage],
    [ContractNumber],
    [ContractServiceLevelCode],
    [ContractTemplateId],
    [CustomerId],
    [Duration],
    [EffectivityCalendar],
    [ExpiresOn],
    [NetPrice],
    [TransactionCurrencyId],
    [ExchangeRate],
    [NetPrice_Base],
    [OriginatingContract],
    [ServiceAddress],
    [StateCode],
    [StatusCode],
    [TotalDiscount],
    [TotalDiscount_Base],
    [TotalPrice],
    [TotalPrice_Base],
    [UseDiscountAsPercentage],
    [EntityImageId],
    [BillingCustomerIdName],
    [BillingCustomerIdType],
    [BillingCustomerIdYomiName],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [customer_address_contracts_as_billing_address].[Name],
    [lk_contractbase_modifiedby].[FullName],
    [lk_contractbase_modifiedby].[YomiFullName],
    [lk_contract_entityimage].[ImageTimestamp],
    [lk_contract_entityimage].[ImageData],
    [lk_contract_entityimage].[ImageURL],
    [lk_contractbase_createdby].[FullName],
    [lk_contractbase_createdby].[YomiFullName],
    [lk_contractbase_createdonbehalfby].[FullName],
    [lk_contractbase_createdonbehalfby].[YomiFullName],
    [transactioncurrency_contract].[CurrencyName],
    [customer_address_contracts_as_service_address].[Name],
    [contract_template_contracts].[Abbreviation],
    [contract_template_contracts].[Name],
    [contract_originating_contract].[Title],
    [lk_contractbase_modifiedonbehalfby].[FullName],
    [lk_contractbase_modifiedonbehalfby].[YomiFullName],

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
    [ContractBase].[CreatedOn],
    [ContractBase].[CreatedBy],
    [ContractBase].[ModifiedOn],
    [ContractBase].[ModifiedBy],
    [ContractBase].[CreatedOnBehalfBy],
    [ContractBase].[ModifiedOnBehalfBy],
    [ContractBase].[OwningBusinessUnit],
    [ContractBase].[VersionNumber],
    [ContractBase].[EmailAddress],
    [ContractBase].[ImportSequenceNumber],
    [ContractBase].[OverriddenCreatedOn],
    [ContractBase].[TimeZoneRuleVersionNumber],
    [ContractBase].[UTCConversionTimeZoneCode],
    [ContractBase].[Title],
    [ContractBase].[ActiveOn],
    [ContractBase].[AllotmentTypeCode],
    [ContractBase].[BillingCustomerId],
    [ContractBase].[BillingEndOn],
    [ContractBase].[BillingFrequencyCode],
    [ContractBase].[BillingStartOn],
    [ContractBase].[BillToAddress],
    [ContractBase].[CancelOn],
    [ContractBase].[ContractLanguage],
    [ContractBase].[ContractNumber],
    [ContractBase].[ContractServiceLevelCode],
    [ContractBase].[ContractTemplateId],
    [ContractBase].[CustomerId],
    [ContractBase].[Duration],
    [ContractBase].[EffectivityCalendar],
    [ContractBase].[ExpiresOn],
    [ContractBase].[NetPrice],
    [ContractBase].[TransactionCurrencyId],
    [ContractBase].[ExchangeRate],
    [ContractBase].[NetPrice_Base],
    [ContractBase].[OriginatingContract],
    [ContractBase].[ServiceAddress],
    [ContractBase].[StateCode],
    [ContractBase].[StatusCode],
    [ContractBase].[TotalDiscount],
    [ContractBase].[TotalDiscount_Base],
    [ContractBase].[TotalPrice],
    [ContractBase].[TotalPrice_Base],
    [ContractBase].[UseDiscountAsPercentage],
    [ContractBase].[EntityImageId],
    [ContractBase].[BillingCustomerIdName],
    [ContractBase].[BillingCustomerIdType],
    [ContractBase].[BillingCustomerIdYomiName],
    [ContractBase].[CustomerIdName],
    [ContractBase].[CustomerIdType],
    [ContractBase].[CustomerIdYomiName]
from [ContractBase] 
    left join [ContractBase] [contract_originating_contract] on ([ContractBase].[OriginatingContract] = [contract_originating_contract].[ContractId])
    left join [ContractTemplateBase] [contract_template_contracts] on ([ContractBase].[ContractTemplateId] = [contract_template_contracts].[ContractTemplateId] and [contract_template_contracts].OverwriteTime = 0 and [contract_template_contracts].ComponentState = 0)
    left join [CustomerAddressBase] [customer_address_contracts_as_billing_address] on ([ContractBase].[BillToAddress] = [customer_address_contracts_as_billing_address].[CustomerAddressId])
    left join [CustomerAddressBase] [customer_address_contracts_as_service_address] on ([ContractBase].[ServiceAddress] = [customer_address_contracts_as_service_address].[CustomerAddressId])
    left join [ImageDescriptor] [lk_contract_entityimage] on ([ContractBase].[EntityImageId] = [lk_contract_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_contractbase_createdby] on ([ContractBase].[CreatedBy] = [lk_contractbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_contractbase_createdonbehalfby] on ([ContractBase].[CreatedOnBehalfBy] = [lk_contractbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_contractbase_modifiedby] on ([ContractBase].[ModifiedBy] = [lk_contractbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_contractbase_modifiedonbehalfby] on ([ContractBase].[ModifiedOnBehalfBy] = [lk_contractbase_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [transactioncurrency_contract] on ([ContractBase].[TransactionCurrencyId] = [transactioncurrency_contract].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([ContractBase].OwnerId = XXowner.OwnerId)
