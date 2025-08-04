


--
-- base view for MailboxTrackingCategory
--
create view dbo.[MailboxTrackingCategory]
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
    [MailboxTrackingCategoryId],
    [MailboxId],
    [ExchangeCategoryId],
    [ExchangeCategoryName],
    [ExchangeCategoryColor],
    [CategoryOnboardingStatus],
    [CreatedOn],
    [ModifiedOn],
    [OwningBusinessUnit]
) with view_metadata as
select

    -- ownership entries
    OwnerId = [MailboxTrackingCategoryBase].OwnerId,
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
    [MailboxTrackingCategoryBase].[MailboxTrackingCategoryId],
    [MailboxTrackingCategoryBase].[MailboxId],
    [MailboxTrackingCategoryBase].[ExchangeCategoryId],
    [MailboxTrackingCategoryBase].[ExchangeCategoryName],
    [MailboxTrackingCategoryBase].[ExchangeCategoryColor],
    [MailboxTrackingCategoryBase].[CategoryOnboardingStatus],
    [MailboxTrackingCategoryBase].[CreatedOn],
    [MailboxTrackingCategoryBase].[ModifiedOn],
    [MailboxTrackingCategoryBase].[OwningBusinessUnit]
from [MailboxTrackingCategoryBase] 
    left join OwnerBase XXowner  on ([MailboxTrackingCategoryBase].OwnerId = XXowner.OwnerId)
