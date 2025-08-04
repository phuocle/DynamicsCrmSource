


--
-- base view for ActionCardUserState
--
create view dbo.[ActionCardUserState]
 (
    -- logical attributes
    [ActionCardIdName],
    [OwningBusinessUnit],
    [OwnerIdYomiName],
    [OwnerIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [ActionCardUserStateId],
    [ExchangeRate],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [State],
    [ActionCardId],
    [ActionCardIdObjectTypeCode],
    [StartDate],
    [OwnerId],
    [OwnerIdType]
) with view_metadata as
select
    -- logical attributes
    [ActionCardUserState_ActionCard].[ActionCardId],
    [ActionCardUserState_ActionCard].[OwningBusinessUnit],
    [ActionCardUserState_Owner].[YomiName],
    [ActionCardUserState_Owner].[Name],
    [TransactionCurrency_ActionCardUserState].[CurrencyName],

    -- physical attribute
    [ActionCardUserStateBase].[ActionCardUserStateId],
    [ActionCardUserStateBase].[ExchangeRate],
    [ActionCardUserStateBase].[TimeZoneRuleVersionNumber],
    [ActionCardUserStateBase].[TransactionCurrencyId],
    [ActionCardUserStateBase].[UTCConversionTimeZoneCode],
    [ActionCardUserStateBase].[VersionNumber],
    [ActionCardUserStateBase].[State],
    [ActionCardUserStateBase].[ActionCardId],
    [ActionCardUserStateBase].[ActionCardIdObjectTypeCode],
    [ActionCardUserStateBase].[StartDate],
    [ActionCardUserStateBase].[OwnerId],
    [ActionCardUserStateBase].[OwnerIdType]
from [ActionCardUserStateBase] 
    left join [ActionCardBase] [ActionCardUserState_ActionCard] on ([ActionCardUserStateBase].[ActionCardId] = [ActionCardUserState_ActionCard].[ActionCardId])
    left join [OwnerBase] [ActionCardUserState_Owner] on ([ActionCardUserStateBase].[OwnerId] = [ActionCardUserState_Owner].[OwnerId])
    left join [TransactionCurrencyBase] [TransactionCurrency_ActionCardUserState] on ([ActionCardUserStateBase].[TransactionCurrencyId] = [TransactionCurrency_ActionCardUserState].[TransactionCurrencyId])
