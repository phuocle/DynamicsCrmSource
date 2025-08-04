SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for OfficeDocument
--
create view [dbo].[OfficeDocument]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [Content],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [DocumentType],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [OfficeDocumentId],
    [OwnerId],
    [OwnerIdType],
    [ObjectId],
    [ObjectTypeCode],
    [SHA256],
    [VersionNumber],
    [FileSize],
    [ClientData],
    [FileLockState]
) with view_metadata as
select
    -- logical attributes
    [lk_officedocumentbase_modifiedonbehalfby].[YomiFullName],
    [lk_officedocumentbase_modifiedonbehalfby].[FullName],
    [lk_officedocumentbase_createdonbehalfby].[YomiFullName],
    [lk_officedocumentbase_createdonbehalfby].[FullName],

    -- physical attribute
    [OfficeDocumentBase].[Content],
    [OfficeDocumentBase].[CreatedBy],
    [OfficeDocumentBase].[CreatedOn],
    [OfficeDocumentBase].[CreatedOnBehalfBy],
    [OfficeDocumentBase].[DocumentType],
    [OfficeDocumentBase].[ModifiedBy],
    [OfficeDocumentBase].[ModifiedOn],
    [OfficeDocumentBase].[ModifiedOnBehalfBy],
    [OfficeDocumentBase].[Name],
    [OfficeDocumentBase].[OfficeDocumentId],
    [OfficeDocumentBase].[OwnerId],
    [OfficeDocumentBase].[OwnerIdType],
    [OfficeDocumentBase].[ObjectId],
    [OfficeDocumentBase].[ObjectTypeCode],
    [OfficeDocumentBase].[SHA256],
    [OfficeDocumentBase].[VersionNumber],
    [OfficeDocumentBase].[FileSize],
    [OfficeDocumentBase].[ClientData],
    [OfficeDocumentBase].[FileLockState]
from [OfficeDocumentBase] 
    left join [SystemUserBase] [lk_officedocumentbase_createdonbehalfby] with(nolock) on ([OfficeDocumentBase].[CreatedOnBehalfBy] = [lk_officedocumentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_officedocumentbase_modifiedonbehalfby] with(nolock) on ([OfficeDocumentBase].[ModifiedOnBehalfBy] = [lk_officedocumentbase_modifiedonbehalfby].[SystemUserId])
GO
