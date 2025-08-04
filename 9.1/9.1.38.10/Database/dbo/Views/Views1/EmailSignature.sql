


--
-- base view for EmailSignature
--
create view dbo.[EmailSignature]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [EmailSignatureId],
    [OwningBusinessUnit],
    [IsPersonal],
    [MimeType],
    [Body],
    [Title],
    [Description],
    [CreatedBy],
    [PresentationXml],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [GenerationTypeCode],
    [LanguageCode],
    [ImportSequenceNumber],
    [OverwriteTime],
    [ComponentState],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsCustomizable],
    [OverriddenCreatedOn],
    [IsDefault],
    [SafeHtml]
) with view_metadata as
select
    -- logical attributes
    [lk_emailsignaturebase_createdonbehalfby].[YomiFullName],
    [lk_emailsignaturebase_createdonbehalfby].[FullName],
    [lk_emailsignaturebase_modifiedonbehalfby].[FullName],
    [lk_emailsignaturebase_modifiedonbehalfby].[YomiFullName],
    [lk_emailsignaturebase_modifiedby].[YomiFullName],
    [lk_emailsignaturebase_modifiedby].[FullName],
    [lk_emailsignaturebase_createdby].[FullName],
    [lk_emailsignaturebase_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [EmailSignatureBase].OwnerId,
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
    [EmailSignatureBase].[EmailSignatureId],
    [EmailSignatureBase].[OwningBusinessUnit],
    [EmailSignatureBase].[IsPersonal],
    [EmailSignatureBase].[MimeType],
    [EmailSignatureBase].[Body],
    [EmailSignatureBase].[Title],
    [EmailSignatureBase].[Description],
    [EmailSignatureBase].[CreatedBy],
    [EmailSignatureBase].[PresentationXml],
    [EmailSignatureBase].[CreatedOn],
    [EmailSignatureBase].[ModifiedBy],
    [EmailSignatureBase].[ModifiedOn],
    [EmailSignatureBase].[GenerationTypeCode],
    [EmailSignatureBase].[LanguageCode],
    [EmailSignatureBase].[ImportSequenceNumber],
    [EmailSignatureBase].[OverwriteTime],
    [EmailSignatureBase].[ComponentState],
    [EmailSignatureBase].[CreatedOnBehalfBy],
    [EmailSignatureBase].[ModifiedOnBehalfBy],
    [EmailSignatureBase].[IsCustomizable],
    [EmailSignatureBase].[OverriddenCreatedOn],
    [EmailSignatureBase].[IsDefault],
    [EmailSignatureBase].[SafeHtml]
from [EmailSignatureBase] 
    left join [SystemUserBase] [lk_emailsignaturebase_createdby] on ([EmailSignatureBase].[CreatedBy] = [lk_emailsignaturebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_emailsignaturebase_createdonbehalfby] on ([EmailSignatureBase].[CreatedOnBehalfBy] = [lk_emailsignaturebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_emailsignaturebase_modifiedby] on ([EmailSignatureBase].[ModifiedBy] = [lk_emailsignaturebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_emailsignaturebase_modifiedonbehalfby] on ([EmailSignatureBase].[ModifiedOnBehalfBy] = [lk_emailsignaturebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([EmailSignatureBase].OwnerId = XXowner.OwnerId)
