


--
-- base view for PDFSetting
--
create view dbo.[PDFSetting]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [PDFSettingId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [entityname],
    [pdfsettingsjson],
    [ispdfsettingenabled]
) with view_metadata as
select
    -- logical attributes
    [lk_pdfsetting_createdby].[FullName],
    [lk_pdfsetting_createdby].[YomiFullName],
    [lk_pdfsetting_modifiedonbehalfby].[FullName],
    [lk_pdfsetting_modifiedonbehalfby].[YomiFullName],
    [lk_pdfsetting_modifiedby].[FullName],
    [lk_pdfsetting_modifiedby].[YomiFullName],
    [lk_pdfsetting_createdonbehalfby].[FullName],
    [lk_pdfsetting_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [PDFSettingBase].OwnerId,
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
    [PDFSettingBase].[PDFSettingId],
    [PDFSettingBase].[CreatedOn],
    [PDFSettingBase].[CreatedBy],
    [PDFSettingBase].[ModifiedOn],
    [PDFSettingBase].[ModifiedBy],
    [PDFSettingBase].[CreatedOnBehalfBy],
    [PDFSettingBase].[ModifiedOnBehalfBy],
    [PDFSettingBase].[OwningBusinessUnit],
    [PDFSettingBase].[statecode],
    [PDFSettingBase].[statuscode],
    [PDFSettingBase].[VersionNumber],
    [PDFSettingBase].[ImportSequenceNumber],
    [PDFSettingBase].[OverriddenCreatedOn],
    [PDFSettingBase].[TimeZoneRuleVersionNumber],
    [PDFSettingBase].[UTCConversionTimeZoneCode],
    [PDFSettingBase].[entityname],
    [PDFSettingBase].[pdfsettingsjson],
    [PDFSettingBase].[ispdfsettingenabled]
from [PDFSettingBase] 
    left join [SystemUserBase] [lk_pdfsetting_createdby] on ([PDFSettingBase].[CreatedBy] = [lk_pdfsetting_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_pdfsetting_createdonbehalfby] on ([PDFSettingBase].[CreatedOnBehalfBy] = [lk_pdfsetting_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_pdfsetting_modifiedby] on ([PDFSettingBase].[ModifiedBy] = [lk_pdfsetting_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_pdfsetting_modifiedonbehalfby] on ([PDFSettingBase].[ModifiedOnBehalfBy] = [lk_pdfsetting_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([PDFSettingBase].OwnerId = XXowner.OwnerId)
