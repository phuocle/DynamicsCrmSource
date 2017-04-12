SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for PersonalDocumentTemplate
--
create view [dbo].[PersonalDocumentTemplate]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ClientData],
    [Content],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [DocumentType],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [PersonalDocumentTemplateId],
    [VersionNumber],
    [OwningBusinessUnit],
    [AssociatedEntityTypeCode],
    [Description],
    [Status],
    [LanguageCode]
) with view_metadata as
select
    -- logical attributes
    [lk_personaldocumenttemplatebase_modifiedonbehalfby].[FullName],
    [lk_personaldocumenttemplatebase_modifiedonbehalfby].[YomiFullName],
    [lk_personaldocumenttemplatebase_modifiedby].[FullName],
    [lk_personaldocumenttemplatebase_createdby].[FullName],
    [lk_personaldocumenttemplatebase_createdonbehalfby].[FullName],
    [lk_personaldocumenttemplatebase_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [PersonalDocumentTemplateBase].OwnerId,
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
    [PersonalDocumentTemplateBase].[ClientData],
    [PersonalDocumentTemplateBase].[Content],
    [PersonalDocumentTemplateBase].[CreatedBy],
    [PersonalDocumentTemplateBase].[CreatedOn],
    [PersonalDocumentTemplateBase].[CreatedOnBehalfBy],
    [PersonalDocumentTemplateBase].[DocumentType],
    [PersonalDocumentTemplateBase].[ModifiedBy],
    [PersonalDocumentTemplateBase].[ModifiedOn],
    [PersonalDocumentTemplateBase].[ModifiedOnBehalfBy],
    [PersonalDocumentTemplateBase].[Name],
    [PersonalDocumentTemplateBase].[PersonalDocumentTemplateId],
    [PersonalDocumentTemplateBase].[VersionNumber],
    [PersonalDocumentTemplateBase].[OwningBusinessUnit],
    [PersonalDocumentTemplateBase].[AssociatedEntityTypeCode],
    [PersonalDocumentTemplateBase].[Description],
    [PersonalDocumentTemplateBase].[Status],
    [PersonalDocumentTemplateBase].[LanguageCode]
from [PersonalDocumentTemplateBase] 
    left join [SystemUserBase] [lk_personaldocumenttemplatebase_createdby] with(nolock) on ([PersonalDocumentTemplateBase].[CreatedBy] = [lk_personaldocumenttemplatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_personaldocumenttemplatebase_createdonbehalfby] with(nolock) on ([PersonalDocumentTemplateBase].[CreatedOnBehalfBy] = [lk_personaldocumenttemplatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_personaldocumenttemplatebase_modifiedby] with(nolock) on ([PersonalDocumentTemplateBase].[ModifiedBy] = [lk_personaldocumenttemplatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_personaldocumenttemplatebase_modifiedonbehalfby] with(nolock) on ([PersonalDocumentTemplateBase].[ModifiedOnBehalfBy] = [lk_personaldocumenttemplatebase_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([PersonalDocumentTemplateBase].OwnerId = XXowner.OwnerId)
GO
