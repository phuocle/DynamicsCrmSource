


--
-- base view for UserEntityUISettings
--
create view dbo.[UserEntityUISettings]
 (

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [UserEntityUISettingsId],
    [ObjectTypeCode],
    [TabOrderXml],
    [ReadingPaneXml],
    [MRUXml],
    [VersionNumber],
    [OwningBusinessUnit],
    [InsertIntoEmailMRUXml],
    [RecentlyViewedXml],
    [LastViewedFormXml],
    [ShowInAddressBook],
    [LookupMRUXml]
) with view_metadata as
select

    -- ownership entries
    OwnerId = [UserEntityUISettingsBase].OwnerId,
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
    [UserEntityUISettingsBase].[UserEntityUISettingsId],
    [UserEntityUISettingsBase].[ObjectTypeCode],
    [UserEntityUISettingsBase].[TabOrderXml],
    [UserEntityUISettingsBase].[ReadingPaneXml],
    [UserEntityUISettingsBase].[MRUXml],
    [UserEntityUISettingsBase].[VersionNumber],
    [UserEntityUISettingsBase].[OwningBusinessUnit],
    [UserEntityUISettingsBase].[InsertIntoEmailMRUXml],
    [UserEntityUISettingsBase].[RecentlyViewedXml],
    [UserEntityUISettingsBase].[LastViewedFormXml],
    [UserEntityUISettingsBase].[ShowInAddressBook],
    [UserEntityUISettingsBase].[LookupMRUXml]
from [UserEntityUISettingsBase] 
    left join OwnerBase XXowner with(nolock) on ([UserEntityUISettingsBase].OwnerId = XXowner.OwnerId)
