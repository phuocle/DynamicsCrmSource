


--
-- base view for MailboxTrackingFolder
--
create view dbo.[MailboxTrackingFolder]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [MailboxTrackingFolderId],
    [OrganizationId],
    [MailboxId],
    [ExchangeFolderId],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [FolderOnboardingStatus],
    [CreatedOn],
    [ModifiedOn],
    [ExchangeFolderName],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [OwningBusinessUnit]
) with view_metadata as
select
    -- logical attributes
    [lk_mailboxtrackingfolder_modifiedby].[YomiFullName],
    [lk_mailboxtrackingfolder_modifiedonbehalfby].[YomiFullName],
    [lk_mailboxtrackingfolder_createdby].[YomiFullName],
    [lk_mailboxtrackingfolder_createdonbehalfby].[FullName],
    [lk_mailboxtrackingfolder_createdby].[FullName],
    [lk_mailboxtrackingfolder_createdonbehalfby].[YomiFullName],
    [lk_mailboxtrackingfolder_modifiedonbehalfby].[FullName],
    [lk_mailboxtrackingfolder_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [MailboxTrackingFolderBase].OwnerId,
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
    [MailboxTrackingFolderBase].[MailboxTrackingFolderId],
    [MailboxTrackingFolderBase].[OrganizationId],
    [MailboxTrackingFolderBase].[MailboxId],
    [MailboxTrackingFolderBase].[ExchangeFolderId],
    [MailboxTrackingFolderBase].[RegardingObjectId],
    [MailboxTrackingFolderBase].[RegardingObjectTypeCode],
    [MailboxTrackingFolderBase].[RegardingObjectIdName],
    [MailboxTrackingFolderBase].[FolderOnboardingStatus],
    [MailboxTrackingFolderBase].[CreatedOn],
    [MailboxTrackingFolderBase].[ModifiedOn],
    [MailboxTrackingFolderBase].[ExchangeFolderName],
    [MailboxTrackingFolderBase].[CreatedBy],
    [MailboxTrackingFolderBase].[CreatedOnBehalfBy],
    [MailboxTrackingFolderBase].[ModifiedBy],
    [MailboxTrackingFolderBase].[ModifiedOnBehalfBy],
    [MailboxTrackingFolderBase].[VersionNumber],
    [MailboxTrackingFolderBase].[OwningBusinessUnit]
from [MailboxTrackingFolderBase] 
    left join [SystemUserBase] [lk_mailboxtrackingfolder_createdby] on ([MailboxTrackingFolderBase].[CreatedBy] = [lk_mailboxtrackingfolder_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_mailboxtrackingfolder_createdonbehalfby] on ([MailboxTrackingFolderBase].[CreatedOnBehalfBy] = [lk_mailboxtrackingfolder_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_mailboxtrackingfolder_modifiedby] on ([MailboxTrackingFolderBase].[ModifiedBy] = [lk_mailboxtrackingfolder_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_mailboxtrackingfolder_modifiedonbehalfby] on ([MailboxTrackingFolderBase].[ModifiedOnBehalfBy] = [lk_mailboxtrackingfolder_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([MailboxTrackingFolderBase].OwnerId = XXowner.OwnerId)
