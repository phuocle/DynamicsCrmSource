USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[ActionCardUserState]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for ActionCardUserState
--
create view [dbo].[ActionCardUserState]
 (
    -- logical attributes
    [ActionCardIdName],
    [OwningBusinessUnit],
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
    left join [TransactionCurrencyBase] [TransactionCurrency_ActionCardUserState] on ([ActionCardUserStateBase].[TransactionCurrencyId] = [TransactionCurrency_ActionCardUserState].[TransactionCurrencyId])

GO
