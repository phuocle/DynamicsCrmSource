USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[EmailSignature]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for EmailSignature
--
create view [dbo].[EmailSignature]
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
    [IsDefault]
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
    [EmailSignatureBase].[IsDefault]
from [EmailSignatureBase] 
    left join [SystemUserBase] [lk_emailsignaturebase_createdby] with(nolock) on ([EmailSignatureBase].[CreatedBy] = [lk_emailsignaturebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_emailsignaturebase_createdonbehalfby] with(nolock) on ([EmailSignatureBase].[CreatedOnBehalfBy] = [lk_emailsignaturebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_emailsignaturebase_modifiedby] with(nolock) on ([EmailSignatureBase].[ModifiedBy] = [lk_emailsignaturebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_emailsignaturebase_modifiedonbehalfby] with(nolock) on ([EmailSignatureBase].[ModifiedOnBehalfBy] = [lk_emailsignaturebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([EmailSignatureBase].OwnerId = XXowner.OwnerId)

GO
