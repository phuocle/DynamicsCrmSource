


--
-- base view for ActionCardUserSettings
--
create view dbo.[ActionCardUserSettings]
 (
    -- logical attributes
    [CardTypeIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ActionCardUserSettingsId],
    [CardTypeId],
    [IsEnabled],
    [IntCardOption],
    [StringCardOption],
    [BoolCardOption],
    [OwningBusinessUnit],
    [VersionNumber],
    [CardType]
) with view_metadata as
select
    -- logical attributes
    [cardtype_actioncardusersettings].[CardName],

    -- ownership entries
    OwnerId = [ActionCardUserSettingsBase].OwnerId,
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
    [ActionCardUserSettingsBase].[ActionCardUserSettingsId],
    [ActionCardUserSettingsBase].[CardTypeId],
    [ActionCardUserSettingsBase].[IsEnabled],
    [ActionCardUserSettingsBase].[IntCardOption],
    [ActionCardUserSettingsBase].[StringCardOption],
    [ActionCardUserSettingsBase].[BoolCardOption],
    [ActionCardUserSettingsBase].[OwningBusinessUnit],
    [ActionCardUserSettingsBase].[VersionNumber],
    [ActionCardUserSettingsBase].[CardType]
from [ActionCardUserSettingsBase] 
    left join [CardTypeBase] [cardtype_actioncardusersettings] on ([ActionCardUserSettingsBase].[CardTypeId] = [cardtype_actioncardusersettings].[CardTypeId])
    left join OwnerBase XXowner  on ([ActionCardUserSettingsBase].OwnerId = XXowner.OwnerId)
